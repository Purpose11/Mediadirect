"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator when user scrolls down
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToNextSection}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
      aria-label="Scroll to next section"
    >
      <div className="w-8 h-8 border-b-2 border-r-2 border-white transform rotate-45 opacity-70"></div>
    </button>
  );
}
