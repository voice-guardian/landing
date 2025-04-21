import React, { useState, useEffect, useRef } from 'react';

// UI Components
import FeatureCard from '@/components/ui/FeatureCard.tsx';
import SectionHeading from '@/components/ui/SectionHeading.tsx';
import BrandLogo from '@/components/ui/BrandLogo.tsx';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Create an Intersection Observer to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section enters viewport with at least 10% visibility
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've triggered the animation, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1 // Trigger when at least 10% of the section is visible
      }
    );
    
    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Clean up the observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Feature content
  const features = [
    {
      title: "Monitor",
      description: "Track where your music is being used across digital platforms. Our automated system scans millions of videos and content to find unauthorized commercial usages.",
      image: "/images/brands/brand1.webp",
      variant: "light" // white background
    },
    {
      title: "Identify",
      description: "Our AI-powered system accurately identifies your compositions and recordings, providing detailed reports on commercial usages across campaigns.",
      image: "/images/brands/brand2.webp",
      variant: "dark" // dark background
    }
  ];

  // Brand logos for the "Collect" section
  const brands = [
    { name: "Sage", logo: "/images/brands/brand1.webp" },
    { name: "Odoo", logo: "/images/brands/brand2.webp" },
    { name: "Intuit QuickBooks", logo: "/images/brands/brand3.webp" },
    { name: "Xero", logo: "/images/brands/brand4.webp" },
    { name: "NetSuite", logo: "/images/brands/brand5.webp" },
    { name: "Tally", logo: "/images/brands/brand6.webp" }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading with animation */}
        <div 
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <SectionHeading label="PRODUCTS" title="Features" />
        </div>
        
        {/* Monitor & Identify Features (side by side on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Animate each feature card with increasing delay */}
          <div 
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <FeatureCard 
              key={0}
              title={features[0].title}
              description={features[0].description}
              image={features[0].image}
              variant="light"
              index={0}
            />
          </div>
          
          <div 
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <FeatureCard 
              key={1}
              title={features[1].title}
              description={features[1].description}
              image={features[1].image}
              variant="dark"
              index={1}
            />
          </div>
        </div>
        
        {/* Collect Feature (full width) */}
        <div 
          className={`w-full bg-gray-100 rounded-2xl p-8 md:p-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl mb-4">Collect</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Automate notices to brands with a single click, or hand it off to our team to collect on your behalf.
            </p>
          </div>
          
          {/* Brands grid with staggered animations for each logo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ease-out transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <BrandLogo 
                  name={brand.name} 
                  logo={brand.logo} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
