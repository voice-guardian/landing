
import { Button } from "@/components/ui/button";
import PartnerLogos from "./PartnerLogos";

const HeroSection = () => {
  return (
    <div className="relative w-full pt-10 pb-20 px-8 flex flex-col items-center">
      {/* YCombinator Badge */}
      <div className="bg-black/30 text-white py-1.5 px-7 rounded-full mb-10 inline-flex text-sm">
        Backed by YCombinator 🔥
      </div>
      
      {/* Main Headline */}
      <h1 className="text-6xl font-bold text-white text-center mb-6 tracking-wide leading-tight max-w-4xl">
        Don't miss out on <span className="font-mono">music</span> revenue
      </h1>
      
      {/* Subheading */}
      <p className="text-white text-xl mb-10 text-center">
        We find where brands use your music and help you turn it into revenue.
      </p>
      
      {/* Search Bar */}
      <div className="relative w-full max-w-2xl">
        <div className="absolute right-28 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex">
            <div className="w-9 h-9 rounded-full bg-orange-400 border-2 border-white -mr-3 overflow-hidden">
              <img src="/lovable-uploads/0fb78a38-1002-4d44-a1cb-09ff98e73f3d.png" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full bg-green-500 border-2 border-white overflow-hidden">
              <img src="/lovable-uploads/0fb78a38-1002-4d44-a1cb-09ff98e73f3d.png" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <input
          type="text"
          className="w-full h-14 rounded-full bg-gray-800/50 border-none text-white px-8 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder=""
        />
        <Button 
          variant="outline"
          className="absolute right-0 top-0 h-14 rounded-r-full rounded-l-none px-8 bg-white text-black hover:bg-gray-100 border-none font-medium"
        >
          Find Uses
        </Button>
      </div>
      
      {/* Partner Logos */}
      <PartnerLogos />
    </div>
  );
};

export default HeroSection;
