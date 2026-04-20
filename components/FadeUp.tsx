"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FadeUp({ children }: any) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}