import "../App.css";
import { Modal } from "react-bootstrap";
import type { Planet } from "../types/planet";
import { getPlanetCardVisuals } from "../components/TempToZone";

interface PlanetDetailModalProps {
  planet?: Planet;
  showModal: boolean;
  hideModal: () => void;
}

// MAYBE TO-DO: use planetary radius to compare size to earth (Small, Med, Large lot?)

function formatOrbitalDistance(au: number | null | undefined): string {
  if (!au || au <= 0) return "Orbital data unconfirmed";
  if (au < 0.1)
    return "With an extremely tight orbit close to host star, this planet boasts incredible sunsets unlike anything you've seen on Earth";
  if (au >= 0.8 && au <= 1.5)
    return "With an Earth-like orbital distance, the sun in the sky of this planet will feel much like your old home star.";
  return `${au > 1 ? `This planet sits ${au.toFixed(1)}x further from it's host star than our Earth to the Sun.` : `This planet is ${(1 / au).toFixed(1)}x closer to its host star than our Earth to the Sun.`}`;
}

export default function PlanetDetailModal({
  planet,
  showModal,
  hideModal,
}: PlanetDetailModalProps) {
  const habitabilityScore = planet?.trait?.habitabilityScore ?? 0;
  const orbitalDistance = planet?.trait?.orbitalDistance;
  const equilibriumTemperatureFahrenheit =
    planet?.trait?.equilibriumTemperatureFahrenheit;

  const habitabilityDescription =
    habitabilityScore == null
      ? "No habitability data available for this planet, sold site unseen."
      : habitabilityScore >= 0.85
        ? "This high-end planet will have you moving at light-speed to make an offer! Boasting comfortable gravity and indication of an atmosphere, this planet is sure to have you seeing stars."
        : habitabilityScore >= 0.75
          ? "A great starter planet for those who don't mind a little atmospheric generation or terraformation. Although this beauty needs a bit of ecosystem work, the possibilities are infinite."
          : habitabilityScore >= 0.5
            ? "Looking to go where no one has gone before? Look no further! This planet is an excellent challenge for the experienced astronaut seeking to push the boundaries of human occupation."
            : "Currently off market";

  const temperatureDescription =
    equilibriumTemperatureFahrenheit == null
      ? "No temperature data available for this planet, Exoplanet Real Estate is not responsible for any thermal mishaps."
      : equilibriumTemperatureFahrenheit >= 150
        ? `With an average temperature ${planet?.trait?.equilibriumTemperatureFahrenheit?.toFixed(2)} °F, this sun-drenched planet will definitely have you reaching for your sunscreen. Buyers will likely require extensive cooling systems (not included).`
        : equilibriumTemperatureFahrenheit >= 80
          ? `With an average temperature ${planet?.trait?.equilibriumTemperatureFahrenheit?.toFixed(2)} °F, this planet feels like summer all year round. If you love heat, this HOT listing is perfect for you!`
          : equilibriumTemperatureFahrenheit >= 50
            ? `With an average temperature ${planet?.trait?.equilibriumTemperatureFahrenheit?.toFixed(2)} °F, this planet is the perfect balance of earth-like temperatures to keep you comfortable and feeling at home.`
            : equilibriumTemperatureFahrenheit >= 0
              ? `With an average temperature ${planet?.trait?.equilibriumTemperatureFahrenheit?.toFixed(2)} °F, it's the perfect planet for winter lovers who don't mind a little chill in the air.`
              : "You will want to bundle up as this planet is a true icebox! Be sure to bring your warmest space suit and heating systems to survive the cold nights here.";

  const { imageUrl, cardStyle } = planet
    ? getPlanetCardVisuals(planet)
    : { imageUrl: "", cardStyle: {} };

  return (
    <>
      <Modal
        show={showModal}
        onHide={hideModal}
        size="xl"
        centered
        className="planet-detail-modal"
        style={{ ...cardStyle }}
      >
        <Modal.Header className="project-detail-modal-header">
          <Modal.Title>
            <span>{planet?.name ?? "planet-detail-modal"}</span>
          </Modal.Title>
          <div
            className="position-relative pt-1"
            style={{ height: "300px", overflow: "hidden" }}
          >
            <img
              className="card-image-container"
              src={imageUrl}
              alt={`${planet?.name ?? "planet"} profile layout image`}
              style={{ height: "100%", objectFit: "contain" }}
            />
          </div>
        </Modal.Header>

        <Modal.Body className="text-light p-2">
          <div>{habitabilityDescription}</div>
          <br></br>

          <div>{temperatureDescription}</div>
          <br></br>
          <div>{formatOrbitalDistance(orbitalDistance)}</div>
          <br></br>
          <div className="p-3 border border-secondary rounded">
            <p className="text-uppercase fs-7 mb-1">Listing date:</p>
            <div> {planet?.discoveryYear || "Unknown"}</div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="rounded-pill px-3 btn-sm text-dark text-uppercase p-1 m-auto mt-4"
            style={{ backgroundColor: "#b6b9bb" }}
            role="button"
            type="button"
            onClick={hideModal}
          >
            Back to results
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
