import { Button } from "@/components/ui/button";
import PartnerLogos from "./PartnerLogos";
import { useEffect, useState } from "react";
import SearchBar from "./search/SearchBar";
import FindingUsesScreen from "./finding-uses/FindingUsesScreen";
import '../styles/testimonials.css'; // Import the CSS that contains the glitch effect

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFindingUsesScreen, setShowFindingUsesScreen] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mount
    setIsVisible(true);
  }, []);

  // Handle Find Uses button click
  const handleFindUses = () => {
    if (!searchTerm) return;
    setShowFindingUsesScreen(true);
  };

  // If showing the finding uses screen, render that instead of the main content
  if (showFindingUsesScreen) {
    return (
      <FindingUsesScreen 
        searchTerm={searchTerm} 
        onClose={() => {
          setShowFindingUsesScreen(false);
          setSearchTerm(""); // Reset search term when done
        }}
      />
    );
  }

  return (
    <div className="relative w-full pt-44 md:pt-48 pb-24 flex flex-col items-center">
      <div className="px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* YCombinator Badge */}
        <div 
          className={`bg-black text-white  px-6 rounded-full mb-8 inline-flex text-xs bg-black transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-center">
            <p>Backed by </p>
            <img src="/images/ycombinator.png" alt="YCombinator" className="w-24 h-8" />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 tracking-wide leading-tight max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Don't miss out on <span className="font-mono glitch-text" data-text="music">music</span> revenue
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
        
        {/* Search Bar Component - With increased z-index */}
        <div 
          className={`relative w-full max-w-2xl transition-all duration-700 ease-out z-[10] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <SearchBar 
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onFindUses={handleFindUses}
            isVisible={isVisible}
          />
        </div>
        
        {/* Partner Logos - With lower z-index */}
        <div 
          className={`w-full relative z-[1] transition-all duration-700 ease-out ${
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
