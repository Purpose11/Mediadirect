"use client"

import { useRef } from "react"
import { Linkedin, Youtube, Instagram, Facebook, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import TypeEffect from "./type-effect"
import Image from "next/image"
import about4 from "@/images/about-4.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Purpose() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative h-fit bg-[#fdf9e7] text-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `rgba(${Math.random() * 100 + 50}, ${Math.random() * 50}, ${Math.random() * 200 + 55}, 0.3)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>
        ))}
      </div>
     
        {/* Animated Overlay Elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-700"
          animate={{
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(80px)", opacity: 0.1 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-yellow-400"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(90px)", opacity: 0.1 }}
        />
      </div>
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-10 min-h-fit flex flex-col ">
        <motion.div
          className="w-[80%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
              WHEN YOU FIND YOUR PURPOSE,
              <br />
              YOU BECOME MORE
            </h1>
            <TypeEffect />
            <motion.p
              className="text-gray-600 text-base md:text-lg max-w-2xl mt-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              If you need help with growth strategy to maximize competitive advantages and differentiation, refining or
              communicating your brand's purpose, let's work together! Drop us a note or give us a call. We are always
              happy to discover the what if.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-purple-100 text-gray-800 px-6 py-3 rounded-full transition-all border border-gray-300 hover:border-purple-500"
              >
                <Mail className="w-5 h-5" />
                CONTACT US
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
