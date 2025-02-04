import { useEffect, useState } from "react";

const logos = [
  "Harvard",
  "Stanford",
  "MIT",
  "Google",
  "Facebook",
  "Amazon",
  "Microsoft",
  "Apple",
];

export const LogoCarousel = () => {
  const [position, setPosition] = useState(0);
  const logoWidth = 200; // Width of each logo + spacing
  const totalWidth = logos.length * logoWidth;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -totalWidth) {
          return 0;
        }
        return prev - 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="w-full overflow-hidden fade-edges py-4">
      <div 
        className="flex space-x-12 whitespace-nowrap transition-transform duration-1000"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="inline-block grayscale-logos text-xl font-semibold"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};