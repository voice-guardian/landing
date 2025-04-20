
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/lovable-uploads/3cac15fb-3df7-49c0-851b-165f0a8357b0.png')",
        backgroundColor: "#1A0A23", // Fallback color
      }}
    >
      <div className="container mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;

