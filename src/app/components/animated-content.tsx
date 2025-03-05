"use client";

import type React from "react";

import { useEffect, useState } from "react";

interface AnimatedContentProps {
  children: React.ReactNode;
}

export default function AnimatedContent({ children }: AnimatedContentProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a delay to ensure loading animation is visible
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // Slightly longer than the loading screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
