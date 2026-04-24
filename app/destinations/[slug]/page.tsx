import { notFound } from "next/navigation";
import DestinationGallery from "@/components/DestinationGallery";
import ReviewsSection from "@/components/Reviews";
import RightSidebar from "@/components/RightSidebar";
import DestinationHero from "@/components/DestinationHero";
import ExploreDestinations from "@/components/ExploreDestinations";
import FadeUp from "@/components/FadeUp";
import DestinationTabs from "@/components/DestinationTabs";

/* ================= TYPES ================= */

type Itinerary = {
  day: string;
  title: string;
  desc: string;
};

type Destination = {
  title: string;
  description: string;
  hero: string;
  gallery: string[];
  price: string;
  overview: string;
  highlights: string[];
  itinerary: Itinerary[];
  inclusions: string[];
  exclusions: string[];
  otherInfo: string;
};

/* ================= DATA ================= */

const destinations: Record<string, Destination> = {
  bali: {
    title: "Bali, Indonesia",
    description: "Tropical beaches, temples, and stunning sunsets.",
    hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    gallery: [
      "https://wallpaperaccess.com/full/373636.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    ],
    price: "₹24,999",
    overview: "Bali is a tropical paradise known for beaches & temples.",
    highlights: [
      "Uluwatu Temple",
      "Ubud rice terraces",
      "Water sports",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        desc: "Hotel check-in & relax",
      },
    ],
    inclusions: ["Hotel", "Breakfast"],
    exclusions: ["Flights"],
    otherInfo: "Best time: April–Oct",
  },

  singapore: {
    title: "Singapore",
    description: "Modern city with skyline.",
    hero: "https://images.unsplash.com/photo-1508962914676-134849a727f0",
    gallery: [
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd",
    ],
    price: "₹49,999",
    overview: "Modern & clean city.",
    highlights: ["Marina Bay", "Sentosa"],
    itinerary: [
      {
        day: "Day 1",
        title: "City Tour",
        desc: "Explore skyline",
      },
    ],
    inclusions: ["Hotel"],
    exclusions: ["Flights"],
    otherInfo: "Clean city",
  },
};

/* ================= REVIEWS ================= */

const reviewsData: Record<string, any[]> = {
  bali: [
    { name: "Aman", text: "Best trip ever!", photo: "/images/reviewers/aman.jpg" },
  ],
};

/* ================= STATIC PARAMS ================= */

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

/* ================= SIDEBAR ================= */

const destinationCategories = {
  international: [
    { name: "Bali", slug: "bali" },
    { name: "Singapore", slug: "singapore" },
  ],
  india: [
    { name: "Ladakh", slug: "ladakh" },
    { name: "Spiti Valley", slug: "spiti-valley" },
  ],
  special: ["Honeymoon Trips"],
  links: ["About Us"],
};

/* ================= PAGE ================= */

export default function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  const place = destinations[params.slug];

  if (!place) return notFound();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        {/* HERO */}
        <DestinationHero place={place} />

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-20">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-10">
            <FadeUp>
              <h1 className="text-4xl font-bold text-white">
                {place.title}
              </h1>
              <p className="text-gray-300">{place.description}</p>
            </FadeUp>

            <DestinationTabs place={place} />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6 sticky top-28 h-fit">
            <RightSidebar place={place} />
            <ExploreDestinations data={destinationCategories} />
          </div>
        </div>

        {/* WHITE SECTION */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Explore {place.title}
              </h2>
              <DestinationGallery images={place.gallery} />
            </div>

            <ReviewsSection
              destination={params.slug}
              reviewsData={reviewsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}