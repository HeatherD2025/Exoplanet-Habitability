import type { Planet } from "../types/planet";
import moveInReady from "../public/assets/moveInReady.webp";
import arcticWonderland from "../public/assets/arcticWonderland.webp";
import solarParadise from "../public/assets/solarParadise.webp";
import unknownPlanet from "../public/assets/unknownPlanet.webp";
import fixerUpper from "../public/assets/fixerUpper.webp";

const PLANET_IMAGES = {
  temperate: moveInReady,
  arctic: arcticWonderland,
  tropical: solarParadise,
  unknown: unknownPlanet,
  fixer: fixerUpper,
};

interface CardVisuals {
  imageUrl: string;
  badgeText: string;
  badgeColor: string;
  cardStyle: { border: string };
}

/**
 * Determines card visuals using the dynamic front-end climate logic.
 */
export function getPlanetCardVisuals(planet: Planet): CardVisuals {
  const trait = planet.trait;

  if (!trait || trait.isIncompleteDataset) {
    return {
      imageUrl: PLANET_IMAGES.unknown,
      badgeText: "Unmeasured Sector (As-Is)",
      badgeColor: "#efe1b7",
      cardStyle: { border: "2px dashed #efe1b7" },
    };
  }

  const tempF = trait.equilibriumTemperatureFahrenheit;

  // 2. If temperature data is missing
  if (tempF === undefined || tempF === null) {
    return {
      imageUrl: PLANET_IMAGES.fixer,
      badgeText: "Cosmic Fixer-Upper",
      badgeColor: "#efe1b7",
      cardStyle: { border: "2px dashed #efe1b7" },
    };
  }

  if (tempF < 20) {
    return {
      imageUrl: PLANET_IMAGES.arctic,
      badgeText: "Arctic Wonderland",
      badgeColor: "#a4bbf1", // Primary blue
      cardStyle: { border: "2px solid #a4bbf1" },
    };
  }

  if (tempF >= 20 && tempF < 80) {
    return {
      imageUrl: PLANET_IMAGES.temperate,
      badgeText: "Move-In Ready",
      badgeColor: "#beebc4",
      cardStyle: { border: "2px solid #beebc4" },
    };
  }

  return {
    imageUrl: PLANET_IMAGES.tropical,
    badgeText: "Solar Paradise",
    badgeColor: "#edd0cd", // Danger/pinkish red
    cardStyle: { border: "2px solid #edd0cd" },
  };
}
