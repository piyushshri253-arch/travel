"use client";

import styles from "./MobileDestinations.module.css";

const destinations = [
  { name: "Europe", img: "/europe.Avif" },
  { name: "Vietnam", img: "/vietnam.Avif" },
  { name: "Bali", img: "/bali.Avif" },
  { name: "Thailand", img: "thailand.Avif" },
  { name: "Japan", img: "japan-mobile.Avif" },
  { name: "Leh Ladakh", img: "ladakh.Avif" },
  { name: "Spiti Valley", img: "spiti.Avif" },
   { name: "Europe", img: "/europe.Avif" },
  { name: "Vietnam", img: "/vietnam.Avif" },
  { name: "Bali", img: "/bali.Avif" },
  { name: "Thailand", img: "thailand.Avif" },
  { name: "Japan", img: "japan-mobile.Avif" },
  { name: "Leh Ladakh", img: "ladakh.Avif" },
  { name: "Spiti Valley", img: "spiti.Avif" },
   { name: "Europe", img: "/europe.Avif" },
  { name: "Vietnam", img: "/vietnam.Avif" },
  { name: "Bali", img: "/bali.Avif" },
  { name: "Thailand", img: "thailand.Avif" },
  { name: "Japan", img: "japan-mobile.Avif" },
  { name: "Leh Ladakh", img: "ladakh.Avif" },
  { name: "Spiti Valley", img: "spiti.Avif" },
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