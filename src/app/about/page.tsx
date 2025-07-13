"use client";
import { useState } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import PageHero from "../components/reusable/page-hero";
import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "Sampson Dzivor",
    title: "Co-Founder & CEO ",
    image: "/images/sampson.jpg",
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
    image: "/images/Elvis.jpg",
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
    image: "/images/Frank.jpg",
    bio: "Expert Designer creating impactful visuals",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
];
export const About = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <>
      <PageHero
        title="About Us"
        height="h-[450px]"
        overlayOpacity={80}
        backgroundImage="/images/continent.jpg"
      />

      <section className=" my-10 md:my-32 grid grid-cols-1 lg:grid-cols-2 max-w-[100rem] mx-auto  gap-12 px-6 text-center space-y-12">
        <div className="text-left space-y-4 ">
          {/* Main Heading */}
          <h4 className="info-header">What we do</h4>
          <h1 className="info-title">
            At Digital Drivers Technology (DDTech),
          </h1>

          {/* Description Paragraph */}

          <p className="info-description">
            We believe that technology is the key to breaking barriers and
            creating an inclusive world. Based in Ghana, we are committed to
            promoting disability inclusion, accessibility, and digital
            empowerment in the tech space. Our innovative solutions ensure that
            individuals, businesses, and organizations harness the power of
            technology to enable independence and equal opportunities for all.
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
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-[#34c85a] font-medium text-lg md:text-4xl tracking-wider uppercase">
              Our Team
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our team is a diverse group of professionals dedicated to
              driving innovation and accessibility in technology. With a shared
              vision for a more inclusive future, we leverage our expertise to
              create impactful solutions that empower individuals and businesses.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="bg-[url('/images/consultancy-image.jpg')] bg-fixed bg-cover relative h-screen mt-12 lg:mt-24 flex items-center justify-end w-full overflow-hidden">
        {/* Overlay Card */}
        <div className="relative z-10 bg-white rounded-xl px-5  py-6 md:p-12 max-w-2xl mx-8 shadow-2xl">
          {/* Toggle Buttons */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6  py-1 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-[#34c85a] text-white"
                  : "bg-transparent text-[#34c85a] border border-[#34c85a] hover:border-gray-400"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-1  rounded-full text-sm md:text-lg font-semibold ml-4 transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-[#34c85a] text-white"
                  : "bg-transparent text-[#34c85a] border border-[#34c85a] hover:border-gray-400"
              }`}
            >
              Our Mission
            </button>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {activeTab === "vision"
                ? "Closing the Gap Through Technology"
                : "Enabling Independence Through Innovation"}
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              {activeTab === "vision"
                ? "We envision a future where technology serves as a bridge, eliminating obstacles and ensuring accessibility for all individuals, including persons with disabilities."
                : "Through cutting-edge digital solutions, we empower individuals and businesses to leverage technology for greater accessibility, inclusion, and productivity."}
            </p>
          </div>

          {/* Red accent line */}
          <div className="w-24 h-1 bg-[#34c85a] mt-8"></div>
        </div>
      </div>
    </>
  );
};

export default About;
