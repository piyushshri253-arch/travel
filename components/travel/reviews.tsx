"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ IMPORTANT
import styles from "../../components/travel/reviews.module.css";

type Review = {
  id?: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  destination?: string; // ✅ NEW
};

export default function ReviewsPage() {
  const params = useParams();
  const slug = params?.slug as string; // ✅ page ka name (goa, manali, etc.)

  const [reviews, setReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
  });

  // ✅ FETCH destination-wise reviews
  useEffect(() => {
    if (!slug) return;

    fetch(`/api/reviews?destination=${slug}`)
      .then((res) => res.json())
      .then(setReviews)
      .catch(console.error);
  }, [slug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? +value : value,
    }));
  };

  // ✅ SUBMIT with destination
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newReview: Review = {
      ...form,
      destination: slug, // ✅ MOST IMPORTANT
      date: new Date().toISOString(),
      avatar: "https://i.pravatar.cc/150?u=" + form.email,
    };

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    const result = await res.json();

    if (result.success) {
      setReviews([result.review, ...reviews]);
      setForm({ name: "", email: "", rating: 5, comment: "" });
      setShowModal(false);
    } else {
      alert("Failed to save review");
    }
  };

  return (
    <div className={styles.reviewsPage}>
      <h1 className={styles.reviewTitle}>Customer Reviews</h1>

      {reviews.length === 0 && <p>No reviews yet for this destination.</p>}

      {reviews.map((r, i) => (
        <div key={i} className={styles.reviewCard}>
          <img src={r.avatar} alt={r.name} className={styles.avatar} />
          <div className={styles.reviewContent}>
            <div className={styles.reviewHeader}>
              <div>
                <h3 className={styles.reviewName}>{r.name}</h3>
                <div className={styles.reviewDate}>
                  {new Date(r.date).toLocaleDateString()}
                </div>
              </div>
              <div className={styles.reviewRating}>
                {Array(r.rating).fill("⭐")}
              </div>
            </div>

            <p className={styles.reviewText}>
              {r.comment.length > 250
                ? r.comment.slice(0, 250) + "..."
                : r.comment}
            </p>

            {r.comment.length > 250 && (
              <span className={styles.continueReading}>
                Continue Reading
              </span>
            )}
          </div>
        </div>
      ))}

      <button
        className={styles.addReviewBtn}
        onClick={() => setShowModal(true)}
      >
        Add Review
      </button>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <span
              className={styles.closeModal}
              onClick={() => setShowModal(false)}
            >
              ×
            </span>

            <h2 className={styles.modalTitle}>Submit Your Review</h2>

            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
              >
                <option value={5}>⭐⭐⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={1}>⭐</option>
              </select>

              <textarea
                name="comment"
                placeholder="Your Review"
                value={form.comment}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit Review</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}