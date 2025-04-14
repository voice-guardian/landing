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
      <section className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
          Don't Miss Out<br/> on Music Revenue
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          We find where brands use your music and help you turn it into revenue.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-14 text-lg bg-primary hover:bg-primary/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" 
            asChild
          >
            <a href="https://calendly.com/yoavzimmerman/watchdog" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
          <div className="mt-0">
            <LogoCarousel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-0">
        <Features />
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="mt-16">
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
