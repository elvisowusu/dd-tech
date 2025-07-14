
"use client";

import { CheckCircle, Lightbulb, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Commitment to Accessibility",
    description:
      "We prioritize inclusivity in all our tech solutions, ensuring that every digital experience is accessible to all users, including persons with disabilities.",
    icon: CheckCircle,
    gradient: "from-emerald-400 to-green-500",
    accentColor: "emerald-500",
  },
  {
    id: 2,
    title: "Innovative & Impactful",
    description:
      "We blend cutting-edge technology with real-world accessibility needs, creating solutions that make a meaningful difference in people's lives.",
    icon: Lightbulb,
    gradient: "from-green-400 to-emerald-600",
    accentColor: "green-500",
  },
  {
    id: 3,
    title: "Expert-Led Training & Consultancy",
    description:
      "Our team of tech professionals and disability inclusion advocates are well experienced and provide top-tier services tailored to your needs.",
    icon: Users,
    gradient: "from-teal-400 to-green-500",
    accentColor: "teal-500",
  },
  {
    id: 4,
    title: "Sustainable Solutions",
    description:
      "We create long-term, impactful tech solutions that empower individuals and organizations to thrive independently and inclusively.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-700",
    accentColor: "green-600",
  },
];

export default function WhyChooseSection() {
  return (
    <div className="relative  p-4 sm:p-6 mt-10 overflow-hidden">
      <div className="relative ">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="section-title">Why Choose DDTech?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="section-description">
            We are committed to creating technology solutions that bridge gaps
            and empower everyone to participate fully in the digital world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;

            return (
              <div
                key={reason.id}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${reason.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg font-light">
                    {reason.description}
                  </p>

                  {/* Brand highlight */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <p className="text-gray-800 font-semibold text-sm tracking-wide uppercase">
                      DDTech Solutions
                    </p>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-200 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Ready to transform your digital accessibility?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
