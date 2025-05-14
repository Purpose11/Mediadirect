"use client";

import { AnyARecord } from "node:dns";
import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function TypeEffect() {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    elementRef.current.innerHTML = ""; // Ensure it's empty

    const timeout = setTimeout(() => {
      new TypeIt(elementRef.current!, {
        strings: ["INFLUENTIAL", "INNOVATIVE", "INSPIRING", "INFINITE"],
        speed: 100,
        waitUntilVisible: true,
        loop: true,
        breakLines: false,
        startDelay: 500, // Add a slight delay
        nextStringDelay: 1000,
        deleteSpeed: 80,
        lifeLike: true,
        cursor: true,
        cursorChar: "|",
      }).go();
    }, 300); // Small delay before initializing

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span
      ref={elementRef}
      className="text-[#990899] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl block h-20"
      aria-live="polite"
    ></span>
  );
}
