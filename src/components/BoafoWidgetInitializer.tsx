"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    // Optional: prevent multiple initializations if needed
    if (document.getElementById("accessibility-widget-container")) return;

    console.log("✅ Initializing Boafo widget in Next.js");
  }, []);

  return (
    <>
      {/* Load Boafo widget script */}
      <Script
        src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
        data-api-key="boafo_1234" // Replace with your real API key
        data-embed="true" // Forces overlay mode if supported
        strategy="afterInteractive"
        onLoad={() => {
          console.log("✅ Boafo widget script loaded successfully");
        }}
      />
    </>
  );
}
