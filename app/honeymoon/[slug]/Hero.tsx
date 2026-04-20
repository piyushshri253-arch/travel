"use client";

const Hero = ({ place }: any) => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={place.heroImg}
        alt={place.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10">
        
        {/* Tag */}
        <span className="mb-4 px-4 py-1 text-xs sm:text-sm bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30">
          ✨ Honeymoon Special
        </span>

        {/* Heading */}
        <h1 className="text-white font-extrabold leading-tight
                       text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-4xl">
          Celebrate Love in{" "}
          <span className="text-yellow-400">{place.name}</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-200 mt-3 sm:mt-4 max-w-2xl
                      text-sm sm:text-base md:text-lg">
          A honeymoon beyond compare — romantic beaches, luxury villas &
          unforgettable experiences await you.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 
                             text-black font-semibold rounded-full shadow-lg 
                             transition duration-300">
            Request Callback
          </button>

          <button className="px-6 py-3 border border-white text-white 
                             rounded-full hover:bg-white hover:text-black 
                             transition duration-300">
            View Packages
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;