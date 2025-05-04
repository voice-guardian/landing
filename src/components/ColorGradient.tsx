import React from 'react';

const ColorGradient: React.FC = () => {
  return (
    <div className="color-gradient w-full h-full absolute inset-0">
      <div className="green-gradient"></div>
      <div className="purple-gradient"></div>
      <div className="yellow-gradient"></div>
      <div className="overlay-dark"></div>
      <div className="overlay-light"></div>
    </div>
  );
};

export default ColorGradient;