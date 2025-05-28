import React from 'react';

const logos = [
  { src: "/images/brands/regalias-dig.webp", alt: "Regalias" },
  { src: "/images/brands/encore-rec.webp", alt: "Encore Productions" },
  { src: "/images/brands/defend-music.webp", alt: "Defend Music" },
  { src: "/images/brands/soundstripe.png", alt: "Soundstripe" },
  { src: "/images/brands/platinum.webp", alt: "Platinum Grammar" },
  { src: "/images/brands/the-administration.webp", alt: "The Administration" },
  { src: "/images/brands/romantic.webp", alt: "Romantic" },
];

const StaticLogoRow = () => (
  <div className="w-full flex justify-center items-center gap-8 py-6" style={{ marginBottom: 20 }}>
    {logos.map((logo) => (
      <img
        key={logo.alt}
        src={logo.src}
        alt={logo.alt}
        className="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-200 brightness-0 invert hover:brightness-100 hover:invert-0"
        style={{ maxWidth: 160 }}
      />
    ))}
  </div>
);

export default StaticLogoRow; 