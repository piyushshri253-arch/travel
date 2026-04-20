"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, Clock, Globe } from "lucide-react";

const months = ["FEB '26", "MAR '26", "APR '26"];

const trips = [
  // 🇮🇳 INDIA TRIPS
  {
    slug: "ladakh",
    type: "india",
    month: "FEB '26",
    title: "Ladakh Winter Expedition",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200",
    price: "₹28,999",
    duration: "7N/8D",
    location: "Leh - Nubra",
    date: "18 Feb",
  },
  {
    slug: "goa",
    type: "india",
    month: "MAR '26",
    title: "Goa Beach Escape",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    price: "₹14,999",
    duration: "4N/5D",
    location: "North Goa",
    date: "12 Mar",
  },
  {
    slug: "kerala",
    type: "india",
    month: "APR '26",
    title: "Kerala Backwaters Retreat",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
    price: "₹22,999",
    duration: "5N/6D",
    location: "Alleppey - Munnar",
    date: "05 Apr",
  },
  {
    slug: "udaipur",
    type: "india",
    month: "MAR '26",
    title: "Udaipur Royal Experience",
    image: "https://images.unsplash.com/photo-1599661046827-dacde6976541?q=80&w=1200",
    price: "₹12,999",
    duration: "3N/4D",
    location: "Udaipur",
    date: "22 Mar",
  },
  {
    slug: "shimla",
    type: "india",
    month: "FEB '26",
    title: "Shimla Snow Trails",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200",
    price: "₹9,999",
    duration: "3N/4D",
    location: "Shimla",
    date: "10 Feb",
  },

  // 🌍 INTERNATIONAL TRIPS
  {
    slug: "bali",
    type: "international",
    month: "MAR '26",
    title: "Bali Tropical Paradise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    price: "₹54,999",
    duration: "6N/7D",
    location: "Ubud - Kuta",
    date: "18 Mar",
  },
  {
    slug: "dubai",
    type: "international",
    month: "FEB '26",
    title: "Dubai Luxury Escape",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    price: "₹39,999",
    duration: "4N/5D",
    location: "Dubai",
    date: "25 Feb",
  },
  {
    slug: "sri-lanka",
    type: "international",
    month: "APR '26",
    title: "Sri Lanka Explorer",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
    price: "₹44,999",
    duration: "6N/7D",
    location: "Colombo - Ella",
    date: "09 Apr",
  },
  {
    slug: "thailand",
    type: "international",
    month: "MAR '26",
    title: "Thailand Island Hopping",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    price: "₹41,999",
    duration: "5N/6D",
    location: "Phuket - Krabi",
    date: "28 Mar",
  },
];

export default function UpcomingTrips() {
  const [activeMonth, setActiveMonth] = useState(months[0]);
  const [tripType, setTripType] = useState<"india" | "international">("india");

  const filteredTrips = trips.filter(
    (trip) => trip.month === activeMonth && trip.type === tripType
  );

  return (
    <section className="relative py-16 px-4 md:px-10 bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">Upcoming Trips</h2>

        {/* Toggle Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setTripType("india")}
            className={`px-5 py-2 rounded-full border ${
              tripType === "india"
                ? "bg-teal-600 text-white"
                : "border-gray-300 text-gray-600"
            }`}
          >
            India Trips
          </button>

          <button
            onClick={() => setTripType("international")}
            className={`px-5 py-2 rounded-full border flex items-center gap-1 ${
              tripType === "international"
                ? "bg-teal-600 text-white"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <Globe size={16} /> International
          </button>
        </div>
      </div>

      {/* Month Tabs */}
      <div className="flex gap-3 overflow-x-auto mb-8">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`px-5 py-2 rounded-full border whitespace-nowrap ${
              activeMonth === month
                ? "bg-teal-50 border-teal-500 text-teal-600"
                : "border-gray-300 text-gray-500"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTrips.map((trip) => (
          <Link key={trip.slug} href={`/trips/${trip.slug}`}>
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition cursor-pointer backdrop-blur">
              
              {/* Image */}
              <div className="relative h-[360px]">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                  {trip.price}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="font-semibold text-lg mb-2">{trip.title}</h3>

                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {trip.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {trip.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs mt-1">
                    <CalendarDays size={14} /> {trip.date}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}