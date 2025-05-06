"use client";

import { useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  publication?: string
  logo?: string
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The dedicated team that supported NIMASA at MediaDirect AI pursued client’s interest with enthusiasm. Their ability to understand complex government agency requirements, navigate challenges, and deliver outstanding results is a testament to their remarkable skills and dedication. You’ll feel supported and valued at every stage of your journey with MediaDirect AI",
      author: "Dakuku Peterside",
      position: "Former CEO",
      company: "Nigerian Maritime Administration and Safety Agency (NIMASA)",
      publication: "The Wall Street Journal",
      logo: "/mansion-global-logo.svg",
    },
    {
      quote:
        "Working with this team has transformed our marketing approach completely. Their strategic insights and creative solutions have delivered measurable results that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Horizon Enterprises",
      publication: "Business Weekly",
      logo: "/horizon-logo.svg",
    },
    {
      quote:
        "The level of dedication and expertise we've experienced has been exceptional. They truly understand our industry and have helped us connect with our audience in meaningful ways.",
      author: "Michael Chen",
      position: "CEO",
      company: "Nexus Technologies",
      publication: "Tech Insider",
      logo: "/nexus-logo.svg",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <div className="bg-[#fdf9e7] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-900">Word on the Street</h2>
          <p className="text-xl md:text-2xl text-gray-800 mt-2">What Our Clients Are Saying</p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="flex flex-col items-center">
                  <blockquote className="text-center text-gray-800 mb-8 md:text-lg">{testimonial.quote}</blockquote>

                  {/* {testimonial.logo && (
                    <div className="mb-4 h-12 flex items-center justify-center">
                      <Image
                        src={testimonial.logo || "/placeholder.svg"}
                        alt={`${testimonial.company} logo`}
                        width={100}
                        height={48}
                        className="h-auto max-h-12 w-auto"
                      />
                    </div>
                  )} */}

                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}, {testimonial.position}
                    </p>
                    <p className="text-gray-700">{testimonial.company}</p>
                    {testimonial.publication && <p className="text-gray-600">{testimonial.publication}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-3 h-3 p-0 rounded-full ${
                selectedIndex === index ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
