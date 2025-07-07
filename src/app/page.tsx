"use client";
import { useState,useEffect } from "react";
import { AboutUs } from "./components/aboutUs";
import HeroSection from "./components/heroSection";
import PartnerSection from "./components/partnerWithUs";
import Services from "./components/services";
import ValuesSection from "./components/valuesSection";
import WhyChooseSection from "./components/whyChooseUs";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [isvisible,setIsvisible] = useState(false);


 

  useEffect(()=>{
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  })
  return (
    <>
      <div className="relative overflow-hidden  ">
        <HeroSection />
        <AboutUs />
        <ValuesSection />
        <Services />
        <WhyChooseSection />
        <PartnerSection />
        {isvisible && (
          <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" fixed z-50 bottom-5 space-x-2 text-gray-300 right-5 hover:text-white transition-colors group"
        >
          
          <div className="w-9 h-9 bg-[#34c85a] rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
            <ArrowUp className="w-5 h-5" />
          </div>
        </button>
        )}
      </div>
    </>
  );
}
