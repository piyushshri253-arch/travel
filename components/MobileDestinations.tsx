"use client";

import Link from "next/link";
import styles from "./MobileDestinations.module.css";

const destinations = [
  {
    name: "Europe",
    img: "/europe.avif",
    slug: "/international-trips/europe-tour-packages",
  },
  {
    name: "Vietnam",
    img: "/vietnam.avif",
    slug: "/international-trips/vietnam-tour-packages",
  },
  {
    name: "Bali",
    img: "/bali.avif",
    slug: "/international-trips/bali-tour-packages",
  },
  {
    name: "Thailand",
    img: "/thailand.avif",
    slug: "/international-trips/thailand-tour-packages",
  },
  {
    name: "Japan",
    img: "/japan-mobile.avif",
    slug: "/international-trips/japan-tour-packages",
  },
  {
    name: "Leh Ladakh",
    img: "/ladakh.avif",
    slug: "/domestic-trips/leh-ladakh-tour-packages",
  },
  {
    name: "Spiti Valley",
    img: "/spiti.avif",
    slug: "/domestic-trips/spiti-valley-tour-packages",
  },
  {
    name: "Europe",
    img: "/europe.avif",
    slug: "/international-trips/europe-tour-packages",
  },
  {
    name: "Vietnam",
    img: "/vietnam.avif",
    slug: "/international-trips/vietnam-tour-packages",
  },
  {
    name: "Bali",
    img: "/bali.avif",
    slug: "/international-trips/bali-tour-packages",
  },
  {
    name: "Thailand",
    img: "/thailand.avif",
    slug: "/international-trips/thailand-tour-packages",
  },
  {
    name: "Japan",
    img: "/japan-mobile.avif",
    slug: "/international-trips/japan-tour-packages",
  },
  {
    name: "Leh Ladakh",
    img: "/ladakh.avif",
    slug: "/domestic-trips/leh-ladakh-tour-packages",
  },
  {
    name: "Spiti Valley",
    img: "/spiti.avif",
    slug: "/domestic-trips/spiti-valley-tour-packages",
  },
  {
    name: "Europe",
    img: "/europe.avif",
    slug: "/international-trips/europe-tour-packages",
  },
  {
    name: "Vietnam",
    img: "/vietnam.avif",
    slug: "/international-trips/vietnam-tour-packages",
  },
  {
    name: "Bali",
    img: "/bali.avif",
    slug: "/international-trips/bali-tour-packages",
  },
  {
    name: "Thailand",
    img: "/thailand.avif",
    slug: "/international-trips/thailand-tour-packages",
  },
  {
    name: "Japan",
    img: "/japan-mobile.avif",
    slug: "/international-trips/japan-tour-packages",
  },
  {
    name: "Leh Ladakh",
    img: "/ladakh.avif",
    slug: "/domestic-trips/leh-ladakh-tour-packages",
  },
  {
    name: "Spiti Valley",
    img: "/spiti.avif",
    slug: "/domestic-trips/spiti-valley-tour-packages",
  },
];

export default function MobileDestinations() {
  return (
    <div className={styles.container}>
      <h3>Destinations</h3>

      <div className={styles.scroll}>
        {destinations.map((item, i) => (
          <Link key={i} href={item.slug} className={styles.card}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}