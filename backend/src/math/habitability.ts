/**
 * Source exoplanet inputs using mixed astronomy units.
 */
export interface PlanetData {
  /** Planet mass in Jupiter masses (M_j). */
  massJupiter?: number | null;
  /** Planet radius in Earth radii (R_earth). */
  radiusEarth?: number | null;
  /** Semi-major axis in astronomical units (AU). */
  orbitalDistanceAu?: number | null;
  /** Stellar luminosity represented as log10(L / L_sun). */
  stellarLuminosityLog10?: number | null;
  /** Planet equilibrium temperature in Kelvin (NASA `pl_eqt`). */
  equilibriumTemperatureKelvin?: number | null;
}

/**
 * Normalized values expressed in Earth-relative units.
 */
export interface EarthUnitsData {
  /** Planet mass in Earth masses (M_earth). */
  massEarth: number | null;
  /** Planet radius in Earth radii (R_earth). */
  radiusEarth: number | null;
  /** Orbital distance in astronomical units (AU). */
  orbitalDistanceAu: number | null;
  /** Estimated incident flux relative to Earth = 1.0. */
  stellarFluxEarth: number | null;
}

/**
 * Empirical rocky-planet mass-radius exponent (M = R^k).
 * A sub-cubic value captures compression effects in larger rocky worlds.
 */
export const ROCKY_MASS_RADIUS_EXPONENT_K = 3.7;
export const ROCKY_RADIUS_UPPER_LIMIT_EARTH = 2.5;

export type MassEstimateStatus = "ok" | "invalid_input" | "unlikely_rocky";

export interface MassEstimateResult {
  status: MassEstimateStatus;
  massEarth: number | null;
}

/**
 * Converts supported inputs into Earth-relative units.
 * Assumes null is returned for unavailable or invalid values.
 */
export function convertToEarthUnits(_planet: PlanetData): EarthUnitsData {
  throw new Error("Not implemented");
}

/**
 * Estimates mass (in Earth masses) from radius (in Earth radii)
 * using M = R^k for likely rocky planets (R <= 2.5 R_earth).
 */
export function estimateMassFromRadius(
  radiusEarth: number | null | undefined,
): MassEstimateResult {
  if (
    typeof radiusEarth !== "number" ||
    !Number.isFinite(radiusEarth) ||
    radiusEarth <= 0
  ) {
    return { status: "invalid_input", massEarth: null };
  }

  if (radiusEarth > ROCKY_RADIUS_UPPER_LIMIT_EARTH) {
    return { status: "unlikely_rocky", massEarth: null };
  }

  return {
    status: "ok",
    massEarth: Math.pow(radiusEarth, ROCKY_MASS_RADIUS_EXPONENT_K),
  };
}

function roundEstimatedMass(value: number): number {
  const decimals = value < 1 ? 3 : 2;
  return Number(value.toFixed(decimals));
}

export function calculateEstimatedMass(
  rawRadiusEarth: number | null | undefined,
): number | null {
  if (
    typeof rawRadiusEarth !== "number" ||
    !Number.isFinite(rawRadiusEarth) ||
    rawRadiusEarth <= 0
  ) {
    return null;
  }

  if (rawRadiusEarth > ROCKY_RADIUS_UPPER_LIMIT_EARTH) {
    return null;
  }

  const estimatedMassRaw = Math.pow(
    rawRadiusEarth,
    ROCKY_MASS_RADIUS_EXPONENT_K,
  );
  return roundEstimatedMass(estimatedMassRaw);
}

/** NASA Exoplanet Archive column for equilibrium temperature (Kelvin). */
export const NASA_EQUILIBRIUM_TEMP_COLUMN = "pl_eqt";

/**
 * Liquid-water-friendly equilibrium temperature band (Kelvin).
 * Based on the approximate range where liquid H2O can exist at a planetary surface.
 */
export const LIQUID_H2O_TEMP_MIN_KELVIN = 175;
export const LIQUID_H2O_TEMP_MAX_KELVIN = 270;

export type LiquidWaterLabel = "likely liquid H2O" | "unlikely liquid H2O";

export type LiquidWaterAssessmentStatus =
  | "ok"
  | "missing_input"
  | "invalid_input"
  | "unlikely_liquid_h2o";

export interface LiquidWaterAssessmentResult {
  status: LiquidWaterAssessmentStatus;
  /** Human-readable liquid-water verdict; null when input is missing or invalid. */
  assessment: LiquidWaterLabel | null;
  /** NASA `pl_eqt` value used for the check (Kelvin). */
  equilibriumTemperatureKelvin: number | null;
}

