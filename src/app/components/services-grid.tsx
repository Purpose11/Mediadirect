"use client";

import type React from "react";

import { MonitorPlay, Lightbulb, Video, BarChart3, Presentation } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: <MonitorPlay className="w-12 h-12 text-[#990899]" />,
    title: "BRANDING AND MARKETING STRATEGY",
    items: [
      "Brand Positioning",
      "Consumer Insights",
      "Brand Architecture",
      "Journey Mapping",
      "Messaging Strategy",
      "Research",
      "Channel Planning",
    ],
  },
  {
    icon: < Presentation className="w-12 h-12 text-[#990899]" />,
    title: "STRATEGIC COMMUNICATIONS PLANNING",
    items: [
      "Media Relations",
      "Storytelling",
    "Issues Management",
    "Reputation Management",
    "Crisis Communications",

    ],
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#990899]" />,
    title: "CREATIVE CONCEPTING AND SERVICES",
    items: [
      "Brand Identity",
      "Concepting and Ideation",
      "Graphic Design",
      "Copywriting",
      "Digital | Mobile | Social Content",
      "UI Design",
      "TV | Radio | Print | Outdoor",
    ],
  },
  {
    icon: <Video className="w-12 h-12 text-[#990899]" />,
    title: "CONTENT AND PRODUCTION SERVICES",
    items: [
      "Video/Graphic/Editorial Production",
      "Post-production",
      "Animation/CGI (2D/3D)",
      "Website Production",
      "Mobile App Production",
      "Influencer Marketing",
    ],
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-[#990899]" />,
    title: "ANALYTICS AND TECHNOLOGY SOLUTIONS",
    items: [
      "Opportunity Assessment",
      "Data Management",
      "Performance Analytics",
      "Reporting & Data Visualization",
      "Optimization Plans",
      "Automation & Machine Learning",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 w-[95%]" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-2xl font-bold mb-8">OUR SERVICES</h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-base uppercase">
        We blend creative content strategy with cutting-edge AI and data intelligence to deliver high-impact results. 
        Our in-house Think Tank understands how to move fast, think smart, and act with precision. 
        We unlock insights for growth, optimizing brand awareness for performance. 
        We’re a digital solution for leading and rising companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-white/10 rounded-lg hover:border-purple-500/50 transition-colors"
          >
            <div className="flex flex-col items-center text-center mb-6">
              {service.icon}
              <h3 className="mt-4 text-xl font-bold leading-tight min-h-[4rem]">
                {service.title}
              </h3>
            </div>
            <div className="divide-y divide-white/10">
              {service.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="py-3 text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
