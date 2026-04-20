export default function TripHighlights({ highlights }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Highlights</h2>
      <ul className="list-disc ml-6 space-y-2">
        {highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}