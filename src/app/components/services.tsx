"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/lib/data/servicesData";


export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="md:min-h-screen p-4 sm:p-10 mt-10 lg:p-16 md:max-w-[100rem] mx-auto">
      <div className="grid grid-col-1 items-start px-2 md:px-0 md:grid-cols-[45%_55%]  md:gap-16 ">
        {/* Left Content */}
        <div className="text-center md:text-start">
          <div className="space-y-2">
            <p className="info-header">
              What We Do
            </p>
            <h1 className="info-title">
              Inclusive Technology
            </h1>
          </div>

          <p className="info-description">
            We provide inclusive tech solutions—ranging from accessible
            development to training, consultancy, and assistive tools—that
            promote digital empowerment and equal opportunities for all,
            especially persons with disabilities.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-6 text-base font-semibold rounded-full border-2 border-[#34c85a] text-[#34c85a] hover:bg-[#34c85a] hover:text-white transition-all duration-300"
          >
            Explore Services
            <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Right Content - Services Row */}

        <div className="overflow-hidden">
          <div className="flex flex-col mt-12 md:mt-0 md:flex-row gap-4 h-[600px] overflow-hidden">
            {services.map((service) => (
              <Link
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out h-full ${
                  hoveredCard === service.id ? "flex-[3]" : "flex-1"
                }`}
                key={service.id}
                href={`/services/${service.id}?image=${encodeURIComponent(
                  service.image
                )}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} transition-opacity duration-300`}
                />

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

                {/* Content - Only visible on hover */}
                <div
                  className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
                    hoveredCard === service.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-white space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
