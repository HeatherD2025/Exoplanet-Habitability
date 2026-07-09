import { useState, type ComponentType } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import PlanetGrid from "./components/PlanetGrid";
import usePlanets from "./hooks/usePlanets";
import LandingView from "./views/LandingView";

// import WelcomeModal from "./components/WelcomeModal";

const LandingViewTyped = LandingView as ComponentType<{
  showModal: boolean;
  handleCloseModal: () => void;
}>;

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { planets, loading, error } = usePlanets();

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <LandingViewTyped showModal={showModal} handleCloseModal={handleCloseModal} />

      <main className="py-4 bg-light min-vh-100">
        {loading && (
          <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <Spinner animation="border" variant="primary" className="mb-2" />
            <p className="text-muted">
              Scanning the cosmos for habitable worlds...
            </p>
          </div>
        )}

        {error && (
          <div className="container my-4">
            <Alert variant="danger">
              <Alert.Heading>Data Retrieval Error</Alert.Heading>
              <p>{error}</p>
            </Alert>
          </div>
        )}

        {/* 4. Render the grid safely only when loading is complete and no errors occurred */}
        {!loading && !error && !showModal && <PlanetGrid planets={planets} />}
      </main>
    </div>
  );
}
