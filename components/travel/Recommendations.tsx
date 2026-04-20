"use client";

import Image from "next/image";
import "./recommendations.css";

const places = [
  {
    title: "1st place",
    subtitle: "Nusa Lembongan Island",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  },
  {
    title: "2nd place",
    subtitle: "Pura Ulun Danu Bratan",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800",
  },
  {
    title: "3rd place",
    subtitle: "Raja Ampat",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
  },
  {
    title: "4th place",
    subtitle: "Gunung Kelimutu",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
  },
];

export default function Recommendations() {
  return (
    <section className="rec">
      <h2 className="rec-title">destination recommendations</h2>

      <div className="rec-grid">
        {places.map((item, i) => (
          <div key={i} className="rec-card">
            <Image src={item.img} alt="" fill />

            <div className="rec-overlay" />

            <div className="rec-text">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}