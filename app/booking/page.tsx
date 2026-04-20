"use client";

import { useState } from "react";

export default function BookingPage() {
  const [userId, setUserId] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          destination,
          price: Number(price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Booking failed");
        return;
      }

      setMessage("✅ Booking Successful!");
      setDestination("");
      setPrice("");
    } catch (error) {
      setMessage("❌ Something went wrong");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>Book Travel</h2>

      <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Book Now</button>
      </form>

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}
