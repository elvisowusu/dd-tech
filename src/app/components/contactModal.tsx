// components/ContactModal.jsx
"use client";

import { useState } from "react";
import ContactSection from "./contactUs";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        size="lg"
        className="bg-[#34c85a] hover:bg-[#2ca74e] text-white px-8 py-3 rounded-full"
      >
        Contact us Today
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white p-6 rounded-xl w-full md:max-w-7xl shadow-lg relative">
            <div className="w-6 h-6 top-3 absolute  right-3 rounded-full bg-[#34c85a]  flex items-center justify-center">

            <button
              onClick={() => setOpen(false)}
              className="  text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            </div>
            <ContactSection />
          </div>
        </div>
      )}
    </>
  );
}
