import React, { useEffect, useState } from "react";
import ColorGradient from "@/components/ColorGradient";
import PartnerLogos from "@/components/PartnerLogos";
import SearchBar from "@/components/search/SearchBar";
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from "@/routes/constants";

const HeroSectionV2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, [location.pathname]);

  // Handle Find Uses button click
  const handleFindUses = (artistId?: string) => {
    if (!searchTerm) return;
    const params = new URLSearchParams();
    params.set("term", searchTerm);
    if (artistId) {
      params.set("artistId", artistId);
    }
    navigate(`${ROUTES.SEARCH_RESULTS}?${params.toString()}`);
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-full mx-auto relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ColorGradient />
      </div> */}
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full gap-6 pt-28 sm:pt-20 flex-1 relative z-10">
        {/* YCombinator Badge */}
        <div 
          className={`relative backdrop-blur-lg bg-black/40 border border-white/10 text-white/80 px-4 py-0.5 rounded-full inline-flex text-xs font-semibold tracking-wide transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Sheen overlay */}
          {/* <div className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none overflow-hidden">
            <div className="absolute left-[-40%] top-0 w-2/3 h-full bg-gradient-to-tr from-white/60 via-white/10 to-transparent opacity-60 animate-sheen" />
          </div> */}
          <div className="flex items-center relative z-10 p-0.5">
            <p style={{ textShadow: "0 1px 4px rgba(255,255,255,0.5)" }}>Backed by&nbsp;</p>
            <img src="/images/yc-logo.webp" alt="YCombinator" className="w-24 h-5" />
          </div>
        </div>
        
        {/* Heading Block */}
        <div
          className={`flex flex-col items-center justify-center gap-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-semibold text-center font-inter leading-[60px] w-full">
            <span>Don't Miss Out on</span>
            <br />
            <span>Music Revenue</span>
          </h1>
          <p className="text-gray-300 text-[22px] font-light pt-2 text-center w-full max-w-[70%] leading-[27px]">
            <span>We find where brands use your music and help you</span>
            <span> turn it into revenue</span>
          </p>
        </div>
        {/* Search Bar Component */}
        <div
          className={`relative w-[90%] mx-16 sm:mx-10 sm:w-3/5 md:w-2/5 pt-2 transition-all duration-700 ease-out z-[10] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onFindUses={handleFindUses}
            isVisible={isVisible}
          />
        </div>
        {/* Partner Logos */}
        <div
          className={`w-full relative z-[1] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "1100ms" }}
        >
          <PartnerLogos />
        </div>
      </div>
      {/* Image Section */}
      <div className="flex items-end justify-center w-full sm:w-3/5 relative flex-1">
        <img
          src="/dashboard.webp"
          alt="Dashboard"
          className={`flex-1 h-auto object-cover transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} mb-0 sm:mb-0 w-[400px] sm:w-[800px] lg:w-[1000px] mx-4`}
          style={{ transitionDelay: '1s' }}
        />
      </div>
      {/* Splash Decoration (if needed) */}
      {/* <div className="home-splash"></div> */}
    </section>
  );
};

export default HeroSectionV2; 