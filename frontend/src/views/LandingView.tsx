import { useState } from "react";
import WelcomeModal from "../components/WelcomeModal";

const LandingView = () => {
  const [showModal, setShowModal] = useState(true);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <WelcomeModal showModal={showModal} hideModal={hideModal} />
      <h1 className="text-4xl font-bold mb-4">Exoplanets Real Estate</h1>
      <p className="text-lg text-gray-700">
        Search over 5,000 exoplanets for your next home among the stars
      </p>
    </div>
  );
};

export default LandingView;
