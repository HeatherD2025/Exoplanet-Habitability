import type { PlanetApi, PlanetaryTraitApi } from "../types/planet";


function createMockTrait(overrides: Partial<PlanetaryTraitApi>): PlanetaryTraitApi {
  return {
    equilibriumTemperatureKelvin: 288, // Earth baseline
    equilibriumTemperatureFahrenheit: 59,
    planetaryMass: 1.0,
    planetaryRadius: 1.0,
    massType: "MEASURED",
    stellarFlux: 1.0,
    orbitalDistance: 1.0,
    transmissionSpectroscopyCount: 0,
    eclipseSpectroscopyCount: 0,
    directImagingSpectroscopyCount: 0,
    atmosphere: {
      canRetain: true,
      atmosphereConfidence: "High",
      retentionReason: "Gravity and temperature support retention.",
      hasSpectroscopyData: false,
    },
    habitabilityScore: 1.0,
    isIncompleteDataset: false,
    ...overrides,
  };
}

export const MOCK_PLANETS: PlanetApi[] = [
  {
    id: "mock-1",
    name: "Kepler-452b (Move-in Ready)",
    discoveryYear: 2015,
    hostStarName: "Kepler-452",
    trait: createMockTrait({
      equilibriumTemperatureKelvin: 265,
      equilibriumTemperatureFahrenheit: 68.0,
      planetaryMass: 1.6,
      planetaryRadius: 1.1,
      massType: "MEASURED",
      stellarFlux: 1.1,
      orbitalDistance: 1.04,
      habitabilityScore: 0.92,
      atmosphere: {
        canRetain: true,
        atmosphereConfidence: "High",
        retentionReason: "Strong candidate based on spectroscopy and scale.",
        hasSpectroscopyData: false,
      },
    }),
  },
  {
    id: "mock-2",
    name: "Hoth Prime (Arctic Wonderland)",
    discoveryYear: 2020,
    hostStarName: "Gliese 667C",
    trait: createMockTrait({
      equilibriumTemperatureKelvin: 180,
      equilibriumTemperatureFahrenheit: -135.0,
      planetaryMass: 2.1,
      planetaryRadius: 1.3,
      massType: "CALCULATED",
      stellarFlux: 0.3,
      orbitalDistance: 2.1,
      habitabilityScore: 0.65,
      atmosphere: {
        canRetain: true,
        atmosphereConfidence: "Low",
        retentionReason: "Gravity supports envelope, awaiting more scans.",
        hasSpectroscopyData: false,
      },
    }),
  },
  {
    id: "mock-3",
    name: "Tatooine Major (Solar Paradise)",
    discoveryYear: 2018,
    hostStarName: "Kepler-16",
    trait: createMockTrait({
      equilibriumTemperatureKelvin: 350,
      equilibriumTemperatureFahrenheit: 170.0,
      planetaryMass: 3.5,
      planetaryRadius: 1.8,
      massType: "MEASURED",
      stellarFlux: 2.5,
      orbitalDistance: 0.4,
      habitabilityScore: 0.55,
      atmosphere: {
        canRetain: false,
        atmosphereConfidence: "Medium",
        retentionReason: "High temperature prevents long-term atmosphere retention.",
        hasSpectroscopyData: false,
      },
    }),
  },
  {
    id: "mock-4",
    name: "Proxima Centauri c (Fixer-Upper)",
    discoveryYear: 2019,
    hostStarName: "Proxima Centauri",
    trait: createMockTrait({
      equilibriumTemperatureKelvin: 100,
      equilibriumTemperatureFahrenheit: -280.0,
      planetaryMass: 7.0,
      planetaryRadius: 2.4,
      massType: "CALCULATED",
      stellarFlux: 0.1,
      orbitalDistance: 0.05,
      habitabilityScore: 0.2,
      atmosphere: {
        canRetain: false,
        atmosphereConfidence: "None",
        retentionReason: "Extreme cold/radiation stripped envelope.",
        hasSpectroscopyData: false,
      },
    }),
  },
];