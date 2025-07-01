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
  description: "At Digital Drivers Technology (DDTech), we believe that technology is the key to breaking barriers and creating an inclusive world. Based in Ghana, we are committed to promoting disability inclusion, accessibility, and digital empowerment in the tech space. Our innovative solutions ensure that individuals, businesses, and organizations harness the power of technology to enable independence and equal opportunities for all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:p-6 md:max-w-[100rem] md:mx-auto  bg-gradient-to-br from-slate-50 via-white to-green-50`}
      >
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-100 to-green-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
