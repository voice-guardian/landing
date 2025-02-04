
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
  const totalWidth = logoWidth * logos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        if (newPosition <= -logoWidth) {
          // When first logo is completely out of view, reset position
          return prev + logoWidth;
        }
        return newPosition;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [logoWidth]);

  return (
    <div className="w-full overflow-hidden fade-edges py-12">
      <div 
        className="flex space-x-12 whitespace-nowrap transition-all duration-500"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="inline-block grayscale-logos text-2xl font-semibold"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};
