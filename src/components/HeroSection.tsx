import { Button } from "@/components/ui/button";
import PartnerLogos from "./PartnerLogos";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full pt-28 md:pt-32 pb-20 flex flex-col items-center">
      <div className="px-8 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* YCombinator Badge */}
        <div 
          className={`bg-black text-white py-1.5 px-7 rounded-full mb-10 inline-flex text-sm bg-black transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-center">
            <p>Backed by </p>
            <img src="/images/ycombinator.png" alt="YCombinator" className="w-25 h-10" />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 tracking-wide leading-tight max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Don't miss out on <span className="font-mono relative inline-block">
            music
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-1000 ease-in-out ${
              isVisible ? "w-full" : "w-0"
            }`}></span>
          </span> revenue
        </h1>
        
        {/* Subheading with animation */}
        <p 
          className={`text-white text-xl mb-10 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          We find where brands use your music and help you turn it into revenue.
        </p>
        
        {/* Search Bar with animation */}
        <div 
          className={`relative w-full max-w-2xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <input
            type="text"
            className="w-full h-14 rounded-full bg-gray-800/50 border-none text-white px-8 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm md:placeholder:text-base placeholder:text-gray-400"
            placeholder="Search how much you're missing out on..."
          />
          <Button 
            variant="outline"
            className={`absolute right-0 top-0 h-14 rounded-r-full rounded-l-none px-4 md:px-8 bg-white text-black hover:bg-gray-100 border-none font-medium text-sm md:text-base transition-all duration-500 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <span className="hidden sm:inline">Find Uses</span>
            <span className="sm:hidden">Find</span>
          </Button>
        </div>
        
        {/* Partner Logos */}
        <div 
          className={`w-full transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <PartnerLogos />
        </div>
      </div>
      
      {/* Adding a subtle background animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className={`w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent transition-opacity duration-1500 ${
          isVisible ? "opacity-30" : "opacity-0"
        }`}></div>
      </div>
    </div>
  );
};

export default HeroSection;
