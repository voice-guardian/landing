import React, { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  variant: 'light' | 'dark';
  index?: number; // To determine which hover background to use
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  variant = 'light',
  index = 0
}) => {
  // Dynamic styles based on the variant
  const cardStyles = variant === 'light' 
    ? 'bg-[#f1f1ff] shadow-lg' 
    : 'bg-[#31374D] text-white';
  
  // Chip styles for the title
  const chipStyles = variant === 'light'
    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
    : 'bg-yellow-200 text-gray-900';
  
  // Description styles - even larger and bolder
  const descriptionStyles = variant === 'light'
    ? 'text-gray-700 text-2xl font-bold' 
    : 'text-gray-200 text-2xl font-bold';

  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col h-full ${cardStyles}`}
    >      
      {/* Content section with fixed height and scrollable if needed */}
      <div className="p-6 md:p-8 relative z-10 flex-none" style={{ height: '40%' }}>
        {/* Title as a chip */}
        <div className={`inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold shadow transition-colors duration-300 ${chipStyles}`}>
          {title}
        </div>
        {/* Subtitle (description) even larger and bolder, less margin below */}
        <p className={`${descriptionStyles} mb-0 pb-1 transition-colors duration-300`}>
          {description}
        </p>
      </div>
      
      {/* Image container with fixed height ratio */}
      <div className="px-6 md:px-8 flex-grow mt-auto pb-0" style={{ height: '60%' }}>
        <div className="h-full overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={`${title} dashboard screenshot`}
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard; 