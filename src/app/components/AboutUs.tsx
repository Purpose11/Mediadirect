import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutus from "@/images/about-2.jpg";

const AboutUs = () => {
  return (
    <div>
      <section
        id="about"
        className="relative min-h-screen bg-[#121212] overflow-hidden"
      >
        <div className="relative z-10 flex flex-col justify-center pt-24 pb-32 px-4 sm:px-6 md:px-8 ">
          <div className="w-[80%] mx-auto">
            <div className="mb-12 md:mb-16">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-current"></span>
                ABOUT US
              </Link>
            </div>

            {/* Hero Text */}
            <div className="space-y-4 mb-12 md:mb-16">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <div className="text-outline mb-2 animate-fade-in">WE ARE</div>
                <div className="text-purple-400 animate-fade-in delay-300">
                  MEDIA DIRECT
                </div>
                <div className="animate-fade-in delay-600">SERVICES</div>
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed animate-fade-in delay-600">
                An independent, full-service marketing communications agency
                focused on finding your brand's purpose and delivering customer
                experiences to drive business growth.
              </p>
            </div>

            {/* Team Image */}
            <div className="relative w-full aspect-[16/6] rounded-lg overflow-hidden animate-fade-in delay-600">
              <Image
                src={aboutus}
                alt="The Voice Society Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
