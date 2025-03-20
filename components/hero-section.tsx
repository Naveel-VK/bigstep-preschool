import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 overflow-hidden relative">
      {/* Decorative elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-300 opacity-20 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 rounded-full bg-blue-300 opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-green-300 opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-red-300 opacity-20 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-lg">
              Admissions Open for 2025-26
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Where Little Minds Take Big Steps
            </h1>
            <p className="max-w-[600px] text-gray-700 md:text-xl">
              Nurturing young minds with care, creativity, and a comprehensive curriculum designed for holistic
              development.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/programs">
                <Button className="bg-primary hover:bg-primary/90 rounded-full text-lg px-6 py-6 h-auto shadow-lg transition-transform hover:scale-105">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full text-lg px-6 py-6 h-auto border-2 shadow-lg transition-transform hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border-4 border-white transform transition-transform hover:scale-105">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Happy+Children+Learning"
                alt="Happy children learning and playing at Bigstep Preschool"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

