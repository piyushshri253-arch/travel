"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationInfo({ place }: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 Heading animation
      gsap.from(".info-heading", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
      });

      // 🔥 Content animation
      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-10">

      {/* 🔥 ABOUT SECTION */}
      <div>
        <h2 className="info-heading text-3xl font-bold mb-4">
          About {place.title}
        </h2>

        <p className="info-card text-gray-600 leading-relaxed">
          {place.about}
        </p>
      </div>

      {/* 🔥 ITINERARY */}
      <div>
        <h2 className="info-heading text-3xl font-bold mb-4">
          Itinerary
        </h2>

        <div className="space-y-4">
          {place.itinerary.map((day: string, index: number) => (
            <div
              key={index}
              className="info-card p-5 bg-white rounded-xl shadow"
            >
              {day}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}