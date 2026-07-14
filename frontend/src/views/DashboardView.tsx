import { useState } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import PlanetFilters, { type FilterState } from "../components/PlanetFilters";
import PlanetGrid from "../components/PlanetGrid";
import type { Planet } from "../types/planet";

interface DashboardViewProps {
  planets: Planet[];
}

export default function DashboardView({ planets }: DashboardViewProps) {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    minScore: 0.0,
    hideIncomplete: false,
    requireAtmosphere: false,
    climateZone: "all",
  });

  const filteredPlanets = planets.filter((planet) => {
    const trait = planet.trait;

    // Fallback block if the database hasn't computed a trait row yet
    if (!trait) {
      return activeFilters.minScore === 0 && !activeFilters.hideIncomplete;
    }

    // Habitability Grade Filter
    if (trait.habitabilityScore < activeFilters.minScore) return false;

    // Inspection Records (Complete vs Incomplete) Filter
    if (activeFilters.hideIncomplete && trait.isIncompleteDataset) return false;

    // If atmosphere sub-object exists, check canRetain; otherwise check presence
    if (activeFilters.requireAtmosphere) {
      const hasAtmosphere =
        trait.atmosphere && (trait.atmosphere.canRetain ?? true);
      if (!hasAtmosphere) return false;
    }

    // 4. Climate Profiles
    const tempK = trait.equilibriumTemperatureKelvin;
    if (activeFilters.climateZone !== "all") {
      if (!tempK) return false; // Filter unmeasured profiles when targeting zones
      if (
        activeFilters.climateZone === "temperate" &&
        (tempK < 200 || tempK > 320)
      )
        return false;
      if (activeFilters.climateZone === "tropical" && tempK <= 320)
        return false;
      if (activeFilters.climateZone === "arctic" && tempK >= 200) return false;
    }

    return true;
  });

  return (
      <Container className="planet-filter-and-grid-container">
        <header className="mb-5">
          <h2 className="fw-bold tracking-tight text-dark pb-1">
            Available Interstellar Listings
          </h2>
          <p className="text-muted small">
            Premium planetary sectors calculated via telemetry analysis. Adjust
            custom options below.
          </p>
        </header>

        <PlanetFilters onFilterChange={setActiveFilters} />

        {/* Grid response output layout */}
        {filteredPlanets.length === 0 ? (
          <Alert variant="info" className="text-center py-5 border-dashed">
            No planetary sectors found matching these target custom criteria. Try
            scaling down your property inspection preferences!
          </Alert>
        ) : (
          <PlanetGrid planets={filteredPlanets} />
        )}
      </Container>
  );
}
