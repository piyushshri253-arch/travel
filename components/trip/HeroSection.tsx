"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./HeroSection.module.css";

type TripData = {
  title?: string;
  duration?: string;
  price?: string;
  images?: string[];
  banner?: string[] | string; // ✅ FIX: support both array + string
};

type Props = {
  data: TripData;
};

export default function HeroSection({ data }: Props) {

  // =========================
  // 🧠 NORMALIZE IMAGES (IMPORTANT FIX)
  // =========================
  const images = useMemo(() => {
    if (Array.isArray(data?.images) && data.images.length > 0) {
      return data.images;
    }

    if (Array.isArray(data?.banner) && data.banner.length > 0) {
      return data.banner;
    }

    if (typeof data?.banner === "string" && data.banner) {
      return [data.banner];
    }

    return ["/default.jpg"];
  }, [data]);

  const [index, setIndex] = useState(0);

  // =========================
  // 🔁 RESET SLIDER WHEN DATA CHANGES
  // =========================
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // =========================
  // ⏱ AUTO SLIDER
  // =========================
  useEffect(() => {
    if (images.length <= 1) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(t);
  }, [images]);

  return (
    <section className={styles.hero}>

      {/* =========================
          🖼 SLIDER
      ========================= */}
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.slide}>
            <img
              src={img || "/default.jpg"}
              alt={`travel-${i}`}
              className={styles.image}
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/default.jpg";
              }}
            />
          </div>
        ))}
      </div>

      {/* =========================
          🌫 OVERLAY
      ========================= */}
      <div className={styles.overlay} />

      {/* =========================
          📌 CONTENT
      ========================= */}
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