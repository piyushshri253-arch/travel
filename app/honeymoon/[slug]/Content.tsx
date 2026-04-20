"use client";

const Content = ({ place }: any) => {
  return (
    <section className="space-y-10">

      {/* TITLE */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          {place.name} Honeymoon Packages from India (2026)
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          {place.intro}
        </p>
      </div>

      {/* WHY CHOOSE */}
      {place.whyChoose?.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Why Choose Our {place.name} Honeymoon Packages?
          </h3>

          <ul className="grid md:grid-cols-2 gap-3">
            {place.whyChoose.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-green-500">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* WHY BALI / DESTINATION */}
      {place.whyBali?.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Why is {place.name} Perfect for Honeymoon?
          </h3>

          <ul className="space-y-2">
            {place.whyBali.map((item: string, i: number) => (
              <li key={i} className="text-gray-700">• {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* COST */}
      {place.cost && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {place.name} Honeymoon Cost Overview
          </h3>

          <div className="bg-gray-50 p-5 rounded-xl space-y-2">
            <p><strong>Flights:</strong> {place.cost.flight}</p>
            <p><strong>Budget Option:</strong> {place.cost.budget}</p>

            <div>
              <p className="font-medium mt-2">Includes:</p>
              <ul className="list-disc ml-5 text-gray-700">
                {place.cost.includes?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ITINERARY */}
      {place.itinerary?.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Suggested Itinerary
          </h3>

          <ul className="space-y-2">
            {place.itinerary.map((day: string, i: number) => (
              <li key={i} className="text-gray-700">
                <span className="font-medium">•</span> {day}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* BEST TIME */}
      {place.bestTime?.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Best Time to Visit {place.name}
          </h3>

          <ul className="space-y-2 text-gray-700">
            {place.bestTime.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* EXPERIENCES */}
      {place.experiences?.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Top Romantic Experiences
          </h3>

          <div className="grid md:grid-cols-2 gap-3">
            {place.experiences.map((exp: string, i: number) => (
              <div key={i} className="bg-pink-50 p-3 rounded-lg text-gray-700">
                ❤️ {exp}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STAYS */}
      {place.stays && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Where to Stay in {place.name}
          </h3>

          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Budget</p>
              <p>{place.stays.budget}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Premium</p>
              <p>{place.stays.premium}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Luxury</p>
              <p>{place.stays.luxury}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Content;