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
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-6 max-w-[100rem] mx-auto`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
