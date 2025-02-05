import React from "react";

const logos = [
  "https://framerusercontent.com/images/u0XRsBZMYVckdmf5aby68rhwR8.png",
  "https://framerusercontent.com/images/iNYZv9u8MhOFxSYxmp0hUE5k.png",
  "https://framerusercontent.com/images/SR28FD5u2y7JVthiocuTbdnSQQ.png",
  "https://framerusercontent.com/images/XtGVKSjM9oCc9UVlYqGm0sS5dE.png"
];

export const LogoCarousel = () => {
  return (
    <div className="w-3/5 mx-auto overflow-hidden relative py-12">
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
                className="h-12 w-[100px] grayscale-logos object-contain"
              />
            </div>
          ))}
          
          {/* Second set of logos */}
          {logos.map((logo, i) => (
            <div key={`second-${i}`} className="mr-4 flex-shrink-0">
              <img 
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-12 w-[150px] grayscale-logos object-contain"
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