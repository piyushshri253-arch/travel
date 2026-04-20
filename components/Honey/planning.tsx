"use client";

import React from "react";
import { Handshake, PhoneCall, Backpack } from "lucide-react";

const PlanningSection = () => {
  const steps = [
    {
      icon: <Handshake size={26} />,
      title: "It All Starts With A ‘Hey’",
      desc: "Just send us your detailed query on our website, WhatsApp or Messenger, and lets get the ball rolling.",
    },
    {
      icon: <PhoneCall size={26} />,
      title: "Lets Get To Know You Better",
      desc: "Our team will contact you to discuss your preferences and put together a package tailored specifically for you.",
    },
    {
      icon: <Backpack size={26} />,
      title: "It's A Match! (With Your Favourite Destination)",
      desc: "Now leave the rest to us! With your bags on your back and adventure in your heart start your journey.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-teal-700 leading-snug">
          Planning A Trip Has Never Been This Easy
        </h2>
        <div className="w-14 sm:w-16 h-1 bg-yellow-400 mx-auto mt-3 sm:mt-4 rounded"></div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-3 sm:gap-4 items-start">
              
              {/* Icon */}
              <div className="bg-teal-600 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                {step.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-teal-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <img
            src="/quick-safe.webp"
            alt="Planning Illustration"
            className="w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default PlanningSection;