import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import CustomerIcon from "@/app/components/icons/customer-icon";
import StrategyIcon from "@/app/components/icons/strategy-icon";
import DigitalIcon from "@/app/components/icons/digital-icon";
import CultureIcon from "@/app/components/icons/culture-icon";
import tvs from "@/images/tvs.jpeg";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={tvs}
          alt="Studio background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <div className="mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#990899]">
                WE ARE A BILINGUAL AGENCY:
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              WE SPEAK BOTH, THE LANGUAGE OF THE HEART
              <br />
              AND THE LANGUAGE OF THE MIND
            </h2>
          </div>

          {/* Four Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div className="bg-transparent p-6 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all">
              <div className="mb-6 text-[#990899]">
                <CustomerIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">CUSTOMER FOCUSED</h3>
              <p className="text-gray-300">
                Purpose stems from our ability to get into the minds and hearts
                of customers.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-transparent p-6 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all">
              <div className="mb-6 text-[#990899]">
                <StrategyIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">STRATEGY DRIVEN</h3>
              <p className="text-gray-300">
                Success stems from our ability to build a strategic roadmap that
                is clear, smart and measurable.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-transparent p-6 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all">
              <div className="mb-6 text-[#990899]">
                <DigitalIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">DIGITALLY LED</h3>
              <p className="text-gray-300">
                Engagement stems from our ability to create spectacular creative
                concepts that are social by design.
              </p>
            </div>

            {/* Column 4 */}
            <div className="bg-transparent p-6 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all">
              <div className="mb-6 text-[#990899]">
                <CultureIcon />
              </div>
              <h3 className="text-xl font-bold mb-4">CULTURALLY SAVVY</h3>
              <p className="text-gray-300">
                Relevancy stems from our ability to identify, and integrate,
                cultural nuances and cues.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
