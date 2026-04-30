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
  try {
    const { slug } = await params;

    console.log("SLUG =", slug);

    if (!slug) return notFound();

    const trip = await prisma.trip.findUnique({
      where: { slug },
      include: {
        itinerary: true,
        similarTrips: true,
      },
    });

    console.log("TRIP =", trip);

    if (!trip) return notFound();

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
  } catch (error) {
    console.error("PAGE ERROR =", error);
    return <h1>Server Error</h1>;
  }
}