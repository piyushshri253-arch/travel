"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  { name: "Manali", price: "₹9,999", slug: "manali" },
  { name: "Jaipur", price: "₹7,499", slug: "jaipur" },
  { name: "Goa", price: "₹8,999", slug: "goa" },
  { name: "Ladakh", price: "₹12,999", slug: "ladakh" },
  { name: "Udaipur", price: "₹6,999", slug: "udaipur" },
];

export default function DestinationsCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Popular Destinations
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {destinations.map((place) => (
            <SwiperSlide key={place.slug}>
              <Link href={`/travel/${place.slug.toLowerCase()}`}>
                <div className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={`/destinations/${place.slug.toLowerCase()}.jpg`}
                      alt={place.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                      5D/4N
                    </div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      20% OFF
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{place.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        ⭐ 4.8 (120 Reviews)
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-3">
                      Explore the beauty of {place.name} with guided tours, hotel stay & meals included.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-sm mr-2">₹12,999</span>
                        <span className="text-cyan-600 font-bold text-xl">{place.price}</span>
                      </div>
                      <Link href={`/travel/${place.slug.toLowerCase()}`}>
                        <button className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm hover:bg-cyan-700 transition">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}