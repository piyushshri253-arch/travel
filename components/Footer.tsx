"use client";

import Link from "next/link";

export default function Footer() {
  const international = [
    "Europe",
    "Bali",
    "Vietnam",
    "Thailand",
    "Kazakhstan",
    "Singapore",
    "Bhutan",
    "Maldives",
    "Dubai",
    "Malaysia",
  ];

  const indiaTrips = [
    "Ladakh",
    "Spiti Valley",
    "Meghalaya",
    "Kashmir",
    "Himachal Pradesh",
    "Andaman",
    "Kerala",
    "Rajasthan",
    "Nagaland",
  ];

  const specials = [
    "Community Trips",
    "Honeymoon Trips",
    "Corporate Trips",
    "Weekend Getaways",
  ];

  const quickLinks = [
    "About Us",
    "Privacy Policy",
    "Terms & Conditions",
    "Customer Success & Support",
    "Disclaimer",
    "Careers",
    "Blogs",
    "Payments",
    "Investor Relations",
  ];

  const createSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  return (
    <footer className="bg-[#072a2f] text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* International Trips */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            International Trips
          </h3>
          <ul className="space-y-2">
            {international.map((item) => (
              <li key={item}>
                <Link
                  href={`/${createSlug(item)}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* India Trips */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            India Trips
          </h3>
          <ul className="space-y-2">
            {indiaTrips.map((item) => (
              <li key={item}>
                <Link
                  href={`/${createSlug(item)}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            TicketTicklingOn Special
          </h3>
          <ul className="space-y-2">
            {specials.map((item) => (
              <li key={item}>
                <Link
                  href={`/trips/${createSlug(item)}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item}>
                <Link
                  href={`/${createSlug(item)}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Travel Rewards. All rights reserved.
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-400 text-white p-4 rounded-full shadow-lg"
      >
        ↑
      </button>
    </footer>
  );
}