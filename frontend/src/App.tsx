import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import usePlanets from "./hooks/usePlanets";
import LandingView from "./views/LandingView";
import DashboardView from "./views/DashboardView";
import Favicon from "./components/Favicon";
import './App.css'

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(true);

  const { planets, loading, loadingMore, error, hasMore, loadMore } =
    usePlanets();

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Favicon />
      <div className="main-background">
        
        <LandingView showModal={showModal} handleCloseModal={handleCloseModal} />

        {/* 2. Dashboard View & Data Container (Blue Section) */}
        {!showModal && (
          <main className="dashboard-container">
            
            {/* Loading State */}
            {loading && (
              <div className="d-flex flex-column align-items-center justify-content-center my-5 text-white">
                <Spinner animation="border" variant="light" className="mb-3" />
                <p className="opacity-75">
                  Scanning the cosmos for habitable listings...
                </p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="container my-4">
                <Alert variant="danger" className="shadow">
                  <Alert.Heading>Data Retrieval Error</Alert.Heading>
                  <p className="mb-0">{error}</p>
                </Alert>
              </div>
            )}
            
            {/* Main Content (Filters, Grid, and Pagination) */}
            {!loading && !error && (
              <div className="container">
                <DashboardView planets={planets} />

                {/* Pagination controls */}
                <div className="text-center my-5 pt-4 border-top border-secondary">
                  {hasMore ? (
                    <Button
                      variant="light"
                      onClick={loadMore}
                      disabled={loadingMore}
                      className="px-5 shadow-sm btn-lg"
                    >
                      {loadingMore ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          Searching Deeper Space...
                        </>
                      ) : (
                        "Expand Search Coordinates"
                      )}
                    </Button>
                  ) : (
                    <p className="text-white-50 small fst-italic">
                      You have mapped all available sectors within our local galactic cluster.
                    </p>
                  )}
                </div>
              </div>
            )}
          </main>
        )}
      </div>
    </>
  );
}