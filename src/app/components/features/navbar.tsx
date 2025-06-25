"use client";

import { useState } from "react";
import { ChevronDown,Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Reviews", href: "#" },
  ];

  return (
    <nav
      className=" 
      sticky top-0 z-50"
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold tracking-wide">
              <span className="text-gray-900">DD </span>
              <span className="text-[#34c85a]">TECHNOLOGY</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-base sm:text-xl font-light flex items-center transition-colors duration-200">
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className="absolute bottom-0 left-0 right-0 h-0.2 bg-black transform scale-x-1 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                      </button>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-3xl shadow-lg border border-gray-100 py-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 text-base sm:text-xl font-light  transition-colors duration-200"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-full px-12 py-6 transition-all duration-200"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-gray-700 hover:text-gray-900  px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-full px-6 py-2 w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
