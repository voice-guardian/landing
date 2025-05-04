import React, { useEffect, useState } from "react";

const HeroSectionV2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-[1000px] max-w-full h-full mx-auto relative min-h-[auto]">
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full gap-8 py-8 flex-1">
        {/* Heading Block */}
        <div
          className={`flex flex-col items-center justify-center gap-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-semibold text-center font-inter leading-[60px] w-full">
            <span>Don't Miss Out on</span>
            <br />
            <span>Music Revenue</span>
          </h1>
          <p className="text-gray-300 text-[22px] font-light text-center w-full max-w-[70%] leading-[27px]">
            <span>We find where brands use your music and help you</span>
            <span> turn it into revenue</span>
          </p>
        </div>
        {/* CTA Button */}
        <a
          href="#book"
          className={`transition-all duration-700 ease-out rounded-lg no-underline bg-[#965cff] hover:bg-[#6b33cc] flex items-center gap-2 text-white font-semibold text-base py-4 px-6 mt-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ borderRadius: '8px', transitionDelay: '0.5s' }}
        >
          Schedule Demo
        </a>
      </div>
      {/* Image Section */}
      <div className="flex items-center justify-center w-full relative flex-1">
        <img
          src="/left-splash-200h.png"
          alt="Left Splash"
          className={`absolute top-[265px] left-[-80px] w-[250px] h-[120px] z-10 object-cover rounded-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ borderRadius: '8px', transitionDelay: '2s' }}
        />
        <img
          src="/dashboard-big.png"
          alt="Dashboard"
          className={`flex-1 w-auto h-auto object-cover transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: '1s' }}
        />
        <img
          src="/right-splash-200h.png"
          alt="Right Splash"
          className={`absolute top-[-30px] right-[-70px] w-[250px] h-[120px] z-10 object-cover rounded-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ borderRadius: '8px', transitionDelay: '2.5s' }}
        />
      </div>
      {/* Splash Decoration (if needed) */}
      <div className="home-splash"></div>
    </section>
  );
};

export default HeroSectionV2; 