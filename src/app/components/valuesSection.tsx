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
    <div className=" py-4 sm:py-10 lg:py-16  mt-10  flex flex-col-reverse md:flex-col">
      {/* Core Values Section */}
      <div className=" mt-12 px-4 sm:px-6">
        <div className="rounded-3xl sm:p-6 lg:p-12 space-y-12">
          <div className="mb-8 sm:mb-20 text-center">
            <h2 className="section-title">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="section-description ">
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

      <div className="bg-[url('/images/consultancy-image.jpg')] bg-fixed bg-cover relative h-screen mt-5 lg:mt-24 flex items-center justify-end w-full overflow-hidden">
        {/* Overlay Card */}
        <div className="relative z-10 bg-white rounded-xl px-5 py-6 md:p-12 max-w-xl mx-8 shadow-2xl">
          {/* Standardized Tab Nav */}
          <div className=" mb-8">
            <nav className="flex space-x-6">
              <button
                onClick={() => setActiveTab("vision")}
                className={`pb-2 text-base md:text-lg font-medium transition-all duration-300 relative ${
                  activeTab === "vision"
                    ? "text-[#34c85a]"
                    : "text-gray-500 hover:text-[#34c85a]"
                }`}
              >
                Our Vision
                {activeTab === "vision" && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-0.5 bg-[#34c85a] rounded-full transition-all duration-300"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`pb-2 text-base md:text-lg font-medium transition-all duration-300 relative ${
                  activeTab === "mission"
                    ? "text-[#34c85a]"
                    : "text-gray-500 hover:text-[#34c85a]"
                }`}
              >
                Our Mission
                {activeTab === "mission" && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-0.5 bg-[#34c85a] rounded-full transition-all duration-300"></span>
                )}
              </button>
            </nav>
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

          {/* Green Accent Line */}
          <div className="w-24 h-1 bg-[#34c85a] mt-8"></div>
        </div>
      </div>
    </div>
  );
}
