"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnerSection() {
  return (
    <div className=" p-4 sm:p-10 my-10 lg:p-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-description">
            Ready to embrace digital accessibility and create an inclusive
            future? Let&#39;s close the gap together—through technology!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                <h3 className="text-2xl font-bold text-gray-900">Email Us</h3>
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
                <h3 className="text-3xl font-bold text-gray-900">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you&#39;re a business, school, or individual looking
                  for web solutions, IT training, or assistive technology,
                  we&#39;re here to help.
                </p>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-[#34c85a] hover:bg-[#76ff98] text-white py-6 text-lg font-semibold rounded-xl">
                  Contact Us Today
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-6 text-lg font-semibold rounded-xl bg-transparent"
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
