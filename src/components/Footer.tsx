
import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Watchdog</h3>
            <p className="text-xl">© All rights reserved by Watchdog Inc.</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <a href="mailto:hello@creatorwatchdog.com" className="text-lg hover:text-white transition-colors">
              hello@creatorwatchdog.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="mt-16 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between">
          <div className="space-y-4 md:space-y-0 md:space-x-12">
            <a href="#" className="block md:inline text-lg hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="block md:inline text-lg hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
