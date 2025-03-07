"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import otc from "@/images/otc.jpg";
import daisy from "@/images/daisy.jpg";
import hicone from "@/images/hicone.jpg";
import metro from "@/images/metro.jpg";
import rac from "@/images/rac.jpg";

const workItems = [
  {
    id: 1,
    title: "OTC GLOBAL HOLDINGS",
    category: "Corporate Video",
    image: otc,
    client: "OTC Global",
  },
  {
    id: 2,
    title: "CITY OF DALLAS",
    category: "Website 3D Animation",
    image: daisy,
    client: "Dallas City",
  },
  {
    id: 3,
    title: "HICONE",
    category: "BBC Documentary",
    image: hicone,
    client: "BBC",
  },
  {
    id: 4,
    title: "CREATIVE AGENCY",
    category: "Brand Identity",
    image: metro,
    client: "Creative Co",
  },
  {
    id: 5,
    title: "TECH STARTUP",
    category: "Web Development",
    image: rac,
    client: "TechStart",
  },
];

export default function WorkSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const slideLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? workItems.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slideRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === workItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      // minimum swipe distance
      if (diff > 0) {
        slideRight();
      } else {
        slideLeft();
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = 100 / 2.5; // Show 2.5 slides on desktop
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ gap: "2rem" }}
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[85%] md:w-[45%] lg:w-[40%] flex-shrink-0"
            style={{ paddingRight: "2rem" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {item.category}
              </p>
              <h3 className="text-xl md:text-2xl font-bold mt-1">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={slideLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors z-10"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={slideRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors z-10"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {workItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-purple-500 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
