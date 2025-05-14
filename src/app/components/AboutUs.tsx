import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutus from "@/images/about-2.jpg";

const AboutUs = () => {
  return (
    <div>
      <section
        className="relative min-h-screen bg-[#fdf9e7] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `rgba(${Math.random() * 100 + 50}, ${Math.random() * 50}, ${Math.random() * 200 + 55}, 0.3)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>
        ))}
      </div>

        <div className="relative z-10 flex flex-col justify-center pt-24 pb-32 px-4 sm:px-6 md:px-8">
          <div className="w-[80%] mx-auto">
            <div className="mb-12 md:mb-16">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-current text-gray-600"></span>
                ABOUT US
              </Link>
            </div>

            {/* Hero Text */}
            <div className="space-y-4 mb-12 md:mb-16"  id="#aboutus">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <div className="text-outline mb-2 animate-fade-in text-black">WE ARE A</div>
                <div className="text-[#990899] animate-fade-in delay-300">
                  MEDIA AND 
                </div>
                <div className="animate-fade-in delay-600 text-black">TECHNOLOGY COMPANY</div>
              </h2>
              <p className="text-gray-600 max-w-2xl text-lg md:text-xl leading-relaxed animate-fade-in delay-600 text-justify">
              MediaDirectAI is a media and technology company with offices in the United States, South Africa, and Nigeria. 
              We specialize in elevating brands through authentic storytelling that inspires emotion and enriches human connection.
              At our core is a team of agile problem-solvers, fiercely committed to maximizing our clients’ return on investment.
              Founded in July 2009 to improve our clients’ strategic communications and market shares, we’ve supported high-level business leaders, political leaders, corporations, global campaigns, nonprofits, and UN agencies. 
              Our roots are grounded in the expertise of our founding Principal Adeola Akinremi, whose deep experience in brand development and strategic communications spans both the competitive U.S. market and emerging economies.

              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
