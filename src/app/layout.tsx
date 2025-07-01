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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative `}
      >
        <div className="relative">
      {/* Background Decorative Shapes */}
          <div className="absolute inset-0 -z-10">
            {/* Large Circle */}
            <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#89e8a1] opacity-20 rounded-full blur-3xl"></div>

            {/* Medium Circle */}
            <div className="absolute top-1/2 -right-16 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#34c85a] opacity-15 rounded-full blur-2xl"></div>

            {/* Small Floating Circles */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-[#89e8a1] opacity-30 rounded-full"></div>
            <div className="absolute bottom-20 left-8 w-12 h-12 bg-[#34c85a] opacity-25 rounded-full"></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-[#89e8a1] opacity-40 rounded-full"></div>

            {/* Abstract Geometric Shapes */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#89e8a1] to-[#34c85a] opacity-20 rotate-45 rounded-lg blur-sm"></div>
            <div className="absolute top-0 right-1/4 w-20 h-20 bg-[#34c85a] opacity-15 rotate-12 rounded-lg blur-sm"></div>

            {/* Curved Background Element */}
            <div className="absolute inset-0 -z-20">
              <svg
                className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] opacity-10"
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
          </div>
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
