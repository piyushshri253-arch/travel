"use client";

const Enquiry = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
      
      <img src="/images/bali.jpg" className="h-36 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-center">
          Don't Just Dream, Travel 🔥
        </h3>

        <p className="text-center text-gray-500 text-sm">
          Allow us to call you back!
        </p>

        <div className="mt-5 space-y-3">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Phone" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
        </div>

        <button className="mt-5 w-full bg-cyan-500 text-white py-3 rounded-full">
          ENQUIRE NOW
        </button>
      </div>
    </div>
  );
};

export default Enquiry;