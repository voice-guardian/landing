
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/lovable-uploads/8b27d33a-6578-4c3d-90fe-f48b9d68678e.png')",
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
