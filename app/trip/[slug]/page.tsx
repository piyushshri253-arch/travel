import HeroSection from "@/components/trip/HeroSection";
import TabsSection from "@/components/trip/TabsSection";
import StickyForm from "@/components/trip/StickyForm";
import TripLayout from "@/app/trip/[slug]/TripLayout";
import Gallery from "@/components/trip/Gallery";
import Similar from "@/components/trip/similar";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  // ✅ Next.js dynamic param
  const { slug } = await params;

  // ✅ slug check
  if (!slug) {
    return notFound();
  }

  // ✅ DB fetch
  const trip = await prisma.trip.findUnique({
    where: { slug },
    include: {
      itinerary: true,
      similarTrips: true,
    },
  });

  // ✅ not found
  if (!trip) {
    return notFound();
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