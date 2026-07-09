import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { MassType } from "@prisma/client";
import { atmosphereAssessmentFromTrait, formatPlanetaryTrait } from "./planets.js";

const baseTrait = {
  id: "trait-1",
  planetId: "planet-1",
  planetaryMass: null,
  planetaryRadius: null,
  massType: MassType.UNKNOWN,
  stellarFlux: null,
  orbitalDistance: null,
  equilibriumTemperatureKelvin: null,
  transmissionSpectroscopyCount: null,
  eclipseSpectroscopyCount: null,
  directImagingSpectroscopyCount: null,
  isDefault: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("formatPlanetaryTrait", () => {
  test("computes atmosphere from trait fields", () => {
    const trait = {
      ...baseTrait,
      planetaryMass: 1,
      planetaryRadius: 1,
      equilibriumTemperatureKelvin: 255,
      transmissionSpectroscopyCount: 2,
      eclipseSpectroscopyCount: 1,
      directImagingSpectroscopyCount: 0,
    };

    const formatted = formatPlanetaryTrait(trait);

    assert.deepEqual(formatted.atmosphere, {
      canRetain: true,
      hasSpectroscopyData: true,
      atmosphereConfidence: "High",
    });
    assert.equal(formatted.planetaryMass, 1);
    assert.equal(formatted.transmissionSpectroscopyCount, 2);
  });

  test("returns None confidence when inputs are insufficient", () => {
    assert.deepEqual(atmosphereAssessmentFromTrait(baseTrait), {
      canRetain: false,
      hasSpectroscopyData: false,
      atmosphereConfidence: "None",
    });
  });
});
