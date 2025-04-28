import React, { useEffect, useRef, useState } from 'react';

const PartnerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
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
  
  useEffect(() => {
    // Only apply animation for mobile devices
    if (deviceType !== 'mobile') return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Simple continuous scroll approach
    let animationId: number;
    let scrollAmount = 0;
    const speed = 0.1;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    const scroll = () => {
      scrollAmount += speed;
      
      // Reset when reaching the end
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      
      // Apply scroll
      scrollContainer.scrollLeft = scrollAmount;
      
      // Request next frame
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start animation
    animationId = requestAnimationFrame(scroll);
    
    // Clean up
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [deviceType]); // Re-run effect if device type changes

  // Mobile carousel view
  if (deviceType === 'mobile') {
    return (
      <div className="w-full overflow-hidden relative mt-10">
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-12 px-4" style={{ minWidth: 'max-content' }}>
            {/* Include each logo twice to ensure smooth infinite scrolling */}
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/regalias-dig.png" 
                alt="Regalias" 
                className="h-14 brightness-0 invert" 
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/encore-rec.png" 
                alt="Encore Productions" 
                className="h-14 brightness-0 invert" 
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/romantic.png" 
                alt="Romantic" 
                className="h-14 brightness-0 invert" 
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/platinum.png" 
                alt="Platinum Grammar" 
                className="h-14 brightness-0 invert" 
              />
            </div>

            {/* Duplicate set for continuous scrolling */}
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/regalias-dig.png" 
                alt="Regalias" 
                className="h-14 brightness-0 invert" 
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/encore-rec.png" 
                alt="Encore Productions" 
                className="h-14 brightness-0 invert" 
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/romantic.png" 
                alt="Romantic" 
                className="h-14 brightness-0 invert" 
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/brands/platinum.png" 
                alt="Platinum Grammar" 
                className="h-14 brightness-0 invert" 
              />
            </div>
          </div>
        </div>
        
       
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
    <div className="w-full mt-10">
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
