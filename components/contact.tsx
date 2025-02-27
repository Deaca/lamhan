import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-custom-light-gray" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-custom-dark-gray mb-4">Contact Us</h2>
          <p className="text-lg text-custom-dark-gray/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="p-6 mb-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-custom-orange" />
                  <div>
                    <h3 className="font-semibold text-custom-dark-gray">Location</h3>
                    <p className="text-custom-dark-gray/80">
                      123 Main Street
                      <br />
                      Vancouver, BC V6B 1A1
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-custom-orange" />
                  <div>
                    <h3 className="font-semibold text-custom-dark-gray">Hours</h3>
                    <p className="text-custom-dark-gray/80">
                      Monday - Friday: 11:00 AM - 9:00 PM
                      <br />
                      Saturday - Sunday: 11:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-custom-orange" />
                  <div>
                    <h3 className="font-semibold text-custom-dark-gray">Phone</h3>
                    <p className="text-custom-dark-gray/80">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-custom-orange" />
                  <div>
                    <h3 className="font-semibold text-custom-dark-gray">Email</h3>
                    <p className="text-custom-dark-gray/80">info@phodelights.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.2440799875366!2d-123.1207147!3d49.2827291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMSdxNy43IlcsIDQ5wrAxNic1OC4zIk4!5e0!3m2!1sen!2sca!4v1645123456789!5m2!1sen!2sca"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-custom-dark-gray mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-custom-dark-gray mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-custom-dark-gray mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-custom-dark-gray mb-2">Phone</label>
                <Input type="tel" placeholder="(123) 456-7890" />
              </div>

              <div>
                <label className="block text-sm font-medium text-custom-dark-gray mb-2">Message</label>
                <Textarea placeholder="How can we help you?" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-custom-orange hover:bg-custom-orange-dark text-custom-white">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

