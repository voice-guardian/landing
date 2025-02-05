import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden py-20 px-8 rounded-2xl">
        {/* Background with refined blue gradient and smooth rounded rectangle */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <svg className="absolute inset-0 w-full h-full rounded-2xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="paintBrushBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                <stop offset="30%" style={{ stopColor: '#2563eb', stopOpacity: 0.9 }} />
                <stop offset="70%" style={{ stopColor: '#3b82f6', stopOpacity: 0.85 }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
              </linearGradient>
              {/* <filter id="turbulence">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="20" seed="5" />
                <feDisplacementMap in="SourceGraphic" scale="80" />
              </filter> */}
            </defs>
            <rect width="100%" height="100%" fill="url(#paintBrushBlue)" filter="url(#turbulence)" rx="16" ry="16" />
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-8">
            Take Back Control of Your Content<br />
          </h2>
          <p className="text-gray-300 text-xl mb-10">
            Discover where your content is being used and turn lost revenue into claimed revenue with 
            Watchdog's automated tracking and enforcement.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://calendly.com/yoavzimmerman/watchdog" target="_blank" rel="noopener noreferrer">
              Book Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
