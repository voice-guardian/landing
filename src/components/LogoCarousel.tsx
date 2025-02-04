import { useEffect, useState } from "react";

const logos = [
  "https://framerusercontent.com/images/u0XRsBZMYVckdmf5aby68rhwR8.png",
  "https://framerusercontent.com/images/iNYZv9u8MhOFxSYxmp0hUE5k.png",
  "https://framerusercontent.com/images/LJDvKn0w8MhOFxSYxmp0hUE5k.png",
  "https://framerusercontent.com/images/SR28FD5u2y7JVthiocuTbdnSQQ.png",
  "https://framerusercontent.com/images/XtGVKSjM9oCc9UVlYqGm0sS5dE.png"
];

export const LogoCarousel = () => {
  const [position, setPosition] = useState(0);
  const logoWidth = 150; // Reduced from 200
  const totalWidth = logoWidth * logos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="w-3/5 mx-auto overflow-hidden relative py-12">
      <div 
        className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-10"
      />
      <div 
        className="flex space-x-8 whitespace-nowrap transition-transform"
        style={{ transform: `translateX(${position}px)` }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <img 
            key={i} 
            src={logo}
            alt={`Partner ${i + 1}`}
            className="inline-block h-12 w-auto grayscale-logos object-contain"
          />
        ))}
      </div>
      <div 
        className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-10"
      />
    </div>
  );
};

export default LogoCarousel;