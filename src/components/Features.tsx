import { useEffect, useRef, useState } from "react";
import { Search, TrendingUp, FileCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    title: "Monitor",
    description: "Identify when your music is used by brands in social media, at scale.",
    icon: Search,
    image: "/feature-1.webp"
  },
  {
    title: "Identify",
    description: "Generate reports of brand uses with high revenue potential — curated and ready to claim.",
    icon: TrendingUp,
    image: "/feature-2.webp"
  },
  {
    title: "Collect",
    description: "Automate notices to brands with a single click, or hand it off to our team to collect on your behalf.",
    icon: FileCheck,
    image: "/feature-3.webp"
  }
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.offsetTop;
      const scrollPosition = window.scrollY - containerTop;
      const totalHeight = container.clientHeight;
      const sectionHeight = totalHeight / features.length;
      
      const newActiveFeature = Math.min(2, Math.floor(scrollPosition * 1.3/ sectionHeight));
      if (newActiveFeature >= 0 && newActiveFeature < features.length) {
        setActiveFeature(newActiveFeature);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div key={index} className="mb-24">
              <div className="flex flex-col items-center space-y-4 mb-8 text-center">
                <feature.icon className="w-12 h-12 text-primary" />
                <h3 className="text-3xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed text-center">{feature.description}</p>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[350px] h-full object-fit mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="sticky-container" style={{ height: `${features.length * 100}vh` }}>
      <div className="sticky-content flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === activeFeature ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className="flex items-center space-x-6 mb-4">
                    <feature.icon className="w-12 h-12 text-primary" />
                    <h3 className="text-3xl font-bold leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="relative h-full">
              {features.map((feature, index) => (
                <img
                  key={index}
                  src={feature.image}
                  alt={feature.title}
                  className={`absolute top-[60px] w-400 h-400 object-cover transition-all duration-500 ${
                    index === activeFeature ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};