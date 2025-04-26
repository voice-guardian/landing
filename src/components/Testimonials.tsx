import React, { useRef, useEffect, useState } from 'react';
import '../styles/testimonials.css';

interface Testimonial {
  id: number;
  quote: string;
  companyLogo: string;
  backgroundImage: string;
  personName: string;
  personTitle: string;
  personCompany: string;
  isCaseStudy?: boolean;
}

const Testimonials: React.FC = () => {
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
  
  // Sample testimonial data - marking the second one as a case study
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Before Watchdog, I felt powerless to collect the money I was owed from big corporations. Watchdog helped me secure a fair outcome, and I couldn't be more excited to partner with them on future projects.",
      companyLogo: "/images/encore.png",
      backgroundImage: "/images/testimonials/testimonial1.webp",
      personName: "Sarah Johnson",
      personTitle: "Director of Rights Management",
      personCompany: "Amber Lowe"
    },
    {
      id: 2,
      quote: "As a small, independent musician, I was completely caught off guard when my music went viral on social media. Through their incredible dedication, consistent communication and ever-expanding network of partners, Watchdog has helped to increase my revenue by four times within 6 months! They have been a breeze to work with, carefully and respectfully taking care of all the nitty-gritty so I can continue to focus completely on my music and career. I will forever be grateful for this life-changing opportunity to partner with Watchdog!",
      companyLogo: "/images/testimonials/fatcoda.png",
      backgroundImage: "/images/testimonials/fatcoda.png",
      personName: "Alex Rivera",
      personTitle: "CEO",
      personCompany: "Fat Coda Studios",
      isCaseStudy: true
    },
    {
      id: 3,
      quote: "Watchdog is filling an incredible gap in the industry for protecting and monetizing our client's composition copyrights, finding examples of unlicensed uses we have never seen before.",
      companyLogo: "/images/testimonials/platinum-grammar.png",
      backgroundImage: "/images/testimonials/platinum-grammar.png",
      personName: "Emma Lewis",
      personTitle: "Publishing Administrator",
      personCompany: "Platinum Grammar"
    },
  ];

  // Display a single testimonial for mobile (using the case study one)
  const mobileFeaturedTestimonial = testimonials.find(t => t.isCaseStudy) || testimonials[0];

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
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">
            HEAR FROM OUR CUSTOMERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-8">
            Join leading businesses using Watchdog <br className="hidden sm:block" />
            <span className="font-normal">
              <span className="font-mono glitch-text" data-text="to get paid">to get paid</span> for brand uses
            </span>
          </h2>
        </div>
        
        {/* Mobile Testimonial (Single Card) - Only visible on mobile */}
        <div 
          className={`md:hidden transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div 
            className={`relative rounded-xl overflow-hidden transition-all duration-300 transform group
              ${mobileFeaturedTestimonial.isCaseStudy ? 'ring-2 ring-purple-500 ring-offset-4 ring-offset-[#111]' : ''}`}
            style={{ 
              transitionDelay: "600ms",
              transition: "all 0.7s ease-out"
            }}
          >
            {/* Case Study Badge - Show only if it's a case study */}
            {mobileFeaturedTestimonial.isCaseStudy && (
              <div className="absolute top-4 right-4 z-20 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                CASE STUDY
              </div>
            )}
            
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ 
                backgroundImage: `url(${mobileFeaturedTestimonial.backgroundImage})`,
                filter: 'blur(2px) brightness(0.3)' 
              }}
            />
            
            {/* Content Container */}
            <div className="relative z-10 p-6 h-full flex flex-col">
              {/* Company Logo */}
              <div className="mb-4 h-10">
                <img 
                  src={mobileFeaturedTestimonial.companyLogo} 
                  alt={mobileFeaturedTestimonial.personCompany}
                  className="h-full w-auto object-contain"
                />
              </div>
              
              {/* Quote */}
              <div className="flex-grow flex items-center mb-6">
                <p className="text-white text-lg italic">
                  "{mobileFeaturedTestimonial.quote}"
                </p>
              </div>
              
              {/* Person Info */}
              <div className="mt-auto">
                <p className="text-white font-medium">{mobileFeaturedTestimonial.personName}</p>
                <p className="text-gray-400 text-sm">
                  {mobileFeaturedTestimonial.personTitle} • {mobileFeaturedTestimonial.personCompany}
                </p>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
