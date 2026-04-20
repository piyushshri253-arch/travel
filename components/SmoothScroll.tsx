"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness (1.2–1.5 best)
      smoothWheel: true,
      smoothTouch: false,
    });

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🔥 GSAP sync (VERY IMPORTANT)
    lenis.on("scroll", () => {
      gsap.ticker.tick();
    });

    // cleanup (best practice)
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}