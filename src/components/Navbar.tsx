import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen(!isMenuOpen);
    
    // Toggle body scroll
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="relative flex justify-between items-center py-5 px-4 md:px-8 container mx-auto">
        {/* Logo */}
        <div className="flex items-center z-20">
          <a href="/" className="flex items-center text-white font-bold text-xl">
            <img
              src="/images/logo.png"
              alt="Watchdog Logo"
              width="32"
              height="32"
              className="mr-4"
            />
            Watchdog
          </a>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8 mx-auto">
          <div className="flex items-center text-white text-base cursor-pointer hover:text-gray-300 transition-colors">
            <span>Products</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <a href="/blog" className="text-white text-base hover:text-gray-300 transition-colors">
            Blog
          </a>
        </div>
        
        {/* Desktop Action Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 z-20">
          <a href="/login" className="text-white text-sm flex items-center bg-black/50 hover:bg-black/70 transition-colors px-4 h-10 justify-center rounded">
            Log in
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1.5 h-4 w-4 rotate-[-45deg]"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-sm h-9 px-4 w-[112px] rounded-md">
            Book a Demo
          </Button>
        </div>
        
        {/* Mobile Menu Button - Only visible on mobile */}
        <button 
          className="md:hidden text-white z-50 menu-button p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Updated Mobile Menu with simpler implementation */}
        <div 
          className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = 'auto';
          }}
        >
          <div 
            className="flex flex-col h-full w-full px-6 pt-24 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-8">
              <div className="flex items-center text-white text-xl font-medium">
                <span>Products</span>
                <ChevronDown className="ml-2 h-5 w-5" />
              </div>
              <a href="/blog" className="text-white text-xl font-medium">
                Blog
              </a>
              
              <div className="border-t border-gray-800 my-4 pt-4"></div>
              
              <a href="/login" className="text-white text-lg flex items-center justify-between">
                Log in
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="rotate-[-45deg]"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              
              <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-base mt-4 h-12 w-full rounded-md">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
