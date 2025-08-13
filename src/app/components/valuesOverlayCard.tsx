'use client';
import { useState } from "react";

export const ValuesOverlayCard = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <div className="bg-[url('/images/group-image.jpg')] bg-fixed bg-center bg-cover bg-no-repeat relative h-screen mt-5 lg:mt-24 flex items-center justify-end w-full overflow-hidden">
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
  );
};
