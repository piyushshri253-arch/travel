import styles from "./page.module.css";
import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>
          Best Europe Tour Packages
          <br />
          from India
        </h1>

        <p>
          Handpicked Europe Packages with Paris, Swiss Alps,
          Nordic Beauty and More
        </p>

        <div className={styles.price}>
          <span>Starting Price:</span>
          <strong>Rs. 89,990/- Per Person</strong>
        </div>

        <button className={styles.btn}>
          <PhoneCall size={20} />
          Request a Callback
        </button>
      </div>
    </section>
  );
}