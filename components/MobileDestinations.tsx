"use client";

import styles from "./MobileDestinations.module.css";

const destinations = [
  { name: "Europe", img: "/europe.avif" },
  { name: "Vietnam", img: "/vietnam.avif" },
  { name: "Bali", img: "/bali.avif" },
  { name: "Thailand", img: "thailand.avif" },
  { name: "Japan", img: "japan-mobile.avif" },
  { name: "Leh Ladakh", img: "ladakh.avif" },
  { name: "Spiti Valley", img: "spiti.avif" },
   { name: "Europe", img: "/europe.avif" },
  { name: "Vietnam", img: "/vietnam.avif" },
  { name: "Bali", img: "/bali.avif" },
  { name: "Thailand", img: "thailand.avif" },
  { name: "Japan", img: "japan-mobile.avif" },
  { name: "Leh Ladakh", img: "ladakh.avif" },
  { name: "Spiti Valley", img: "spiti.avif" },
   { name: "Europe", img: "/europe.avif" },
  { name: "Vietnam", img: "/vietnam.avif" },
  { name: "Bali", img: "/bali.avif" },
  { name: "Thailand", img: "thailand.avif" },
  { name: "Japan", img: "japan-mobile.avif" },
  { name: "Leh Ladakh", img: "ladakh.avif" },
  { name: "Spiti Valley", img: "spiti.avif" },
];

export default function MobileDestinations() {
  return (
    <div className={styles.container}>
      <h3>Destinations</h3>

      <div className={styles.scroll}>
        {destinations.map((item, i) => (
          <div key={i} className={styles.card}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}