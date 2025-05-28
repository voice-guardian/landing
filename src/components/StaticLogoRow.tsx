import React, { useEffect, useRef } from 'react';

const logos = [
  { src: "/images/brands/regalias-dig.webp", alt: "Regalias" },
  { src: "/images/brands/encore-rec.webp", alt: "Encore Productions" },
  { src: "/images/brands/defend-music.webp", alt: "Defend Music" },
  { src: "/images/brands/soundstripe.png", alt: "Soundstripe" },
  { src: "/images/brands/platinum.webp", alt: "Platinum Grammar" },
  { src: "/images/brands/the-administration.webp", alt: "The Administration" },
  { src: "/images/brands/romantic.webp", alt: "Romantic" },
];

const LogoItem = ({ src, alt }) => (
  <div className="logo-item flex-shrink-0 flex justify-center items-center group">
    <img
      src={src}
      alt={alt}
      className="h-16 md:h-16 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-200 brightness-0 invert hover:brightness-100 hover:invert-0"
      style={{ maxWidth: 180 }}
    />
  </div>
);

const StaticLogoRow = () => {
  const marqueeRef = useRef(null);

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
    <>
      {/* Desktop: static row */}
      <div className="w-full justify-center items-center gap-8 py-6 hidden md:flex" style={{ marginBottom: 20 }}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-16 md:h-16 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-200 brightness-0 invert hover:brightness-100 hover:invert-0"
            style={{ maxWidth: 180 }}
          />
        ))}
      </div>
      {/* Tablet/Mobile: animated carousel */}
      <div className="w-full flex md:hidden relative overflow-hidden py-6" style={{ marginBottom: 20 }}>
        <div className="logo-carousel-container w-full">
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
    </>
  );
};

export default StaticLogoRow; 