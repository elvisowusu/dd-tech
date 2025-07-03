
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
    <div className=" py-4 lg:py-8 flex flex-col-reverse md:flex-col">
      {/* Core Values Section */}
      <div className="bg-white/95 backdrop-blur-sm px-4 sm:px-6">
        <div className="rounded-3xl sm:p-6 lg:p-12 space-y-12">
          <div className="mb-8 sm:mb-20 text-center">
            <h2 className="text-5xl lg:text-6xl font-bold  mb-4">
              Our Core Values
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light ">
              These fundamental principles guide everything we do and shape our
              commitment to creating inclusive digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 ">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.id} className="space-y-4 group">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl sm:text-5xl font-bold text-[#89e8a1]  group-hover:text-[#34c85a] transition-colors min-w-fit">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#89e8a1]" />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#34c85a] transition-colors">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  {index < coreValues.length - 1 && (
                    <div className="w-full h-px bg-gray-200 mt-4"></div>
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
    </div>
  );
}


