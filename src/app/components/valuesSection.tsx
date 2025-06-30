"use client";

import { useState } from "react";
import { Users, Lightbulb, Shield, Heart, Handshake } from "lucide-react";

const coreValues = [
  {
    id: 1,
    title: "Inclusion & Accessibility",
    description:
      "We champion technology that leaves no one behind, ensuring that all digital solutions are accessible to persons with disabilities.",
    icon: Users,
  },
  {
    id: 2,
    title: "Innovation & Excellence",
    description:
      "We embrace cutting-edge technology to create solutions that enhance digital experiences and improve accessibility for businesses and individuals.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Empowerment & Independence",
    description:
      "We believe in empowering individuals through technology, providing them with the skills and tools they need to thrive independently.",
    icon: Shield,
  },
  {
    id: 4,
    title: "Integrity & Accountability",
    description:
      "We uphold the highest ethical standards, ensuring transparency, trust, and reliability in all our engagements with clients and partners.",
    icon: Heart,
  },
  {
    id: 5,
    title: "Collaboration & Community Impact",
    description:
      "We actively partner with organizations, institutions, and individuals to drive meaningful change and promote digital inclusion across Ghana and beyond.",
    icon: Handshake,
  },
];

export default function ValuesSection() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <div className="bg-white py-4 lg:py-8">
      {/* Core Values Section */}
      <div className=" bg-white/95 backdrop-blur-sm">
        <div className=" rounded-3xl p-12 space-y-12">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These fundamental principles guide everything we do and shape our
              commitment to creating inclusive digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.id} className=" gap-8 group">
                  <div className="flex flex-col md:flex-row items-start space-x-8">
                    {/* Large Number */}
                    <div className="text-6xl lg:text-7xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors min-w-fit">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center space-x-4">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#34c85a] transition-colors">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < coreValues.length - 1 && (
                    <div className="w-full h-px bg-gray-200 mt-8"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Vision and Mission Section */}
      <div className="bg-[url('/images/consultancy-image.jpg')] bg-fixed bg-cover relative h-screen my-12 lg:my-24 flex items-center justify-end w-full overflow-hidden">
        {/* Overlay Card */}
        <div className="relative z-10 bg-white rounded-3xl px-5  py-6 md:p-12 max-w-2xl mx-8 shadow-2xl">
          {/* Toggle Buttons */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-2  py-1 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-600 border border-gray-300 hover:border-gray-400"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-1  rounded-full text-sm md:text-lg font-semibold ml-4 transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-600 border border-gray-300 hover:border-gray-400"
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
          <div className="w-24 h-1 bg-red-500 mt-8"></div>
        </div>
      </div>
    </div>
  );
}
