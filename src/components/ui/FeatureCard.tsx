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
  const [isHovered, setIsHovered] = useState(false);
  
  // Dynamic styles based on the variant
  const cardStyles = variant === 'light' 
    ? 'bg-[#f1f1ff] shadow-lg' 
    : 'bg-[#404154] text-white';
  
  // Text styles - change to white when hovered, otherwise use variant-specific color
  const titleStyles = isHovered 
    ? 'text-white' 
    : '';
    
  const descriptionStyles = isHovered
    ? 'text-white'
    : variant === 'light' ? 'text-gray-700' : 'text-gray-200';
    
  // Determine which background image to use on hover
  const hoverBgImage = index === 0 
    ? "url('/images/background2.png')" 
    : "url('/images/background3.png')";

  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col h-full ${cardStyles}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: isHovered ? hoverBgImage : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >      
      {/* Content section with fixed height and scrollable if needed */}
      <div className="p-6 md:p-8 relative z-10 flex-none" style={{ height: '40%' }}>
        <h3 className={`text-2xl md:text-3xl mb-4 transition-colors duration-300 ${titleStyles}`}>
          {title}
        </h3>
        <p className={`${descriptionStyles} mb-6 transition-colors duration-300 `}>
          {description}
        </p>
        
        {/* Get Started Button with Diagonal Arrow - appears only on hover */}
        <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="https://calendly.com/yoavzimmerman/watchdog" 
            className="group text-white flex items-center font-medium transition-all duration-300"
          >
            Get Started
            <svg 
              className="ml-2 w-4 h-4 transform -rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
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