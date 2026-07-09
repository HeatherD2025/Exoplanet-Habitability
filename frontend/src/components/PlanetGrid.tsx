import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import type { Planet } from "../types/planet";

interface PlanetGridProps {
  planets: Planet[];
}

function PlanetGrid({ planets }: PlanetGridProps) {
  return (
    <Container className="mt-4">
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {planets.map((planet) => (
          <Col key={planet.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <Card.Title className="fw-bold mb-0">
                      {planet.name}
                    </Card.Title>
                    <Card.Subtitle className="text-muted small mt-1">
                      Host Star: {planet.hostStarName || "Unknown"}
                    </Card.Subtitle>
                  </div>

                  {planet.trait && (
                    <Badge bg="success" className="px-2 py-1 fs-6">
                      {planet.trait.habitabilityScore.toFixed(2)}
                    </Badge>
                  )}
                </div>

                <hr className="my-2 opacity-25" />

                <Card.Text className="text-secondary small flex-grow-1">
                  <strong>Discovery Year:</strong>{" "}
                  {planet.discoveryYear || "N/A"} <br />
                  <strong>Atmosphere:</strong>{" "}
                  {planet.trait?.atmosphere.atmosphereConfidence || "No data"}
                </Card.Text>

                {/* Conditional warning layout footer for incomplete parameters */}
                {planet.trait?.isIncompleteDataset && (
                  <div className="mt-2">
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
        ))}
      </Row>
    </Container>
  );
}

export default PlanetGrid;
