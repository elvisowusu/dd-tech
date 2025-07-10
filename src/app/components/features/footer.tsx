"use client";

import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <a href="#" className="text-2xl font-bold text-black">
                <Image
                  src="/images/DD-logo.png"
                  alt="DD tech logo"
                  width={80}
                  height={80}
                />
              </a>

              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                We believe that technology is the key to breaking barriers and
                creating an inclusive world.
              </p>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <p className="text-lg text-white">Address:</p>
              <p>Asofan new station, opposite A wise Hotel, Accra</p>
              <p>Winneba, University of Education Campus</p>
              <p>info@ddtech.com.gh</p>
              <p>contact@ddtech.com.gh</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-[#34c85a] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#34c85a] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#34c85a] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#34c85a] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Explore</h3>
            <nav className="space-y-3">
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Solutions</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Project Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Project</h3>
            <nav className="space-y-3">
              <Link
                href="http://boafo.co"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Boafo Accessibility Project
              </Link>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Legal</h3>
            <nav className="space-y-3">
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-700">
        <p className="text-gray-400 text-sm mb-4 sm:mb-0">
          © 2025 Immersive360. All rights reserved
        </p>
      </div>
    </footer>
  );
}
