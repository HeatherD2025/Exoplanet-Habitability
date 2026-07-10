import WelcomeModal from "../components/WelcomeModal";

interface LandingViewProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export default function LandingView({ showModal, handleCloseModal }: LandingViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5 text-center">
      <WelcomeModal showModal={showModal} hideModal={handleCloseModal} />
      <h1 className="text-4xl font-bold mb-2">Exoplanet Real Estate</h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto px-3">
        Search over 5,000 exoplanets for your next home among the stars.
      </p>
    </div>
  );
}