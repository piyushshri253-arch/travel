"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full py-6 md:py-10 overflow-hidden">
      
      {/* Slides */}
      <div className="flex items-center justify-center gap-2 md:gap-4">
        {images.map((img, i) => {
          const isActive = i === active;

          return (
            <div
              key={i}
              className={`relative transition-all duration-500 rounded-xl md:rounded-2xl overflow-hidden
                ${
                  isActive
                    ? "w-[80%] sm:w-[70%] md:w-[60%] h-[220px] sm:h-[280px] md:h-[400px] z-20"
                    : "w-[30%] sm:w-[25%] md:w-[20%] h-[180px] sm:h-[220px] md:h-[300px] opacity-60 scale-90"
                }`}
            >
              <Image
                src={img}
                alt="gallery"
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-2 md:p-3 rounded-full shadow"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-2 md:p-3 rounded-full shadow"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}