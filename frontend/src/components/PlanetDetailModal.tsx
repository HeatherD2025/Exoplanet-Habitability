import "../App.css";
import { Modal } from "react-bootstrap";
import type { Planet } from "../types/planet";
import { getPlanetCardVisuals } from "../components/TempToZone";

interface PlanetDetailModalProps {
  planet?: Planet;
  showModal: boolean;
  hideModal: () => void;
}

// use planetary radius to compare size to earth (Small, Med, Large lot?)
// use orbital distance to compare to earth??

export default function PlanetDetailModal({
  planet,
  showModal,
  hideModal,
}: PlanetDetailModalProps) {
  const habitabilityScore = planet?.trait?.habitabilityScore ?? 0;
  const orbitalDistance = planet?.trait?.orbitalDistance ?? 0

  const { imageUrl, cardStyle } = planet
    ? getPlanetCardVisuals(planet)
    : { imageUrl: "", cardStyle: {} };

  return (
    <>
      <Modal show={showModal} onHide={hideModal} size="lg" centered style={{...cardStyle}}>
        <Modal.Header>
          <Modal.Title key={planet?.name ?? "planet-detail-modal"} />

          <div
            className="position-relative pt-2"
            style={{ height: "300px", overflow: "hidden" }}
          >
            <img
              src={imageUrl}
              alt={`${planet?.name ?? "planet"} profile layout image`}
              style={{ height: "100%", objectFit: "contain" }}
            />
          </div>
        </Modal.Header>

        <Modal.Body>
          <div>
            {habitabilityScore >= 0.85
              ? "This high-end planet will have you moving at light-speed to make an offer! Boasting comfortable gravity and indication of an atmosphere, this planet is sure to have you seeing stars."
              : habitabilityScore >= 0.75
                ? "A great starter planet for those who dont mind a little terraformation. Although this beauty needs a bit of ecosystem modification, the possibilities are infinite!"
                : habitabilityScore >= 0.5
                  ? "Looking to go where no one has gone before? Look no further! This planet is an excellent challenge for the experienced astronaut seeking to push the boundaries of human occupation."
                  : "Off market"}
          </div>
              {orbitalDistance >= 99
              ? ""
              : ""
            }
          <div>

          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="close-button"
            role="button"
            type="button"
            onClick={hideModal}
          >
            <span className="close-button-text">Back to results</span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
