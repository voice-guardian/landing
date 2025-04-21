import React, { useState, useRef, useEffect } from 'react';
import '../styles/testimonials.css';

interface Testimonial {
  id: number;
  quote: string;
  companyLogo: string;
  backgroundImage: string;
  personName: string;
  personTitle: string;
  personCompany: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Watchdog helped us recover over $250,000 in royalties from unauthorized brand uses we didn't even know about.",
      companyLogo: "/images/encore.png",
      backgroundImage: "/images/testimonials/testimonial1.webp",
      personName: "Sarah Johnson",
      personTitle: "Director of Rights Management",
      personCompany: "SoundWave Records"
    },
    {
      id: 2,
      quote: "Finally a solution that makes the collection process painless. Their team handles everything and we just watch the revenue come in.",
      companyLogo: "/images/romantic.png",
      backgroundImage: "/images/testimonials/testimonial2.webp",
      personName: "Alex Rivera",
      personTitle: "CEO",
      personCompany: "Indie Label Collective"
    },
    {
      id: 3,
      quote: "We were leaving money on the table for years. Watchdog found over 300 unauthorized uses in the first month alone.",
      companyLogo: "/images/regalias.png",
      backgroundImage: "/images/testimonials/testimonial3.png",
      personName: "Emma Lewis",
      personTitle: "Publishing Administrator",
      personCompany: "Global Music Publishing"
    },
  ];
  
  // Calculate visible testimonials (3 at a time)
  const visibleTestimonials = () => {
    const total = testimonials.length;
    const visible = [];
    
    for (let i = 0; i < 3; i++) {
      // Calculate index with wrapping
      const index = (activeIndex + i) % total;
      visible.push(testimonials[index]);
    }
    
    return visible;
  };
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="w-full py-20 bg-[#111] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Headline with animation */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">
            HEAR FROM OUR CUSTOMERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-8">
            Join leading businesses using Watchdog <br />
            <span className="font-normal">
              <span className="font-mono glitch-text">
                to get paid
              </span> for brand uses
            </span>
          </h2>
        </div>
        
        {/* Testimonial Cards with animation */}
        <div 
          className={`relative transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex space-x-6 transition-all duration-500 ease-in-out">
            {visibleTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`flex-1 relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] group ${
                  isVisible ? "" : "opacity-0"
                }`}
                style={{ 
                  transitionDelay: `${600 + index * 200}ms`,
                  transition: "all 0.7s ease-out"
                }}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ 
                    backgroundImage: `url(${testimonial.backgroundImage})`,
                    filter: 'blur(2px) brightness(0.3)' 
                  }}
                />
                
                {/* Content Container */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  {/* Company Logo */}
                  <div className="mb-4 h-10">
                    <img 
                      src={testimonial.companyLogo} 
                      alt={testimonial.personCompany}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  
                  {/* Quote */}
                  <div className="flex-grow flex items-center mb-6">
                    <p className="text-white text-lg md:text-xl italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Person Info */}
                  <div className="mt-auto">
                    <p className="text-white font-medium">{testimonial.personName}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.personTitle} • {testimonial.personCompany}
                    </p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls with animation */}
          <div 
            className={`flex justify-center items-center mt-8 space-x-4 transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <button 
              onClick={prevSlide}
              className="bg-transparent border border-gray-700 rounded-full p-3 text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-transparent border border-gray-700 rounded-full p-3 text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
