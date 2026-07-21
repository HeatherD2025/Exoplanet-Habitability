import linkedIn from "../assets/linkedIn.png";
import HD_logo from "../assets/HD_logo.png";
import AnimatedLogo from "./AnimatedLogo";
import "../App.css";
import { Modal } from "react-bootstrap";

interface WelcomeModalProps {
  showModal: boolean;
  hideModal: () => void;
}

export default function WelcomeModal({
  showModal,
  hideModal,
}: WelcomeModalProps) {
  return (
    <>
      <Modal show={showModal} onHide={hideModal} size="lg" centered>
        <Modal.Header>
          <div className="modal-logo-wrapper">
            <AnimatedLogo />
          </div>

          <Modal.Title>
            Search the cosmos for your next planetary home
          </Modal.Title>
        </Modal.Header>

        <button
          className="close-button"
          role="button"
          type="button"
          onClick={hideModal}
        >
          <span className="close-button-text">Get exploring!</span>
        </button>

        <Modal.Footer>
          <div className="footer-links">
            <a
              href="https://www.heatherdeliso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={HD_logo as unknown as string}
                alt="Heather DeLiso"
                width="20"
                height="20"
              ></img>
              Portfolio
            </a>

            <a
              href="https://linkedIn.com/in/heather-deliso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedIn as unknown as string}
                alt="LinkedIn"
                width="20"
                height="20"
              ></img>
              LinkedIn
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
