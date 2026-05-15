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

export function calculateEstimatedMass(rawRadiusEarth: number | null | undefined): number | null {
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

  const estimatedMassRaw = Math.pow(rawRadiusEarth, ROCKY_MASS_RADIUS_EXPONENT_K);
  return roundEstimatedMass(estimatedMassRaw);
}
