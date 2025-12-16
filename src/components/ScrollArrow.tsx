import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export function ScrollArrow() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling a bit
      setIsVisible(scrollTop > 200);
      
      // Check if we're at the bottom (with some buffer)
      const isBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed right-6 bottom-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {isAtBottom ? (
        <ArrowUp className="w-5 h-5" />
      ) : (
        <ArrowDown className="w-5 h-5" />
      )}
    </button>
  );
}
