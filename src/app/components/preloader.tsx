"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload video
    const video = new Image();
    video.src = "/placeholder.mp4";

    // Preload logo
    const logo = new Image();
    logo.src = "/placeholder.svg?height=80&width=120";

    // Set loaded state when window is fully loaded
    window.addEventListener("load", () => {
      setTimeout(() => setLoaded(true), 500); // Add a small delay for smoother transition
    });

    // Fallback if load event doesn't fire
    setTimeout(() => setLoaded(true), 3000);

    return () => {
      window.removeEventListener("load", () => setLoaded(true));
    };
  }, []);

  return loaded;
}
