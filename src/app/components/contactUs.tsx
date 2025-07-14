"use client";

import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactBanner() {
  return (
    <section
      id="contact-section"
      className="relative  bg-[url('/images/employees.jpg')]   bg-cover bg-center bg-no-repeat py-24 px-4 sm:px-6 lg:px-16 flex items-center justify-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0 " />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get in Touch with Us
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Ready to embrace digital accessibility and create an inclusive future?
          Lets close the gap together—through technology!
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Block */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left space-y-3">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#34c85a]" /> Our Emails
            </h3>
            <p className="text-white text-sm">info@ddtech.com.gh</p>
            <p className="text-white text-sm">contact@ddtech.com.gh</p>
          </div>

          {/* Call Block */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left space-y-3">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#34c85a]" /> Call Us
            </h3>
            <p className="text-white text-sm">0202621904</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ddtech.com.gh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="bg-[#34c85a] hover:bg-[#2ca74e] text-white py-6 text-lg font-semibold rounded-xl w-full sm:w-auto">
              Email Us Today
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-2 border-white text-black hover:bg-white hover:text-black py-6 text-lg font-semibold rounded-xl w-full sm:w-auto"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
