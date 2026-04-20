"use client";

import { useState } from "react";

export default function Tabs({ data }: any) {
  const [active, setActive] = useState("overview");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 border-b overflow-x-auto">
        {["overview", "itinerary"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 capitalize ${
              active === tab
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 bg-white p-5 rounded-xl shadow">
        
        {active === "overview" && (
          <p className="text-gray-600">{data.overview}</p>
        )}

        {active === "itinerary" && (
          <ul className="space-y-3">
            {data.itinerary.map((day: string, i: number) => (
              <li key={i} className="border-l-4 border-blue-500 pl-3">
                {day}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}