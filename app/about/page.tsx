import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 md:py-24 rounded-b-3xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                About Bigstep Preschool
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Our story, mission, and commitment to early childhood education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            <p className="text-gray-600 md:text-lg">
              Bigstep Preschool was founded with a vision to provide quality early education in a nurturing environment.
              Since our establishment, we have been committed to helping children take their first big steps in
              learning.
            </p>
            <p className="text-gray-600 md:text-lg">
              Our journey began with a simple belief: every child deserves the best possible start in life. Today, we
              continue to build on that foundation, creating a place where children can explore, discover, and grow into
              confident learners.
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Bigstep+Preschool+Building"
              alt="Bigstep Preschool Building"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-all hover:scale-105 duration-700"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              What We Believe
            </div>
            <h2 className="text-3xl font-bold text-primary">Our Mission & Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  Child-Centered Learning
                </h3>
                <p className="text-gray-600">
                  We believe in placing the child at the center of the learning process, respecting their unique
                  abilities and learning styles.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-secondary to-yellow-400"></div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors duration-300">
                  Safe & Nurturing Environment
                </h3>
                <p className="text-gray-600">
                  We provide a secure and caring atmosphere where children feel comfortable to explore and express
                  themselves.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-accent to-blue-400"></div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors duration-300">
                  Holistic Development
                </h3>
                <p className="text-gray-600">
                  We focus on developing the whole child – intellectually, socially, emotionally, and physically.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-500/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-300"></div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-green-500 group-hover:text-accent transition-colors duration-300">
                  Play-Based Learning
                </h3>
                <p className="text-gray-600">
                  We incorporate play as a fundamental aspect of learning, making education enjoyable and engaging.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-500/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-red-500 to-red-300"></div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-red-500 group-hover:text-accent transition-colors duration-300">
                  Community Engagement
                </h3>
                <p className="text-gray-600">
                  We believe in building strong partnerships with families and the community to enhance children's
                  learning experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-500/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-300"></div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-orange-500 group-hover:text-accent transition-colors duration-300">
                  Continuous Improvement
                </h3>
                <p className="text-gray-600">
                  We are committed to ongoing professional development and improving our programs to provide the best
                  education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our+Dedicated+Team"
              alt="Our Team"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-all hover:scale-105 duration-700"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Our People
            </div>
            <h2 className="text-3xl font-bold text-primary">Our Team</h2>
            <p className="text-gray-600 md:text-lg">
              Our dedicated team of educators brings together experience, passion, and expertise in early childhood
              education. Each member is committed to providing a supportive and stimulating environment where children
              can thrive.
            </p>
            <p className="text-gray-600 md:text-lg">
              Our teachers are not just educators but mentors who guide children through their formative years, helping
              them develop a love for learning that will last a lifetime.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

