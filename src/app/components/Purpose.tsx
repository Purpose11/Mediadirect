import { Linkedin, Youtube, Instagram, Facebook, Mail } from "lucide-react";
import Link from "next/link";
import TypeEffect from "./type-effect";
import Image from "next/image";
import about4 from "@/images/about-4.jpg";

export default function Purpose() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={about4}
          alt="Studio background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
              WHEN YOU FIND YOUR PURPOSE,
              <br />
              YOU BECOME MORE
            </h1>
            <TypeEffect />
            <p className="text-gray-400 text-base md:text-sm max-w-2xl mt-8 mb-8">
              If you need help finding, refining or communicating your brand's
              purpose, let's work together! Drop us a note or give us a call. We
              are always happy to discover the what if.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
