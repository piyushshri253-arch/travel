"use client";

import { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Review {
  name: string;
  text: string;
  photo: string;
  travelImage: string;
}

interface DestinationReviewsProps {
  destination: string;
  reviewsData: Record<string, Review[]>;
}

export default function ReviewsSection({
  destination,
  reviewsData,
}: DestinationReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ================================
  // Step 1: Initialize reviews from localStorage
  // ================================
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem(`reviews-${destination}`);
    return saved ? JSON.parse(saved) : reviewsData[destination] || [];
  });

  const [formVisible, setFormVisible] = useState(false);

  const [form, setForm] = useState({
    name: "",
    text: "",
    photoFile: null as File | null,
    travelFile: null as File | null,
  });

  const [preview, setPreview] = useState({
    photo: "",
    travelImage: "",
  });

  const toggleForm = () => setFormVisible((prev) => !prev);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const fileURL = URL.createObjectURL(files[0]);
      if (name === "photo") {
        setForm((prev) => ({ ...prev, photoFile: files[0] }));
        setPreview((prev) => ({ ...prev, photo: fileURL }));
      } else if (name === "travelImage") {
        setForm((prev) => ({ ...prev, travelFile: files[0] }));
        setPreview((prev) => ({ ...prev, travelImage: fileURL }));
      }
    }
  };

  // ================================
  // Step 2: Submit review & save to localStorage
  // ================================
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text || !preview.photo || !preview.travelImage) {
      return alert("Please fill all fields and upload images!");
    }

    const newReview: Review = {
      name: form.name,
      text: form.text,
      photo: preview.photo,
      travelImage: preview.travelImage,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Save to localStorage
    localStorage.setItem(`reviews-${destination}`, JSON.stringify(updatedReviews));

    // Reset form
    setForm({ name: "", text: "", photoFile: null, travelFile: null });
    setPreview({ photo: "", travelImage: "" });
    setFormVisible(false);
  };

  // ================================
  // Step 3: GSAP stacked animation
  // ================================
  useEffect(() => {
    if (!containerRef.current || reviews.length === 0) return;

    const cards = gsap.utils.toArray<HTMLDivElement>(
      containerRef.current.querySelectorAll(".review-card")
    );
    const spacer = 20;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, card, cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
        scale: scaleVal,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: containerRef.current,
        end: () => `bottom top+=${200 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        markers: false,
        id: `pin-${index}`,
        invalidateOnRefresh: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [reviews]);

  return (
    <section className="reviews-section">
      <h2 className="text-3xl font-bold text-center mb-10">
        Traveler Reviews for {destination}
      </h2>

      <div className="reviews-container" ref={containerRef}>
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-card-horizontal">
              <div className="review-image">
                <img src={r.travelImage} alt={`Travel ${i}`} />
              </div>
              <div className="review-content-horizontal">
                <p>"{r.text}"</p>
                <div className="reviewer-info">
                  <div className="client-photo">
                    <img src={r.photo} alt={r.name} />
                  </div>
                  <span className="reviewer-name">{r.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="form-button-container">
        <button onClick={toggleForm} className="show-form-button">
          {formVisible ? "Close Form ✖" : "Submit Your Review 💖"}
        </button>
      </div>

      <div className={`review-form-container ${formVisible ? "visible" : ""}`}>
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="text"
            placeholder="Your Review"
            value={form.text}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <input
            type="file"
            name="travelImage"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* ===============================
          Internal CSS
      =============================== */}
      <style jsx>{`
        .reviews-section {
          width: 100%;
          padding: 4rem 2rem;
          background-color: #f9f9f9;
          position: relative;
          overflow: hidden;
        }
        .reviews-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding-top: 50px;
        }
        .review-card {
          width: 100%;
          max-width: 800px;
          height: 300px;
          background-color: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          transform-origin: top center;
        }
        .review-card-horizontal {
          display: flex;
          height: 100%;
          gap: 1rem;
        }
        .review-image {
          flex: 1;
          overflow: hidden;
          border-radius: 1rem 0 0 1rem;
        }
        .review-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .review-card:hover .review-image img {
          transform: scale(1.05);
        }
        .review-content-horizontal {
          flex: 1;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .review-content-horizontal p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }
        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: auto;
        }
        .client-photo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #fff;
        }
        .client-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .reviewer-name {
          font-weight: 600;
          color: #111827;
        }
        .form-button-container {
          text-align: center;
          margin-top: 3rem;
        }
        .show-form-button {
          padding: 0.75rem 1.5rem;
          background-color: #2563eb;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .show-form-button:hover {
          background-color: #1d4ed8;
        }
        .review-form-container {
          max-width: 600px;
          margin: 2rem auto 0;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.6s ease, padding 0.6s ease;
        }
        .review-form-container.visible {
          max-height: 600px;
          padding: 1rem;
        }
        .review-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .review-form input,
        .review-form textarea {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #ccc;
          font-size: 1rem;
          width: 100%;
        }
        .review-form button {
          padding: 0.75rem 1rem;
          background-color: #2563eb;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .review-form button:hover {
          background-color: #1d4ed8;
        }
        @media (max-width: 768px) {
          .review-card {
            max-width: 95%;
            height: 350px;
          }
          .review-card-horizontal {
            flex-direction: column;
          }
          .review-image {
            height: 180px;
            border-radius: 1rem 1rem 0 0;
          }
          .review-content-horizontal {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}