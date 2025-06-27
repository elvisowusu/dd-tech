import { AboutUs } from "./components/aboutUs";
import HeroSection from "./components/heroSection";
import PartnerSection from "./components/partnerWithUs";
import Services from "./components/services";
import ValuesSection from "./components/valuesSection";
import WhyChooseSection from "./components/whyChooseUs";



export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <ValuesSection/>
    <Services/>
    <WhyChooseSection/>
    <PartnerSection/>

    </>
  );
}
