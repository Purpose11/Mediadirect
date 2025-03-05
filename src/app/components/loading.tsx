"use client";

import { useEffect, useState } from "react";
import Preloader from "./preloader";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const loaded = Preloader();

  useEffect(() => {
    if (loaded) {
      // Add a small delay for smoother transition
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-purple-950">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-400 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-purple-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
        {/* <p className="text-purple-400 text-xl font-script">
          Loading creativity...
        </p> */}
      </div>
    </div>
  );
}
