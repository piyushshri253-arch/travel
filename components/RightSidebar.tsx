"use client";

export default function RightSidebar({ place }: any) {
  return (
    <div className="space-y-6">

      {/* 🔥 PRICE CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border">
        <p className="text-sm text-gray-500">Starting from</p>

        <h2 className="text-3xl font-bold text-teal-600">
          {place.price || "₹--"}
        </h2>

        <p className="text-sm text-gray-500 mb-4">per person</p>

        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full font-semibold transition">
          Book Now
        </button>
      </div>

      {/* 🔥 CALLBACK FORM */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">

        <div className="bg-teal-50 p-4">
          <h3 className="font-semibold text-teal-700">
            Wanderlust Calling?
          </h3>
          <p className="text-sm text-gray-600">
            Allow Us to Call You Back!
          </p>
        </div>

        <div className="p-4 space-y-3">
          <input type="text" placeholder="Full Name"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-400" />

          <input type="tel" placeholder="Phone Number"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-400" />

          <input type="email" placeholder="Email"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-400" />

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg font-semibold transition">
            Submit
          </button>
        </div>

      </div>

    </div>
  );
}