import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import usePlanets from "./hooks/usePlanets";
import LandingView from "./views/LandingView";
import DashboardView from "./views/DashboardView";

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(true);

  const { planets, loading, error } = usePlanets();

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {/* Pass our parent state control functions down */}
      <LandingView showModal={showModal} handleCloseModal={handleCloseModal} />

      <main className="py-5 bg-light min-vh-100">
        {loading && (
          <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <Spinner animation="border" variant="primary" className="mb-2" />
            <p className="text-muted">
              Scanning the cosmos for habitable listings...
            </p>
          </div>
        )}

        {error && (
          <div className="container my-4">
            <Alert variant="danger">
              <Alert.Heading>Data Retrieval Error</Alert.Heading>
              <p className="mb-0">{error}</p>
            </Alert>
          </div>
        )}

        {!loading && !error && !showModal && <DashboardView planets={planets} />}
      </main>
    </div>
  );
}