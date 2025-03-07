"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import logo from "@/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-[80%] mx-auto">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
          LET'S BUILD SOMETHING
          <br />
          <span className="text-purple-500 italic">AMAZING</span> TOGETHER
        </h2>
        <button className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-purple-500 text-white px-8 py-3 transition-all duration-300 text-sm tracking-wider rounded-2xl">
          <ArrowRight className="w-4 h-4" />
          START A PROJECT
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Logo and Social */}
            <div className="md:col-span-3">
              <Link href="/" className="block mb-8">
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={70}
                  className="w-24 md:w-32"
                />
              </Link>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-purple-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-purple-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-purple-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-purple-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-bold mb-6 tracking-wider">
                NAVIGATION
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  ABOUT US
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-bold mb-6 tracking-wider">
                CONTACT US
              </h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex gap-2">
                  <span className="text-white">T:</span> +346.387.7136
                </p>
                <p className="flex gap-2">
                  <span className="text-white">E:</span>{" "}
                  hello@mediadirectives.com
                </p>
              </div>
            </div>

            {/* Addresses */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-bold mb-6 tracking-wider">ADDRESS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-purple-500 font-bold tracking-wider text-sm">
                    DALLAS
                  </p>
                  <p className="text-gray-400">
                    1722 Routh Street, Suite 900, Dallas, TX 75201
                  </p>
                </div>
                <div>
                  <p className="text-purple-500 font-bold tracking-wider text-sm">
                    FRISCO
                  </p>
                  <p className="text-gray-400">
                    5 Cowboys Way, Suite 300-45, Frisco, TX 75034
                  </p>
                </div>
                <div>
                  <p className="text-purple-500 font-bold tracking-wider text-sm">
                    HOUSTON
                  </p>
                  <p className="text-gray-400">
                    24285 Katy Freeway, Suite 300, Katy, TX 77494
                  </p>
                </div>
                <div>
                  <p className="text-purple-500 font-bold tracking-wider text-sm">
                    TAMPA
                  </p>
                  <p className="text-gray-400">
                    401 E Jackson St. Suite 3300, Tampa, FL 33602
                  </p>
                </div>
                <div>
                  <p className="text-purple-500 font-bold tracking-wider text-sm">
                    MEXICO CITY
                  </p>
                  <p className="text-gray-400">
                    Carracci 60, Col. Mixcoac, CDMX, 04740
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <p className="text-gray-400 text-sm text-center">
              &copy; 2025 Media Direct services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
