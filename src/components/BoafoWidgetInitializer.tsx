"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = "boafo_1234";
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return null; // It doesn't render anything
}
