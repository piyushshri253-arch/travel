import styles from "./page.module.css";
import { PhoneCall } from "lucide-react";

type HeroData = {
  title: string;
  description: string;
  price: string;
};

type HeroProps = {
  data?: HeroData; // 👈 safe optional
};

export default function Hero({ data }: HeroProps) {
  if (!data) return null; // 👈 safety check

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>{data.title}</h1>

        <p>{data.description}</p>

        <div className={styles.price}>
          <span>Starting Price:</span>
          <strong>{data.price}</strong>
        </div>

        <button className={styles.btn}>
          <PhoneCall size={20} />
          Request a Callback
        </button>
      </div>
    </section>
  );
}