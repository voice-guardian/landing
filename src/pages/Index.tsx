import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSlider from "@/components/ProductSlider";
import TypewriterStatement from "@/components/TypewriterStatement";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Background container for Navbar, HeroSection, and ProductSlider */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat w-full"
        style={{ 
          backgroundImage: "url('/images/background.png')",
          backgroundColor: "#1A0A23", // Fallback color
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        <div className="container mx-auto">
          <Navbar />
        </div>
        <HeroSection />
        
        {/* Full-width components with no gap between them */}
        <ProductSlider />
      </div>
      <TypewriterStatement />
      
      {/* Features section */}
      <Features />
      
      {/* Testimonials section */}
      <Testimonials />
      
      {/* Pricing section */}
      <Pricing />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
