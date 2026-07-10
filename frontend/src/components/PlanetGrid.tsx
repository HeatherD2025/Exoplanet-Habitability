import Container from "react-bootstrap/Container";
import { Row, Col, Card, Badge } from "react-bootstrap";
import type { Planet } from "../types/planet";

interface PlanetGridProps {
  planets: Planet[];
}

// Updated helper to return clean react-bootstrap variant strings
function getAtmosphereLabel(
  confidence: "None" | "Low" | "Medium" | "High" | null,
  canRetain: boolean
): { badge: string; variant: string; note: string } {
  if (!confidence || confidence === "None") {
    return { 
      badge: "None (Vacuum)", 
      variant: "danger", 
      note: "Barren, airless environment." 
    };
  }
  if (confidence === "Low") {
    return { 
      badge: canRetain ? "Unverified Envelope" : "Negligible", 
      variant: "secondary", 
      note: canRetain ? "Gravity suggests retention; awaiting scans." : "Minimal vapor traces." 
    };
  }
  if (confidence === "Medium") {
    return { 
      badge: "Confirmed Dynamic", 
      variant: "info", 
      note: "Spectroscopy indicates active gases." 
    };
  }
  // High Confidence
  return { 
    badge: "Stable Atmosphere", 
    variant: "success", 
    note: "Dense, thoroughly measured envelope." 
  };
}

function PlanetGrid({ planets }: PlanetGridProps) {
  return (
    <Container className="mt-4">
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {planets.map((planet) => {
          // Calculate the specific atmospheric real estate profile for each planet loop item
          const atmos = getAtmosphereLabel(
            planet.trait?.atmosphere?.atmosphereConfidence || null,
            planet.trait?.canRetain || false
          );

          return (
            <Col key={planet.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <Card.Title className="fw-bold mb-0">
                        {planet.name}
                      </Card.Title>
                    </div>

                    {planet.trait && (
                      <Badge
                        bg={
                          planet.trait.habitabilityScore >= 0.75
                            ? "success"
                            : planet.trait.habitabilityScore >= 0.4
                              ? "warning"
                              : "danger"
                        }
                        className="px-2 py-1 fs-6 text-dark"
                      >
                        {planet.trait.habitabilityScore.toFixed(2)}
                      </Badge>
                    )}
                  </div>

                  <hr className="my-2 opacity-25" />

                  <Card.Text className="text-secondary small flex-grow-1 mb-2">
                    <strong>Host Star:</strong> {planet.hostStarName || "Unknown"}{" "}
                    <br />
                    <strong>Discovery Year:</strong>{" "}
                    {planet.discoveryYear || "Unknown"} <br />
                    <strong>Average Temperature:</strong>{" "}
                    {planet.trait?.equilibriumTemperatureFahrenheit?.toFixed(2) ? "°F" :
                      "Unknown"}
                    
                  </Card.Text>

                  {/* Reframed Atmosphere Section */}
                  <div className="mt-1 mb-3 pt-2 border-top border-light-subtle">
                    <strong className="text-secondary small d-block mb-1">Atmosphere:</strong>
                    <Badge 
                      bg={atmos.variant} 
                      className="px-2.5 py-1 text-dark fw-semibold"
                    >
                      {atmos.badge}
                    </Badge>
                    <div 
                      className="text-muted mt-1 lh-sm" 
                      style={{ fontSize: "0.75rem" }}
                    >
                      {atmos.note}
                    </div>
                  </div>

                  {/* Conditional warning layout footer for incomplete parameters */}
                  {planet.trait?.isIncompleteDataset && (
                    <div className="mt-auto">
                      <Badge
                        bg="warning"
                        text="dark"
                        className="w-100 py-1 fw-normal opacity-75"
                      >
                        ⚠ Incomplete Data Set
                      </Badge>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default PlanetGrid;