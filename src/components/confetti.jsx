import React, { useState } from "react";
import CanvasConfetti from "canvas-confetti";

const Confetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleClick = () => {
    setIsConfettiActive(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="block py-2 px-6 text-center text-white  bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
      >
        Confetti
      </button>
      <div>
        {isConfettiActive && (
          <>
            <CanvasConfetti
              particleCount={200}
              spread={360}
              startVelocity={30}
              disableForReducedMotion={true}
              origin={{ x: 0.5, y: 0.5 }}
            />
            <CanvasConfetti
              particleCount={30}
              angle={60}
              spread={55}
              origin={{ x: 0 }}
            />
            <CanvasConfetti
              particleCount={30}
              angle={120}
              spread={55}
              origin={{ x: 1 }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Confetti;
