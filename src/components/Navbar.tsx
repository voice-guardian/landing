import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/constants";
import { useMobileUseCaseMenu } from "@/context/MobileUseCaseMenuContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setOpen } = useMobileUseCaseMenu();
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
    <nav className={
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/30 backdrop-blur-sm`
    }>
      <div className="relative flex justify-between items-center py-5 px-4 md:px-8 container mx-auto">
        {/* Logo */}
        <div className="flex items-center z-20">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img
              src="/images/new-logo-3.png"
              alt="Third Chair Logo"
              style={{ width: '180px', height: 'auto', display: 'block' }}
            />
          </Link>
        </div>
        
        {/* Desktop Action Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-10 z-[1000]">
           {/* Careers Link */}
           <a
            href="https://app.dover.com/jobs/thirdchair"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base font-normal hover:underline focus:outline-none"
          >
            Careers
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Expanded hover area for dropdown */}
            <div className="absolute left-[-32px] top-[-24px] w-[200px] h-[80px] z-40" style={{ pointerEvents: 'auto' }}></div>
            <button className="text-white text-base font-normal flex items-center px-0 py-0 bg-transparent hover:underline focus:outline-none shadow-none border-none relative z-50">
              Use Cases
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={`absolute left-[-32px] mt-2 min-w-[270px] bg-black/30 backdrop-blur-2xl rounded-b-xl py-2 transition-all duration-200 z-50 ${isDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              style={{ marginTop: '24px' }}
            >
              <a
                href="/enforcement"
                className="block px-6 py-3 text-white hover:bg-black/50 hover:text-purple-300 transition-colors rounded-lg text-base font-medium"
              >
              IP Enforcement
              </a>
              <div className="block px-4 py-3 text-white flex items-center gap-2 text-base font-medium">
              &nbsp;&nbsp;IP Licensing
                <span className="ml-2 bg-white/30 text-[9px] text-gray-700 px-2.5 py-0.5 rounded-sm font-semibold leading-tight" style={{lineHeight: '1.1'}}>Coming soon</span>
              </div>
              <div className="block px-4 py-3 text-white flex items-center gap-2 text-base font-medium">
              &nbsp;&nbsp;IP Compliance
                <span className="ml-2 bg-white/30 text-[9px] text-gray-700 px-2.5 py-0.5 rounded-sm font-semibold leading-tight" style={{lineHeight: '1.1'}}>Coming soon</span>
              </div>
            </div>
          </div>
         
          <a href="https://calendly.com/yoavz-usethirdchair/third-chair-demo">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-sm h-9 px-4 w-[112px] rounded-md border-0 shadow-none">
              Book a Demo
            </Button>
          </a>
        </div>
        
        {/* Mobile Use Case Button - Only visible on mobile */}
        <div className="md:hidden z-20 flex items-center">
          <button
            className="text-white text-base font-normal flex items-center px-0 py-0 bg-transparent hover:underline focus:outline-none shadow-none border-none"
            onClick={() => setOpen(true)}
          >
            Use Cases
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
