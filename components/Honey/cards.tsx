"use client";

import React from "react";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Thailand Honeymoon Packages", slug: "thailand-honeymoon-packages" },
  { name: "Rajasthan Honeymoon Packages", slug: "rajasthan-honeymoon-packages" },
  { name: "Kerala Honeymoon Packages", slug: "kerala-honeymoon-packages" },
  { name: "Europe Honeymoon Packages", slug: "europe-honeymoon-packages" },
  { name: "Honeymoon Packages in Manali", slug: "manali-honeymoon-packages" },
  { name: "Shimla Honeymoon Packages", slug: "shimla-honeymoon-packages" },
  { name: "Bhutan Honeymoon Package", slug: "bhutan-honeymoon-package" },
  { name: "Bali Honeymoon Package", slug: "bali-honeymoon-package" },
  { name: "Maldives Honeymoon Package", slug: "maldives-honeymoon-package" },
  { name: "Singapore Honeymoon Package", slug: "singapore-honeymoon-package" },
  { name: "Kashmir Honeymoon Package", slug: "kashmir-honeymoon-package" },
  { name: "Vietnam Honeymoon Package", slug: "vietnam-honeymoon-package" },
  { name: "Andaman Honeymoon Package", slug: "andaman-honeymoon-package" },
];

const HoneymoonCategories = () => {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/honeymoon/${slug}`);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f9f7f4]">
      
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif text-gray-800">
          Honeymoon Packages
        </h2>
        <div className="w-14 sm:w-16 h-1 bg-yellow-400 mx-auto mt-3 sm:mt-4 rounded"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        
        {categories.map((item, i) => (
          <div
            key={i}
            onClick={() => handleClick(item.slug)}
            className="cursor-pointer bg-white border border-gray-200 
                       rounded-xl p-4 sm:p-5 md:p-6 text-center 
                       shadow-sm hover:shadow-lg 
                       hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
              {item.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HoneymoonCategories;