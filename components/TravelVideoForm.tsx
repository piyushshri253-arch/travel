"use client";

import { useState } from "react";

export default function TravelVideoForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Inquiry Submitted 🚀");
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🎥 VIDEO SIDE */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <video
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-tropical-beach-5175/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[320px] md:h-[420px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold">Explore Paradise</h3>
              <p className="text-sm text-gray-200">
                Discover Bali, Maldives & more
              </p>
            </div>
          </div>
        </div>

        {/* 📝 FORM SIDE */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">
            Plan Your Dream Trip ✈️
          </h2>
          <p className="text-gray-500 mb-6">
            Fill the form and our travel expert will contact you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border rounded-lg p-3"
            />

            <select className="w-full border rounded-lg p-3">
              <option>Select Destination</option>
              <option>Bali</option>
              <option>Dubai</option>
              <option>Kerala</option>
              <option>Goa</option>
              <option>Europe</option>
            </select>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:scale-105 transition"
            >
              {loading ? "Submitting..." : "Get Free Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}