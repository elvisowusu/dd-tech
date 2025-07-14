"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className=" p-4 sm:p-6 my-10 lg:p-10" id="contact-section">
      <div className="max-w-7xl mx-auto  lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch <br/> with Us</h2>
          <p className="section-description">
            Ready to embrace digital accessibility and create an inclusive
            future? Let&#39;s close the gap together—through technology!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-16 justify-center items-center">
          {/* Left Side - Contact Information */}
          <div className="space-y-12">
            {/* Our Locations */}
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6 text-[#34c85a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Location
                </h3>
                <div className="space-y-1 text-gray-500">
                  <p> Winneba - Central Region, Ghana.</p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start space-x-4">
              <div className=" flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-6 h-6 text-[#34c85a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900"> Our Email</h3>
                <div className="space-y-1 text-gray-500">
                  <p>info@ddtech.com.gh</p>
                  <p>contact@ddtech.com.gh</p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start space-x-4">
              <div className=" flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-6 h-6 text-[#34c85a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Call Us</h3>
                <div className="space-y-1 text-gray-500">
                  <p>0202621904</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Get In Touch Card */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl text-center  font-bold text-gray-900">
                  Reach Out to Our Team
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  Whether you&#39;re a business, school, or individual looking
                  for web solutions, IT training, or assistive technology,
                  we&#39;re here to help.
                </p>
              </div>

              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ddtech.com.gh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#34c85a] hover:bg-[#2ca74e] text-white py-6 text-lg font-semibold rounded-xl">
                    Email Us Today
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-6 text-lg font-semibold rounded-xl bg-transparent"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
