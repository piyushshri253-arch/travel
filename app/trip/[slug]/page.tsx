import HeroSection from "@/components/trip/HeroSection";
import TabsSection from "@/components/trip/TabsSection";
import StickyForm from "@/components/trip/StickyForm";
import TripLayout from "@/app/trip/[slug]/TripLayout";
import Gallery from "@/components/trip/Gallery";
import Similar from "@/components/trip/similar";
import { prisma } from "@/lib/prisma";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const trip = await prisma.trip.findUnique({
    where: { slug },
    include: {
      itinerary: true,
      similarTrips: true,
    },
  });

  // 🔥 safe check
  if (!trip) {
    return <h2>Trip Not Found</h2>;
  }

  return (
    <>
      <HeroSection data={trip} />

      <TripLayout
        left={<TabsSection data={trip} />}
        right={<StickyForm data={trip} />}
      />

      <Gallery images={trip.images ?? []} />

      <Similar data={trip.similarTrips ?? []} />
    </>
  );
}