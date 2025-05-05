import HeroSectionV2 from "@/components/HeroSectionV2";
import ProductSlider from "@/components/ProductSlider";
import TypewriterStatement from "@/components/TypewriterStatement";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import MainLayout from "@/components/layouts/MainLayout";
import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ColorGradient from "@/components/ColorGradient";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Background container with explicit height for hero section only */}
      <div 
        className="relative w-full"
        style={{ 
          backgroundColor: "#1A0A23", // Fallback color
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        {/* Background image */}
        <img 
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/background8.png"
          alt=""
        />
        
        {/* Content container - Navbar is now part of MainLayout */}
        <HeroSection />
      </div>

      {/* Rest of the page content with clean separation */}
      <div className="bg-black">
        <TypewriterStatement />
        
        {/* Features section */}
        <Features />
        
        {/* Testimonials section */}
        <Testimonials />
        
        {/* Pricing section */}
        <Pricing />
        
        {/* Footer is now part of MainLayout */}
      </div>
    </div>
  );
};

const IndexPage = () => (
  <MainLayout>
    <Index />
  </MainLayout>
);

export default IndexPage;
