"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

const tripsData = [
  {
    id: 1,
    title: "8-Days Highlights of Europe Summer",
    location: "Paris Airport - Europe",
    duration: 7,
    durationLabel: "7N/8D",
    date: "8 May, 11 May",
    price: 221999,
    image: "/europe.avif",
    destination: "International",
  },
  {
    id: 2,
    title: "3D Kasol Kheerganga Trek",
    location: "Delhi - Himachal",
    duration: 2,
    durationLabel: "2N/3D",
    date: "8 May, 15 May",
    price: 9499,
    image: "/kasol.avif",
    destination: "India",
  },
  {
    id: 3,
    title: "Zanskar Valley Adventure Trip",
    location: "Manali - Ladakh",
    duration: 3,
    durationLabel: "3N/4D",
    date: "12 May, 18 May",
    price: 12499,
    image: "/ladakh.avif",
    destination: "India",
  },
  {
    id: 4,
    title: "Turkey Luxury Escape",
    location: "Istanbul Airport - Turkey",
    duration: 6,
    durationLabel: "6N/7D",
    date: "20 Jun, 28 Jun",
    price: 79999,
    image: "/turkey.avif",
    destination: "International",
  },

  // 🇮🇳 INDIA (MORE TRIPS)
  {
    id: 5,
    title: "Goa Beach Party Package",
    location: "Mumbai - Goa",
    duration: 3,
    durationLabel: "3N/4D",
    date: "5 Jul, 10 Jul",
    price: 12999,
    image: "/goa.avif",
    destination: "India",
  },
  {
    id: 6,
    title: "Rishikesh River Rafting Adventure",
    location: "Delhi - Rishikesh",
    duration: 2,
    durationLabel: "2N/3D",
    date: "10 Jul, 15 Jul",
    price: 7999,
    image: "/rishikesh.avif",
    destination: "India",
  },
  {
    id: 7,
    title: "Manali Snow Paradise Trip",
    location: "Delhi - Manali",
    duration: 4,
    durationLabel: "4N/5D",
    date: "15 Dec, 22 Dec",
    price: 15999,
    image: "/manali.avif",
    destination: "India",
  },
  {
    id: 8,
    title: "Spiti Valley Road Trip",
    location: "Shimla - Spiti",
    duration: 6,
    durationLabel: "6N/7D",
    date: "1 Aug, 10 Aug",
    price: 18999,
    image: "/spiti.avif",
    destination: "India",
  },
  {
    id: 9,
    title: "Varanasi Spiritual Ganga Experience",
    location: "Lucknow - Varanasi",
    duration: 2,
    durationLabel: "2N/3D",
    date: "5 Jun, 12 Jun",
    price: 5999,
    image: "/varanasi.avif",
    destination: "India",
  },
  {
    id: 10,
    title: "Kerala Backwaters & Houseboat Stay",
    location: "Cochin - Alleppey",
    duration: 4,
    durationLabel: "4N/5D",
    date: "18 Aug, 25 Aug",
    price: 18999,
    image: "/kerala.avif",
    destination: "India",
  },

  // 🌍 INTERNATIONAL (MORE PREMIUM)
  {
    id: 11,
    title: "Dubai Desert Safari Luxury Tour",
    location: "Dubai International",
    duration: 4,
    durationLabel: "4N/5D",
    date: "15 Jul, 22 Jul",
    price: 45999,
    image: "/dubai.avif",
    destination: "International",
  },
  {
    id: 12,
    title: "Bali Island Romantic Escape",
    location: "Denpasar - Bali",
    duration: 5,
    durationLabel: "5N/6D",
    date: "10 Sep, 18 Sep",
    price: 54999,
    image: "/bali.avif",
    destination: "International",
  },
  {
    id: 13,
    title: "Switzerland Alpine Dream Tour",
    location: "Zurich - Switzerland",
    duration: 7,
    durationLabel: "7N/8D",
    date: "5 Jun, 15 Jun",
    price: 299999,
    image: "/switzerland.avif",
    destination: "International",
  },
  {
    id: 14,
    title: "Thailand Bangkok + Phuket Combo",
    location: "Bangkok Airport",
    duration: 5,
    durationLabel: "5N/6D",
    date: "12 Jul, 20 Jul",
    price: 39999,
    image: "/thailand.avif",
    destination: "International",
  },
  {
    id: 15,
    title: "Singapore City Explorer",
    location: "Changi Airport",
    duration: 4,
    durationLabel: "4N/5D",
    date: "22 Aug, 30 Aug",
    price: 65999,
    image: "/singapore.avif",
    destination: "International",
  },

  // 🏔 ADVENTURE / TREKKING
  {
    id: 16,
    title: "Hampta Pass Trek Expedition",
    location: "Manali - Himachal",
    duration: 5,
    durationLabel: "5N/6D",
    date: "10 Jun, 18 Jun",
    price: 11999,
    image: "/hampta.avif",
    destination: "India",
  },
  {
    id: 17,
    title: "Valley of Flowers Trek",
    location: "Uttarakhand",
    duration: 6,
    durationLabel: "6N/7D",
    date: "1 Jul, 10 Jul",
    price: 13999,
    image: "/valleyflowers.avif",
    destination: "India",
  },

  // 🏝 BEACH / RELAX
  {
    id: 18,
    title: "Andaman Island Relaxing Tour",
    location: "Port Blair - Andaman",
    duration: 5,
    durationLabel: "5N/6D",
    date: "15 Sep, 25 Sep",
    price: 25999,
    image: "/andaman.avif",
    destination: "India",
  },
  {
    id: 19,
    title: "Maldives Honeymoon Package",
    location: "Male Airport",
    duration: 4,
    durationLabel: "4N/5D",
    date: "10 Oct, 18 Oct",
    price: 89999,
    image: "/maldives.avif",
    destination: "International",
  },

  // 🏙 CITY BREAKS
  {
    id: 20,
    title: "New York City Explorer",
    location: "JFK Airport - USA",
    duration: 6,
    durationLabel: "6N/7D",
    date: "5 Nov, 12 Nov",
    price: 349999,
    image: "/newyork.avif",
    destination: "International",
  },  {
    id: 21,
    title: "Ladakh Bike Expedition Adventure",
    location: "Leh - Ladakh",
    duration: 6,
    durationLabel: "6N/7D",
    date: "1 Jun, 10 Jun",
    price: 28999,
    image: "/ladakh-bike.avif",
    destination: "India",
  },
  {
    id: 22,
    title: "Jammu & Kashmir Paradise Tour",
    location: "Srinagar - Gulmarg",
    duration: 5,
    durationLabel: "5N/6D",
    date: "5 Jun, 12 Jun",
    price: 19999,
    image: "/kashmir.avif",
    destination: "India",
  },
  {
    id: 23,
    title: "Dubai Marina Luxury Cruise Experience",
    location: "Dubai Marina",
    duration: 3,
    durationLabel: "3N/4D",
    date: "10 Jul, 15 Jul",
    price: 38999,
    image: "/dubai-cruise.avif",
    destination: "International",
  },
  {
    id: 24,
    title: "Paris Romantic City Break",
    location: "Paris - France",
    duration: 4,
    durationLabel: "4N/5D",
    date: "15 Jul, 22 Jul",
    price: 159999,
    image: "/paris.avif",
    destination: "International",
  },
  {
    id: 25,
    title: "Sri Lanka Cultural Heritage Tour",
    location: "Colombo - Kandy",
    duration: 5,
    durationLabel: "5N/6D",
    date: "20 Jul, 28 Jul",
    price: 44999,
    image: "/srilanka.avif",
    destination: "International",
  },
  {
    id: 26,
    title: "Nepal Kathmandu & Pokhara Tour",
    location: "Kathmandu - Nepal",
    duration: 4,
    durationLabel: "4N/5D",
    date: "1 Aug, 8 Aug",
    price: 17999,
    image: "/nepal.avif",
    destination: "International",
  },
  {
    id: 27,
    title: "Bangalore Tech City Weekend Trip",
    location: "Delhi - Bangalore",
    duration: 3,
    durationLabel: "3N/4D",
    date: "5 Aug, 12 Aug",
    price: 12999,
    image: "/bangalore.avif",
    destination: "India",
  },
  {
    id: 28,
    title: "Udaipur Royal Heritage Experience",
    location: "Jaipur - Udaipur",
    duration: 3,
    durationLabel: "3N/4D",
    date: "10 Aug, 18 Aug",
    price: 14999,
    image: "/udaipur.avif",
    destination: "India",
  },
  {
    id: 29,
    title: "Jaipur Pink City Cultural Tour",
    location: "Delhi - Jaipur",
    duration: 2,
    durationLabel: "2N/3D",
    date: "15 Aug, 20 Aug",
    price: 7999,
    image: "/jaipur.avif",
    destination: "India",
  },
  {
    id: 30,
    title: "Goa Luxury Beach Resort Stay",
    location: "Goa - South Goa",
    duration: 4,
    durationLabel: "4N/5D",
    date: "20 Aug, 28 Aug",
    price: 21999,
    image: "/goa-luxury.avif",
    destination: "India",
  },
  {
    id: 31,
    title: "Andaman Scuba Diving Experience",
    location: "Havelock Island",
    duration: 5,
    durationLabel: "5N/6D",
    date: "25 Aug, 2 Sep",
    price: 31999,
    image: "/andaman-scuba.avif",
    destination: "India",
  },
  {
    id: 32,
    title: "Vietnam Hanoi & Ha Long Bay Cruise",
    location: "Hanoi - Vietnam",
    duration: 6,
    durationLabel: "6N/7D",
    date: "1 Sep, 10 Sep",
    price: 59999,
    image: "/vietnam.avif",
    destination: "International",
  },
  {
    id: 33,
    title: "Maldives Water Villa Luxury Stay",
    location: "Male - Maldives",
    duration: 4,
    durationLabel: "4N/5D",
    date: "5 Sep, 12 Sep",
    price: 119999,
    image: "/maldives-villa.avif",
    destination: "International",
  },
  {
    id: 34,
    title: "London Classic City Tour",
    location: "Heathrow - London",
    duration: 5,
    durationLabel: "5N/6D",
    date: "10 Sep, 18 Sep",
    price: 249999,
    image: "/london.avif",
    destination: "International",
  },
  {
    id: 35,
    title: "Italy Rome + Venice + Milan Tour",
    location: "Rome - Italy",
    duration: 7,
    durationLabel: "7N/8D",
    date: "15 Sep, 25 Sep",
    price: 279999,
    image: "/italy.avif",
    destination: "International",
  },
  {
    id: 36,
    title: "Dubai Shopping Festival Trip",
    location: "Dubai Mall Area",
    duration: 4,
    durationLabel: "4N/5D",
    date: "1 Oct, 8 Oct",
    price: 49999,
    image: "/dubai-shopping.avif",
    destination: "International",
  },
  {
    id: 37,
    title: "Singapore Universal Studios Tour",
    location: "Sentosa - Singapore",
    duration: 3,
    durationLabel: "3N/4D",
    date: "5 Oct, 10 Oct",
    price: 69999,
    image: "/singapore-uss.avif",
    destination: "International",
  },
  {
    id: 38,
    title: "Thailand Full Moon Party Experience",
    location: "Phuket - Thailand",
    duration: 5,
    durationLabel: "5N/6D",
    date: "10 Oct, 18 Oct",
    price: 42999,
    image: "/phuket.avif",
    destination: "International",
  },
  {
    id: 39,
    title: "Spiti Winter Snow Drive Adventure",
    location: "Shimla - Spiti",
    duration: 6,
    durationLabel: "6N/7D",
    date: "1 Dec, 10 Dec",
    price: 24999,
    image: "/spiti-snow.avif",
    destination: "India",
  },
  {
    id: 40,
    title: "Manali Snow Festival Trip",
    location: "Manali - Himachal",
    duration: 4,
    durationLabel: "4N/5D",
    date: "15 Dec, 22 Dec",
    price: 16999,
    image: "/manali-snow.avif",
    destination: "India",
  },

  // EXTRA BONUS (PRO LEVEL MIX)
  {
    id: 41,
    title: "Sweden Northern Lights Experience",
    location: "Stockholm - Sweden",
    duration: 6,
    durationLabel: "6N/7D",
    date: "5 Jan, 12 Jan",
    price: 329999,
    image: "/sweden.avif",
    destination: "International",
  },
  {
    id: 42,
    title: "Japan Tokyo Cherry Blossom Tour",
    location: "Tokyo - Japan",
    duration: 5,
    durationLabel: "5N/6D",
    date: "1 Apr, 10 Apr",
    price: 289999,
    image: "/japan.avif",
    destination: "International",
  },
  {
    id: 43,
    title: "Hong Kong City Lights Experience",
    location: "Hong Kong",
    duration: 4,
    durationLabel: "4N/5D",
    date: "10 Mar, 18 Mar",
    price: 159999,
    image: "/hongkong.avif",
    destination: "International",
  },
  {
    id: 44,
    title: "Mauritius Honeymoon Paradise",
    location: "Port Louis - Mauritius",
    duration: 5,
    durationLabel: "5N/6D",
    date: "20 Feb, 28 Feb",
    price: 139999,
    image: "/mauritius.avif",
    destination: "International",
  },
  {
    id: 45,
    title: "Goa Sunset Yacht Party Cruise",
    location: "North Goa",
    duration: 2,
    durationLabel: "2N/3D",
    date: "5 May, 8 May",
    price: 15999,
    image: "/goa-yacht.avif",
    destination: "India",
  },
];const dateFilters = [
  "Any Date",
  "This Week",
  "This Month",
  "Next Month",
];

