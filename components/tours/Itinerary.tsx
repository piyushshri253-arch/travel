export default function Itinerary() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">
        Itinerary
      </h2>

      <ul className="space-y-3">
        <li className="border-l-4 border-blue-500 pl-3">
          Day 1: Arrival in Leh
        </li>
        <li className="border-l-4 border-blue-500 pl-3">
          Day 2: Nubra Valley
        </li>
        <li className="border-l-4 border-blue-500 pl-3">
          Day 3: Pangong Lake
        </li>
      </ul>
    </div>
  );
}