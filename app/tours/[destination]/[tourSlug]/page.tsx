import Hero from "@/components/tours/Hero";
import Gallery from "@/components/tours/Gallery";
import Tabs from "@/components/tours/Tab"; // ✅ FIX (Tabs)
import StickyBooking from "@/components/tours/StickyBooking";
import { toursData } from "@/data/tour";

type Params = {
  destination: string;
  tourSlug: string;
};

export default async function TourPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { destination, tourSlug } = await params;

  const destKey = destination?.toLowerCase();
  const slug = tourSlug?.toLowerCase();

  const destinationTours = toursData[destKey];

  if (!destinationTours) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Destination not found: {destination}
      </div>
    );
  }

  // 🔥 MATCH TOUR
  const matchedKey = Object.keys(destinationTours)
    .sort((a, b) => b.length - a.length)
    .find((key) => slug?.includes(key));

  const data = destinationTours?.[matchedKey as string];

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Tour not found: {tourSlug}
      </div>
    );
  }

  // 🔥 SIMILAR TOURS (same destination except current)
  const similarTours = Object.entries(destinationTours)
    .filter(([key]) => key !== matchedKey)
    .map(([key, value]: any) => ({
      ...value,
      slug: `/tours/${destKey}/${key}`,
    }));

  return (
    <div>
      {/* 🔥 HERO */}
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
      />

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {data.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* LEFT */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Tabs data={data} />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <StickyBooking
              price={data.price}
              title={data.title}
            />
          </div>

        </div>

        {/* 🔥 GALLERY (NOW BELOW CONTENT) */}
        {data.gallery && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Tour Gallery
            </h2>
            <Gallery images={data.gallery} />
          </div>
        )}

        {/* 🔥 SIMILAR TOURS */}
        {similarTours.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Similar Tours
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {similarTours.map((tour, i) => (
                <a
                  key={i}
                  href={tour.slug}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="h-40 w-full">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold text-lg">
                      {tour.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {tour.subtitle}
                    </p>

                    <p className="mt-2 text-blue-600 font-bold">
                      {tour.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}