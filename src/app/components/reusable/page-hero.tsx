interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  height?: string
  overlayOpacity?: string
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = "/images/city-lights-bg.png",
  height = "h-[400px]",
  overlayOpacity
}: PageHeroProps) {
  return (
    <section
      className={`relative ${height} w-full bg-cover bg-center bg-no-repeat flex items-center`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Dark overlay for better text readability */}
       <div className={`absolute ${overlayOpacity} inset-0 bg-gradient-to-br from-gray-900/80 to-black/60`} />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">{title}</h1>
        {/* Red underline accent */}
        <div className="w-24 h-1 bg-[#34c85a] mb-4"></div>

        {/* Optional subtitle */}
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
