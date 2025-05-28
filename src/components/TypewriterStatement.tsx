import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface TypewriterStatementProps {
  text?: string;
  typingSpeed?: number;
}

const TypewriterStatement = ({ 
  text = "Third Chair makes it easy to monitor, negotiate, and <gradient>get paid</gradient> when your music is used by brands.",
  typingSpeed = 10
}: TypewriterStatementProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  
  // Remove tags to get the plain text version for typing
  const plainText = text.replace(/<gradient>|<\/gradient>/g, '');
  
  useEffect(() => {
    const component = componentRef.current;
    if (!component) return;
    
    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;
    
    // Function to type the next character of the plain text
    const typeNextChar = () => {
      if (charIndex < plainText.length) {
        setDisplayText(plainText.substring(0, charIndex + 1));
        setIsTyping(true);
        charIndex++;
        timeoutId = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
        setHasTyped(true);
        setIsDone(true);
      }
    };
    
    // Function to start the typewriter effect
    const startTypewriter = () => {
      if (hasTyped) return;
      charIndex = 0;
      setDisplayText('');
      setIsTyping(true);
      setIsDone(false);
      timeoutId = setTimeout(typeNextChar, typingSpeed);
    };
    
    // Function to reset the typewriter
    const resetTypewriter = () => {
      clearTimeout(timeoutId);
      setDisplayText('');
      setIsTyping(false);
      setHasTyped(false);
      setIsDone(false);
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
  }, [plainText, typingSpeed, hasTyped]);

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
            {isDone ? (
              <>
                Third Chair makes it easy to monitor, negotiate, and{' '}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  get paid
                </span>
                {' '}when your music is used by brands.
              </>
            ) : (
              <>
                {displayText}
                {isTyping && <span className="inline-block ml-1 animate-pulse">|</span>}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypewriterStatement;

