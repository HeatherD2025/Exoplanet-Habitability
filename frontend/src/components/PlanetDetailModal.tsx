import "../App.css";
import { Modal } from "react-bootstrap";


interface PlanetDetailModalProps {
  showModal: boolean;
  hideModal: () => void;
}

//   minScore: number;
//   hideIncomplete: boolean;
//   requireAtmosphere: boolean;
//   climateZone: temperate, tripical, arctic

export default function PlanetDetailModal({
  showModal,
  hideModal,
}: PlanetDetailModalProps) {
  return (
    <>
      <Modal show={showModal} onHide={hideModal} size="lg" centered>
        <Modal.Header>


          <Modal.Title>

          </Modal.Title>

        </Modal.Header>

        <button
          className="close-button"
          role="button"
          type="button"
          onClick={hideModal}
        >
          <span className="close-button-text">Back to results</span>
        </button>

        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}
