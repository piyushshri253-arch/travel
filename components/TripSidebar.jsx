export default function TripSidebar({ price, duration }) {
  return (
    <div className="border p-6 rounded-2xl shadow-lg sticky top-10">
      <h2 className="text-xl font-bold mb-4">Book This Trip</h2>

      <p className="text-2xl font-bold text-teal-600">{price}</p>
      <p className="text-gray-500 mb-4">{duration}</p>

      <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold">
        Book Now
      </button>

      <p className="text-xs text-gray-400 mt-3">
        Secure payment • Free cancellation
      </p>
    </div>
  );
}