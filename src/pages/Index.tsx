
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/lovable-uploads/a49f75c0-f944-4807-979a-5ad548c46c82.png')",
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
