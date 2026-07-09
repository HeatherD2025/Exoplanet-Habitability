import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import type { Exoplanet } from "../types/planet";

interface PlanetGridProps {
  planets: Exoplanet[];
}

const PlanetGrid: React.FC<PlanetGridProps> = ({ planets }) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {planets.map((planet) => (
          <Col key={planet.id}>
            <Card>
              <Card.Body>
                <Card.Title>{planet.pl_name}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Host Star:</strong> {planet.hostname}
                  </p>
                  <p>
                    <strong>Discovery Year:</strong> {planet.disc_year}
                  </p>
                  <p>
                    <strong>Habitability Score:</strong>{" "}
                    {planet.hab_score.toFixed(2)}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlanetGrid;
