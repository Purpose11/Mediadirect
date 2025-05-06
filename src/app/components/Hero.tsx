"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Create animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate the hero section elements
    tl.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(taglineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(descriptionRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")

    // Add a subtle parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      gsap.to(headingRef.current, {
        x: xPos * 0.5,
        y: yPos * 0.5,
        duration: 1,
        ease: "power1.out",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={headingRef}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 md:mb-8 tracking-tight leading-none"
        >
          WE GROW BRANDS.
        </h1>
        <p
          ref={taglineRef}
          className="font-medium text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 md:mb-6"
        >
          Modern, intelligent, strategic AI-powered solutions for growth.
        </p>
        <p ref={descriptionRef} className="font-normal text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
          We combine marketing, technology, data and content strategies to position brands.
        </p>
      </div>

      {/* Add inline keyframes for the gradient animation */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}
