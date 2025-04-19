"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { LightbulbIcon, BrainCircuit, ArrowUpRightFromSquare } from "lucide-react"

export default function ThinkTankPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(headingRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subheadingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(cardsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.4")
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden" id="#think-tank">
      {/* Geometric background patterns */}
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

      <div className="relative z-10 container w-[90%] mx-auto px-4 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We're Your Think Tank.
          </h1>
          <p ref={subheadingRef} className="text-xl md:text-2xl text-white/90 font-light">
            Scientific rigor meets moonshots
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div
            ref={el => {cardsRef.current[0] = el}}
            className="bg-black backdrop-blur-sm p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <LightbulbIcon className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Build Knowledge</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We apply the rigor of scientific research to moonshot concepts to help you steer your projects in an
              uncertain world. Build the critical knowledge pieces for your product and journey with us. Our clients
              have complimentary access to our knowledge factory, the Center of Excellence on Human-centered Digital
              Economy.
            </p>
          </div>

          {/* Column 2 */}
          <div
             ref={el => {cardsRef.current[1] = el}}
            className="bg-black backdrop-blur-sm p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <BrainCircuit className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Convene Experts</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We'll convene the top global experts in the industry to support your endeavors. With our guidance and
              introductions to the right people, you have the optimum setup to shape and achieve your mission and goals.
              You will have a dedicated engagement team at your side, responsible for project delivery and
              post-engagement advisory.
            </p>
          </div>

          {/* Column 3 */}
          <div
             ref={el => {cardsRef.current[2] = el}}
            className="bg-black backdrop-blur-sm p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <ArrowUpRightFromSquare className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Thought Leadership</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Acting as a platform to enable next-generation digital technologies, knowledge and economic models, we
              help you take your business to the next level. With our support, you can drive action toward ambitious
              goals like substantially and sustainably improving the wellbeing of humankind and the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
