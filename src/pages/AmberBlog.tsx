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

const AmberBlogContent = () => {
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
              Transform Unauthorized Usage
              <span className="text-purple-400"> Into Revenue Streams</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Join creators like Amber who turned 300+ unauthorized brand uses into significant licensing deals with Third Chair's automated tracking and enforcement tools.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="/images/2x2_amber.png" 
                alt="Amber Lowe" 
                className="w-full h-auto object-cover rounded-xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white">
                Amber Lowe’s Success Story with Third Chair's Platform
                </h2>
              </div>
            </div>
          </div>
          
          {/* Metrics Section */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Key Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <MetricCard value="300+" label="revenue opportunities" />
              <MetricCard value="50+" label="brands flagged, including Fortune 500 advertisers" />
            </div>
          </div>
          
          {/* Executive Summary */}
          <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Executive Summary</h3>
            <div className="bg-[#14101A] border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-gray-300">
                When Amber Lowe's viral TikTok audio was used by 300+ brands—including Fortune 500 companies—without permission, she faced a choice: let thousands in revenue slip away or fight back. With Watchdog, she transformed unauthorized use into a licensing revenue stream. This case study reveals how creators can turn IP protection from a headache into a profit center.
              </p>
            </div>
          </div>
          
          {/* Main Content Sections */}
          <div className={`space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Introduction */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Introduction</h3>
              <p className="text-gray-300 mb-4">
                Amber Lowe (@eats.travels, @ambermaylowe) is a UK-based UGC content creator with over three years of experience crafting engaging, high-quality content for brands. Her specialty? Creating relatable and viral TikTok audios—used by over 250,000 TikTok and Instagram creators worldwide.
              </p>
              <div className="pl-4 border-l-2 border-purple-500 italic text-white">
                "My audios are my livelihood—but tracking misuse felt impossible"
              </div>
            </section>
            
            {/* Challenge */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Challenge</h3>
              <p className="text-gray-300 mb-4">
                In July 2024, Amber released a TikTok audio—"Oh, I wasn't sad, I just needed a..."—which quickly became a viral sensation. Used over 64,000 times, the trend caught the attention of celebrities like Kylie Jenner and Ashley Tisdale. Soon, major advertisers like Singapore Airlines and Taco Bell began leveraging the trend in their marketing campaigns.
              </p>
              <p className="text-gray-300 mb-4">
                Amber knew her intellectual property (IP) had real value—brands should have sought her authorization before using it commercially. While some companies paid for proper licensing, many did not.
              </p>
              <p className="text-gray-300 mb-4">
                The challenges were clear:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Tracking down all unauthorized commercial uses</li>
                <li>Determining fair licensing rates for each brand</li>
                <li>Contacting advertisers and managing negotiations</li>
                <li>Navigating legal complexities around IP enforcement</li>
              </ul>
            </section>
            
            {/* Solution */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Solution</h3>
              <p className="text-gray-300 mb-4">
                Enter Watchdog—an end-to-end service that helps creators monetize unauthorized IP usage and recover lost revenue.
              </p>
              <p className="text-gray-300 mb-4">
                With Watchdog, Amber was able to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Scan TikTok & Instagram to identify 300+ advertisers using her audio without a license.</li>
                <li>Prioritize high-value opportunities, focusing on brands like Singapore Airlines and Taco Bell.</li>
                <li>Take action effortlessly, using Watchdog's tools to:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Automate legal notices to brands</li>
                    <li>Streamline licensing agreements</li>
                    <li>Escalate claims to legal partners when needed</li>
                  </ul>
                </li>
              </ul>
            </section>
            
            {/* Results */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Results</h3>
              <p className="text-gray-300 mb-4">
              Within two months, Amber successfully converted hundreds of unauthorized uses into licensing revenue. Over the next six months, she expects to recover even more, marking a significant increase compared to similar audio trends she has monetized in the past.
              </p>
            </section>
            
            {/* Testimonial */}
            <section className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Testimonial</h3>
              <p className="text-xl italic text-white">
                "Before Watchdog, I felt powerless to collect the money I was owed from big corporations. Watchdog helped me secure a fair outcome, and I couldn't be more excited to partner with them on future projects!"
              </p>
              <p className="mt-4 text-purple-300 font-medium">— Amber Lowe, UGC Creator</p>
            </section>
          </div>
          
          {/* CTA Section */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to claim what's yours?</h3>
            <p className="text-gray-300 mb-6">
              Join creators like Amber who are turning unauthorized usage into revenue with Watchdog.
            </p>
            <a href="https://calendly.com/yoavz-usethirdchair/third-chair-demo">
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

const AmberBlog = () => (
  <MainLayout>
    <AmberBlogContent />
  </MainLayout>
);

export default AmberBlog; 