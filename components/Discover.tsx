"use client";
import Image from "next/image";

export default function TravelHero() {
  const gallery = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Travel Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          DISCOVER THE <br className="hidden md:block" />
          WORLD IN A <br className="hidden md:block" />
          NEW WAY
        </h1>

        <p className="mt-6 text-gray-200 text-sm sm:text-base">
          Discover hidden gems, breathtaking landscapes, and unforgettable journeys
          across the globe.
        </p>

        <button className="mt-8 w-full sm:w-auto flex items-center justify-center gap-3 border border-white/40 px-6 py-3 backdrop-blur-md hover:bg-white/10 transition rounded-xl">
          ▶ Watch the Video
        </button>
      </div>

      {/* Gallery */}
      {/* Mobile: horizontal scroll */}
      <div className="mt-12 md:mt-0 w-full md:w-auto">
        <div className="flex md:hidden gap-4 overflow-x-auto pb-2">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="relative min-w-[160px] h-24 rounded-xl overflow-hidden"
            >
              <Image src={src} alt="travel" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="relative w-44 h-28 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image src={src} alt="travel" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
              <div className="absolute inset-0 flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition">
                ▶
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}