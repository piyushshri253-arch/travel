"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    if (headingRef.current && subRef.current) {
      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1 }
      ).fromTo(
        subRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      );
    }
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.heroSection}>
        
        {/* VIDEO BG */}
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          src="/travel.mp4"
        />

        {/* DARK OVERLAY */}
        <div className={styles.overlay}></div>

        {/* CONTENT */}
        <div className={styles.heroContent}>
          

          
        </div>
      </section>

      {/* ===== RATINGS STRIP (Hero ke neeche) ===== */}
      <div className="w-full bg-[#eef3f6] py-6">
        <div className="max-w-[1240px] mx-auto flex flex-wrap justify-center items-center gap-10 text-sm">

          {/* Google */}
          <div className="flex items-center gap-2">
            <Image src="/google.avif" alt="google" width={24} height={24} />
            <span className="font-semibold">⭐ 4.9</span>
            <span className="text-gray-600">(14001 reviews)</span>
          </div>

          {/* TripAdvisor */}
          <div className="flex items-center gap-2">
            <Image src="/tripadvisor.avif" alt="tripadvisor" width={24} height={24} />
            <span className="font-semibold">⭐ 5.0</span>
            <span className="text-gray-600">(3850 reviews)</span>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-2">
            <Image src="/facebook.avif" alt="facebook" width={24} height={24} />
            <span className="font-semibold">⭐ 4.9</span>
            <span className="text-gray-600">(1031 reviews)</span>
          </div>

        </div>
      </div>
    </>
  );
}