"use client";

import Image from "next/image";
import { useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { tourPackagesData } from "@/data/tourPackagesData";
import "./best.css";

export default function BestSellingTours() {
  const params = useParams();
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ slug handling
  let slug = params.slug;
  let slugStr = "";

  if (typeof slug === "string") {
    slugStr = slug.toLowerCase();
  } else if (Array.isArray(slug) && slug.length > 0) {
    slugStr = slug.join("-").toLowerCase();
  }

  // ✅ get packages
  const packages =
    slugStr && tourPackagesData[slugStr]
      ? tourPackagesData[slugStr]
      : [];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toUrlSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  // ❌ no data
  if (!packages.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No tour packages available for this destination.
      </p>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-14 relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center capitalize">
        Best-Selling {slugStr}
      </h2>

      <p className="text-gray-300 mb-10 text-center max-w-2xl mx-auto">
        Discover the top-rated {slugStr} packages loved by travelers.
      </p>

      {/* Arrows */}
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

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {packages.map((pkg, idx) => (
  <div
    key={idx}
    onClick={() =>
      router.push(`/tours/${slugStr}/${toUrlSlug(pkg.title)}`)
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
      src={pkg.image}
      alt={pkg.title}
      fill
      className="object-cover group-hover:scale-110 transition duration-700"
    />

    {/* GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

    {/* TOP BADGES */}
    <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
      {pkg.tag1 || "Popular"}
    </div>

    {/* PRICE */}
    {pkg.price && (
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        {pkg.price}
      </div>
    )}

    {/* CONTENT OVER IMAGE */}
    <div className="absolute bottom-0 w-full p-5 text-white flex flex-col gap-2">
      <h3 className="text-lg md:text-xl font-semibold leading-snug">
        {pkg.title}
      </h3>

      <p className="text-sm opacity-90 line-clamp-2">
        {pkg.description ||
          "Experience a perfect trip with curated stays and unforgettable moments."}
      </p>

      <div className="flex items-center justify-between text-sm mt-1">
        <span>⭐ {pkg.rating || "4.8"}</span>
        <span>⏱ {pkg.days}</span>
      </div>

      <div className="text-sm opacity-90">📍 {pkg.location}</div>

      {/* BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/tours/${slugStr}/${toUrlSlug(pkg.title)}`);
        }}
        className="mt-2 bg-white text-black py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
      >
        Book Now
      </button>
    </div>
  </div>
))}     </div>
    </section>
  );
}