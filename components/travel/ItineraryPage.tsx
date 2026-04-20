"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { itineraryData } from "@/data/itineraryData";

export default function ItineraryPage() {
  const { slug } = useParams();
  const data = itineraryData[(slug as string)?.toLowerCase() || "bali"];

  const tabs = ["Overview", "Highlights", "Itinerary", "Inclusions", "Exclusions", "Other"];
  const [activeTab, setActiveTab] = useState("Overview");

  // Safety fallback
  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Sorry, this itinerary is not available.
        </h2>
        <p className="text-gray-600 mt-4">
          Please check another tour or go back to the main page.
        </p>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <p className="text-gray-300 leading-relaxed">{data.overview}</p>;
      case "Highlights":
        return (
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            {data.highlights.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "Itinerary":
        return (
          <ul className="list-decimal pl-6 text-gray-300 space-y-1">
            {data.itinerary.map((day: string, index: number) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        );
      case "Inclusions":
        return (
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            {data.inclusions.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "Exclusions":
        return (
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            {data.exclusions.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "Other":
        return (
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            {data.other.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Hero Image */}
      <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80"
          alt={data.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Tabs + Content */}
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Tabs */}
        <div className="flex md:flex-col justify-start md:justify-between bg-gray-800 md:w-1/4 p-4 md:p-6 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 w-full ${
                activeTab === tab
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:w-3/4 p-6 md:p-10 bg-gray-900 text-gray-300 transition-all duration-500">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}