/* helper: parse date like "5 Jul" */
const getMonthFromDate = (dateStr) => {
  const month = dateStr.split(" ")[1];
  return month;
};

/* ---------------- COMPONENT ---------------- */

export default function UpcomingTrips() {
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [selectedDate, setSelectedDate] = useState(""); // YYYY-MM-DD
  const [maxDuration, setMaxDuration] = useState(15);
  const [maxBudget, setMaxBudget] = useState(400000);

  /* ---------------- FILTER LOGIC ---------------- */

  const filteredTrips = useMemo(() => {
    return tripsData.filter((trip) => {
      const matchSearch = trip.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchDestination =
        selectedDestination === "All" ||
        trip.destination === selectedDestination;

      const matchDuration = trip.duration <= maxDuration;
      const matchBudget = trip.price <= maxBudget;

      /* ✅ DATE FILTER FIX */
      let matchDate = true;

      const month = getMonthFromDate(trip.date);

      if (selectedDate === "This Month") {
        const currentMonth = new Date().toLocaleString("en-US", {
          month: "short",
        });
        matchDate = month.includes(currentMonth);
      }

      if (selectedDate === "Next Month") {
        matchDate = true; // (can extend later)
      }

      return (
        matchSearch &&
        matchDestination &&
        matchDuration &&
        matchBudget &&
        matchDate
      );
    });
  }, [
    search,
    selectedDestination,
    selectedDate,
    maxDuration,
    maxBudget,
  ]);

  const resetFilters = () => {
    setSearch("");
    setSelectedDestination("All");
    setSelectedDate("Any Date");
    setMaxDuration(15);
    setMaxBudget(400000);
  };

  /* ---------------- UI ---------------- */

  return (
    <section className="min-h-screen bg-[#f6f8fb] px-4 py-10 md:px-10 lg:px-16">

      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Upcoming Trips</h1>
          <p className="text-gray-500 mt-1">
            Discover handpicked travel experiences
          </p>
        </div>

        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            className="w-full rounded-full border bg-white py-3 pl-11 pr-4 outline-none focus:border-teal-500"
            placeholder="Search trips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>


      {/* DATE FILTER ROW */}
      <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
        {dateFilters.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDate(d)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm border transition ${
              selectedDate === d
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

        {/* FILTER PANEL */}
        <aside className="rounded-2xl bg-white p-5 shadow-sm border h-fit">

          <div className="flex justify-between mb-4">
            <h2 className="font-bold">Filters</h2>
            <button onClick={resetFilters} className="text-red-500 text-sm">
              Reset
            </button>
          </div>
          {/* CALENDAR FILTER */}
<div className="mb-6 flex items-center gap-3">
  <div className="flex items-center gap-2 bg-white border rounded-full px-4 py-2">
    <Calendar size={16} className="text-gray-500" />
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="outline-none text-sm"
    />
  </div>

  {selectedDate && (
    <button
      onClick={() => setSelectedDate("")}
      className="text-sm text-red-500"
    >
      Clear
    </button>
  )}
</div>

          {/* DESTINATION */}
          <div className="mb-5">
            <p className="text-sm font-semibold mb-2">Destination</p>
            <div className="flex flex-wrap gap-2">
              {["All", "India", "International"].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDestination(d)}
                  className={`px-3 py-2 text-sm rounded-full border ${
                    selectedDestination === d
                      ? "bg-teal-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* DURATION */}
          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span>Duration</span>
              <span>{maxDuration} Nights</span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              value={maxDuration}
              onChange={(e) => setMaxDuration(Number(e.target.value))}
              className="w-full accent-teal-500"
            />
          </div>

          {/* BUDGET */}
          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span>Budget</span>
              <span>₹{maxBudget.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={400000}
              step={5000}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full accent-teal-500"
            />
          </div>

        </aside>

        {/* CARDS GRID (PRO + SMALL + CLEAN) */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {filteredTrips.slice(0, 18).map((trip) => (
            <div
              key={trip.id}
              className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={trip.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <span className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded-full">
                  {trip.destination}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="font-semibold text-sm line-clamp-2">
                  {trip.title}
                </h3>

                <div className="text-xs text-gray-500 mt-2 space-y-1">

                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {trip.location}
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {trip.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {trip.durationLabel}
                  </div>

                </div>

                {/* FOOTER */}
                <div className="mt-3 flex justify-between items-center">
                  <p className="font-bold text-sm">
                    ₹{trip.price.toLocaleString()}
                  </p>

                  <button className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600">
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}