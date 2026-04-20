import fs from "fs-extra";
import path from "path";

export default async function Page({ params }: any) {
  // ✅ FIX: params must be awaited
  const { category, slug } = await params;

  const filePath = path.join(process.cwd(), "data/trips.json");

  let trips: any[] = [];

  // safety check
  if (await fs.pathExists(filePath)) {
    trips = await fs.readJson(filePath);
  }

  const trip = trips.find(
    (t: any) =>
      t.category === category &&
      t.slug === slug
  );

  if (!trip) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">❌ Trip Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-3xl font-bold">{trip.title}</h1>

      <p className="text-gray-600">
        Category: <b>{trip.category}</b>
      </p>

      <p className="text-gray-600">
        Duration: {trip.duration}
      </p>

      <p className="text-gray-600">
        Price: ₹{trip.price}
      </p>

      <p className="mt-4 text-gray-700">
        {trip.overview}
      </p>
    </div>
  );
}