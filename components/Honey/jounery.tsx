import React from "react";
import { User, Mail, Phone } from "lucide-react";

const destinations = [
  { name: "Bali", img: "/honeymoon/box1.jpg" },
  { name: "Andaman", img: "/honeymoon/box2.jpg" },
  { name: "Maldives", img: "/honeymoon/box.jpg" },
  { name: "Thailand", img: "/honeymoon/box3.jpg" },
  { name: "Singapore", img: "/honeymoon/box4.jpg" },
  { name: "Vietnam", img: "/honeymoon/box6.jpg" },
];

const Love = () => {
  return (
    <div className="bg-[#f6f6f6] min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        
        {/* ================= LEFT SECTION ================= */}
        <div className="w-full lg:w-[65%]">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-red-400 mb-4 leading-tight">
            Love is in the Journey
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
            Love & Details, Please! Let’s get your dream honeymoon in the making!
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 
                          transform lg:rotate-[-5deg]">
            
            {destinations.map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                           hover:scale-105 transition duration-300 bg-white"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-end p-2 sm:p-3">
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    {item.name} ❤️
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SECTION (FORM) ================= */}
        <div className="w-full lg:w-[35%]">
          
          <div className="bg-white border-2 border-cyan-400 rounded-xl p-5 sm:p-6 shadow-lg w-full">
            
            <p className="text-center text-gray-500 text-xs sm:text-sm mb-1">
              Drop your details & let the magic begin!
            </p>

            <h2 className="text-center text-lg sm:text-xl font-semibold text-cyan-700 mb-5">
              Get in Touch
            </h2>

            <form className="space-y-4 sm:space-y-5">
              
              {/* Name */}
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Name</label>
                <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                  <User size={16} className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Email Id</label>
                <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                  <Mail size={16} className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs sm:text-sm text-gray-600">Phone</label>
                <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                  <Phone size={16} className="text-gray-400 mr-2" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
                           py-2.5 sm:py-3 rounded-full transition duration-300 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Love;