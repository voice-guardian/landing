import React from "react";

const Footer: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04232C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section with Brand + CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
          {/* Left - Logo + Headline */}
          <div className="max-w-lg mb-10 md:mb-0">
            {/* YC Pill */}
            <div className="flex flex-col items-start mb-4">
              <div className="relative backdrop-blur-lg bg-black/40 border border-white/10 text-white/80 px-4 py-0.5 rounded-full inline-flex text-xs font-semibold tracking-wide">
                <div className="flex items-center relative z-10 p-0.5">
                  <p style={{ textShadow: "0 1px 4px rgba(255,255,255,0.5)" }}>Backed by&nbsp;</p>
                  <img src="/images/yc-logo.webp" alt="YCombinator" className="w-24 h-5" />
                </div>
              </div>
            </div>
            <br/>
            <div className="flex items-center mb-6">
              <img
                src="/images/light-1.png"
                alt="Third Chair Logo"
                className="h-8 mr-3"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-[#FAF9F6] leading-tight">
              Agents for in-house legal teams.
            </h2>
          </div>

          {/* Right - CTA Button */}
          <div>
            <a
              href="https://calendly.com/yoavzimmerman/watchdog"
              className="bg-white text-[#0e0e0e] px-8 py-3 rounded-lg font-bold text-base hover:bg-gray-200 transition-colors duration-300 inline-block"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright + Socials + Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Left - Copyright */}
          <div className="text-gray-500 text-sm mb-6 md:mb-0">
            © {currentYear} Third Chair. All Rights Reserved.
          </div>

          {/* Right - Social + Legal */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-6 md:mb-0 md:mr-8">
              <a
                href="https://linkedin.com/company/watchdog-sf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex space-x-4">
              <a
                href="/privacy-policy.html"
                className="text-white text-sm hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service.html"
                className="text-white text-sm hover:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for $90B glitch effect - replacing style jsx with regular style */}
      <style>
        {`
        .glitch-text-footer {
          position: relative;
          display: inline-block;
          color: #fff;
        }
        
        .glitch-text-footer::before,
        .glitch-text-footer::after {
          content: "$65B";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
        
        .glitch-text-footer::before {
          color: #f87171;
          animation: glitch-footer 3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.7;
        }
        
        .glitch-text-footer::after {
          color: #60a5fa;
          animation: glitch-footer 2s infinite alternate-reverse;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.7;
        }
        
        @keyframes glitch-footer {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-1px, 1px);
          }
          40% {
            transform: translate(-1px, -1px);
          }
          60% {
            transform: translate(1px, 1px);
          }
          80% {
            transform: translate(1px, -1px);
          }
          100% {
            transform: translate(0);
          }
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
