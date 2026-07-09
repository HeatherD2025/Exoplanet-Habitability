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
  transmissionSpectroscopyCount: number;
  eclipseSpectroscopyCount: number;
  directImagingSpectroscopyCount: number;
  atmosphere: Atmosphere;
}

export interface Planet {
  id: string;
  name: string; // Updated from pl_name
  discoveryYear: number; // Updated from disc_year
  hostStarName: string; // Updated from hostname
  trait?: PlanetaryTrait; // Holds all your habitability physics data
  // Add habitability score fields here if they are calculated on your backend object root
}
