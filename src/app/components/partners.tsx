import React from "react";
import Image from "next/image";

export const Partners = () => {
  const logos = [
    {
      name: "UNDP",
      src: "/images/partners/undp.png",
      link: "https://www.undp.org/ghana",
    },
    {
      name: "CrossBoundary",
      src: "/images/partners/CrossBoundary-logo.png",
      link: "https://crossboundary.com/advisory/",
    },
    {
      name: "Ghana Federation of Disability",
      src: "/images/partners/GhanaFederationDisability.png",
      link: "https://gfd.org.gh/",
    },
    {
      name: "Mind Builders",
      src: "/images/partners/MindBuilders-logo.png",
      link: "//mindbuildersafrica.org/",
    },
  ];
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Our Trusted Partners
        </h3>

        <div className="relative overflow-hidden">
          <div className="animate-marquee flex gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <a href={logo.link}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={80}
                    className="object-contain  transition duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
