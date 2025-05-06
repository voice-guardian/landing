import React, { useEffect, useRef } from 'react';

// Centralized logo data
const logos = [
  { src: "/images/brands/regalias-dig.png", alt: "Regalias" },
  { src: "/images/brands/encore-rec.png", alt: "Encore Productions" },
  { src: "/images/brands/defend-music.png", alt: "Defend Music" },
  { src: "/images/brands/romantic.png", alt: "Romantic" },
  { src: "/images/brands/platinum.png", alt: "Platinum Grammar" },
  { src: "/images/brands/the-administration.png", alt: "The Administration" },
];

const LogoItem = ({ src, alt }) => (
  <div className="logo-item flex-shrink-0 flex justify-center items-center group">
    <img 
      src={src} 
      alt={alt} 
      className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-200 brightness-0 invert group-hover:brightness-100 group-hover:invert-0" 
    />
  </div>
);

const PartnerLogos = () => {
  const marqueeRef = useRef(null);

  // Pause animation on hover
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = 'paused';
    const handleMouseLeave = () => marquee.style.animationPlayState = 'running';
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate logos for seamless scroll
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full px-4 sm:w-2/5 sm:mx-auto relative overflow-hidden py-6">
      {/* Scrolling logos */}
      <div className="logo-carousel-container">
        <div
          ref={marqueeRef}
          className="flex gap-10 animate-logo-marquee"
          style={{ minWidth: 'max-content' }}
        >
          {allLogos.map((logo, idx) => (
            <LogoItem key={logo.alt + idx} {...logo} />
          ))}
        </div>
      </div>
      {/* Animation styles */}
      <style>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          animation: logo-marquee 20s linear infinite;
          animation-play-state: running;
        }
        .logo-carousel-container:hover .animate-logo-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnerLogos;
