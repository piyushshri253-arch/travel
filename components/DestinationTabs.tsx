"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const tabs = [
  "overview",
  "highlights",
  "itinerary",
  "inclusions",
  "exclusions",
  "other",
];

export default function DestinationTabs({ place }: any) {
  const [active, setActive] = useState("overview");
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [active]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* 🔥 STICKY TABS */}
      <div className="sticky top-0 bg-white z-20 border-b flex gap-4 overflow-x-auto px-4 py-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full text-sm capitalize whitespace-nowrap transition ${
              active === tab
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div ref={contentRef} className="p-6 space-y-6">

        {/* OVERVIEW */}
        {active === "overview" && (
          <p className="text-gray-600 leading-relaxed">
            {place.overview}
          </p>
        )}

        {/* HIGHLIGHTS */}
        {active === "highlights" && (
          <ul className="grid md:grid-cols-2 gap-4">
            {place.highlights.map((item: string, i: number) => (
              <li
                key={i}
                className="p-4 bg-gray-50 rounded-xl shadow-sm"
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        )}

        {/* ITINERARY (TIMELINE 🔥) */}
        {active === "itinerary" && (
          <div className="space-y-6">
            {place.itinerary.map((day: any, i: number) => (
              <div key={i} className="flex gap-4">

                {/* LINE */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <div className="w-[2px] flex-1 bg-gray-300" />
                </div>

                {/* CONTENT */}
                <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex-1">
                  <h4 className="font-bold mb-1">
                    {day.day} - {day.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {day.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* INCLUSIONS */}
        {active === "inclusions" && (
          <ul className="space-y-2">
            {place.inclusions.map((item: string, i: number) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        )}

        {/* EXCLUSIONS */}
        {active === "exclusions" && (
          <ul className="space-y-2">
            {place.exclusions.map((item: string, i: number) => (
              <li key={i}>❌ {item}</li>
            ))}
          </ul>
        )}

        {/* OTHER INFO */}
        {active === "other" && (
          <p className="text-gray-600">{place.otherInfo}</p>
        )}
      </div>
    </div>
  );
}