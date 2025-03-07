import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import WorkSlider from "../components/work-slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-[90%] mx-auto">
          {/* Heading */}
          <div className="mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              OUR LATEST
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-500">
              CREATIVE WORK
            </h2>
          </div>

          {/* Work Slider */}
          <div className="mb-16">
            <WorkSlider />
          </div>
        </div>
      </main>
    </div>
  );
}
