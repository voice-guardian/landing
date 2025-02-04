import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">AIStartup</span>
            <div className="hidden md:flex ml-10 space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900">
                Features
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900">
                Testimonials
              </button>
            </div>
          </div>
          <Button asChild>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};