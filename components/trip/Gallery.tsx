"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GalleryProps = {
  images?: string[];
};

export default function GalleryCarousel({ images = [] }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (!images.length) {
    return (
      <section className="w-full py-10 text-center text-gray-500">
        No Gallery Images Found
      </section>
    );
  }

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .snap-item { scroll-snap-align: center; }
      `}</style>

      <section className="w-full bg-white py-10 px-4 font-sans">

        {/* HEADER (same design) */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-widest text-gray-900 uppercase"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.18em" }}
          >
            Journey in Frames
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 mt-2 text-base tracking-widest"
            style={{ letterSpacing: "0.22em" }}
          >
            Pictures Perfect Moments
          </motion.p>
        </div>

        {/* CAROUSEL */}
        <div className="relative w-full max-w-6xl mx-auto">

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)",
            }}
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)",
            }}
          >
            ›
          </button>

          {/* TRACK */}
          <div
            ref={scrollRef}
            className="hide-scrollbar flex gap-4 overflow-x-auto px-12 py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="snap-item flex-shrink-0 relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  width: "clamp(200px, 30vw, 260px)",
                  height: "clamp(320px, 42vw, 420px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 6px 32px rgba(0,0,0,0.13)",
                }}
              >
                {/* IMAGE */}
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-110 relative">
                  <Image
                    src={src}
                    alt={`gallery-${i}`}
                    fill
                    sizes="(max-width: 768px) 60vw, 30vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white font-bold text-lg">
                    Image {i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}