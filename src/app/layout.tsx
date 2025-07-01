import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/features/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DDTech - Digital Drivers Technology",
  description:
    "At Digital Drivers Technology (DDTech), we believe that technology is the key to breaking barriers and creating an inclusive world. Based in Ghana, we are committed to promoting disability inclusion, accessibility, and digital empowerment in the tech space. Our innovative solutions ensure that individuals, businesses, and organizations harness the power of technology to enable independence and equal opportunities for all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed Background Shapes - Will stick during scroll */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          {/* Top Left Area */}
          <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#89e8a1] opacity-6 rounded-full blur-3xl"></div>
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-[#89e8a1] opacity-10 rounded-full"></div>

          {/* Top Right Area */}
          <div className="absolute top-10 right-20 w-32 h-32 sm:w-48 sm:h-48 bg-[#89e8a1] opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-1/3 w-12 h-12 bg-[#89e8a1] opacity-12 rounded-full"></div>

          {/* Middle Left */}
          <div className="absolute top-1/2 -left-16 w-24 h-24 sm:w-36 sm:h-36 bg-[#89e8a1] opacity-8 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-16 w-8 h-8 bg-[#89e8a1] opacity-15 rounded-full"></div>

          {/* Middle Right */}
          <div className="absolute top-1/2 -right-20 w-28 h-28 sm:w-44 sm:h-44 bg-[#89e8a1] opacity-6 rounded-full blur-2xl"></div>
          <div className="absolute top-2/3 right-24 w-14 h-14 bg-[#89e8a1] opacity-11 rounded-full"></div>

          {/* Bottom Left */}
          <div className="absolute bottom-32 -left-12 w-36 h-36 sm:w-52 sm:h-52 bg-[#89e8a1] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-[#89e8a1] opacity-12 rounded-full"></div>

          {/* Bottom Right */}
          <div className="absolute -bottom-16 -right-16 w-32 h-32 sm:w-48 sm:h-48 bg-[#89e8a1] opacity-6 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-1/3 w-18 h-18 bg-[#89e8a1] opacity-10 rounded-full"></div>

          {/* Center Area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#89e8a1] opacity-8 rounded-full blur-xl"></div>

          {/* Abstract Geometric Shapes - Spread Out */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-[#89e8a1] opacity-6 rotate-45 rounded-lg blur-sm"></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-[#89e8a1] opacity-5 rotate-12 rounded-lg blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/2 w-14 h-14 bg-[#89e8a1] opacity-8 rotate-45 rounded-lg blur-sm"></div>

          {/* Large Organic SVG Shapes - Multiple Positions */}
          <div className="absolute top-0 left-0">
            <svg
              className="w-96 h-96 sm:w-[500px] sm:h-[500px] opacity-6"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#89e8a1"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.8,-0.2C89.6,15.9,86.6,31.8,79.1,45.4C71.6,59,59.6,70.3,45.8,77.8C32,85.3,16,88.9,-0.4,89.6C-16.8,90.3,-33.6,88.1,-47.8,81.1C-62,74.1,-73.6,62.3,-81.1,48.4C-88.6,34.5,-91.9,18.5,-91.7,2.7C-91.5,-13.1,-87.8,-28.9,-80.6,-42.9C-73.4,-56.9,-62.7,-69.1,-49.2,-76.6C-35.7,-84.1,-19.4,-86.9,-2.8,-82.8C13.8,-78.7,30.6,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0">
            <svg
              className="w-80 h-80 sm:w-[400px] sm:h-[400px] opacity-5"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#89e8a1"
                d="M37.1,-65.5C48.8,-58.2,59.2,-47.8,65.8,-35.1C72.4,-22.4,75.2,-7.4,74.6,7.2C74,21.8,70,35.9,62.8,47.4C55.6,58.9,45.2,67.8,33.1,72.9C21,78,7.2,79.3,-6.8,79.1C-20.8,78.9,-35,77.2,-46.8,71.2C-58.6,65.2,-68,54.9,-73.8,42.8C-79.6,30.7,-81.8,16.8,-81.2,3.2C-80.6,-10.4,-77.2,-23.7,-70.5,-35.2C-63.8,-46.7,-53.8,-56.4,-42.1,-63.9C-30.4,-71.4,-17,-76.7,-2.8,-72.1C11.4,-67.5,25.4,-72.8,37.1,-65.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Additional scattered elements for better distribution */}
          <div className="absolute top-1/6 right-1/2 w-6 h-6 bg-[#89e8a1] opacity-18 rounded-full"></div>
          <div className="absolute top-5/6 left-1/3 w-4 h-4 bg-[#89e8a1] opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/6 w-10 h-10 bg-[#89e8a1] opacity-9 rounded-full blur-sm"></div>
        </div>

        {/* Main Content */}
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
