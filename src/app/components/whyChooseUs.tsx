"use client";

const reasons = [
  {
    id: 1,
    title: "Commitment to Accessibility",
    description:
      "We prioritize inclusivity in all our tech solutions, ensuring that every digital experience is accessible to all users, including persons with disabilities.",
  },
  {
    id: 2,
    title: "Innovative & Impactful",
    description:
      "We blend cutting-edge technology with real-world accessibility needs, creating solutions that make a meaningful difference in people's lives.",
  },
  {
    id: 3,
    title: "Expert-Led Training & Consultancy",
    description:
      "Our team of tech professionals and disability inclusion advocates are well experienced and provide top-tier services tailored to your needs.",
  },
  {
    id: 4,
    title: "Sustainable Solutions",
    description:
      "We create long-term, impactful tech solutions that empower individuals and organizations to thrive independently and inclusively.",
  },
];

export default function WhyChooseSection() {
  return (
    <div className=" px-8 lg:px-16">
      {/* Header */}
      <div className="text-center my-16 md:mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Choose DDTech?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are committed to creating technology solutions that bridge gaps and
          empower everyone to participate fully in the digital world.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason) => {
          return (
            <div
              key={reason.id}
              className="bg-gray-100 rounded-2xl p-8 w-[350px] h-[300px] transition-all duration-300 hover:-translate-y-4 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  &quot;{reason.title}&quot;
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {reason.description}
                </p>

                {/* Brand Name */}
                <p className="text-gray-800 font-bold text-lg">
                  DDTech Solutions
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
