import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 md:py-24 rounded-b-3xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Programs</h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Discover our comprehensive early education programs designed for different age groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden border-2 border-primary/10 shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-video w-full overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Kindergarten"
                alt="Kindergarten Program"
                width={500}
                height={300}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            <CardHeader className="relative">
              <div className="absolute -top-8 left-4 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                Ages 5-6
              </div>
              <CardTitle className="text-primary text-2xl mt-2 group-hover:text-accent transition-colors duration-300">
                Kindergarten
              </CardTitle>
              <CardDescription>Preparing for primary school</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our Kindergarten program prepares children for primary school with a focus on literacy, numeracy, and
                social skills. Children engage in structured learning activities while still enjoying the benefits of
                play-based education.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Reading and writing readiness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  Mathematical concepts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  Science exploration
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full rounded-full">Enroll Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-2 border-secondary/10 shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-video w-full overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=500&text=UKG"
                alt="UKG Program"
                width={500}
                height={300}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
            </div>
            <CardHeader className="relative">
              <div className="absolute -top-8 left-4 bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                Ages 4-5
              </div>
              <CardTitle className="text-secondary text-2xl mt-2 group-hover:text-accent transition-colors duration-300">
                Upper Kindergarten (UKG)
              </CardTitle>
              <CardDescription>Building on foundations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                UKG builds on the foundation laid in LKG, introducing more complex concepts and skills. Children develop
                pre-reading and pre-writing skills, basic mathematics, and enhanced social interaction.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Alphabet recognition and phonics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  Number concepts and counting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  Creative expression
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full rounded-full">Enroll Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-2 border-accent/10 shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-video w-full overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=500&text=LKG"
                alt="LKG Program"
                width={500}
                height={300}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
            </div>
            <CardHeader className="relative">
              <div className="absolute -top-8 left-4 bg-accent text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                Ages 3-4
              </div>
              <CardTitle className="text-accent text-2xl mt-2 group-hover:text-primary transition-colors duration-300">
                Lower Kindergarten (LKG)
              </CardTitle>
              <CardDescription>First steps in learning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our LKG program introduces young children to the school environment through play-based learning.
                Children develop basic language, cognitive, and motor skills while learning to socialize with peers.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Language development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  Fine and gross motor skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                  Social interaction
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full rounded-full">Enroll Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Curriculum</h2>
              <p className="text-gray-600 md:text-lg">
                At Bigstep Preschool, we follow a comprehensive curriculum that balances academic learning with play and
                creative activities. Our approach is designed to nurture curiosity, critical thinking, and a love for
                learning.
              </p>
              <ul className="space-y-3 text-gray-600 md:text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-primary mr-3"></span>
                  Language and Literacy Development
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3"></span>
                  Mathematical Thinking
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-accent mr-3"></span>
                  Scientific Exploration
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                  Creative Arts
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                  Physical Development
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-orange-500 mr-3"></span>
                  Social and Emotional Growth
                </li>
              </ul>
            </div>
            <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Curriculum+Activities"
                alt="Curriculum Activities"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-all hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Join Our Family
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Ready to Enroll?</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Contact us today to schedule a visit or learn more about our enrollment process.
          </p>
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

