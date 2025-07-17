import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 " id="contact-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="mb-12">
              <p className="text-[#34c85a] font-medium mb-2">Contact us</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get in Touch with Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl">
                We&#39;re here to answer your questions, discuss your project,
                and help you find the best solutions for your software needs.
                Reach out to us, and let&#39;s start building something great
                together.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Prefer a Direct Approach?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#34c85a]" />
                  <span className="text-gray-700">0202621904</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#34c85a]" />
                  <span className="text-gray-700">info@ddtech.com.gh</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#34c85a]" />
                  <span className="text-gray-700">
                    Monday to Friday, 9 AM - 5 PM (GMT)
                  </span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 relative flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Interactive Map</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Office Location */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Visit Our Office
              </h4>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#34c85a] mt-0.5" />
                <span className="text-gray-700">
                  Unnumbered House, Refrigerator Street, Effutu Municipality,
                  Winneba-C/R, Ghana.
                </span>
              </div>

              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
              >
                Get a Direction
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Let&#39;s Talk About Your Project
            </h3>

            <form className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="We'll get back to you here"
                  className="mt-1"
                />
              </div>

              <div>
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Let us know who you represent"
                  className="mt-1"
                />
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="mt-1"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help"
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button className="w-full bg-[#34c85a] hover:bg-[#2ca74e] text-white py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
