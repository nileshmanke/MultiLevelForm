import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const DivSwitcher = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const toggleDiv = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <div className="flex p-4">
      <div className="flex flex-col">
        {Array.from({ length: 4 }, (_, index) => (
          <button
            key={index}
            className={`mb-2 p-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none ${
              activeDiv === index + 1 ? 'bg-blue-700' : ''
            }`}
            onClick={() => toggleDiv(index + 1)}
          >
            Show Div {index + 1}
          </button>
        ))}
      </div>
      <div className="flex-1 ml-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className={`div-container p-4 border border-gray-300 ${
              activeDiv === index + 1 ? 'block' : 'hidden'
            }`}
          >
            Div {index + 1} Content
          </div>
        ))}
      </div>
    </div>
  );
};

export default DivSwitcher;
