import React, { useEffect, useRef, useState } from 'react';

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
            {/* First set of logos */}
            <div className="flex space-x-12">
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/regalias-dig.png" 
                  alt="Regalias" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
              
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/encore-rec.png" 
                  alt="Encore Productions" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
              
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/romantic.png" 
                  alt="Romantic" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
              
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/platinum.png" 
                  alt="Platinum Grammar" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
            </div>
            
            {/* Second identical set of logos for seamless looping */}
            <div className="flex space-x-12">
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/regalias-dig.png" 
                  alt="Regalias" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
              
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/encore-rec.png" 
                  alt="Encore Productions" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
              
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/romantic.png" 
                  alt="Romantic" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
              
              <div className="logo-item flex-shrink-0">
                <img 
                  src="/images/brands/platinum.png" 
                  alt="Platinum Grammar" 
                  className="h-14 brightness-0 invert" 
                />
              </div>
            </div>
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
  
  // Tablet view - 2x2 grid layout
  if (deviceType === 'tablet') {
    return (
      <div className="w-full mt-10 py-4">
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex justify-center items-center">
            <img 
              src="/images/brands/regalias-dig.png" 
              alt="Regalias" 
              className="h-16 brightness-0 invert" 
            />
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src="/images/brands/encore-rec.png" 
              alt="Encore Productions" 
              className="h-16 brightness-0 invert" 
            />
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src="/images/brands/romantic.png" 
              alt="Romantic" 
              className="h-16 brightness-0 invert" 
            />
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src="/images/brands/platinum.png" 
              alt="Platinum Grammar" 
              className="h-16 brightness-0 invert" 
            />
          </div>
        </div>
      </div>
    );
  }
  
  // Desktop view - horizontal layout
  return (
    <div className="w-full">
      <div className="flex justify-center items-center space-x-16 py-4">
        <div className="text-white">
          <img 
            src="/images/brands/regalias-dig.png" 
            alt="Regalias" 
            className="h-20 brightness-0 invert" 
          />
        </div>
        
        <div className="text-white">
          <img 
            src="/images/brands/encore-rec.png" 
            alt="Encore Productions" 
            className="h-20 brightness-0 invert" 
          />
        </div>
        
        <div className="text-white">
          <img 
            src="/images/brands/romantic.png" 
            alt="Romantic" 
            className="h-20 brightness-0 invert" 
          />
        </div>
        
        <div className="text-white">
          <img 
            src="/images/brands/platinum.png" 
            alt="Platinum Grammar" 
            className="h-20 brightness-0 invert" 
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
