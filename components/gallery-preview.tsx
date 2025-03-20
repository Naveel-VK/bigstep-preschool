import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-accent rounded-full mr-2"></div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                Gallery
              </h2>
              <div className="h-1 w-12 bg-accent rounded-full ml-2"></div>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Take a peek into the vibrant world of Bigstep Preschool.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Art+Class"
                alt="Gallery image 1"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Outdoor+Play"
                alt="Gallery image 2"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Story+Time"
                alt="Gallery image 3"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Music+Class"
                alt="Gallery image 4"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Science+Activity"
                alt="Gallery image 5"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Craft+Time"
                alt="Gallery image 6"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Sports+Day"
                alt="Gallery image 7"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Graduation+Day"
                alt="Gallery image 8"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/gallery">
            <Button className="rounded-full px-8 py-6 h-auto text-lg shadow-lg transition-transform hover:scale-105">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

