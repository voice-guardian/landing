import { useEffect, useRef, useState } from "react";
import { Calendar, Users, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    title: "Automated Scheduling",
    description: "Skip the back-and-forth and schedule interviews automatically. Our AI conducts interviews 24/7 with unlimited capacity.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart Analysis",
    description: "Our AI analyzes responses in real-time, providing deep insights and recommendations for better decision making.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Team Collaboration",
    description: "Share insights and collaborate with your team in real-time. Make better decisions together.",
    icon: Users,
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
      const sectionHeight = window.innerHeight * 0.8; // Reduced scroll duration
      
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
            <div key={index} className="mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[300px] object-cover rounded-lg shadow-xl"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === activeFeature ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="relative h-[400px]">
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