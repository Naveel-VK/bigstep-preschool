import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ProgramsOverview from "@/components/programs-overview"
import TestimonialsSection from "@/components/testimonials-section"
import GalleryPreview from "@/components/gallery-preview"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Welcome
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Welcome to Bigstep Preschool
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Where little minds take big steps towards a bright future.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 pt-4">
            <div className="flex justify-center">
              <Link href="/about">
                <Button className="rounded-full px-8 py-6 h-auto text-lg shadow-lg transition-transform hover:scale-105">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProgramsOverview />

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Our Advantages
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Why Choose Bigstep?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                We provide a nurturing environment where children can learn, play, and grow.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
            <div className="grid gap-2 rounded-3xl border-2 border-primary/10 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Experienced Teachers</h3>
              <p className="text-gray-600">
                Our dedicated staff brings years of experience in early childhood education.
              </p>
            </div>
            <div className="grid gap-2 rounded-3xl border-2 border-secondary/10 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-secondary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-secondary">Safe Environment</h3>
              <p className="text-gray-600">Safety is our priority, with secure facilities and careful supervision.</p>
            </div>
            <div className="grid gap-2 rounded-3xl border-2 border-accent/10 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-accent text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-accent">Holistic Development</h3>
              <p className="text-gray-600">We focus on academic, social, emotional, and physical development.</p>
            </div>
          </div>
        </div>
      </section>

      <GalleryPreview />
      <TestimonialsSection />

      <section className="container py-16 md:py-24 lg:py-32 bg-dots">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Join Us
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Enroll Your Child Today
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Give your child the best start in life with Bigstep Preschool.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 pt-4">
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="rounded-full px-8 py-6 h-auto text-lg shadow-lg transition-transform hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