/**
 * Uses NASA `pl_eqt` (planet equilibrium temperature in Kelvin) to assess whether
 * surface liquid water is plausible.
 *
 * Inclusive range: 175 K ≤ pl_eqt ≤ 270 K → likely; otherwise → unlikely.
 */
export function assessLiquidWaterFromEquilibriumTemperature(
  equilibriumTemperatureKelvin: number | null | undefined,
): LiquidWaterAssessmentResult {
  if (
    equilibriumTemperatureKelvin === null ||
    equilibriumTemperatureKelvin === undefined
  ) {
    return {
      status: "missing_input",
      assessment: null,
      equilibriumTemperatureKelvin: null,
    };
  }

  if (
    typeof equilibriumTemperatureKelvin !== "number" ||
    !Number.isFinite(equilibriumTemperatureKelvin)
  ) {
    return {
      status: "invalid_input",
      assessment: null,
      equilibriumTemperatureKelvin: null,
    };
  }

  if (
    equilibriumTemperatureKelvin >= LIQUID_H2O_TEMP_MIN_KELVIN &&
    equilibriumTemperatureKelvin <= LIQUID_H2O_TEMP_MAX_KELVIN
  ) {
    return {
      status: "ok",
      assessment: "likely liquid H2O",
      equilibriumTemperatureKelvin,
    };
  }

  return {
    status: "unlikely_liquid_h2o",
    assessment: "unlikely liquid H2O",
    equilibriumTemperatureKelvin,
  };
}

/** Gravitational constant (m³ kg⁻¹ s⁻²), CODATA 2018. */
export const GRAVITATIONAL_CONSTANT_SI = 6.674_3e-11;

/** Earth mass and mean radius in SI units for g = GM / R². */
export const EARTH_MASS_KG = 5.972_2e24;
export const EARTH_RADIUS_M = 6.371e6;

/** Standard Earth surface gravity (m s⁻²). */
export const EARTH_SURFACE_GRAVITY_MS2 = 9.806_65;

export type SurfaceGravityStatus = "ok" | "missing_input" | "invalid_input";

export interface SurfaceGravityResult {
  status: SurfaceGravityStatus;
  /**
   * Surface gravity relative to Earth (dimensionless).
   * 1.0 ≈ 9.81 m s⁻². From g = GM/R² with NASA `pl_bmasse` (M⊕) and `pl_rade` (R⊕).
   */
  surfaceGravityEarth: number | null;
  /** Inputs echoed when valid (Earth masses and Earth radii). */
  massEarth: number | null;
  radiusEarth: number | null;
}

function isPositiveFinite(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

/**
 * Surface gravity in m s⁻² from g = (G × M) ÷ R².
 * Mass and radius must be in kilograms and meters.
 */
export function surfaceGravityMs2FromSi(
  massKg: number,
  radiusM: number,
): number {
  return (GRAVITATIONAL_CONSTANT_SI * massKg) / (radiusM * radiusM);
}

/**
 * Relative surface gravity (g / g⊕) from planet mass and radius in Earth units.
 * Uses NASA `pl_bmasse` (M⊕) and `pl_rade` (R⊕); equivalent to M⊕ / R⊕².
 */
export function calculateRelativeSurfaceGravity(
  massEarth: number | null | undefined,
  radiusEarth: number | null | undefined,
): SurfaceGravityResult {
  const missingMass = massEarth === null || massEarth === undefined;
  const missingRadius = radiusEarth === null || radiusEarth === undefined;

  if (missingMass || missingRadius) {
    return {
      status: "missing_input",
      surfaceGravityEarth: null,
      massEarth: missingMass ? null : massEarth,
      radiusEarth: missingRadius ? null : radiusEarth,
    };
  }

  if (!isPositiveFinite(massEarth) || !isPositiveFinite(radiusEarth)) {
    return {
      status: "invalid_input",
      surfaceGravityEarth: null,
      massEarth: null,
      radiusEarth: null,
    };
  }

  // With M in M⊕ and R in R⊕, g/g⊕ = (G·M)/(G·M⊕) · (R⊕/R)² = M⊕ / R⊕².
  const surfaceGravityEarth = massEarth / (radiusEarth * radiusEarth);

  return {
    status: "ok",
    surfaceGravityEarth: Number(surfaceGravityEarth.toFixed(4)),
    massEarth,
    radiusEarth,
  };
}

/**
 * Minimum surface gravity (g/g⊕) to retain a substantial atmosphere on rocky worlds.
 * Mars (~0.38 g⊕) sits below this threshold.
 */
export const RETENTION_MIN_SURFACE_GRAVITY_EARTH = 0.5;

/** Equilibrium temperatures above this (K) increase thermal escape on non-giants. */
export const RETENTION_MAX_EQ_TEMP_KELVIN = 800;

/** Mass and radius above these values are treated as gas giants for retention. */
export const GAS_GIANT_MIN_MASS_EARTH = 50;
export const GAS_GIANT_MIN_RADIUS_EARTH = 6;

/**
 * NASA `ps` columns for planet spectroscopy literature counts.
 * There is no `pl_spectype` in the Archive; `st_spectype` is the host star's spectral type.
 */
export const NASA_SPECTROSCOPY_COLUMNS = [
  "pl_ntranspec",
  "pl_nespec",
  "pl_ndispec",
] as const;

export interface NasaSpectroscopyCounts {
  pl_ntranspec?: number | null;
  pl_nespec?: number | null;
  pl_ndispec?: number | null;
}

export type SpectroscopyInput =
  | boolean
  | NasaSpectroscopyCounts
  | null
  | undefined;

export type AtmosphereConfidence = "None" | "Low" | "Medium" | "High" | null;

export interface AtmosphereAssessment {
  canRetain: boolean;
  hasSpectroscopyData: boolean | null;
  atmosphereConfidence: AtmosphereConfidence;
}

export interface GasRetentionAssessment {
  canRetain: boolean;
  surfaceGravityEarth: number | null;
  isGasGiant: boolean;
}

function nonNegativeInteger(value: number | null | undefined): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return 0;
  }
  return Math.floor(value);
}

