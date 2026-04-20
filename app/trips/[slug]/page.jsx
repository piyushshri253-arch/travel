import TripHero from "@/components/TripHero";
import TripHighlights from "@/components/TripHighlights";
import TripItinerary from "@/components/TripItinerary";
import TripGallery from "@/components/TripGallery";
import TripReviews from "@/components/TripReviews";
import TripSidebar from "@/components/TripSidebar";

export default async function TripDetails({ params }) {
  const { slug } = await params;

  const trips = {
    "spiti-holi": {
      title: "Winter Spiti & Sangla Holi Tour",
      location: "Himachal Pradesh",
      price: "₹24,999",
      duration: "6N/7D",
      heroImage: "https://source.unsplash.com/1600x900/?spiti,valley",
      gallery: [
        "https://source.unsplash.com/800x600/?spiti,mountains",
        "https://source.unsplash.com/800x600/?snow,himalayas",
        "https://source.unsplash.com/800x600/?monastery,spiti",
      ],
      highlights: [
        "Holi Celebration in Sangla",
        "Visit Key Monastery",
        "Snow drive through Kunzum Pass",
      ],
      itinerary: [
        "Day 1: Delhi to Shimla",
        "Day 2: Shimla to Sangla",
        "Day 3: Holi Celebration",
        "Day 4: Explore Spiti Valley",
      ],
    },

    "ladakh-adventure": {
      title: "Ladakh Adventure Trip",
      location: "Ladakh",
      price: "₹29,999",
      duration: "5N/6D",
      heroImage: "https://source.unsplash.com/1600x900/?ladakh,mountains",
      gallery: [
        "https://source.unsplash.com/800x600/?pangong,lake",
        "https://source.unsplash.com/800x600/?nubra,valley",
      ],
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass"],
      itinerary: ["Day 1: Leh Arrival", "Day 2: Nubra Valley", "Day 3: Pangong"],
    },
  };

  const trip = trips[slug];

  if (!trip) {
    return <div className="p-10 text-red-500">Trip not found</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 p-6">
      {/* LEFT CONTENT */}
      <div className="md:col-span-2 space-y-10">
        <TripHero trip={trip} />
        <TripHighlights highlights={trip.highlights} />
        <TripItinerary itinerary={trip.itinerary} />
        <TripGallery images={trip.gallery} />
        <TripReviews />
      </div>

      {/* RIGHT SIDEBAR */}
      <TripSidebar price={trip.price} duration={trip.duration} />
    </div>
  );
}