import Container from "react-bootstrap/Container";
import { Row, Col, Card, Badge, CardHeader } from "react-bootstrap";
import type { Planet } from "../types/planet";
import { getPlanetCardVisuals } from "./TempToZone";

interface PlanetGridProps {
  planets: Planet[];
}

function getAtmosphereLabel(
  confidence: string | null,
  canRetain: boolean,
): { badge: string; variant: string; note: string } {
  const normalizedConfidence =
    confidence === "None" ||
    confidence === "Low" ||
    confidence === "Medium" ||
    confidence === "High"
      ? confidence
      : null;

  if (!normalizedConfidence || normalizedConfidence === "None") {
    return {
      badge: "None (Vacuum)",
      variant: "danger",
      note: "Barren, airless environment.",
    };
  }
  if (normalizedConfidence === "Low") {
    return {
      badge: canRetain ? "Unverified Envelope" : "Negligible",
      variant: "secondary",
      note: canRetain
        ? "Gravity suggests retention; awaiting scans."
        : "Minimal vapor traces.",
    };
  }
  if (confidence === "Medium") {
    return {
      badge: "Confirmed Dynamic",
      variant: "info",
      note: "Spectroscopy indicates active gases.",
    };
  }
  return {
    badge: "Stable Atmosphere",
    variant: "success",
    note: "Dense, thoroughly measured envelope.",
  };
}

function PlanetGrid({ planets }: PlanetGridProps) {
  return (
    <Container className="mt-4">
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {planets.map((planet) => {
          const canRetain =
            planet.trait && "canRetain" in planet.trait
              ? ((planet.trait as { canRetain?: boolean }).canRetain ?? false)
              : false;

          const atmos = getAtmosphereLabel(
            planet.trait?.atmosphere?.atmosphereConfidence || null,
            canRetain,
          );

          const habitabilityScore = planet.trait?.habitabilityScore ?? 0;

          // Extract your dynamic webp assets and style settings here
          const { imageUrl, cardStyle } =
            getPlanetCardVisuals(planet);

          return (
            <Col key={planet.id}>
              <Card
                className="h-100 shadow-sm bg-dark text-white position-relative"
                style={{
                  ...cardStyle,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {/* Visual Asset Container */}
                <div
                  className="position-relative pt-2"
                  style={{ height: "300px", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={`${planet.name} profile layout image`}
                    style={{ height: "100%", objectFit: "contain" }}
                  />
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    <Card.Title className="mb-0">
                      <h3 className="h4 text-white mb-0">{planet.name}</h3>
                    </Card.Title>
                  </div>

                  <CardHeader className="w-100 bg-transparent border-0 p-0 mb-3">
                    <p className="text-white-50 mb-1 small">Quality Score:</p>
                    {planet.trait && (
                      <Badge
                        bg={
                          habitabilityScore >= 0.75
                            ? "success"
                            : habitabilityScore >= 0.4
                              ? "warning"
                              : "danger"
                        }
                        className="px-2 py-1 fs-6 text-dark"
                      >
                        {habitabilityScore.toFixed(2)}
                      </Badge>
                    )}
                  </CardHeader>

                  <hr className="my-2 opacity-25 border-white" />

                  <Card.Text className="text-white-50 small flex-grow-1 mb-2">
                    <strong>Host Star:</strong>{" "}
                    {planet.hostStarName || "Unknown"} <br />
                    <strong>Discovery Year:</strong>{" "}
                    {planet.discoveryYear || "Unknown"} <br />
                    <strong>Average Temperature:</strong>{" "}
                    {planet.trait?.equilibriumTemperatureFahrenheit !==
                      undefined &&
                    planet.trait?.equilibriumTemperatureFahrenheit !== null
                      ? `${planet.trait.equilibriumTemperatureFahrenheit.toFixed(2)} °F`
                      : "Unknown"}
                  </Card.Text>

                  {/* Reframed Atmosphere Section */}
                  <div className="mt-1 mb-3 pt-2 border-top border-secondary">
                    <strong className="text-white-50 small d-block mb-1">
                      Atmosphere:
                    </strong>
                    <Badge
                      bg={atmos.variant}
                      className="px-2 py-1 text-dark fw-semibold"
                    >
                      {atmos.badge}
                    </Badge>
                    <div
                      className="text-white-50 mt-1 lh-sm"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {atmos.note}
                    </div>
                  </div>

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
