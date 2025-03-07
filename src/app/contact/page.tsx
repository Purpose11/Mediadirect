"use client";

import { Mail, Calendar } from "lucide-react";
import Link from "next/link";
import ContactModal from "../components/ContactModal";
import { useState } from "react";

export default function ContactSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-[#1A1A1A] py-32 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          Tell us your story
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
          <button
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-4 text-white transition-colors duration-300"
            onClick={() => setModalOpen(true)}
          >
            <span className="absolute inset-0 rounded-full border border-red-600"></span>
            <span className="relative">CONTACT US</span>
            <Mail
              className="w-5 h-5 relative transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
          </button>

          {/* BOOK A CALL button opens HubSpot Meetings in a new tab */}
          <a
            href="https://meetings.hubspot.com/adebayo-fatai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-4 text-white transition-colors duration-300"
          >
            <span className="absolute inset-0 rounded-full border border-red-600"></span>
            <span className="relative">BOOK A CALL</span>
            <Calendar
              className="w-5 h-5 relative transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Join Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Join Us</h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We're always looking to collaborate with new clients as well as new
            suppliers. Please don't hesitate to get in touch today!
          </p>
        </div>
        {isModalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </div>
    </section>
  );
}
