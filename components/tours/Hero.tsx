"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const rotatingTexts = [
  "Best Price Guaranteed 💰",
  "Trusted by 10,000+ Travelers 🌍",
  "Customizable Itineraries ✈️",
];

export default function Hero({ title, subtitle, image }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const phone = "91XXXXXXXXXX";
    const message = `Hi, I'm interested in ${title}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 text-center max-w-3xl">
        
        {/* Title */}
        <h1 className="font-bold leading-tight 
          text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-3 sm:mb-4">
          {subtitle}
        </p>

        {/* Rotating Line */}
        <p className="text-yellow-400 font-semibold 
          text-sm sm:text-base md:text-lg h-5 sm:h-6 transition-all duration-500">
          {rotatingTexts[textIndex]}
        </p>

        {/* Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          
          {/* Download */}
          <button className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition">
            Download Itinerary
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-green-500 rounded-full font-semibold hover:bg-green-400 transition"
          >
            Chat on WhatsApp
          </button>

        </div>
      </div>
    </div>
  );
}