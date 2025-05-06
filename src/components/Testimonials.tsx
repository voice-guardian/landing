import React, { useRef, useEffect, useState } from 'react';
import '../styles/testimonials.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/constants';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  quote: string;
  companyLogo?: string | null;
  backgroundImage: string;
  companyName: string;
  isCaseStudy?: boolean;
  hasBlogPost?: boolean;
}

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  
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
  
  // Navigate to the blog post
  const navigateToBlog = () => {
    navigate(ROUTES.AMBER_BLOG);
  };
  
  // Sample testimonial data - marking the second one as a case study
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Before Watchdog, I felt powerless to collect the money I was owed from big corporations. Watchdog helped me secure a fair outcome, and I couldn't be more excited to partner with them on future projects.",
      backgroundImage: "/images/ugc.jpeg",
      companyName: "Amber Lowe (UGC Creator)",
      isCaseStudy: false,
      hasBlogPost: true
    },
    {
      id: 2,
      quote: "Watchdog has helped to increase my revenue by four times within 6 months! They have been a breeze to work with, carefully and respectfully taking care of all the nitty-gritty so I can continue to focus completely on my music and career. I will forever be grateful for this life-changing opportunity to partner with Watchdog!",
      companyLogo: "/images/testimonials/fatcoda.png",
      backgroundImage: "/images/drums.webp",
      companyName: "Fat Coda Studios",
      isCaseStudy: true
    },
    {
      id: 3,
      quote: "Watchdog is filling an incredible gap in the industry for protecting and monetizing our client's composition copyrights, finding examples of unlicensed uses we have never seen before.",
      companyLogo: "/images/testimonials/platinum-grammar.png",
      backgroundImage: "/images/record.jpg",
      companyName: "Platinum Grammar Publishing",
      isCaseStudy: false
    },
  ];

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentMobileIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentMobileIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get current testimonial for mobile view
  const currentMobileTestimonial = testimonials[currentMobileIndex];

  return (
    <section ref={sectionRef} className="w-full py-20 bg-[#111] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Headline with animation */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-8 font-inter">
            Join leading businesses using Watchdog <br className="hidden sm:block" />
            <span className="font-normal font-inter">
              <span className="font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">to get paid</span> for brand uses
            </span>
          </h2>
        </div>
        
        {/* Mobile Testimonial (Single Card with Navigation) - Only visible on mobile */}
        <div 
          className={`md:hidden transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div 
            className={`relative rounded-xl overflow-hidden transition-all duration-300 transform
              ${currentMobileTestimonial.isCaseStudy ? 'ring-2 ring-purple-500 ring-offset-4 ring-offset-[#111]' : ''}`}
            style={{ 
              transitionDelay: "600ms",
              transition: "all 0.7s ease-out",
              minHeight: "350px" // Ensure consistent height
            }}
          >
            {/* Case Study Badge - Show only if it's a case study */}
            {currentMobileTestimonial.isCaseStudy && (
              <div className="absolute top-4 right-4 z-20 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                CASE STUDY
              </div>
            )}
            
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ 
                backgroundImage: `url(${currentMobileTestimonial.backgroundImage})`,
                filter: 'blur(2px) brightness(0.3)' 
              }}
            />
            
            {/* Content Container */}
            <div className="relative z-10 p-6 h-full flex flex-col">
              {/* Company Logo */}
              <div className="mb-4 h-10">
                {currentMobileTestimonial.companyLogo && (
                  <img 
                    src={currentMobileTestimonial.companyLogo} 
                    className="h-full w-auto object-contain"
                    alt={currentMobileTestimonial.companyName}
                  />
                )}
              </div>
              
              {/* Quote */}
              <div className="flex-grow flex items-center mb-6">
                <p className="text-white text-lg italic font-inter">
                  "{currentMobileTestimonial.quote}"
                </p>
              </div>
              
              {/* Person Info */}
              <div className="mt-auto">
                <p className="text-white font-medium font-inter">{currentMobileTestimonial.companyName}</p>
                
                {/* Blog Button - Show only if testimonial has a blog post */}
                {currentMobileTestimonial.hasBlogPost && (
                  <Button 
                    onClick={navigateToBlog}
                    className="mt-3 bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3"
                  >
                    View Blog
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            {/* Left/Right Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 border border-gray-700"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 border border-gray-700"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Testimonials (Multiple Cards) - Hidden on mobile */}
        <div 
          className={`hidden md:block relative transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex space-x-6 transition-all duration-500 ease-in-out">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`flex-1 relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] group ${
                  isVisible ? "" : "opacity-0"
                } ${testimonial.isCaseStudy ? 'ring-2 ring-purple-500 ring-offset-4 ring-offset-[#111] shadow-lg shadow-purple-900/20' : ''}`}
                style={{ 
                  transitionDelay: `${600 + index * 200}ms`,
                  transition: "all 0.7s ease-out"
                }}
              >
                {/* Case Study Badge - Show only for the special case study card */}
                {testimonial.isCaseStudy && (
                  <div className="absolute top-4 right-4 z-20 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    CASE STUDY
                  </div>
                )}
                
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ 
                    backgroundImage: `url(${testimonial.backgroundImage})`,
                    filter: 'blur(2px) brightness(0.4)' 
                  }}
                />
                
                {/* Content Container */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  {/* Company Logo */}
                  <div className="mb-4 h-16">
                    {testimonial.companyLogo && (
                      <img 
                        src={testimonial.companyLogo} 
                        className="h-full w-auto object-contain"
                        alt={testimonial.companyName}
                      />
                    )}
                  </div>
                  
                  {/* Quote */}
                  <div className="flex-grow flex items-center mb-6">
                    <p className="text-white text-lg md:text-m font-inter">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Person Info */}
                  <div className="mt-auto">
                    <p className="text-white font-medium font-inter">{testimonial.companyName}</p>
                    
                    {/* Blog Button - Show only if testimonial has a blog post */}
                    {testimonial.hasBlogPost && (
                      <Button 
                        onClick={navigateToBlog}
                        className="mt-3 bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3"
                      >
                        View Blog
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
