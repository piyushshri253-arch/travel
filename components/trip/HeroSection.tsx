"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./HeroSection.module.css";

type TripData = {
  title?: string;
  duration?: string;
  price?: string;
  images?: string[];
  banner?: string[] | string;
};

type Props = {
  data: TripData;
};

export default function HeroSection({ data }: Props) {
  // =========================
  // 🧠 NORMALIZE IMAGES
  // Priority:
  // 1) banner string
  // 2) banner array
  // 3) gallery images
  // 4) default image
  // =========================
  const images = useMemo(() => {
    if (typeof data?.banner === "string" && data.banner.trim()) {
      return [data.banner];
    }

    if (Array.isArray(data?.banner) && data.banner.length > 0) {
      return data.banner.filter(Boolean);
    }

    if (Array.isArray(data?.images) && data.images.length > 0) {
      return data.images.filter(Boolean);
    }

    return ["/default.jpg"];
  }, [data]);

  const [index, setIndex] = useState(0);

  // Debug
  useEffect(() => {
    console.log("HERO DATA =", data);
    console.log("HERO IMAGES =", images);
  }, [data, images]);

  // =========================
  // RESET SLIDER WHEN DATA CHANGES
  // =========================
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // =========================
  // AUTO SLIDER
  // =========================
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className={styles.hero}>
      {/* Slider */}
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.slide}>
            <img
              src={img}
              alt={`travel-${i}`}
              className={styles.image}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/default.jpg";
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {data?.title || "Amazing Trip"}
        </h1>

        <p className={styles.subtitle}>
          {data?.duration || "3 Days"} • Starting from ₹
          {data?.price || "999"}
        </p>

        <button className={styles.ctaBtn}>
          Download Itinerary
        </button>
      </div>
    </section>
  );
}