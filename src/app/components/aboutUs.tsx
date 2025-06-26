import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 ">
        <div className="">
          {/* Left Content - Image with Overlay */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={"/images/landing-hero-image.jpg"}
                alt="Digital accessibility and inclusion workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Content - Text */}
        <div className="space-y-6 mt-12">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-gray-600 uppercase tracking-wider">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mt-12 font-bold text-gray-900 leading-tight"></h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Digital Drivers Technology (DDTech), we believe that technology
              is the key to breaking barriers and creating an inclusive world.
              Based in Ghana, we are committed to promoting disability
              inclusion, accessibility, and digital empowerment in the tech
              space. Our innovative solutions ensure that individuals,
              businesses, and organizations harness the power of technology to
              enable independence and equal opportunities for all.
            </p>
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              className="group px-9 py-4 text-base font-semibold rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
