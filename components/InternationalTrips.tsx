"use client";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const trips = [
  {
    title: "Europe",
    slug: "europe",
    price: "Starting Price Rs. 1,49,999/-",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Vietnam",
    slug: "vietnam",
    price: "Starting Price Rs. 59,999/-",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bali",
    slug: "bali",
    price: "Starting Price Rs. 49,999/-",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Thailand",
    slug: "thailand",
    price: "Starting Price Rs. 44,999/-",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Japan",
    slug: "japan",
    price: "Starting Price Rs. 1,29,999/-",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function InternationalTrips() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f5efd9] py-10 md:py-16 px-4 md:px-6">
      
      {/* ===== HERO ===== */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="relative h-[250px] md:h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
            alt="Beach"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 md:px-10">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-3">
            International Trips
          </h1>
          <p className="text-white text-sm md:text-lg mb-4 md:mb-6">
            Discover the world, one destination at a time
          </p>

          <button className="bg-yellow-400 text-black px-5 py-2 md:px-8 md:py-3 rounded-xl w-fit hover:bg-yellow-300">
            Explore
          </button>
        </div>
      </div>

      {/* ===== CARDS ===== */}
      <div className="relative mt-8 md:-mt-24">

        {/* ARROWS (hide on mobile) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow"
        >
          ◀
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-teal-500 text-white rounded-full p-3 shadow"
        >
          ▶
        </button>

        {/* SCROLL */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto px-2 md:px-8 scrollbar-hide snap-x snap-mandatory"
        >
          {trips.map((trip, i) => (
            <div
              key={i}
              onClick={() => router.push(`/travel/${trip.slug}`)}
              className="cursor-pointer snap-start min-w-[75%] sm:min-w-[260px] md:min-w-[280px] h-[280px] md:h-[320px] rounded-2xl overflow-hidden relative shadow-lg group"
            >
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg md:text-2xl font-semibold">
                  {trip.title}
                </h3>
                <p className="text-xs md:text-sm opacity-90">
                  {trip.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}