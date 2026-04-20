"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../app/destinations/gallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationGallery({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".gallery-panel") as HTMLElement[];

      // 🔥 HORIZONTAL SCROLL
      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.2,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current!.offsetWidth * (panels.length - 1),
        },
      });

      // 🔥 IMAGE ZOOM PARALLAX
      gsap.utils.toArray(".gallery-img").forEach((img: HTMLElement) => {
        gsap.fromTo(
          img,
          { scale: 1.4 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: img,
              containerAnimation: scrollTween,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });

      // 🔥 TEXT FADE-IN
      gsap.utils.toArray(".gallery-text").forEach((text: HTMLElement) => {
        gsap.from(text, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: text,
            containerAnimation: scrollTween,
            start: "left center",
          },
        });
      });

      // 🔥 PROGRESS BAR
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: "100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => {
      // Kill all scroll triggers safely
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="gallery-container">
      {/* 🔥 SLIDER */}
      <div className="gallery-slider">
        {images.map((img, i) => (
          <div key={i} className="gallery-panel">
            <div className="gallery-img-wrapper">
              <img src={img} className="gallery-img" alt={`Gallery ${i}`} />
              {/* OVERLAY */}
              <div className="gallery-overlay" />
              {/* TEXT */}
              <div className="gallery-text">
                <h2>Explore</h2>
                <p>Beautiful moments & memories</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 PROGRESS BAR */}
      <div ref={progressRef} className="gallery-progress" />
    </div>
  );
}