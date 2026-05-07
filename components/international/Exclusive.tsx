import styles from "./Exclusive.module.css";

type Item = {
  title: string;
  desc: string;
};

type Props = {
  heading: string;
  items: Item[];
};

export default function Exclusive({ heading, items }: Props) {
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}