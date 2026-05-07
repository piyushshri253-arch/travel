"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "What is included in the tour package?",
    answer:
      "All our packages include accommodation, breakfast, transfers, sightseeing, and guided tours (as per itinerary).",
  },
  {
    question: "How do I book a trip?",
    answer:
      "You can book directly through our website or contact our support team for assistance with booking.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes, most of our packages are customizable based on your travel preferences and budget.",
  },
  {
    question: "Is travel insurance included?",
    answer:
      "Travel insurance is not included by default but can be added at an additional cost.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation policies vary by package. Please check the specific package details before booking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <div className={styles.wrapper}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <div
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}