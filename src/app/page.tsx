import Image from "next/image";
import Link from "next/link";
import { Menu, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import LoadingScreen from "@/app/components/loading";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Offer from "./components/Offer";
import VideoBackground from "@/app/components/video-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-purple-950 text-white overflow-hidden">
      <LoadingScreen />
      <VideoBackground />

      {/* Social Media Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-6 p-4">
        <Link href="#" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 text-white hover:text-purple-300 transition-colors" />
        </Link>
        <Link href="#" aria-label="YouTube">
          <Youtube className="w-5 h-5 text-white hover:text-purple-300 transition-colors" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <Instagram className="w-5 h-5 text-white hover:text-purple-300 transition-colors" />
        </Link>
        <Link href="#" aria-label="Facebook">
          <Facebook className="w-5 h-5 text-white hover:text-purple-300 transition-colors" />
        </Link>
        <div className="h-20 w-px bg-white/30 my-2"></div>
        <div className="vertical-text transform -rotate-90 whitespace-nowrap text-xs tracking-widest">
          FOLLOW US
        </div>
      </div>

      {/* Main Content */}
      <Hero />
      <AboutUs />
      <Offer />
      {/* Mobile Social Links */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center gap-6 p-4 bg-purple-950/80 md:hidden">
        <Link href="#" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 text-white" />
        </Link>
        <Link href="#" aria-label="YouTube">
          <Youtube className="w-5 h-5 text-white" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <Instagram className="w-5 h-5 text-white" />
        </Link>
        <Link href="#" aria-label="Facebook">
          <Facebook className="w-5 h-5 text-white" />
        </Link>
      </div>
    </div>
  );
}
