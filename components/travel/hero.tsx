"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { destinationData } from "@/data/destinations";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHeroSequence() {
  const { slug } = useParams();

  const slides =
    destinationData[(slug as string) || "bali"] || destinationData["bali"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // GSAP animation for desktop
  useEffect(() => {
    if (isMobile) return;

    const cards = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      if (!card) return;

      tl.to(card, {
        x: "-70vw",
        scale: 2.5,
        duration: 1.2,
        ease: "power2.out",
      });

      tl.call(() => {
        if (bgRef.current) {
          bgRef.current.style.backgroundImage = `url(${slides[i].img})`;
        }
        setActiveIndex(i);
      }, undefined, "-=0.6");

      tl.to(card, { opacity: 0, duration: 0.4 });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [slug, isMobile]);

  return (
    <section className="hero" ref={heroRef}>
      {/* BACKGROUND */}
      <div
        ref={bgRef}
        className="hero-bg"
        style={{ backgroundImage: `url(${slides[activeIndex].img})` }}
      />

      <div className="overlay" />

      {/* TEXT */}
      <div className="left">
        <p>{slides[activeIndex]?.subtitle}</p>
        <h1>{slides[activeIndex]?.title}</h1>

        <div className="hero-buttons">
          {/* Book Now button */}
          <a href="/booking" className="btn book-now">
            Book Now
          </a>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/91XXXXXXXXXX" // replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* CARDS */}
      <div className={`cards ${isMobile ? "mobile" : ""}`}>
        {slides.map((item, i) => (
          <div
            key={i}
            ref={(el) => setCardRef(el, i)}
            className="card"
            onClick={() => setActiveIndex(i)} // mobile tap
          >
            <div
              className="card-img"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="card-overlay" />
            <div className="card-text">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}