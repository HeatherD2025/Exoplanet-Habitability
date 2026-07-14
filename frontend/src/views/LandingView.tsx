import WelcomeModal from "../components/WelcomeModal";
import '../App.css'

interface LandingViewProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export default function LandingView({ showModal, handleCloseModal }: LandingViewProps) {
  return (
      <div className="flex flex-col bg-black items-center justify-center min-h-screen py-5 text-center">
        <WelcomeModal showModal={showModal} hideModal={handleCloseModal} />
        <h1 className="text-4xl font-bold mb-4 text-white">Exoplanet Real Estate</h1>
        <p className="text-lg text-white max-w-xl mx-auto px-3">
          Search over 5,000 exoplanets for your next home among the stars.
        </p>
      </div>
  );
}