"use client";

import { useRouter } from "next/navigation";

export default function TripDetails({ params }) {
  const router = useRouter();
  const { slug } = params;

  const tripsData = {
    "spiti-holi": {
      title: "Spiti Valley Holi Trip",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990c6e",
      description: "Celebrate Holi in the magical Spiti Valley.",
      price: 19999,
    },
    "spiti-budget": {
      title: "Spiti Budget Trip",
      image: "https://images.unsplash.com/photo-1605538883669-82573b3c2c36",
      description: "Affordable Spiti adventure.",
      price: 14999,
    },
    "sri-lanka": {
      title: "Sri Lanka Explorer",
      image: "https://images.unsplash.com/photo-1505739778507-7e8e5a0c1b8a",
      description: "Discover beaches & culture.",
      price: 45999,
    },
  };

  const trip = tripsData[slug];

  if (!trip) {
    return <div className="p-10 text-red-500">Trip not found</div>;
  }

  const calculateCoins = (price) => {
    return Math.floor(price / 10);
  };

  const handleBooking = async () => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      alert("Please login first");
      router.push("/signin");
      return;
    }

    const user = JSON.parse(storedUser);
    const coins = calculateCoins(trip.price);

    try {
      const res = await fetch("/api/book-trip", { // 🔥 FIXED (no localhost)
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
          destination: trip.title,
          price: trip.price,
          pointsEarned: coins,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Booking failed");
        return;
      }

      alert(`🎉 Trip Booked Successfully!\nYou earned ${coins} coins 🪙`);
      router.push("/bookings");

    } catch (error) {
      alert("Server error.");
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{trip.title}</h1>

      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-md"
      />

      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        {trip.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold text-gray-800">
            ₹{trip.price}
          </p>
          <p className="text-green-600 font-medium">
            Earn {calculateCoins(trip.price)} Coins 🪙
          </p>
        </div>

        <button
          onClick={handleBooking}
          className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}