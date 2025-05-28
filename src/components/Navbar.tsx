import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="relative flex justify-between items-center py-5 px-4 md:px-8 container mx-auto">
        {/* Logo */}
        <div className="flex items-center z-20">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img
              src="/images/new-logo.png"
              alt="Third Chair Logo"
              style={{ width: '200px', height: 'auto', display: 'block' }}
            />
          </Link>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        {/* <div className="hidden md:flex flex-1 justify-center items-center space-x-8 mx-auto">
          <div className="flex items-center text-white text-base cursor-pointer hover:text-gray-300 transition-colors">
            <span>Products</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <a href="/blog" className="text-white text-base hover:text-gray-300 transition-colors">
            Blog
          </a>
        </div> */}
        
        {/* Desktop Action Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 z-20">
          <a href="https://app.creatorwatchdog.com/" className="text-white text-sm flex items-center bg-black/30 hover:bg-black/50 transition-colors px-4 h-10 justify-center rounded">
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
          <a href="https://calendly.com/yoavzimmerman/watchdog">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-sm h-9 px-4 w-[112px] rounded-md border-0 shadow-none">
              Book a Demo
            </Button>
          </a>
        </div>
        
        {/* Mobile Book Demo Button - Only visible on mobile */}
        <div className="md:hidden z-20">
          <a href="https://calendly.com/yoavzimmerman/watchdog">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-sm h-9 px-4 rounded-md border-0 shadow-none">
              Book a Demo
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
