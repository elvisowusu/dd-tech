"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    video: "/videos/company.mp4",
    title: "Digital Drivers Technology (DDTech)",
    description:
      "Closing the Gap Through Technology,Empowering Inclusion, Transforming Lives",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 2,
    video: "/videos/web.mp4",
    title: "Web Design & Mobile App Development",
    description:
      "We design and develop accessible websites and mobile applications for individuals, businesses, and organizations.",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 3,
    video: "/videos/IT.mp4",
    title: "IT Training Services",
    description:
      "We equip schools, professionals, and organizations with essential digital skills.",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 4,
    video: "/videos/consultancy.mp4",
    title: "Digital Consultancy Services",
    description: "We provide expert consultancy services to organizations.",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 5,
    video: "/videos/disability.mp4",
    title: "Assistive Technology Solutions",
    description: "We develop, procure, and distribute .",
    color: "from-gray-600/70 to-black/20",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000); // slower transition

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentService = services[currentSlide];

  return (
    <section className="relative w-full top-0 h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background videos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / services.length)
            }%)`,
            width: `${services.length * 100}%`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative h-screen flex-shrink-0"
              style={{ width: `${100 / services.length}%` }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-white/10"></div>
            </div>
          ))}
        </div> */}
        {/* <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / services.length)
            }%)`,
            width: `${services.length * 100}%`,
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative h-screen flex-shrink-0"
              style={{ width: `${100 / services.length}%` }}
            >
            
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
              />

             
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-white/10"></div>
            </div>
          ))}
        </div> */}
        <div className="relative w-full h-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              {/* Background Video */}
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-white/10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="absolute z-30 mt-24 top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-start justify-start">
            <div className="text-white space-y-6  max-w-5xl">
              <h1 className="text-4xl md:text-7xl  font-bold leading-tight ">
                {currentService.title}
              </h1>
              <p className="text-lg md:text-xl  opacity-90  leading-relaxed">
                {currentService.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 ">
                <Button
                  size="lg"
                  className="bg-[#34c85a] rounded-full text-white hover:bg-[#2ca74e] text-lg px-8 py-6"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#34c85a] rounded-full transition ease-in duration-500 text-white hover:bg-white hover:text-[#34c85a] hover:border-none text-lg px-8 py-6 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / services.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
