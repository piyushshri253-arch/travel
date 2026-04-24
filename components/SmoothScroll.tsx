"use client";

import { useEffect } from "react";
import Lenis from "lenis"; // ✅ new package
import gsap from "gsap";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      // ❌ smoothTouch remove
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP sync
    lenis.on("scroll", () => {
      gsap.ticker.tick();
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}