import React from 'react';

// UI Components
import FeatureCard from '@/components/ui/FeatureCard.tsx';
import SectionHeading from '@/components/ui/SectionHeading.tsx';
import BrandLogo from '@/components/ui/BrandLogo.tsx';

const Features = () => {
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
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <SectionHeading label="PRODUCTS" title="Features" />
        
        {/* Monitor & Identify Features (side by side on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard 
            key={0}
            title={features[0].title}
            description={features[0].description}
            image={features[0].image}
            variant="light"
            index={0}
          />
          <FeatureCard 
            key={1}
            title={features[1].title}
            description={features[1].description}
            image={features[1].image}
            variant="dark"
            index={1}
          />
        </div>
        
        {/* Collect Feature (full width) */}
        <div className="w-full bg-gray-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl mb-4">Collect</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Automate notices to brands with a single click, or hand it off to our team to collect on your behalf.
            </p>
          </div>
          
          {/* Brands grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <BrandLogo 
                key={index} 
                name={brand.name} 
                logo={brand.logo} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
