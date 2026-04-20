"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import "./hone.css";

const packages = [
  {
    title: "Thailand Honeymoon Tour Package - Where Love Meets Adventure",
    days: "7N/8D",
    img: "/honeymoon/thailand1.jpg",
    slug: "thailand-honeymoon-adventure-7n-8d",
    type: "honeymoon",
    location: "Phuket - Bangkok",
  },
  {
    title: "Romantic Thailand Honeymoon Tour - Crafting Memories of Love",
    days: "5N/6D",
    img: "/honeymoon/thailand2.jpg",
    slug: "romantic-thailand-honeymoon-5n-6d",
    type: "honeymoon",
    location: "Phuket Airport - Phuket Airport",
  },
  {
    title: "Exotic Thailand Tour Package - A Perfect Couple’s Retreat",
    days: "5N/6D",
    img: "/honeymoon/thailand3.jpg",
    slug: "exotic-thailand-couple-retreat-5n-6d",
    type: "honeymoon",
    location: "Phuket - Bangkok",
  },
  {
    title: "Dreamy Thailand Honeymoon Tour Package with Phuket, Bangkok & Pattaya",
    days: "8N/9D",
    img: "/honeymoon/thailand4.jpg",
    slug: "dreamy-thailand-honeymoon-8n-9d",
    type: "honeymoon",
    location: "Bangkok Airport - Phuket Airport",
  },
];

const ThailandPackages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const handleClick = (slug: string, type: string) => {
    router.push(`/${type}/${slug}`);
  };

  return (
    <section className="bg-[#efe3d3] py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-6 sm:mb-8">
        Thailand Honeymoon Packages
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
                    <MapPin size={12} /> {item.location}
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

export default ThailandPackages;