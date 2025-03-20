import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 md:py-24 rounded-b-3xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Gallery</h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Take a peek into the vibrant world of Bigstep Preschool through our photo gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50 p-1 rounded-full">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="classroom"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Classroom
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Activities
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Events
              </TabsTrigger>
              <TabsTrigger
                value="facilities"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Facilities
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Gallery+Image+${i + 1}`}
                    alt={`Gallery image ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="classroom" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Classroom+${i + 1}`}
                    alt={`Classroom image ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Activity+${i + 1}`}
                    alt={`Activity image ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Event+${i + 1}`}
                    alt={`Event image ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilities" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-lg border-4 border-white group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Facility+${i + 1}`}
                    alt={`Facility image ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

