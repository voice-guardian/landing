
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-4">
      <div className="flex items-center">
        <a href="/" className="flex items-center text-white font-bold text-xl">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          Watchdog
        </a>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-white text-sm">
          <span>Products</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>
        <a href="/blog" className="text-white text-sm">
          Blog
        </a>
        <a href="/login" className="text-white text-sm flex items-center">
          Log in
        </a>
        <Button variant="outline" className="bg-white text-black hover:bg-gray-100 rounded-md text-sm h-9 px-4">
          Book a Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
