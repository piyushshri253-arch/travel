"use client";

import { useState } from "react";

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(2);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Now</h2>

      {/* Price */}
      <div className="mb-4">
        <p className="text-gray-500 text-sm">Starting From</p>
        <p className="text-3xl font-bold text-teal-600">₹49,999</p>
      </div>

      {/* Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Date
        </label>
        <input
          type="date"
          className="w-full border rounded-lg p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Travelers */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Travelers
        </label>
        <input
          type="number"
          min="1"
          className="w-full border rounded-lg p-2"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </div>

      {/* Button */}
      <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition">
        Book Your Slot
      </button>

      {/* Extra trust badges */}
      <p className="text-xs text-gray-500 mt-3 text-center">
        ✔ Free cancellation | ✔ Secure payment
      </p>
    </div>
  );
}