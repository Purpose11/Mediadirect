"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import {MedidirectAiLogo} from "./logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95" : "transparent"}`}
    >
      <div className="relative">
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <MedidirectAiLogo />
           

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#aboutus"
                className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#think-tank"
                className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors"
              >
                Think Tank
              </Link>
              <Link
                href="/contact"
                className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase text-sm px-6 py-2 rounded-sm transition-colors"
              >
                Connect
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black absolute w-full transition-all duration-300 ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-white uppercase text-sm tracking-wider py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-white uppercase text-sm tracking-wider py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#think-tank"
              className="text-white uppercase text-sm tracking-wider py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Think Tank
            </Link>
            <Link
              href="/contact"
              className="text-white uppercase text-sm tracking-wider py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase text-sm px-6 py-2 rounded-sm transition-colors inline-block w-full text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
