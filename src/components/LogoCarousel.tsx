import React, { useState, useEffect } from "react";

const logos = [
  "https://ik.imagekit.io/rekruiter/Watchdog/platinum-grammar.png",
  "https://ik.imagekit.io/rekruiter/Watchdog/encore-recordings.png",
  "https://ik.imagekit.io/rekruiter/Watchdog/romantic.png",
  "https://ik.imagekit.io/rekruiter/Watchdog/regalias-digitales.png"
];

export const LogoCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < 768);

    // Add event listener for window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopCarousel = () => (
    // <div className="w-3/5 mx-auto overflow-hidden relative py-12">
    //   <style>
    //     {`
    //       @keyframes scroll {
    //         0% { transform: translateX(0); }
    //         100% { transform: translateX(calc(-150px * ${logos.length} - ${logos.length}rem)); }
    //       }
    //       .animate-scroll {
    //         animation: scroll 20s linear infinite;
    //       }
    //       .logo-container:hover .animate-scroll {
    //         animation-play-state: paused;
    //       }
    //     `}
    //   </style>
    <div className="w-1/2 mx-auto overflow-hidden relative py-6 center">

      <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="logo-container">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <div key={`first-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-24 w-[130px] grayscale-logos object-contain"
              />
            </div>
          ))}
          
          {/* Second set of logos */}
          {logos.map((logo, i) => (
            <div key={`second-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-24 w-[130px] grayscale-logos object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );

  const MobileCarousel = () => (
    <div className="w-full mx-auto overflow-hidden relative py-6">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-150px * ${logos.length} - ${logos.length}rem)); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .logo-container:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="logo-container">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <div key={`first-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-24 w-[110px] grayscale-logos object-contain"
              />
            </div>
          ))}
          
          {/* Second set of logos */}
          {logos.map((logo, i) => (
            <div key={`second-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-24 w-[110px] grayscale-logos object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );

  return isMobile ? <MobileCarousel /> : <DesktopCarousel />;
};

export default LogoCarousel;