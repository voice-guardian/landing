import React from 'react';

interface BrandLogoProps {
  name: string;
  logo: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ name, logo }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-10 w-full">
        {/* Placeholder for the actual logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="max-h-full max-w-full object-contain grayscale opacity-75 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandLogo; 