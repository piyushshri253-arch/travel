"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BookingCard from "@/components/BookingCard";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBookings = async () => {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (!storedUser || !token) {
        router.push("/signin");
        return;
      }

      try {
        const res = await fetch("http://localhost:3001/api/my-bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          console.log(data.message);
          return;
        }

        setBookings(data.bookings);
      } catch (error) {
        console.log("Error fetching bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [router]);

  if (loading) {
    return <div className="p-10">Loading bookings...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found 😔</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
}