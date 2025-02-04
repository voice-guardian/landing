
import { useEffect, useRef, useState } from "react";
import { Search, TrendingUp, FileCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    title: "Find where your content is, anywhere.",
    description: "Watchdog monitors the web 24/7 to uncover everywhere your content is being posted, and who is posting it.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Focus on the uses that matter.",
    description: "Watchdog sorts through the noise to surface the most actionable revenue opportunities that can move the needle for your business.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Convert found revenue to claimed revenue.",
    description: "Watchdog converts found revenue at scale through automated notices, streamlined licensing, and escalation to our network of human legal partners (where necessary).",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
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
      const sectionHeight = window.innerHeight;
      
      const newActiveFeature = Math.floor(scrollPosition / sectionHeight);
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
              <div className="flex items-center space-x-4 mb-8">
                <feature.icon className="w-12 h-12 text-[#F97316]" />
                <h3 className="text-3xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">{feature.description}</p>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="sticky-container">
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
                  <div className="flex items-center space-x-6 mb-8">
                    <feature.icon className="w-12 h-12 text-[#F97316]" />
                    <h3 className="text-3xl font-bold leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="relative h-[700px]">
              {features.map((feature, index) => (
                <img
                  key={index}
                  src={feature.image}
                  alt={feature.title}
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl transition-all duration-500 ${
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
