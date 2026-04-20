"use client";

import { useRouter } from "next/navigation";
import styles from "./UpcomingBanner.module.css";

export default function UpcomingBanner() {
  const router = useRouter();

  return (
    <div
      className={styles.banner}
      onClick={() => router.push("/upcoming-trips")}
    >
      <img
        src="/uct-desktop-new.webp"
        alt="Upcoming Trips"
      />
    </div>
  );
}