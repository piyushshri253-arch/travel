"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TripLayout.module.css";

export default function TripLayout({ left, right }: any) {
  const [isSticky, setIsSticky] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const heroEndRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroEndRef.current || !wrapperRef.current || !sidebarRef.current)
        return;

      const heroBottom = heroEndRef.current.getBoundingClientRect().bottom;
      const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
      const sidebarHeight = sidebarRef.current.offsetHeight;

      // 👉 Start sticky after hero
      if (heroBottom <= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // 👉 Stop before footer
      if (wrapperBottom <= sidebarHeight + 120) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO END MARKER */}
      <div ref={heroEndRef}></div>

      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.left}>{left}</div>

        <div className={styles.right}>
          <div
            ref={sidebarRef}
            className={`${styles.sidebar} 
              ${isSticky ? styles.fixed : ""} 
              ${isBottom ? styles.stop : ""}`}
          >
            {right}
          </div>
        </div>
      </div>
    </>
  );
}