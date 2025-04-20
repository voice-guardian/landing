import { Button } from "@/components/ui/button";
import PartnerLogos from "./PartnerLogos";

const HeroSection = () => {
  return (
    <div className="relative w-full pt-10 pb-20 flex flex-col items-center">
      <div className="px-8 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* YCombinator Badge */}
        <div className="bg-black/30 text-white py-1.5 px-7 rounded-full mb-10 inline-flex text-sm bg-black">
          <div className="flex items-center">
            <p>Backed by </p>
            <img src="/images/ycombinator.png" alt="YCombinator" className="w-25 h-10" />
          </div>
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
          <input
            type="text"
            className="w-full h-14 rounded-full bg-gray-800/50 border-none text-white px-8 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search how much you're missing out on here..."
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
    </div>
  );
};

export default HeroSection;
