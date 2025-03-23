export const BlogCallToAction = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
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
              </defs>
              <rect width="100%" height="100%" fill="url(#paintBrushBlue)" rx="16" ry="16" />
            </svg>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-8">
              Transform Unauthorized Usage<br />Into Revenue Streams
            </h2>
            <p className="text-gray-300 text-xl mb-10">
              Join creators like Amber who turned 300+ unauthorized brand uses into significant 
              licensing deals with Watchdog's automated tracking and enforcement tools.
            </p>
            {/* No buttons here */}
          </div>
        </div>
      </div>
    );
  };