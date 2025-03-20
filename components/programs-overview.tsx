import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsOverview() {
  return (
    <section className="container py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-secondary rounded-full mr-2"></div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Programs
            </h2>
            <div className="h-1 w-12 bg-secondary rounded-full ml-2"></div>
          </div>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Comprehensive early education programs designed for different age groups.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
        <Card className="group overflow-hidden border-2 border-primary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
          <CardHeader>
            <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300">
              Kindergarten
            </CardTitle>
            <CardDescription>Ages 5-6 years</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Preparing children for primary school with a focus on literacy, numeracy, and social skills.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/programs" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="group overflow-hidden border-2 border-secondary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="h-2 bg-gradient-to-r from-secondary to-yellow-400"></div>
          <CardHeader>
            <CardTitle className="text-secondary group-hover:text-accent transition-colors duration-300">
              Upper Kindergarten (UKG)
            </CardTitle>
            <CardDescription>Ages 4-5 years</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Building on the foundation laid in LKG with more complex concepts and skills.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/programs" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-full group-hover:bg-secondary group-hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="group overflow-hidden border-2 border-accent/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="h-2 bg-gradient-to-r from-accent to-blue-400"></div>
          <CardHeader>
            <CardTitle className="text-accent group-hover:text-primary transition-colors duration-300">
              Lower Kindergarten (LKG)
            </CardTitle>
            <CardDescription>Ages 3-4 years</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Introducing young children to the school environment through play-based learning.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/programs" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Link href="/programs">
          <Button className="rounded-full px-8 py-6 h-auto text-lg shadow-lg transition-transform hover:scale-105">
            View All Programs
          </Button>
        </Link>
      </div>
    </section>
  )
}

