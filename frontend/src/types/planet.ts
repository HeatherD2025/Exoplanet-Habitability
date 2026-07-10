export interface Atmosphere {
  canRetain: boolean;
  hasSpectroscopyData: boolean;
  atmosphereConfidence: string;
}

export interface PlanetaryTrait {
  planetaryMass: number | null;
  planetaryRadius: number | null;
  massType: string;
  stellarFlux: number | null;
  orbitalDistance: number | null;
  equilibriumTemperatureKelvin: number | null;
  equilibriumTemperatureFahrenheit: number | null;
  transmissionSpectroscopyCount: number;
  eclipseSpectroscopyCount: number;
  directImagingSpectroscopyCount: number;
  atmosphere: Atmosphere;
  habitabilityScore: number;
  isIncompleteDataset: boolean;
}

export interface Planet {
  id: string;
  name: string; // Updated from pl_name
  discoveryYear: number | null; // Updated from disc_year
  hostStarName: string | null; // Updated from hostname
  trait?: PlanetaryTrait | null; // Holds all the habitability physics data
}
