import { useEffect, useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/constants";

const MetricCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-[#1A0A23] p-5 rounded-lg border border-purple-700/30">
    <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

const AdministrationBlogContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Set visible after component mounts for animations
    setIsVisible(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
        style={{ 
          background: "linear-gradient(to bottom, #1A0A23 0%, #0D0D0D 100%)" 
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-4">
              <Button 
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent"
                onClick={() => navigate(ROUTES.HOME)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Home
              </Button>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
              How The Administration MP Claimed
              <span className="text-purple-400"> Significant Licensing Revenue</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Learn how this music publisher representing 1,500+ songwriters transformed unauthorized brand usage into substantial revenue with Third Chair's tools.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm text-gray-400 mb-2">Image provided by <a href="https://unsplash.com/@kevinmccutcheon" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Kevin McCutcheon</a></p>
            
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="/images/record.jpg" 
                alt="The Administration MP" 
                className="w-full h-auto object-cover rounded-xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white">
                  How The Administration MP Claimed Significant Licensing Revenue with Third Chair's Tools
                </h2>
              </div>
            </div>
          </div>
          
          {/* Metrics Section */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Key Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <MetricCard value="1000+" label="unauthorized commercial uses identified" />
              <MetricCard value="500+" label="brands flagged, including Fortune 500 advertisers" />
            </div>
          </div>
          
          {/* Executive Summary */}
          <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Executive Summary</h3>
            <div className="bg-[#14101A] border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-gray-300">
                The Administration MP, representing over 1,500 songwriters, faced a challenge: widespread unlicensed use of their clients' music by brands on TikTok and Instagram. Using Watchdog, they transformed passive infringement into active licensing outcomes, recovering significant revenue. This case study demonstrates how music publishers can effectively enforce rights and generate revenue at scale.
              </p>
            </div>
          </div>
          
          {/* Main Content Sections */}
          <div className={`space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Introduction */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Introduction</h3>
              <p className="text-gray-300 mb-4">
                The Administration MP is a powerhouse music publisher representing over 1,500 songwriters and composers. Their clients' music significantly impacts culture across TikTok and Instagram, being featured in over 8 million videos. This widespread use also led to numerous instances of brands using the music in their advertising without proper licensing.
              </p>
              <div className="pl-4 border-l-2 border-purple-500 italic text-white">
                "Third Chair gives us the ability to protect our clients at scale."
              </div>
            </section>
            
            {/* Challenge */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Challenge</h3>
              <p className="text-gray-300 mb-4">
                The Administration MP's music has been featured in over 8 million TikTok and Instagram videos. Many of these include brands advertising, often without proper licensing. Tracking and addressing each infringement was time-consuming, uncertain, and frustrating.
              </p>
              <p className="text-gray-300 mb-4">
                The key challenges included:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Identifying numerous unauthorized commercial uses</li>
                <li>Dealing with a high volume of infringements across platforms</li>
                <li>Ensuring fair compensation for their songwriters</li>
              </ul>
            </section>
            
            {/* Solution */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Solution</h3>
              <p className="text-gray-300 mb-4">
                With Watchdog's platform, The Administration MP was able to take control of their intellectual property rights and monetization strategy.
              </p>
              <p className="text-gray-300 mb-4">
                The Administration MP:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Identified hundreds of commercial uses of their music</li>
                <li>Prioritized high-value opportunities, focusing on major brands</li>
                <li>Efficiently recovered revenue owed to their songwriters</li>
                <li>Established a repeatable system for ongoing rights management</li>
              </ul>
            </section>
            
            {/* Results */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Outcome</h3>
              <p className="text-gray-300 mb-4">
                Within weeks, The Administration MP was able to turn social media advertising from uncertain whack-a-mole into a dependable revenue stream. Watchdog provided the tools to recover revenue at scale and effectively protect their clients' rights.
              </p>
              <p className="text-gray-300 mb-4">
                By leveraging Watchdog's technology, The Administration MP created a sustainable system for:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Continuous monitoring of all client music</li>
                <li>Automated detection of new commercial uses</li>
                <li>Streamlined licensing and recovery processes</li>
                <li>Enhanced value for their represented songwriters</li>
              </ul>
            </section>
            
            {/* Testimonial */}
            <section className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Testimonial</h3>
              <p className="text-xl italic text-white">
                "Third Chair is filling an incredible gap in the industry for protecting and monetizing our client's composition copyrights, helping us monetize opportunities we didn't know even existed."
              </p>
              <p className="mt-4 text-purple-300 font-medium">— Joshua Leopold, The Administration MP</p>
            </section>
          </div>
          
          {/* CTA Section */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to protect your music at scale?</h3>
            <p className="text-gray-300 mb-6">
              Join publishers like The Administration MP who are transforming IP protection into revenue with Watchdog.
            </p>
            <a href="https://calendly.com/yoavzimmerman/watchdog">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-md"
              >
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdministrationBlog = () => (
  <MainLayout>
    <AdministrationBlogContent />
  </MainLayout>
);

export default AdministrationBlog; 