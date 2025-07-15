"use client";

import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import PageHero from "../components/reusable/page-hero";
import { motion } from "framer-motion";
import { ValuesOverlayCard } from "../components/valuesOverlayCard";
import { Partners } from "../components/partners";
import WhyChooseSection from "../components/whyChooseUs";
const teamMembers = [
  {
    name: "Sampson Dzivor",
    title: "Co-Founder & CEO ",
    image: "/images/about/sampson.jpg",
    bio: "Visionary leader driving inclusive tech solutions",
    social: {
      linkedin: "https://www.linkedin.com/in/sampson-dzivor/",
      twitter: "#",
      email: "sdzivor76@gmail.com",
    },
  },
  {
    name: "Elvis Owusu Gyasi",
    title: "Chief Technology Officer",
    image: "/images/about/Elvis.jpg",
    bio: "Tech Innovator shaping accessible solutions",
    social: {
      linkedin: "https://www.linkedin.com/in/elvis-gyasi-owusu-0a4044193",
      twitter: "#",
      email: "elvisgyasiowusu24@gmail.com",
    },
  },
  {
    name: "Frank Incoom",
    title: "Graphics Designer",
    image: "/images/about/Frank.jpg",
    bio: "Expert Designer creating impactful visuals",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
    {
    name: "Adwoa Anim",
    title: "Project Manager",
    image: "/images/about/adwoa.jpg",
    bio: "Project Manager ensuring seamless execution",
    social: {
      linkedin: "https://www.linkedin.com/in/nana-adjoa-anim?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "#",
      email: "adjoaanim12@gmail.com",
    },
  },
];
export const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        height="h-[450px]"
        overlayOpacity={80}
        backgroundImage="/images/continent.jpg"
      />

      <section className=" my-10 md:my-32 grid grid-cols-1 lg:grid-cols-2 max-w-[100rem] mx-auto  gap-12 px-6 text-center space-y-12">
        <div className="text-center lg:text-left space-y-4 ">
          {/* Main Heading */}
          <h4 className="info-header">Who we are</h4>
          <h1 className="info-title">Digital Drivers Technology (DDTech),</h1>

          {/* Description Paragraph */}

          <p className="info-description">
            is a social enterprise dedicated to developing accessible technology
            solutions. We believe in the power of innovation to bridge digital
            divides and empower communities.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/images/employees.jpg"
            alt="employee image"
            width={700}
            height={600}
            className="rounded-sm"
          />
        </motion.div>
      </section>
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <p className="info-header">
              Our Team
            </p>
            <h2 className="info-title">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our diverse team is committed to innovative, accessible technology
              that empowers communities and businesses.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                {/* Team Member Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-6 space-y-4">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-[#34c85a]  font-medium text-sm">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3 pt-2">
                      <a
                        href={member.social.linkedin}
                        className="w-9 h-9 bg-gray-100 hover:bg-[#34c85a]  text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-9 h-9 bg-gray-100 hover:bg-[#34c85a]  text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-9 h-9 bg-gray-100 hover:bg-[#34c85a] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional CTA */}
          <div className="text-center mt-16">
            <div className="inline-block">
              <p className="text-gray-600 mb-4">
                Interested in joining our team?
              </p>
              <button className="px-8 py-3 bg-[#34c85a]  hover:bg-[#8dfca9]  text-white font-medium rounded-lg transition-colors duration-200">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
      <ValuesOverlayCard />
      <WhyChooseSection/>
      <Partners />
    </>
  );
};

export default About;
