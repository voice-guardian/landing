import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Maximize<br />your content's worth
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock hidden opportunities to monetize your content. Grow your revenue on autopilot
          </p>
          <Button size="lg" asChild>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
          <LogoCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <Features />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section>
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;