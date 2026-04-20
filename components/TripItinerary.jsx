export default function TripItinerary({ itinerary }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
      <ul className="space-y-2">
        {itinerary.map((day, i) => (
          <li key={i} className="border p-3 rounded-lg">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
}