import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-50 to-blue-50 border-t-4 border-primary/20 pt-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold text-primary transition-transform group-hover:scale-110">
                Bigstep
              </span>
              <span className="text-xl font-medium transition-transform group-hover:scale-110">Preschool</span>
            </Link>
            <p className="text-sm text-gray-600">Where little minds take big steps towards a bright future.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary transition-transform hover:scale-125">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-transform hover:scale-125">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-transform hover:scale-125">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-primary">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-primary">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Kindergarten
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Upper Kindergarten (UKG)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-primary transition-all hover:translate-x-1 inline-block"
                >
                  → Lower Kindergarten (LKG)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-primary">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                BIGSTEP PRESCHOOL
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                NEAR DODDABALLE, KENGERI
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                BENGALURU 560060, INDIA
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Swati: 8792525359
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                naveelvk@gmail.com
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-gray-500">
          <div className="py-6 bg-rainbow rounded-t-3xl mt-8">
            <p>&copy; {new Date().getFullYear()} Bigstep Preschool. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

