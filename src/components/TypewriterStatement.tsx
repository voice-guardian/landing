import { useEffect, useRef, useState } from 'react';

interface TypewriterStatementProps {
  text?: string;
  typingSpeed?: number;
}

const TypewriterStatement = ({ 
  text = "Watchdog makes it easy to monitor, negotiate, and get paid when your music is used by brands.",
  typingSpeed = 10
}: TypewriterStatementProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const component = componentRef.current;
    if (!component) return;
    
    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;
    
    // Function to type the next character
    const typeNextChar = () => {
      if (charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1));
        setIsTyping(true);
        charIndex++;
        timeoutId = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
        setHasTyped(true);
      }
    };
    
    // Function to start the typewriter effect
    const startTypewriter = () => {
      if (hasTyped) return;
      charIndex = 0;
      setDisplayText('');
      setIsTyping(true);
      timeoutId = setTimeout(typeNextChar, typingSpeed);
    };
    
    // Function to reset the typewriter
    const resetTypewriter = () => {
      clearTimeout(timeoutId);
      setDisplayText('');
      setIsTyping(false);
      setHasTyped(false);
      charIndex = 0;
    };
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting && !hasTyped) {
          startTypewriter();
        } else if (!entry.isIntersecting) {
          resetTypewriter();
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(component);
    
    // Initialize if already in view
    if (component.getBoundingClientRect().top < window.innerHeight && !hasTyped) {
      startTypewriter();
    }
    
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [text, typingSpeed, hasTyped]);

  return (
    <div 
      className="w-full"
      style={{ 
        width: '100vw', 
        marginLeft: 'calc(-50vw + 50%)'
      }}
    >
      <div 
        ref={componentRef}
        className="bg-black h-[700px] flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto px-8 text-start">
          <p className="text-white text-3xl md:text-5xl font-medium">
            {displayText}
            {isTyping && <span className="inline-block ml-1 animate-pulse">|</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypewriterStatement;

