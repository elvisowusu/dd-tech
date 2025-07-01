"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [onScroll, setOnScroll] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    {
      name: "Services",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Digital Twins", href: "#" },
        { name: "Virtual Tours", href: "#" },
        { name: "3D Modeling", href: "#" },
        { name: "Spatial Analytics", href: "#" },
      ],
    },
    { name: "Portfolio", href: "#" },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 50);
      setHideNav(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 md:px-6 pr-4 md:max-w-[110rem] mx-auto  top-0 transition-all duration-500 ${
        hideNav ? "-translate-y-full" : "translate-y-0"
      } ${onScroll ? "bg-white  py-2" : "py-4"}`}
    >
      <nav className=" px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-black">
           <Image src="/images/DD-logo.jpg" alt="DD tech logo" width={80} height={80}/>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="flex items-center gap-x-1 text-base font-normal text-black hover:text-[#34c85a] relative"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-[#34c85a] origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </button>
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 z-50 ${
                        isServicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-base font-normal text-black hover:text-[#34c85a] relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-[#34c85a] origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="rounded-full bg-[#34c85a] text-white px-6 py-2 text-base font-normal hover:bg-[#2ca74e]">
              Partner with Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <>&#10005;</> : <>&#9776;</>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 lg:hidden space-y-4 bg-white w-[400px] p-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex justify-between items-center text-black text-left"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-sm text-gray-700 hover:text-[#34c85a]"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-base text-black hover:text-[#34c85a]"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <Button className="w-full mt-4 rounded-full bg-[#34c85a] text-white py-2 text-base font-normal hover:bg-[#2ca74e]">
              Partner with Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
