"use client";

import React, { useRef } from "react";

const images = [
  "/honeymoon/gal1.jpg",
  "/honeymoon/gal2.jpg",
  "/honeymoon/gal3.jpg",
  "/honeymoon/gal4.jpg",
  "/honeymoon/gal5.jpg",
  "/honeymoon/gal6.jpg",
  "/honeymoon/gal7.jpg",
  "/honeymoon/gal8.jpg"
];

const CurvedGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#f5f5f5] pt-12 md:pt-20 pb-28 overflow-hidden">
      
      {/* TEXT */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          Explore Beautiful Moments
        </h2>
        <button className="mt-5 px-5 py-2.5 bg-black text-white rounded-full">
          Explore
        </button>
      </div>

      {/* CURVE */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[240px] bg-white rounded-t-[100%] z-10"></div>

      {/* ARROWS */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-6 bottom-24 z-30 
                   bg-black/70 text-white w-10 h-10 rounded-full 
                   flex items-center justify-center hover:bg-black"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-6 bottom-24 z-30 
                   bg-black/70 text-white w-10 h-10 rounded-full 
                   flex items-center justify-center hover:bg-black"
      >
        →
      </button>

      {/* SCROLL GALLERY */}
      <div
        ref={scrollRef}
        className="absolute bottom-0 left-0 w-full z-20 
                   flex gap-4 overflow-x-auto px-4 md:px-10 
                   scroll-smooth no-scrollbar"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] 
                       h-40 sm:h-48 md:h-60 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurvedGallery;