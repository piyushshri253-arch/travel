"use client";

interface Props {
  price: string;
  title: string;
}

export default function StickyBooking({ price, title }: Props) {

  const handleWhatsApp = () => {
    const phone = "91XXXXXXXXXX";
    const message = `Hi, I'm interested in ${title}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="lg:sticky lg:top-24">
      
      {/* Price Card */}
      <div className="bg-white rounded-xl shadow-lg p-5 border">

        <div className="bg-green-100 text-green-700 text-sm p-2 rounded mb-3">
          Partial payment available
        </div>

        <p className="text-gray-500 text-sm">Starting from</p>

        <h2 className="text-2xl font-bold text-blue-600">
          {price} <span className="text-sm text-gray-500">/ person</span>
        </h2>

        <button className="w-full mt-4 bg-cyan-600 text-white py-3 rounded-full font-semibold hover:bg-cyan-500">
          Book Now
        </button>
      </div>

      {/* Form */}
      <div className="mt-4 bg-white rounded-xl shadow-lg p-5 border">
        <h3 className="text-lg font-semibold mb-3">
          Allow us to call you back
        </h3>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-2 rounded mb-3"
        />

        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
}