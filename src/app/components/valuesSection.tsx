"use client";

import { Users, Lightbulb, Shield, Heart, Handshake } from "lucide-react";
import { ValuesOverlayCard } from "./valuesOverlayCard";

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
      <ValuesOverlayCard/>
    </div>
  );
}
