import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Bigstep Preschool has been a wonderful experience for my child. The teachers are caring and the curriculum is excellent.",
      author: "Priya S., Parent",
    },
    {
      quote:
        "I've seen tremendous growth in my daughter since she joined Bigstep. The focus on holistic development is impressive.",
      author: "Rahul M., Parent",
    },
    {
      quote: "The staff at Bigstep truly care about each child. My son loves going to school every day!",
      author: "Ananya K., Parent",
    },
    {
      quote: "We chose Bigstep for its balanced approach to education. It's been the perfect foundation for our child.",
      author: "Vikram J., Parent",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-dots">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full mr-2"></div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                What Parents Say
              </h2>
              <div className="h-1 w-12 bg-secondary rounded-full ml-2"></div>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Hear from our community of parents about their experience with Bigstep Preschool.
            </p>
          </div>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="border-none bg-white shadow-xl rounded-2xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                  <CardContent className="pt-8 px-8">
                    <div className="text-6xl font-serif text-primary/20">"</div>
                    <p className="text-lg italic mb-4 text-gray-600">{testimonial.quote}</p>
                  </CardContent>
                  <CardFooter className="text-right font-medium pb-8 px-8">— {testimonial.author}</CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-4 bg-white hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="relative bg-white hover:bg-primary hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

