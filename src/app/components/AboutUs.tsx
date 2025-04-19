import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutus from "@/images/about-2.jpg";

const AboutUs = () => {
  return (
    <div>
      <section
        className="relative min-h-screen bg-[#121212] overflow-hidden"
      >
        <div className="relative z-10 flex flex-col justify-center pt-24 pb-32 px-4 sm:px-6 md:px-8 ">
          <div className="w-[80%] mx-auto">
            <div className="mb-12 md:mb-16">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-current"></span>
                ABOUT US
              </Link>
            </div>

            {/* Hero Text */}
            <div className="space-y-4 mb-12 md:mb-16"  id="#aboutus">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <div className="text-outline mb-2 animate-fade-in">WE ARE</div>
                <div className="text-purple-400 animate-fade-in delay-300">
                  MEDIA DIRECT
                </div>
                <div className="animate-fade-in delay-600">SERVICES</div>
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed animate-fade-in delay-600">
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
