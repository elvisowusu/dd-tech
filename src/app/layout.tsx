import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/features/navbar";
import Footer from "./components/features/footer";
import AOSProvider from "./components/aosProvider";
import { BackgroundPattern } from "./components/backgroundPattern";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.variable} ${manrope.variable} antialiased scroll-smooth`}>
        <AOSProvider />
        <BackgroundPattern />
        {/* Main Content */}
        <div className="relative scroll-smooth">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
