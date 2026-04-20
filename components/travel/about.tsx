"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { aboutData } from "@/data/aboutData";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { slug } = useParams();
  const data = aboutData[(slug as string) || "bali"] || aboutData["bali"];
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = data.images; // ✅ take dynamic images from your data

  const [currentImage, setCurrentImage] = useState(0);

  // Cycle images every 4 seconds
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  // GSAP fade-up animation for content
  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el?.querySelectorAll(".fade-up"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, [slug]);

  return (
    <section ref={sectionRef} className="about">
      <div className="about-glow"></div>

      <div className="about-wrapper">
        {/* CONTENT */}
        <div className="about-content fade-up">
          <h2>{data.title}</h2>
          <p>{data.desc1}</p>
          <p>{data.desc2}</p>
          <button className="about-btn">Explore {slug}</button>
        </div>

        {/* DYNAMIC IMAGE */}
        <div className="about-image">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${data.title} image ${index + 1}`}
              fill
              className={`img ${index === currentImage ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}