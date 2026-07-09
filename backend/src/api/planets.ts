import type { Planet, PlanetaryTrait, Prisma } from "@prisma/client";
import {
  calculateAtmosphere,
  type AtmosphereAssessment,
  type NasaSpectroscopyCounts,
} from "../math/habitability.js";

type Decimalish = Prisma.Decimal | number | null | undefined;

export type PlanetWithDefaultTrait = Planet & {
  traits: PlanetaryTrait[];
};

export interface PlanetaryTraitApi {
  planetaryMass: number | null;
  planetaryRadius: number | null;
  massType: PlanetaryTrait["massType"];
  stellarFlux: number | null;
  orbitalDistance: number | null;
  equilibriumTemperatureKelvin: number | null;
  transmissionSpectroscopyCount: number | null;
  eclipseSpectroscopyCount: number | null;
  directImagingSpectroscopyCount: number | null;
  atmosphere: AtmosphereAssessment;
}

export interface PlanetApi {
  id: string;
  name: string;
  discoveryYear: number | null;
  hostStarName: string | null;
  trait: PlanetaryTraitApi | null;
}

function toNumber(value: Decimalish): number | null {
  if (value === null || value === undefined) {
    return null;
  }
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function spectroscopyFromTrait(trait: PlanetaryTrait): NasaSpectroscopyCounts {
  return {
    pl_ntranspec: trait.transmissionSpectroscopyCount,
    pl_nespec: trait.eclipseSpectroscopyCount,
    pl_ndispec: trait.directImagingSpectroscopyCount,
  };
}

export function atmosphereAssessmentFromTrait(
  trait: PlanetaryTrait,
): AtmosphereAssessment {
  return calculateAtmosphere(
    toNumber(trait.equilibriumTemperatureKelvin),
    toNumber(trait.planetaryRadius),
    toNumber(trait.planetaryMass),
    spectroscopyFromTrait(trait),
  );
}

export function formatPlanetaryTrait(trait: PlanetaryTrait): PlanetaryTraitApi {
  return {
    planetaryMass: toNumber(trait.planetaryMass),
    planetaryRadius: toNumber(trait.planetaryRadius),
    massType: trait.massType,
    stellarFlux: toNumber(trait.stellarFlux),
    orbitalDistance: toNumber(trait.orbitalDistance),
    equilibriumTemperatureKelvin: toNumber(trait.equilibriumTemperatureKelvin),
    transmissionSpectroscopyCount: trait.transmissionSpectroscopyCount,
    eclipseSpectroscopyCount: trait.eclipseSpectroscopyCount,
    directImagingSpectroscopyCount: trait.directImagingSpectroscopyCount,
    atmosphere: atmosphereAssessmentFromTrait(trait),
  };
}

export function formatPlanet(planet: PlanetWithDefaultTrait): PlanetApi {
  const defaultTrait = planet.traits[0] ?? null;

  return {
    id: planet.id,
    name: planet.name,
    discoveryYear: planet.discoveryYear,
    hostStarName: planet.hostStarName,
    trait: defaultTrait ? formatPlanetaryTrait(defaultTrait) : null,
  };
}

export const defaultPlanetInclude = {
  traits: {
    where: { isDefault: true },
    take: 1,
  },
} as const;
