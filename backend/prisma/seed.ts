import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

type NasaPlanetRow = {
  pl_name: string | null;
  disc_year: number | null;
  hostname: string | null;
  pl_bmassj: number | null;
  pl_rade: number | null;
  pl_orbsmax: number | null;
  st_lum: number | null;
  pl_eqt: number | null;
  pl_ntranspec: number | null;
  pl_nespec: number | null;
  pl_ndispec: number | null;
};

type SeedTarget = {
  label: string;
  connectionString: string;
};

type SeedMode = "all" | "local" | "supabase";

function poolConfig(connectionString: string): pg.PoolConfig {
  const isSupabase =
    connectionString.includes("supabase.co") ||
    connectionString.includes("pooler.supabase.com");

  return {
    connectionString,
    ...(isSupabase ? { ssl: { rejectUnauthorized: false } } : {}),
  };
}

function resolveTargets(mode: SeedMode): SeedTarget[] {
  const localUrl = process.env.LOCAL_DATABASE_URL?.trim();
  const supabaseUrl =
    process.env.DIRECT_URL?.trim() || process.env.DATABASE_URL?.trim();

  if (mode === "local") {
    if (!localUrl) {
      throw new Error(
        "LOCAL_DATABASE_URL is not set. Use Docker Postgres (see .env comment / compose port 5433).",
      );
    }
    return [{ label: "local (Docker)", connectionString: localUrl }];
  }

  if (mode === "supabase") {
    if (!supabaseUrl) {
      throw new Error("Set DIRECT_URL or DATABASE_URL in .env for Supabase seeding.");
    }
    return [{ label: "Supabase", connectionString: supabaseUrl }];
  }

  const targets: SeedTarget[] = [];
  if (localUrl) {
    targets.push({ label: "local (Docker)", connectionString: localUrl });
  }
  if (supabaseUrl) {
    const alreadyAdded = targets.some((t) => t.connectionString === supabaseUrl);
    if (!alreadyAdded) {
      targets.push({ label: "Supabase", connectionString: supabaseUrl });
    }
  }

  if (targets.length === 0) {
    throw new Error(
      "No seed targets configured. Set LOCAL_DATABASE_URL (Docker) and/or DIRECT_URL (Supabase).",
    );
  }

  return targets;
}

async function fetchNasaPlanets(): Promise<NasaPlanetRow[]> {
  const query =
    "SELECT pl_name, disc_year, hostname, pl_bmassj, pl_rade, pl_orbsmax, st_lum, pl_eqt, pl_ntranspec, pl_nespec, pl_ndispec FROM ps WHERE default_flag = 1";
  const url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${encodeURIComponent(query)}&format=json`;

  console.log("Fetching exoplanet data from NASA Exoplanet Archive...");
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch source data: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as NasaPlanetRow[];
  console.log(`Fetched ${data.length} rows from NASA.`);
  return data;
}

async function seedDatabase(
  target: SeedTarget,
  data: NasaPlanetRow[],
): Promise<{ planets: number; traits: number }> {
  console.log(`\n--- Seeding ${target.label} ---`);

  const pool = new pg.Pool(poolConfig(target.connectionString));
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const positiveOrNull = (value: number | null | undefined): number | null =>
    typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
  const positiveAtScale6OrNull = (value: number | null | undefined): number | null =>
    typeof value === "number" && Number.isFinite(value) && value >= 0.000001 ? value : null;
  const finiteOrNull = (value: number | null | undefined): number | null =>
    typeof value === "number" && Number.isFinite(value) ? value : null;
  const nonNegativeIntOrNull = (value: number | null | undefined): number | null => {
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
      return null;
    }
    return Math.floor(value);
  };

  let planetsWritten = 0;

  try {
    for (const planet of data) {
      if (!planet.pl_name) {
        continue;
      }

      let mass = positiveOrNull(planet.pl_bmassj ? planet.pl_bmassj * 317.8 : null);
      let type: "MEASURED" | "CALCULATED" | "UNKNOWN" = "UNKNOWN";

      if (mass) {
        type = "MEASURED";
      }

      const planetaryRadius = positiveOrNull(planet.pl_rade);
      const orbitalDistance = positiveOrNull(planet.pl_orbsmax);

      if (!mass && planetaryRadius) {
        mass = Math.pow(planetaryRadius, 3.7);
        type = "CALCULATED";
      }

      const stellarLuminosityLinear =
        typeof planet.st_lum === "number" && Number.isFinite(planet.st_lum)
          ? Math.pow(10, planet.st_lum)
          : null;
      const stellarFlux =
        stellarLuminosityLinear && orbitalDistance
          ? positiveAtScale6OrNull(stellarLuminosityLinear / Math.pow(orbitalDistance, 2))
          : null;
      const equilibriumTemperatureKelvin = finiteOrNull(planet.pl_eqt);
      const transmissionSpectroscopyCount = nonNegativeIntOrNull(planet.pl_ntranspec);
      const eclipseSpectroscopyCount = nonNegativeIntOrNull(planet.pl_nespec);
      const directImagingSpectroscopyCount = nonNegativeIntOrNull(planet.pl_ndispec);

      const upsertedPlanet = await prisma.planet.upsert({
        where: { name: planet.pl_name },
        update: {
          discoveryYear: planet.disc_year ?? null,
          hostStarName: planet.hostname ?? null,
        },
        create: {
          name: planet.pl_name,
          discoveryYear: planet.disc_year ?? null,
          hostStarName: planet.hostname ?? null,
        },
      });

      planetsWritten += 1;

      const updatedTraits = await prisma.planetaryTrait.updateMany({
        where: {
          planetId: upsertedPlanet.id,
          isDefault: true,
        },
        data: {
          planetaryMass: mass,
          planetaryRadius,
          massType: type,
          stellarFlux,
          orbitalDistance,
          equilibriumTemperatureKelvin,
          transmissionSpectroscopyCount,
          eclipseSpectroscopyCount,
          directImagingSpectroscopyCount,
        },
      });

      if (updatedTraits.count === 0) {
        await prisma.planetaryTrait.create({
          data: {
            planetId: upsertedPlanet.id,
            planetaryMass: mass,
            planetaryRadius,
            massType: type,
            stellarFlux,
            orbitalDistance,
            equilibriumTemperatureKelvin,
            transmissionSpectroscopyCount,
            eclipseSpectroscopyCount,
            directImagingSpectroscopyCount,
            isDefault: true,
          },
        });
      }
    }

    const [planetCount, traitCount] = await Promise.all([
      prisma.planet.count(),
      prisma.planetaryTrait.count(),
    ]);

    console.log(
      `${target.label}: wrote ${planetsWritten} planets from NASA; database now has ${planetCount} planets and ${traitCount} traits.`,
    );

    return { planets: planetCount, traits: traitCount };
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

async function main() {
  const mode = (process.env.SEED_TARGET?.trim() || "all") as SeedMode;
  if (mode !== "all" && mode !== "local" && mode !== "supabase") {
    throw new Error(`Invalid SEED_TARGET "${mode}". Use all, local, or supabase.`);
  }

  const targets = resolveTargets(mode);
  const data = await fetchNasaPlanets();

  for (const target of targets) {
    await seedDatabase(target, data);
  }

  console.log("\nAll seed targets finished.");
}

void main().catch((error) => {
  console.error("Error seeding data:", error);
  process.exit(1);
});
