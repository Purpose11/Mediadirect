"use client";

import Image from "next/image";
import { useState } from "react";
import metro from "@/images/metro.png";
import daisy from "@/images/daisylogo.png";
import dallas from "@/images/dallaslogo.png";
import rac from "@/images/raclogo.png";
import wm from "@/images/wm.png";
import otc from "@/images/otclogo.png";
import love from "@/images/love.png";
import zeus from "@/images/zeus.png";
import barri from "@/images/barri.png";
import dolex from "@/images/dolex.png";
import toll from "@/images/toll.png";
import hicone from "@/images/hiconelogo.png";
import uta from "@/images/uta.png";
import buzz from "@/images/burball.png";
import texas from "@/images/lol.png";
const clients = [
  { name: "Metro by T-Mobile", logo: metro },
  { name: "Daisy", logo: daisy },
  { name: "RAC", logo: rac },
  { name: "City of Dallas", logo: dallas },
  { name: "Waste Management", logo: wm },
  {
    name: "OTC Global Holdings",
    logo: otc,
  },
  { name: "Dallas Love Field", logo: love },
  { name: "Zeus", logo: zeus },
  {
    name: "Barri Financial Group",
    logo: barri,
  },
  { name: "DolEx", logo: dolex },
  { name: "Toll Brothers", logo: toll },
  { name: "Hi-Cone", logo: hicone },
  { name: "UTA", logo: uta },
  { name: "BuzzBallz", logo: buzz },
  {
    name: "Texas Workforce Commission",
    logo: texas,
  },
];

export default function ClientGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y divide-white/10">
      {clients.map((client: any, index: number) => (
        <div
          key={client.name}
          className={`
            relative aspect-[4/3] flex items-center justify-center group
            ${index % 5 !== 4 ? "lg:border-r" : ""} 
            ${index % 3 !== 2 ? "md:border-r md:last:border-r-0" : ""} 
            ${index % 2 !== 1 ? "sm:border-r sm:last:border-r-0" : ""}
            border-white/10
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative w-4/5 h-4/5">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              fill
              className={`
                object-contain transition-all duration-300
                ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-50"
                    : "opacity-100"
                }
                filter grayscale hover:grayscale-0
              `}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
