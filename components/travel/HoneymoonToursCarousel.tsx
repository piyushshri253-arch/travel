"use client";

import Image from "next/image";
import { useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { honeymoonToursData } from "@/data/honemoonData";

export default function HoneymoonToursCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const params = useParams();

  const destination =
    (params?.destination as string)?.toLowerCase() || "bali";

  const honeymoonTours = honeymoonToursData[destination] || [];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!honeymoonTours.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold capitalize">
          No tours found for {destination}
        </h2>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 capitalize">
        Exotic {destination} Honeymoon Tours
      </h2>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Explore premium honeymoon packages for {destination}.
      </p>

      {/* Glass Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 
        bg-white/30 backdrop-blur-lg border border-white/20 
        text-white p-3 rounded-full shadow-lg z-10 
        hover:scale-110 transition hidden md:flex"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 
        bg-white/30 backdrop-blur-lg border border-white/20 
        text-white p-3 rounded-full shadow-lg z-10 
        hover:scale-110 transition hidden md:flex"
      >
        ▶
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {honeymoonTours.map((tour, idx) => (
          <div
            key={idx}
            onClick={() =>
              router.push(`/tours/${destination}/${tour.slug}`)
            }
            className="
              snap-start flex-shrink-0 
              w-[85%] sm:w-[48%] md:w-[32%] lg:w-[24%] 
              h-[520px]
              rounded-3xl overflow-hidden cursor-pointer 
              group relative shadow-2xl
              transition-transform duration-500 hover:scale-105
            "
          >
            {/* FULL IMAGE */}
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* TOP BADGE */}
            <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
              {tour.tag1 || "Romantic"}
            </div>

            {/* PRICE */}
            <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
              ₹{tour.price || "999"}
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 w-full p-5 text-white flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-semibold leading-snug">
                {tour.title}
              </h3>

              <p className="text-sm opacity-90 line-clamp-2">
                {tour.description ||
                  "Experience a perfect romantic getaway with luxury stays and scenic beauty."}
              </p>

              <div className="flex items-center justify-between text-sm mt-1">
                <span>⭐ {tour.rating || "4.8"}</span>
                <span>⏱ {tour.days}</span>
              </div>

              <div className="text-sm opacity-90">
                📍 {tour.location}
              </div>

              {/* BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/tours/${destination}/${tour.slug}`);
                }}
                className="mt-2 bg-white text-black py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}