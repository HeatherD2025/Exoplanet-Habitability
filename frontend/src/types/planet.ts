export type MassType = "MEASURED" | "CALCULATED" | "UNKNOWN";

export interface Atmosphere {
  canRetain: boolean;
  hasSpectroscopyData: boolean;
  atmosphereConfidence: string;
  retentionReason?: string; 
}

export interface PlanetaryTrait {
  planetaryMass: number | null;
  planetaryRadius: number | null;
  massType: MassType; 
  stellarFlux: number | null;
  orbitalDistance: number | null;
  equilibriumTemperatureKelvin: number | null;
  equilibriumTemperatureFahrenheit: number | null;

  // NASA Spectroscopy counts can be null if unrecorded
  transmissionSpectroscopyCount: number | null;
  eclipseSpectroscopyCount: number | null;
  directImagingSpectroscopyCount: number | null; 

  atmosphere: Atmosphere;
  habitabilityScore: number;
  isIncompleteDataset: boolean;
}

export interface Planet {
  id: string;
  name: string;
  discoveryYear: number | null;
  hostStarName: string | null;
  trait?: PlanetaryTrait | null;
}

export type PlanetaryTraitApi = PlanetaryTrait;
export type PlanetApi = Planet;