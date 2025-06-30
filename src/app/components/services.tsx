"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    image: "/images/website-design-image.jpg",
    title: "Web Design & Mobile App Development",
    description:
      "We design and develop accessible websites and mobile applications for individuals, businesses, and organizations. ",
    bgColor: "from-blue-900/80 to-black/60",
  },
  {
    id: 2,
    image: "/images/IT-training-image.jpg",
    title: "IT Training Services",
    description:
      "We equip schools, professionals, and organizations with essential digital skills through customized training programs for individuals and corporate teams, digital literacy and assistive technology training for persons with disabilities.",
    bgColor: "from-gray-900/80 to-black/60",
  },
  {
    id: 3,
    image: "/images/consultancy-image.jpg",
    title: "Digital Consultancy Services",
    description:
      "We provide expert consultancy services to organizations looking to integrate accessibility and digital transformation into their operations.",
    bgColor: "from-green-900/80 to-black/60",
  },
  {
    id: 4,
    image: "/images/assistive-technology-image.jpg",
    title: "Assistive Technology Solutions",
    description:
      "We develop, procure, and distribute cutting-edge assistive technologies and devices to enhance digital accessibility. ",
    bgColor: "from-purple-900/80 to-black/60",
  },
];


export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="md:min-h-screen my-2 bg-white md:my-32 ">
      <div className="grid px-2 md:px-0 md:grid-cols-[40%_60%]  md:gap-16 ">
        {/* Left Content */}
        <div className="space-y-8 ">
          <div className="space-y-2">
            <p className="text-gray-600 text-2xl font-medium mb-10 mt-6">What We Do</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Inclusive Technology
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
           We provide inclusive tech solutions—ranging from accessible development to training, consultancy, and assistive tools—that promote digital empowerment and equal opportunities for all, especially persons with disabilities.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors group bg-transparent"
          >
            Explore Services
            <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Right Content - Services Row */}
        <div className="overflow-hidden">
          <div className="flex flex-col mt-4 md:mt-0 md:flex-row gap-4 h-[600px] overflow-hidden">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out ${
                  hoveredCard === service.id ? "flex-[3]" : "flex-1"
                }`}
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
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
