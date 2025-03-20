"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-primary transition-transform group-hover:scale-110">Bigstep</span>
            <span className="text-xl font-medium transition-transform group-hover:scale-110">Preschool</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-base font-medium transition-all hover:text-primary hover:scale-110">
            Home
          </Link>
          <Link href="/about" className="text-base font-medium transition-all hover:text-primary hover:scale-110">
            About
          </Link>
          <Link href="/programs" className="text-base font-medium transition-all hover:text-primary hover:scale-110">
            Programs
          </Link>
          <Link href="/gallery" className="text-base font-medium transition-all hover:text-primary hover:scale-110">
            Gallery
          </Link>
          <Link href="/contact" className="text-base font-medium transition-all hover:text-primary hover:scale-110">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="rounded-full px-6 shadow-md transition-transform hover:scale-105">Enroll Now</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg rounded-b-2xl animate-in slide-in-from-top duration-300">
          <div className="container py-6 flex flex-col space-y-6">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-primary flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-primary flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
              About
            </Link>
            <Link
              href="/programs"
              className="text-lg font-medium transition-colors hover:text-primary flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              Programs
            </Link>
            <Link
              href="/gallery"
              className="text-lg font-medium transition-colors hover:text-primary flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-primary flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full rounded-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

