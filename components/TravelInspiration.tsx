"use client";

import Image from "next/image";

const cards = [
  {
    title: "Bali",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    rotate: "-12deg",
    top: "10%",
    left: "8%",
  },
  {
    title: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    rotate: "10deg",
    top: "5%",
    right: "12%",
  },
  {
    title: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rotate: "-8deg",
    bottom: "12%",
    left: "15%",
  },
  {
    title: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    rotate: "12deg",
    bottom: "8%",
    right: "10%",
  },
  {
    title: "Goa",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    rotate: "-6deg",
    top: "35%",
    left: "2%",
  },
  {
    title: "Shimla",
    image: "https://images.unsplash.com/photo-1609948543911-1d8a0b1e4d44",
    rotate: "6deg",
    top: "40%",
    right: "2%",
  },
];

export default function FloatingDestinations() {
  return (
    <section className="relative py-24 bg-[#f5f1e8] overflow-hidden">
      {/* Floating Cards */}
      <div className="absolute inset-0 hidden md:block">
        {cards.map((card, i) => (
          <div
            key={i}
            className="absolute w-36 h-48 rounded-2xl overflow-hidden shadow-2xl hover:scale-110 transition duration-300"
            style={{
              transform: `rotate(${card.rotate})`,
              top: card.top,
              bottom: card.bottom,
              left: card.left,
              right: card.right,
            }}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto px-4">
        <p className="text-yellow-500 text-sm font-semibold">★★★★★ 4.9 Rating</p>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Ready to Explore the World?
        </h2>

        <p className="text-gray-600 mt-3">
          Join thousands of travelers discovering breathtaking destinations,
          hidden gems, and unforgettable experiences.
        </p>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}