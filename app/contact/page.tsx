import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-pink-100 to-blue-100 py-12 md:py-24 rounded-b-3xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                We'd love to hear from you. Get in touch with us for any inquiries or to schedule a visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our programs or enrollment process? Fill out the form and we'll get back to you as
                soon as possible.
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">
                        BIGSTEP PRESCHOOL, NEAR DODDABALLE, KENGERI, BENGALURU 560060, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">Swati: 8792525359</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">naveelvk@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-full">
            <div className="bg-white rounded-lg shadow-lg border-2 border-primary/20 h-full overflow-hidden">
              <div className="p-4 bg-primary text-white font-bold text-lg">Contact Form</div>
              <div className="h-[600px] w-full">
                {/* Replace this iframe src with your actual Google Form embed URL */}
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdFxYb7hFweAKEbEmytIeJ3lML-5ye_-Vr7e8yk-mwEGVRpbA/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                >
                  Loading Google Form...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8382728328396!2d77.4826!3d12.9123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQ0LjMiTiA3N8KwMjgnNTcuNCJF!5e0!3m2!1sen!2sin!4v1616661315372!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full"
                title="Bigstep Preschool Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

