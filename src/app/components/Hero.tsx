import React from "react";
import ScrollIndicator from "@/app/components/scroll-indicator";
import VideoBackground from "./video-background";
const Hero = () => {
  return (
    <div>
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <VideoBackground />

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 pt-20">
          <div className="w-[90%] mx-auto">
            <div className="relative mb-4 md:mb-8">
              <h1 className=" text-purple-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight animate-slide-in-left font-Allura">
                Bold Narratives
              </h1>
              <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-12 sm:ml-16 md:ml-24 animate-slide-in-left delay-300">
                YOUR STORY IS OUR PASSION
              </div>
            </div>

            <div className="relative mt-6 sm:mt-8 md:mt-16 text-right">
              <h2 className="font-Allura text-purple-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight animate-slide-in-right">
                Purpose
              </h2>
              <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mr-12 sm:mr-16 md:mr-24 animate-slide-in-right delay-300">
                MAKE COMPLEX IDEAS MORE RELATABLE.
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>
    </div>
  );
};

export default Hero;
