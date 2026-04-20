"use client";

import { useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { trips } from "@/data/trip";

type TripCard = {
  slug: string;
  image: string;
  title: string;
  price: string;
  duration: string;
  location: string;
  date: string;
  batch: string;
};

export default function SimilarTrips() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const params = useParams();

  const slug = params?.slug as string;

  const currentTrip = trips?.[slug];

  const similarTrips: TripCard[] = currentTrip?.card || [];

  const handleClick = (slug: string) => {
    router.push(`/trip/${slug}`);
  };

  if (!similarTrips.length) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-16 font-[Inter]">

      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 tracking-tight">
        Similar Trips
      </h2>

      {/* CAROUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >

        {similarTrips.map((trip, index) => (
          <div
            key={index}
            onClick={() => handleClick(trip.slug)}
            className="w-[260px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.04] transition duration-300 ease-out relative shadow-md hover:shadow-xl"
          >

            {/* IMAGE */}
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-[360px] object-cover"
              loading="lazy"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* PRICE */}
            <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow">
              {trip.price}
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-4 text-white">

              <h3 className="text-[15px] font-semibold leading-snug mb-2 tracking-tight">
                {trip.title}
              </h3>

              <div className="text-xs text-gray-200">
                {trip.duration}
              </div>

              <div className="text-xs text-gray-300">
                {trip.location}
              </div>

              <div className="text-xs text-gray-300">
                {trip.date}
              </div>

              <div className="text-xs font-semibold text-yellow-300 mt-1">
                {trip.batch}
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}