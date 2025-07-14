import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <section className=" p-4 sm:p-10 mt-10 lg:p-16 ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-start md:px-0 px-4">
        {/* Left Content - Image */}
        <div className="flex justify-center ">
          <div className="relative  rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/man-in-wheel.avif"
              alt="Digital accessibility and inclusion workspace"
             
              className="object-cover"
              width={900}
              height={700}
            />
          </div>
        </div>

        {/* Right Content - Text */}
        <div className="space-y-6 mt-6 lg:mt-3 my-4 lg:my-0 text-center lg:text-left">
          <div className="space-y-1">
            <p className="info-header">
              About Us
            </p>
            <h2 className="info-title">
              At Digital Drivers Technology (DDTech)
            </h2>
            <p className="info-description" >
              We believe that technology is the key to breaking barriers and creating
              an inclusive world. Based in Ghana, we are committed to promoting disability
              inclusion, accessibility, and digital empowerment in the tech space.
              Our innovative solutions ensure that individuals, businesses, and organizations
              harness the power of technology to enable independence and equal opportunities for all.
            </p>
          </div>

          <Link href="/about">
            <Button
              variant="outline"
              className="group px-10 py-6 text-base font-semibold rounded-full border-2 border-[#34c85a] text-[#34c85a] hover:bg-[#34c85a] hover:text-white transition-all duration-300"
            >
              Get to Know Us
              <ArrowRight className=" h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
    
  );
};
