"use client";

import React from "react";
import Link from "next/link";

type Destination = {
  name: string;
  image: string;
  slug: string;
};

const destinations: Destination[] = [
  { name: "Bali", image: "/honeymoon/cir1.jpg", slug: "bali" },
  { name: "Thailand", image: "/honeymoon/cir2.jpg", slug: "thailand" },
  { name: "Vietnam", image: "/honeymoon/cir3.jpg", slug: "vietnam" },
  { name: "Europe", image: "/honeymoon/cir4.jpg", slug: "europe" },
  { name: "Kashmir", image: "/honeymoon/cir5.jpg", slug: "kashmir" },
  { name: "Andaman", image: "/honeymoon/cir6.jpg", slug: "andaman" },
  { name: "Kerala", image: "/honeymoon/cir7.jpg", slug: "kerala" },
  { name: "Himachal", image: "/honeymoon/cir8.jpg", slug: "himachal" },
];

const Love: React.FC = () => {
  return (
    <div className="bg-[#f5ede4] min-h-screen py-12 px-6">
      
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-12">
        Your Love Story, Our Destinations!
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {destinations.map((place, index) => (
          
          <Link
            key={index}
            href={`/honeymoon/${place.slug}`}
            className="text-center group"
          >
            
            {/* Circle Image */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto 
                            rounded-full overflow-hidden shadow-lg 
                            group-hover:scale-105 transition duration-300">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <p className="mt-4 text-base sm:text-lg font-medium text-gray-700 group-hover:text-black">
              {place.name}
            </p>

          </Link>

        ))}

      </div>
    </div>
  );
};

export default Love;