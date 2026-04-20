import Link from "next/link";

const trips = [
  {
    title: "Hunza Valley",
    slug: "hunza-valley",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
    date: "12 March 2026",
  },
  {
    title: "Skardu",
    slug: "skardu",
    image: "https://images.unsplash.com/photo-1597758259513-6b0d38fbdba1",
    date: "25 April 2026",
  },
  {
    title: "Fairy Meadows",
    slug: "fairy-meadows",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    date: "10 May 2026",
  },
];

export default function UpcomingTrips() {
  return (
    <div className="p-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Upcoming Trips</h1>

        {/* View All Button */}
        <Link
          href="/upcoming"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <Link key={trip.slug} href={`/trips/${trip.slug}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition">
              
              {/* Image */}
              <img
                src={trip.image}
                alt={trip.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold">{trip.title}</h2>
                <p className="text-gray-500 text-sm mt-2">{trip.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}