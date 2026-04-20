"use client";

import Image from "next/image";
import React from "react";

const LoveCTASection = () => {
  return (
    <section className="w-full">
      
      <div className="relative w-full">
        
        {/* Desktop + Tablet */}
        <div className="hidden sm:block">
          <Image
            src="/phone-honeymoon-banner.svg"
            alt="Honeymoon Banner"
            width={1920}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Mobile */}
        <div className="block sm:hidden">
          <Image
            src="/phone-honeymoon-banner.svg"
            alt="Honeymoon Banner Mobile"
            width={768}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default LoveCTASection;