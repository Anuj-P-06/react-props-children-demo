import React, { useState } from "react";

const Card = ({ children }) => {
  const [showText, setShowText] = useState(false);

  const renderText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="border border-black bg-green-300 shadow-md rounded-lg p-12 h-full flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Card 2</h2>

      <button
        onClick={renderText}
        className="border border-black bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition mb-6"
      >
        Click to show text
      </button>

      {showText && <div className="space-y-2 text-center">{children}</div>}
    </div>
  );
};

export default Card;


