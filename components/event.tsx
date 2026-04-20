"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./EventCarousel.module.css";

const desktopSlides = [
  {
    video: "/video/video1.mp4",
    url: "/trip/europe-group-trip-with-tomorrowland",
  },
  {
    video: "/video/video2.mp4",
    url: "/trip/zamna-festival-bali-gili-island-trip",
  },
];

const mobileSlides = [
  {
    video: "/video/videom1.mp4",
    url: "/trip/europe-group-trip-with-tomorrowland",
  },
  {
    video: "/video/videom2.mp4",
    url: "/trip/bali-adventure-package",
  },
];

export default function HeroSlider() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={styles.slide}
            onClick={() => router.push(slide.url)}   // 👈 CLICK NAVIGATION
            style={{ cursor: "pointer" }}
          >
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />

            {isMobile && (
              <div className={styles.overlay}>
                <h2>Iceland</h2>
                <h1>The Earth’s</h1>
                <h3>Rawest</h3>
                <p>Masterpiece</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!isMobile && (
        <>
          <button
            className={styles.left}
            onClick={() =>
              setIndex(index === 0 ? slides.length - 1 : index - 1)
            }
          >
            ‹
          </button>

          <button
            className={styles.right}
            onClick={() => setIndex((index + 1) % slides.length)}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}