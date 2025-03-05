"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-purple-950/70 z-10"></div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        {/* Use a smaller video file for mobile devices */}
        <source
          src={
            isMobile
              ? "https://www.thevoicesociety.com/assets/videos/sizzle-tvs.mp4"
              : "https://www.thevoicesociety.com/assets/videos/sizzle-tvs.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
