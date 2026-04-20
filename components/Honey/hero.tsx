import Image from "next/image";

export default function HoneymoonHero() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background */}
      <Image
        src="/honeymoon-cover.avif"
        alt="Honeymoon"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
          Honeymoon Tour Packages
        </h1>

        <p className="inline-block bg-black/50 backdrop-blur-sm px-3 py-2 md:px-5 md:py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg mb-5 md:mb-6">
          Where Forever Begins...Together!
        </p>

        <button className="bg-yellow-400 text-black px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-yellow-300 transition">
          Book Now
        </button>
      </div>

      {/* Ratings */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full px-3">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-base text-center">
          
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-red-500 font-bold text-lg">G</span>
            ⭐ 4.9
            <span className="text-gray-300">(14001 reviews)</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            🟢 ⭐ 5.0
            <span className="text-gray-300">(3850 reviews)</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            🔵 ⭐ 4.9
            <span className="text-gray-300">(1031 reviews)</span>
          </div>

        </div>
      </div>

    </section>
  );
}