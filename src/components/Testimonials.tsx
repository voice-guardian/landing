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
  caseStudyTitle?: string;
  blogRoute?: string;
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
  
  // Navigate to the appropriate blog post
  const navigateToCaseStudy = (route: string) => {
    navigate(route);
  };
  
  // Sample testimonial data - marking the second one as a case study
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Before Watchdog, I felt powerless to collect the money I was owed from big corporations. Watchdog helped me secure a fair outcome, and I couldn't be more excited to partner with them on future projects.",
      backgroundImage: "/images/ugc.jpg",
      companyName: "Amber Lowe (UGC Creator)",
      isCaseStudy: true,
      hasBlogPost: true,
      caseStudyTitle: "How Amber Lowe Recovered Payments from Brands",
      blogRoute: ROUTES.AMBER_BLOG
    },
    {
      id: 2,
      quote: "Watchdog is filling an incredible gap in the industry for protecting and monetizing our client's composition copyrights, helping us monetize opportunities we didn't know even existed.",
      companyLogo: "/images/brands/the-administration.webp",
      backgroundImage: "/images/party.jpg",
      companyName: "The Administration MP",
      isCaseStudy: true,
      hasBlogPost: true,
      blogRoute: ROUTES.ADMINISTRATION_BLOG // You'll need to add this route in your constants
    },
    {
      id: 3,
      quote: "Watchdog has helped to increase my revenue by four times within 6 months! They have been a breeze to work with, carefully and respectfully taking care of all the nitty-gritty so I can continue to focus completely on my music and career. I will forever be grateful for this life-changing opportunity to partner with Watchdog!",
      companyLogo: "/images/testimonials/fatcoda.png",
      backgroundImage: "/images/record.jpg",
      companyName: "Fat Coda Studios",
      isCaseStudy: false
    },
    {
      id: 4,
      quote: "This is definitely the best product I’ve seen in this category. Every other vendor just sends us CSV data files that from outsourced data labelers.",
      // companyLogo: "/images/testimonials/platinum-grammar.png",
      backgroundImage: "/images/drums.webp",
      companyName: "Business & Legal Affairs, Top 3 Music Company",
      isCaseStudy: false
    }
  ];

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentMobileIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoScroll();
  };

  const goToNext = () => {
    setCurrentMobileIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoScroll();
  };

  // Auto-scroll logic for mobile testimonials
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const resetAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentMobileIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 3000);
  };
  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // Get current testimonial for mobile view
  const currentMobileTestimonial = testimonials[currentMobileIndex];

  return (
    <section ref={sectionRef} className="w-full py-20 bg-[#111] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Headline with animation */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out transform ${
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
                filter: 'blur(2px) brightness(0.4)' 
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
                
                {/* Case Study Title - Show only if it has one */}
                {currentMobileTestimonial.caseStudyTitle && (
                  <p className="text-gray-300 text-sm mt-1">{currentMobileTestimonial.caseStudyTitle}</p>
                )}
                
                {/* Blog Button - Show only if testimonial has a blog post */}
                {currentMobileTestimonial.hasBlogPost && currentMobileTestimonial.blogRoute && (
                  <Button 
                    onClick={() => navigateToCaseStudy(currentMobileTestimonial.blogRoute!)}
                    className="mt-3 bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3"
                  >
                    View Case Study
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center mt-6 space-y-3">
            {/* Pagination Indicators */}
            <div className="flex space-x-2 mb-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentMobileIndex(index); resetAutoScroll(); }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentMobileIndex === index ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
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
        
        {/* Desktop Testimonials (2x2 Grid) - Hidden on mobile */}
        <div 
          className={`hidden md:block relative transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] group ${
                  isVisible ? "" : "opacity-0"
                } ${testimonial.isCaseStudy ? 'ring-2 ring-purple-500 ring-offset-4 ring-offset-[#111] shadow-lg shadow-purple-900/20' : ''}`}
                style={{ 
                  transitionDelay: `${600 + index * 200}ms`,
                  transition: "all 0.7s ease-out",
                  minHeight: "280px" // Ensure consistent height for grid items
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
                <div className="relative z-10 p-6 md:p-6 h-full flex flex-col">
                  {/* Company Logo */}
                  <div className="mb-4 h-12">
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
                    <p className="text-white text-base md:text-sm lg:text-base font-inter">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Person Info */}
                  <div className="mt-auto">
                    <p className="text-white font-medium font-inter">{testimonial.companyName}</p>
                    
                    {/* Case Study Title - Show only if it has one */}
                    {testimonial.caseStudyTitle && (
                      <p className="text-gray-300 text-sm mt-1">{testimonial.caseStudyTitle}</p>
                    )}
                    
                    {/* Blog Button - Show only if testimonial has a blog post */}
                    {testimonial.hasBlogPost && testimonial.blogRoute && (
                      <Button 
                        onClick={() => navigateToCaseStudy(testimonial.blogRoute!)}
                        className="mt-3 bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3"
                      >
                        View Case Study
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
