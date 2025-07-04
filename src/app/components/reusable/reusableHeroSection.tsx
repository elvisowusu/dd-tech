// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// interface ImmersiveHeroProps {
//   title?: string
//   subtitle?: string
//   primaryButtonText?: string
//   secondaryButtonText?: string
//   backgroundImage?: string
//   onPrimaryClick?: () => void
//   onSecondaryClick?: () => void
//   className?: string
// }

// export function ReusableHeroSection({
//   title = "STEP INTO THE FUTURE WITH IMMERSIVE 360",
//   subtitle = "Turn real-world spaces into digital twins and virtual tours to optimize operations and enhance decision-making.",
//   primaryButtonText = "Request a Demo",
//   secondaryButtonText = "How It Works",
//   backgroundImage = "/images/landing-hero-image.jpg",
//   onPrimaryClick,
//   onSecondaryClick,
//   className = "",
// }: ImmersiveHeroProps) {
//   return (
//     <section className={`relative lg:min-h-screen p-2 mx-0 md:p-6  md:rounded-3xl bg-black text-white overflow-hidden ${className}`}>
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={backgroundImage}
//           alt="image here"
//           fill
//           className="object-cover opacity-80"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 md:container md:mx-auto  md:px-4 py-20 lg:pt-40">
//         <div className="">
//           <div className="space-y-8 px-2 lg:px-16">
//             <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight tracking-tight">
//               {title}
//             </h1>

//             <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">{subtitle}</p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 onClick={onPrimaryClick}
//                 className="bg-[#34c85a] hover:bg-[#34c85a] text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 {primaryButtonText}
//               </Button>

//               <Button
//                 variant="outline"
//                 onClick={onSecondaryClick}
//                 className="border-[#34c85a] text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
//               >
//                 {secondaryButtonText}
//               </Button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom gradient fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
//     </section>
//   )
// }

// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Navbar from "../features/navbar";

// const services = [
//   {
//     id: 1,
//     image: "/images/landing-hero-image.jpg",
//     title: "Digital Drivers Technology (DDTech)",
//     description:
//       "Closing the Gap Through Technology,Empowering Inclusion, Transforming Lives",
//     color: "from-blue-500/40 to-black/20",
//   },
//   {
//     id: 2,
//     image: "/images/website-design-image.jpg",
//     title: "Web Design & Mobile App Development",
//     description:
//       "We design and develop accessible websites and mobile applications for individuals, businesses, and organizations.",
//     color: "from-blue-500/40 to-black/20",
//   },
//   {
//     id: 3,
//     image: "/images/IT-training-image.jpg",
//     title: "IT Training Services",
//     description:
//       "We equip schools, professionals, and organizations with essential digital skills through customized training programs for individuals and corporate teams, digital literacy and assistive technology training for persons with disabilities.",
//     color: "from-gray-400/40 to-black/20",
//   },
//   {
//     id: 4,
//     image: "/images/consultancy-image.jpg",
//     title: "Digital Consultancy Services",
//     description:
//       "We provide expert consultancy services to organizations looking to integrate accessibility and digital transformation into their operations.",
//     color: "from-green-600/30 to-black/20",
//   },
//   {
//     id: 5,
//     image: "/images/assistive-technology-image.jpg",
//     title: "Assistive Technology Solutions",
//     description:
//       "We develop, procure, and distribute cutting-edge assistive technologies and devices to enhance digital accessibility.",
//     color: "from-purple-600/30 to-black/20",
//   },
// ];

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % services.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % services.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const currentService = services[currentSlide];

//   return (
//     <section className="relative w-full top-0 h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
//       {/* Sliding Background Images */}
//       <div className="absolute inset-0 overflow-hidden">
//         <Navbar />
//         <div
//           className="flex h-full transition-transform duration-1000 ease-in-out"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//             width: `${services.length * 100}%`,
//           }}
//         >
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className="relative w-screen h-screen flex-shrink-0"
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//               <div
//                 className={`absolute inset-0 bg-gradient-to-r ${service.color}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex items-center justify-center">
//             {/* Text Content */}
//             <div className="text-white space-y-6 text-center max-w-4xl">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                 {currentService.title}
//               </h1>

//               <p className="text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
//                 {currentService.description}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-6"
//                 >
//                   Get Started
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 bg-transparent"
//                 >
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex items-center space-x-6">
//           {/* Dots Indicator */}
//           <div className="flex space-x-2">
//             {services.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? "bg-white scale-125"
//                     : "bg-white/50 hover:bg-white/75"
//                 }`}
//                 onMouseEnter={() => setIsAutoPlaying(false)}
//                 onMouseLeave={() => setIsAutoPlaying(true)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Arrow Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <ChevronLeft className="h-6 w-6 text-white" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <ChevronRight className="h-6 w-6 text-white" />
//       </button>

//       {/* Progress Bar */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
//         <div
//           className="h-full bg-white transition-all duration-300 ease-linear"
//           style={{
//             width: `${((currentSlide + 1) / services.length) * 100}%`,
//           }}
//         />
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Navbar from "../features/navbar";

const services = [
  {
    id: 1,
    image: "/images/assistive-technology-image.jpg",
    title: "Digital Drivers Technology (DDTech)",
    description:
      "Closing the Gap Through Technology,Empowering Inclusion, Transforming Lives",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 2,
    image: "/images/website-design-image.jpg",
    title: "Web Design & Mobile App Development",
    description:
      "We design and develop accessible websites and mobile applications for individuals, businesses, and organizations.",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 3,
    image: "/images/IT-training-image.jpg",
    title: "IT Training Services",
    description:
      "We equip schools, professionals, and organizations with essential digital skills.",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 4,
    image: "/images/consultancy-image.jpg",
    title: "Digital Consultancy Services",
    description:
      "We provide expert consultancy services to organizations.",
    color: "from-gray-600/70 to-black/20",
  },
  {
    id: 5,
    image: "/images/assistive-technology-image.jpg",
    title: "Assistive Technology Solutions",
    description:
      "We develop, procure, and distribute .",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentService = services[currentSlide];

  return (
    <section className="relative w-full top-0 h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <Navbar />
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / services.length)}%)`,
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
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="text-white space-y-6 text-center max-w-5xl">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight">
                {currentService.title}
              </h1>
              <p className="text-xl md:text-2xl text-center opacity-90  leading-relaxed">
                {currentService.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button
                  size="lg"
                  className="bg-[#34c85a] text-white hover:bg-[#83ef9e] text-lg px-8 py-6"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#34c85a] text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 bg-transparent"
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

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

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

