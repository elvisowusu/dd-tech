import { ReusableHeroSection } from "./reusable/reusableHeroSection";

export default function HeroSection() {
  return (
    <div className="py-16 lg:py-20">
      <ReusableHeroSection
        title="Digital Drivers Technology (DDTech) "
        subtitle="Closing the Gap Through Technology,Empowering Inclusion, Transforming Lives"
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        backgroundImage="/images/landing-hero-image.jpg"
      />
      <div className="w-3xl bg-white">

      </div>
    </div>
  );
}
