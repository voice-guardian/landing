
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden py-20 px-8 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-yellow-500 opacity-90 rounded-2xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            A no-brainer for managing<br />your ecommerce
          </h2>
          <p className="text-white text-xl mb-10">
            We will assist our first cohort of 50 customers for no charge with our full suite of<br />
            AI solutions and dedicated support.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
