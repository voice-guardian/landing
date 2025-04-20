
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-4 bg-#21161e">
      <div className="flex items-center">
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
      
      <div className="flex-1 flex justify-center items-center space-x-6 mx-auto">
        <div className="flex items-center text-white text-base">
          <span>Products</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>
        <a href="/blog" className="text-white text-base">
          Blog
        </a>
      </div>
      
      <div className="flex items-center space-x-6">
        <a href="/login" className="text-white text-sm flex items-center bg-black px-4  h-10 justify-center">
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
        <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-sm h-9 px-4 w-[112px] rounded-none">
          Book a Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
