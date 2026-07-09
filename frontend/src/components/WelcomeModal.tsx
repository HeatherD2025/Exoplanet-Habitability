// @ts-ignore: PNG import without type declarations
import linkedIn from "../assets/linkedIn.png";
// @ts-ignore: PNG import without type declarations
import HD_logo from "../assets/HD_logo.png";
// @ts-ignore: PNG import without type declarations
import heroImg from "../assets/hero.png";
// @ts-ignore: CSS module import without type declarations
import "../App.css";
import { Modal } from "react-bootstrap";

interface WelcomeModalProps {
  showModal: boolean;
  hideModal: () => void;
}

export default function WelcomeModal({ showModal, hideModal }: WelcomeModalProps) {

  return (
    <>
      <Modal show={showModal} onHide={hideModal} size="lg" centered>
        <Modal.Header>
            <div className="hero">
              <img
                src={heroImg}
                className="base"
                width="170"
                height="179"
                alt=""
              />
            </div>

          <Modal.Title>Exoplanets Real Estate</Modal.Title>
        </Modal.Header>

        <Modal.Body>Search the cosmos for your next planetary home</Modal.Body>

        <button
          className="close-button" 
          role="button"
          type="button"
          onClick={hideModal}
        >
          <span className="close-button-text">
          Get exploring!
          </span>
        </button>

        <Modal.Footer>
          <p>Connect with me</p>
          <div>
            <a
              href="https://www.heatherdeliso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={HD_logo as unknown as string} alt="Heather DeLiso" width="30"
                height="30"></img>
              Portfolio
            </a>

            <a
              href="https://linkedIn.com/in/heather-deliso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn as unknown as string} alt="LinkedIn" width="30"
                height="30"></img>
              LinkedIn
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
