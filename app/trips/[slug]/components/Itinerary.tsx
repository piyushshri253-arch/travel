export default function Itinerary({ data }: any) {
  return (
    <div className="space-y-4">
      {data?.map((day: any, i: number) => (
        <div key={i} className="border p-4 rounded-lg">
          <h3 className="font-semibold">Day {i + 1}</h3>
          <p className="text-gray-600">{day}</p>
        </div>
      ))}
    </div>
  );
}