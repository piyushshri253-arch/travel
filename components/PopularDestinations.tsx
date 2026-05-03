"use client";

import { useRef } from "react";
import styles from "./PopularDestinations.module.css";

const cards = [
  { title: "Leh Ladakh", price: "15,800", img: "/ladakh (1).avif" },
  { title: "Spiti", price: "16,499", img: "/spiti.avif" },
  { title: "Kashmir", price: "24,499", img: "/kashmir-romantic-02.avif" },
  { title: "Meghalaya", price: "21,499", img: "/meghalaya.avif" },
  { title: "Himachal", price: "6,999", img: "/himachal.avif" },
  { title: "Sikkim", price: "14,499", img: "/sikkim.avif" },
  { title: "Arunachal Pardesh", price: "32,999", img: "/Arunachal-Pradesh-img.avif" },
  { title: "Uttarakhand", price: "5,499", img: "/uttarakhand.avif" },
  { title: "Nagaland", price: "30,499", img: "/nagaland-image-portrait-1.avif" },
  { title: "Rajsthan", price: "15,499", img: "/rajasthan.avif" },
  { title: "Andaman", price: "29,499", img: "/andaman.avif" },
  { title: "Kerala", price: "14,999", img: "/kerala.avif" },
];

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>

      {/* 🔥 TOP VIDEO BANNER */}
      <div className={styles.hero}>
        <video
          src="/video/main.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={styles.overlay}>
          <h1>India Trips</h1>
          <p>A Journey Through Time, Colour And Culture</p>
          <button>Explore</button>
        </div>
      </div>

      {/* 🔥 CARD SLIDER */}
      <div className={styles.sliderWrapper}>
        
        <button className={styles.left} onClick={() => scroll("left")}>‹</button>

        <div className={styles.slider} ref={scrollRef}>
          {cards.map((item, i) => (
            <div key={i} className={styles.card}>
              <img src={item.img} />

              <div className={styles.cardOverlay}>
                <h3>{item.title}</h3>
                <p>Starting Price Rs. {item.price}/-</p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.right} onClick={() => scroll("right")}>›</button>

      </div>
    </div>
  );
}