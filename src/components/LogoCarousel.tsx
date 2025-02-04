
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -logoWidth) {
          // Reset position when first logo moves out
          return 0;
        }
        return prev - 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [logoWidth]);

  return (
    <div className="w-full overflow-hidden fade-edges py-8">
      <div 
        className="flex space-x-12 whitespace-nowrap transition-transform duration-1000"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...logos, logos[0]].map((logo, i) => (
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
