import React, { useEffect, useState } from 'react';

// Centralized logo data
const logos = [
  { src: "/images/brands/regalias-dig.png", alt: "Regalias" },
  { src: "/images/brands/encore-rec.png", alt: "Encore Productions" },
  { src: "/images/brands/defend-music.png", alt: "Defend Music" },
  { src: "/images/brands/romantic.png", alt: "Romantic" },
  { src: "/images/brands/platinum.png", alt: "Platinum Grammar" },
];

// Reusable logo item component
const LogoItem = ({ src, alt, className = "" }) => (
  <div className="logo-item flex-shrink-0 flex justify-center items-center">
    <img src={src} alt={alt} className={className} />
  </div>
);

const PartnerLogos = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  useEffect(() => {
    // Check screen size and set device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    
    // Initial check
    checkDeviceType();
    
    // Add window resize listener
    window.addEventListener('resize', checkDeviceType);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);
  
  // Mobile carousel view
  if (deviceType === 'mobile') {
    return (
      <div className="w-full overflow-hidden relative mt-10">
        {/* The outer container with hidden overflow */}
        <div className="py-4 relative">
          {/* Inner container that's twice as wide and animates */}
          <div className="inline-flex marquee-container space-x-12">
            {[0, 1].map((repeat) => (
              <div className="flex space-x-12" key={repeat}>
                {logos.map((logo, idx) => (
                  <LogoItem key={logo.alt + repeat} {...logo} className="h-14 brightness-0 invert" />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        
        {/* Add CSS keyframe animation */}
        <style >{`
          .marquee-container {
            animation: marquee 20s linear infinite;
            min-width: max-content;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    );
  }
  
  // Tablet view - use marquee/scrolling style like mobile, but with larger logos
  if (deviceType === 'tablet') {
    return (
      <div className="w-full overflow-hidden relative mt-10">
        <div className="py-4 relative">
          {/* Marquee: two sets for seamless looping */}
          <div className="inline-flex marquee-container space-x-16">
            {[0, 1].map((repeat) => (
              <div className="flex space-x-16" key={repeat}>
                {logos.map((logo, idx) => (
                  <LogoItem key={logo.alt + repeat} {...logo} className="h-20 brightness-0 invert" />
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Marquee animation */}
        <style>{`
          .marquee-container {
            animation: marquee 24s linear infinite;
            min-width: max-content;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    );
  }
  
  // Desktop view - horizontal layout
  return (
    <div className="w-full">
      <div className="flex justify-center items-center space-x-16 py-4">
        {logos.map((logo) => (
          <LogoItem key={logo.alt} {...logo} className="h-20 brightness-0 invert" />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
