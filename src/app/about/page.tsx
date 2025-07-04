'use client';
import {useState} from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Michael Reynolds",
    title: "CEO & Founder",
    image: "/images/sampson-image.webp",
    bio: "Visionary leader with 15+ years in renewable .",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@company.com",
    },
  },
  {
    name: "Elvis Owusu Gyasi",
    title: "Chief Technology Officer",
    image: "/images/elvis-image.webp",
    bio: "Technology expert revolutionizing solar solutions",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "leroy@company.com",
    },
  },
  {
    name: "David Ojo",
    title: "Lead Solar Engineer",
    image: "/images/david-image.jpg",
    bio: "Expert engineer crafting sustainable futures",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@company.com",
    },
  },
]
export const About = () => {
    const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");
  
  return (
    <>
      <section className="relative max-w-[100rem] md:h-[700px] mx-auto p-2 mt-24 md:p-6  md:rounded-3xl bg-black text-white overflow-hidden ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute inset-0">
            <Image
              src="/images/man-in-wheel.avif"
              alt="image here"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative  z-10 md:container md:mx-auto mt-16  md:px-4 py-20 lg:pt-40">

              <div className="space-y-8 px-2 lg:px-16">
                <h1 className="text-4xl  text-center md:text-5xl lg:text-[12rem]  font-bold leading-tight tracking-tight">
                  About Us
                </h1>

                <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed"></p>
            </div>
          </div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
      <section className="max-w-5xl md:my-20 mx-auto px-6 text-center space-y-12">
        {/* About Us Header */}
        <h2 className="text-lg md:text-4xl text-[#34c85a] font-medium  tracking-wide">About Us</h2>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-wide">
          Welcome To Digital Drivers Technology (DDTech)
        </h1>

        {/* Description Paragraph */}
        <div className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          <p className="text-gray-900">
              At Digital Drivers Technology (DDTech), We believe that technology is the key to breaking barriers and creating
              an inclusive world. Based in Ghana, we are committed to promoting disability
              inclusion, accessibility, and digital empowerment in the tech space.
              Our innovative solutions ensure that individuals, businesses, and organizations
              harness the power of technology to enable independence and equal opportunities for all.
          </p>
        </div>
      </section>
       <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#34c85a] font-medium text-lg md:text-4xl tracking-wider uppercase">Our Team</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Meet Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals driving innovation in renewable energy solutions
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
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-[#34c85a]  font-medium text-sm">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
                      className="w-9 h-9 bg-gray-100 hover:bg-gray-700 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
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
            <p className="text-gray-600 mb-4">Interested in joining our team?</p>
            <button className="px-8 py-3 bg-[#34c85a]  hover:bg-[#8dfca9]  text-white font-medium rounded-lg transition-colors duration-200">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
      <div className="bg-[url('/images/consultancy-image.jpg')] bg-fixed bg-cover relative h-screen my-12 lg:my-24 flex items-center justify-end w-full overflow-hidden">
        {/* Overlay Card */}
        <div className="relative z-10 bg-white rounded-3xl px-5  py-6 md:p-12 max-w-2xl mx-8 shadow-2xl">
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
