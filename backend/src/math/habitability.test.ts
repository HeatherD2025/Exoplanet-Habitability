import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  assessGasRetention,
  assessLiquidWaterFromEquilibriumTemperature,
  atmosphereConfidenceFromMeasurementCount,
  calculateAtmosphere,
  calculateRelativeSurfaceGravity,
  hasSpectroscopyFromNasaCounts,
  LIQUID_H2O_TEMP_MAX_KELVIN,
  LIQUID_H2O_TEMP_MIN_KELVIN,
  resolveAtmosphereConfidence,
  totalNasaSpectroscopyMeasurements,
} from "./habitability.js";

describe("assessLiquidWaterFromEquilibriumTemperature", () => {
  test("returns ok with likely assessment at band edges", () => {
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(LIQUID_H2O_TEMP_MIN_KELVIN), {
      status: "ok",
      assessment: "likely liquid H2O",
      equilibriumTemperatureKelvin: LIQUID_H2O_TEMP_MIN_KELVIN,
    });
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(LIQUID_H2O_TEMP_MAX_KELVIN), {
      status: "ok",
      assessment: "likely liquid H2O",
      equilibriumTemperatureKelvin: LIQUID_H2O_TEMP_MAX_KELVIN,
    });
  });

  test("returns ok with likely assessment inside band", () => {
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(255), {
      status: "ok",
      assessment: "likely liquid H2O",
      equilibriumTemperatureKelvin: 255,
    });
  });

  test("returns unlikely_liquid_h2o outside band", () => {
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(174), {
      status: "unlikely_liquid_h2o",
      assessment: "unlikely liquid H2O",
      equilibriumTemperatureKelvin: 174,
    });
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(271), {
      status: "unlikely_liquid_h2o",
      assessment: "unlikely liquid H2O",
      equilibriumTemperatureKelvin: 271,
    });
  });

  test("returns missing_input when field is absent", () => {
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(null), {
      status: "missing_input",
      assessment: null,
      equilibriumTemperatureKelvin: null,
    });
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(undefined), {
      status: "missing_input",
      assessment: null,
      equilibriumTemperatureKelvin: null,
    });
  });

  test("returns invalid_input for non-finite values", () => {
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(Number.NaN), {
      status: "invalid_input",
      assessment: null,
      equilibriumTemperatureKelvin: null,
    });
    assert.deepEqual(assessLiquidWaterFromEquilibriumTemperature(Number.POSITIVE_INFINITY), {
      status: "invalid_input",
      assessment: null,
      equilibriumTemperatureKelvin: null,
    });
  });
});

describe("calculateRelativeSurfaceGravity", () => {
  test("returns 1.0 g⊕ for Earth-like mass and radius", () => {
    assert.deepEqual(calculateRelativeSurfaceGravity(1, 1), {
      status: "ok",
      surfaceGravityEarth: 1,
      massEarth: 1,
      radiusEarth: 1,
    });
  });

  test("matches M⊕ / R⊕² for gas-giant-scale inputs", () => {
    const massEarth = 317.8;
    const radiusEarth = 11.21;
    const expected = massEarth / (radiusEarth * radiusEarth);

    const result = calculateRelativeSurfaceGravity(massEarth, radiusEarth);
    assert.equal(result.status, "ok");
    assert.ok(result.surfaceGravityEarth !== null);
    assert.ok(Math.abs(result.surfaceGravityEarth - expected) < 0.001);
  });

  test("returns missing_input when mass or radius is absent", () => {
    assert.deepEqual(calculateRelativeSurfaceGravity(null, 1), {
      status: "missing_input",
      surfaceGravityEarth: null,
      massEarth: null,
      radiusEarth: 1,
    });
    assert.deepEqual(calculateRelativeSurfaceGravity(1, undefined), {
      status: "missing_input",
      surfaceGravityEarth: null,
      massEarth: 1,
      radiusEarth: null,
    });
  });

  test("returns invalid_input for non-positive or non-finite values", () => {
    assert.deepEqual(calculateRelativeSurfaceGravity(0, 1), {
      status: "invalid_input",
      surfaceGravityEarth: null,
      massEarth: null,
      radiusEarth: null,
    });
    assert.deepEqual(calculateRelativeSurfaceGravity(1, Number.NaN), {
      status: "invalid_input",
      surfaceGravityEarth: null,
      massEarth: null,
      radiusEarth: null,
    });
  });
});

describe("assessGasRetention", () => {
  test("Earth-like rocky world can retain", () => {
    assert.deepEqual(assessGasRetention(255, 1, 1), {
      canRetain: true,
      surfaceGravityEarth: 1,
      isGasGiant: false,
    });
  });

  test("Mars-like world cannot retain", () => {
    const result = assessGasRetention(210, 0.107, 0.532);
    assert.equal(result.canRetain, false);
    assert.equal(result.isGasGiant, false);
  });

  test("gas giant retains despite high equilibrium temperature", () => {
    const result = assessGasRetention(1500, 317.8, 11.21);
    assert.equal(result.canRetain, true);
    assert.equal(result.isGasGiant, true);
    assert.ok(result.surfaceGravityEarth !== null && result.surfaceGravityEarth > 2);
  });

  test("hot low-gravity world cannot retain", () => {
    assert.equal(assessGasRetention(1200, 2, 1.5).canRetain, false);
  });
});

describe("spectroscopy helpers", () => {
  test("sums NASA spectroscopy counts", () => {
    assert.equal(
      totalNasaSpectroscopyMeasurements({
        pl_ntranspec: 3,
        pl_nespec: 19,
        pl_ndispec: 0,
      }),
      22,
    );
    assert.equal(hasSpectroscopyFromNasaCounts({ pl_ntranspec: 0, pl_nespec: 0 }), false);
  });

  test("maps measurement count to confidence tiers", () => {
    assert.equal(atmosphereConfidenceFromMeasurementCount(0), "None");
    assert.equal(atmosphereConfidenceFromMeasurementCount(1), "Low");
    assert.equal(atmosphereConfidenceFromMeasurementCount(4), "Medium");
    assert.equal(atmosphereConfidenceFromMeasurementCount(5), "High");
  });

  test("cross-references retention with spectroscopy", () => {
    assert.equal(resolveAtmosphereConfidence(false, 0), "None");
    assert.equal(resolveAtmosphereConfidence(true, 0), "Low");
    assert.equal(resolveAtmosphereConfidence(true, 1), "Medium");
    assert.equal(resolveAtmosphereConfidence(false, 10), "Medium");
    assert.equal(resolveAtmosphereConfidence(true, 10), "High");
  });
});

describe("calculateAtmosphere", () => {
  test("returns physics-only Low when retainable but no spectroscopy", () => {
    assert.deepEqual(calculateAtmosphere(255, 1, 1, false), {
      canRetain: true,
      hasSpectroscopyData: false,
      atmosphereConfidence: "Low",
    });
  });

  test("uses NASA counts for spectroscopy confidence", () => {
    assert.deepEqual(
      calculateAtmosphere(255, 1, 1, { pl_ntranspec: 4, pl_nespec: 0, pl_ndispec: 0 }),
      {
        canRetain: true,
        hasSpectroscopyData: true,
        atmosphereConfidence: "High",
      },
    );
  });

  test("accepts boolean spectroscopy flag", () => {
    assert.deepEqual(calculateAtmosphere(255, 1, 1, true), {
      canRetain: true,
      hasSpectroscopyData: true,
      atmosphereConfidence: "Medium",
    });
  });
});
