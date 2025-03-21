import React from "react";

const logos = [
  "https://ik.imagekit.io/rekruiter/Watchdog/platinum-grammar.png",
  "https://ik.imagekit.io/rekruiter/Watchdog/encore-recordings.png",
  "https://ik.imagekit.io/rekruiter/Watchdog/romantic.png",
  "https://ik.imagekit.io/rekruiter/Watchdog/regalias-digitales.png"
];

export const LogoCarousel = () => {
  return (
    <div className="w-2/5 mx-auto overflow-hidden relative py-12 center">

      <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="logo-container">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <div key={`first-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-16 w-[100px] grayscale-logos object-contain"
              />
            </div>
          ))}
          
          {/* Second set of logos */}
          {logos.map((logo, i) => (
            <div key={`second-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-16 w-[150px] grayscale-logos object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default LogoCarousel;