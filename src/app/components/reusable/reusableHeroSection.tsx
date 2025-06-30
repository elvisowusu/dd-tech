"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ImmersiveHeroProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  backgroundImage?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
}

export function ReusableHeroSection({
  title = "STEP INTO THE FUTURE WITH IMMERSIVE 360",
  subtitle = "Turn real-world spaces into digital twins and virtual tours to optimize operations and enhance decision-making.",
  primaryButtonText = "Request a Demo",
  secondaryButtonText = "How It Works",
  backgroundImage = "/images/landing-hero-image.jpg",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: ImmersiveHeroProps) {
  return (
    <section className={`relative min-h-screen rounded-4xl bg-black text-white overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="image here"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto  px-4 py-20 lg:pt-54">
        <div className="">
          <div className="space-y-8 px-16">
            <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight tracking-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onPrimaryClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                {primaryButtonText}
              </Button>

              <Button
                variant="outline"
                onClick={onSecondaryClick}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>

          

           
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
