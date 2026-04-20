"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import "./hone.css";

const packages = [
  {
    title: "Romantic Vietnam Honeymoon Package with Halong Bay Cruise",
    days: "5N/6D",
    img: "/honeymoon/vientam1.jpg",
    slug: "romantic-vietnam-honeymoon-5n-6d",
    type: "honeymoon",
  },
  {
    title: "Dreamy Vietnam Honeymoon Tour Package",
    days: "6N/7D",
    img: "/honeymoon/vientam2.jpg",
    slug: "dreamy-vietnam-honeymoon-6n-7d",
    type: "honeymoon",
  },
  {
    title: "Romantic Escape to Vietnam - Couple Special Tour",
    days: "7N/8D",
    img: "/honeymoon/vientam3.jpg",
    slug: "romantic-vietnam-escape-7n-8d",
    type: "honeymoon",
  },
  {
    title: "Vietnam Honeymoon Package with Flights",
    days: "6N/7D",
    img: "/honeymoon/vientam4.jpg",
    slug: "vietnam-honeymoon-with-flights-6n-7d",
    type: "honeymoon",
  },
  {
    title: "Luxury Vietnam Honeymoon Retreat",
    days: "8N/9D",
    img: "/honeymoon/vientam6.jpg",
    slug: "luxury-vietnam-honeymoon-8n-9d",
    type: "honeymoon",
  },
  {
    title: "Best Vietnam Honeymoon Tour for Couples",
    days: "5N/6D",
    img: "/honeymoon/vientam6.jpg",
    slug: "best-vietnam-honeymoon-5n-6d",
    type: "honeymoon",
  },
];

const VietnamPackages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 🔹 Smooth scroll
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  // 🔹 Navigation
  const handleClick = (slug: string, type: string) => {
    router.push(`/${type}/${slug}`);
  };

  return (
    <section className="bg-[#efe3d3] py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-6 sm:mb-8">
        Vietnam Honeymoon Packages
      </h2>

      <div className="relative">
        
        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 
                     bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 
                     bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar px-1 sm:px-8"
        >
          {packages.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClick(item.slug, item.type)}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] 
                         bg-white rounded-xl shadow-md overflow-hidden 
                         cursor-pointer hover:shadow-xl hover:scale-[1.04] 
                         transition duration-300"
            >
              
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-yellow-400 text-[10px] sm:text-xs px-2 py-1 rounded">
                  Customised
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>

                <div className="flex items-center text-[10px] sm:text-xs text-gray-500 gap-2 mb-2">
                  <span>⏱ {item.days}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> Hanoi Airport
                  </span>
                </div>

                <div className="flex items-center text-[10px] sm:text-xs text-gray-500 mb-3">
                  <Calendar size={12} className="mr-1" />
                  Any date of your choice
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(item.slug, item.type);
                  }}
                  className="w-full bg-red-400 hover:bg-red-500 text-white 
                             py-2 rounded-lg text-xs sm:text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VietnamPackages;