export function totalNasaSpectroscopyMeasurements(
  counts: NasaSpectroscopyCounts | null | undefined,
): number {
  if (!counts) {
    return 0;
  }
  return (
    nonNegativeInteger(counts.pl_ntranspec) +
    nonNegativeInteger(counts.pl_nespec) +
    nonNegativeInteger(counts.pl_ndispec)
  );
}

export function hasSpectroscopyFromNasaCounts(
  counts: NasaSpectroscopyCounts | null | undefined,
): boolean {
  return totalNasaSpectroscopyMeasurements(counts) > 0;
}

function isGasGiant(massEarth: number, radiusEarth: number): boolean {
  return (
    massEarth >= GAS_GIANT_MIN_MASS_EARTH ||
    radiusEarth >= GAS_GIANT_MIN_RADIUS_EARTH
  );
}

/**
 * Whether a planet can physically hold onto gas from mass, radius, and equilibrium temperature.
 */
export function assessGasRetention(
  eqTempKelvin: number | null | undefined,
  massEarth: number | null | undefined,
  radiusEarth: number | null | undefined,
): GasRetentionAssessment {
  const gravity = calculateRelativeSurfaceGravity(massEarth, radiusEarth);

  if (gravity.status !== "ok" || gravity.surfaceGravityEarth === null) {
    return { canRetain: false, surfaceGravityEarth: null, isGasGiant: false };
  }

  const mass = gravity.massEarth!;
  const radius = gravity.radiusEarth!;
  const giant = isGasGiant(mass, radius);

  if (giant) {
    return {
      canRetain: true,
      surfaceGravityEarth: gravity.surfaceGravityEarth,
      isGasGiant: true,
    };
  }

  const gravityOk =
    gravity.surfaceGravityEarth >= RETENTION_MIN_SURFACE_GRAVITY_EARTH;

  if (eqTempKelvin === null || eqTempKelvin === undefined) {
    return {
      canRetain: gravityOk,
      surfaceGravityEarth: gravity.surfaceGravityEarth,
      isGasGiant: false,
    };
  }

  if (!isPositiveFinite(eqTempKelvin)) {
    return {
      canRetain: false,
      surfaceGravityEarth: gravity.surfaceGravityEarth,
      isGasGiant: false,
    };
  }

  const tempOk = eqTempKelvin <= RETENTION_MAX_EQ_TEMP_KELVIN;

  return {
    canRetain: gravityOk && tempOk,
    surfaceGravityEarth: gravity.surfaceGravityEarth,
    isGasGiant: false,
  };
}

function resolveSpectroscopyInput(spectroscopy: SpectroscopyInput): {
  hasSpectroscopyData: boolean | null;
  totalMeasurements: number;
} {
  if (spectroscopy === null || spectroscopy === undefined) {
    return {
      hasSpectroscopyData: null,
      totalMeasurements: 0,
    };
  }

  if (typeof spectroscopy === "boolean") {
    return {
      hasSpectroscopyData: spectroscopy,
      totalMeasurements: spectroscopy ? 1 : 0,
    };
  }

  const totalMeasurements = totalNasaSpectroscopyMeasurements(spectroscopy);
  return {
    hasSpectroscopyData: totalMeasurements > 0,
    totalMeasurements,
  };
}

