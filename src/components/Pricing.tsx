import React, { useState, useRef, useEffect } from 'react';

const Pricing: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Create an Intersection Observer to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section enters viewport with at least 15% visibility
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've triggered the animation, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15 // Trigger when at least 15% of the section is visible
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
  
  const plans = [
   
    {
      id: 'managed',
      name: 'Managed',
      description: '',
      price: 'Custom/per month',
      period: '',
      ctaText: 'Contact Us',
      features: [
        'Done-For-You Revenue Recovery',
        'Outcome-Based Business Model',
        'Priority Legal Services',
        'Priority Support'
      ],
      isPopular: true,
      bgColor: 'bg-[#404154]',
      hoverBgImage: "url('/images/background3.png')",
      textColor: 'text-white',
      buttonClass: 'bg-white text-[#404154] hover:bg-gray-100'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Headline with animation */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          
        </div>
        
        {/* Pricing Card centered */}
        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-all duration-700 ease-out transform hover:shadow-xl relative ${plan.bgColor} ${plan.textColor} max-w-lg w-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ 
                transitionDelay: `${400 + index * 200}ms`,
                backgroundImage: hoveredCard === plan.id ? plan.hoverBgImage : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
             
              
              {/* Content */}
              <div className="p-8 md:p-10 relative z-10">
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 opacity-80 transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className={`text-4xl font-bold transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  <span className={`text-lg ml-1 transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}
                    >
                      <svg 
                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-white-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className={`transition-opacity duration-300 ${hoveredCard === plan.id ? 'opacity-100' : ''}`}>
                  <a 
                    href="https://calendly.com/yoavzimmerman/watchdog"
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 inline-block text-center ${
                      hoveredCard === plan.id 
                        ? 'bg-white text-[#404154]' 
                        : plan.buttonClass
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      {plan.ctaText}
                      <svg 
                        className="ml-2 w-4 h-4 transform -rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Pricing; 