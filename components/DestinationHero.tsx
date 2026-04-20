"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../app/destinations/destination.css";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationHero({ place }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1400", // 👈 thoda kam (better flow)
          scrub: 1.2,
          pin: true,
          pinSpacing: true, // 🔥 FIX
          anticipatePin: 1, // 🔥 smooth pin
        },
      });

      // 🔥 Initial smooth entry
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, filter: "blur(6px)" },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
        }
      );

      // 🔥 Text zoom
      tl.fromTo(
        textRef.current,
        { scale: 1 },
        {
          scale: 5.5,
          duration: 2,
          ease: "power1.out",
        }
      );

      // 🔥 Fade text
      tl.to(textRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });

      // 🔥 Overlay fade
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      );

      // 🔥 Image final zoom settle
      tl.fromTo(
        imageRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
        },
        "-=1"
      );

    }, containerRef);

    // 🔥 IMPORTANT REFRESH
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="hero-container">

      {/* IMAGE */}
      <img
        ref={imageRef}
        src={place.hero}
        className="hero-image"
      />

      {/* OVERLAY */}
      <div ref={overlayRef} className="hero-overlay" />

      {/* TEXT */}
      <h1
        ref={textRef}
        className="hero-text"
        style={{
          backgroundImage: `url(${place.hero})`,
        }}
      >
        {place.title.split(",")[0]}
      </h1>

    </div>
  );
}