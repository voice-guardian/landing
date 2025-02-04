
import { useEffect, useState } from "react";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];

export const LogoCarousel = () => {
  const [position, setPosition] = useState(0);
  const logoWidth = 200; // Width of each logo + spacing

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when the first logo is completely out of view
        if (newPosition <= -logoWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden fade-edges py-12">
      <div 
        className="flex space-x-12 whitespace-nowrap transition-transform"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img 
            key={i} 
            src={logo}
            alt={`Partner ${i + 1}`}
            className="inline-block h-12 w-auto grayscale-logos object-contain"
          />
        ))}
      </div>
    </div>
  );
};
