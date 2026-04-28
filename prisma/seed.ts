import prismaPkg from "../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { PrismaClient } = prismaPkg;

let prisma: InstanceType<typeof PrismaClient>;

async function seed() {
  console.log("Starting exoplanet data seeding...");

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });

  const query =
    "SELECT pl_name, disc_year, hostname, pl_bmassj, pl_rade, pl_orbsmax, st_lum FROM ps WHERE default_flag = 1";
  const url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${encodeURIComponent(query)}&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch source data: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as Array<{
    pl_name: string | null;
    disc_year: number | null;
    hostname: string | null;
    pl_bmassj: number | null;
    pl_rade: number | null;
    pl_orbsmax: number | null;
    st_lum: number | null;
  }>;

  const positiveOrNull = (value: number | null | undefined): number | null =>
    typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
  const positiveAtScale6OrNull = (value: number | null | undefined): number | null =>
    typeof value === "number" && Number.isFinite(value) && value >= 0.000001 ? value : null;

  for (const planet of data) {
    if (!planet.pl_name) {
      continue;
    }

    // Unit conversion: Jupiter Mass to Earth Mass
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

    // st_lum is log10(L/Lsun) in the source table; convert to linear luminosity.
    // Approximate incident flux in Earth units as L / a^2 when both inputs exist.
    const stellarLuminosityLinear =
      typeof planet.st_lum === "number" && Number.isFinite(planet.st_lum)
        ? Math.pow(10, planet.st_lum)
        : null;
    const stellarFlux =
      stellarLuminosityLinear && orbitalDistance
        ? positiveAtScale6OrNull(stellarLuminosityLinear / Math.pow(orbitalDistance, 2))
        : null;

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
          isDefault: true,
        },
      });
    }
  }

  console.log(`Seeding data complete (${data.length} source rows processed).`);

  await prisma.$disconnect();
  await pool.end();
}

// Execute the seed
void seed()
  .catch(async (e) => {
    console.error("Error seeding data:", e);
    if (prisma) {
      await prisma.$disconnect();
    }
    process.exit(1);
  });