/**
 * Maps literature spectroscopy count to a base confidence tier.
 */
export function atmosphereConfidenceFromMeasurementCount(
  totalMeasurements: number,
): AtmosphereConfidence {
  if (totalMeasurements <= 0) {
    return "None";
  }
  if (totalMeasurements === 1) {
    return "Low";
  }
  if (totalMeasurements <= 4) {
    return "Medium";
  }
  return "High";
}

/**
 * Cross-references physical retention with spectroscopy availability.
 * Without measurements, retention alone yields Low; without retention, caps at Medium.
 */
export function resolveAtmosphereConfidence(
  canRetain: boolean,
  totalMeasurements: number,
): AtmosphereConfidence {
  const measurementTier =
    atmosphereConfidenceFromMeasurementCount(totalMeasurements);

  if (totalMeasurements === 0) {
    return canRetain ? "Low" : "None";
  }

  if (!canRetain) {
    if (measurementTier === "High") {
      return "Medium";
    }
    return measurementTier;
  }

  if (measurementTier === "Low") {
    return "Medium";
  }
  if (measurementTier === "Medium") {
    return "High";
  }
  return "High";
}

/**
 * Assesses atmospheric retention and observation confidence.
 *
 * Pass `true`/`false` for a simple spectroscopy flag, or NASA count fields
 * (`pl_ntranspec`, `pl_nespec`, `pl_ndispec`) for tiered confidence.
 */
export function calculateAtmosphere(
  eqTemp: number | null | undefined,
  radius: number | null | undefined,
  mass: number | null | undefined,
  spectroscopy: SpectroscopyInput,
): AtmosphereAssessment {
  const retention = assessGasRetention(eqTemp, mass, radius);
  const { hasSpectroscopyData, totalMeasurements } =
    resolveSpectroscopyInput(spectroscopy);

  return {
    canRetain: retention.canRetain,
    hasSpectroscopyData,
    atmosphereConfidence: resolveAtmosphereConfidence(
      retention.canRetain,
      totalMeasurements,
    ),
  };
}

export interface HabitabilityAssessment {
  score: number;
  isIncomplete: boolean;
}

/**
 * Calculates a normalized habitability score from 0.00 to 1.00.
 * Tracks missing metrics to flag an "incomplete data set" without artificial score penalties.
 */
export function calculateHabitabilityIndex(
  eqTemp: number | null | undefined,
  radius: number | null | undefined,
  mass: number | null | undefined,
  canRetainAtmosphere: boolean,
): HabitabilityAssessment {
  let tempScore = 0.5; // Neutral baseline
  let gravityScore = 0.5; // Neutral baseline
  let atmosphereScore = canRetainAtmosphere ? 1.0 : 0.2;

  // Track if any critical pillar is completely missing
  let isIncomplete = false;

  // 1. Evaluate Temperature Band (40% Weight)
  if (typeof eqTemp === "number" && Number.isFinite(eqTemp)) {
    if (eqTemp >= 175 && eqTemp <= 270) {
      tempScore = 1.0;
    } else if (eqTemp < 150 || eqTemp > 350) {
      tempScore = 0.0;
    } else {
      tempScore =
        eqTemp < 175 ? (eqTemp - 150) / 25 : 1.0 - (eqTemp - 270) / 80;
    }
  } else {
    // Keep neutral score, but flag the gap
    tempScore = 0.5;
    isIncomplete = true;
  }

  // 2. Evaluate Relative Surface Gravity (30% Weight)
  const gravityResult = calculateRelativeSurfaceGravity(mass, radius);

  if (
    gravityResult.status === "ok" &&
    gravityResult.surfaceGravityEarth !== null
  ) {
    const g = gravityResult.surfaceGravityEarth;
    if (g >= 0.8 && g <= 1.5) {
      gravityScore = 1.0;
    } else if (g < 0.3 || g > 4.0) {
      gravityScore = 0.0;
    } else {
      gravityScore = g < 0.8 ? (g - 0.3) / 0.5 : 1.0 - (g - 1.5) / 2.5;
    }
  } else {
    // If mass/radius calculations failed entirely, set flag
    gravityScore = 0.5;
    isIncomplete = true;
  }

  // 3. Compute final weighted average index
  const rawScore = tempScore * 0.4 + atmosphereScore * 0.3 + gravityScore * 0.3;
  const finalScore = Math.max(0, Math.min(1, Number(rawScore.toFixed(2))));

  return {
    score: finalScore,
    isIncomplete,
  };
}
