import "../App.css";
import { Modal } from "react-bootstrap";
import type { Planet } from "../types/planet";


interface PlanetDetailModalProps {
  planets: Planet[];
  showModal: boolean;
  hideModal: () => void;
}

// use planetary radius to compare size to earth (Small, Med, Large lot?)
// use orbital distance to compare to earth??

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
