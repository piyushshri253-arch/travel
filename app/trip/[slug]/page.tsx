import HeroSection from "@/components/trip/HeroSection";
import TabsSection from "@/components/trip/TabsSection";
import StickyForm from "@/components/trip/StickyForm";
import TripLayout from "@/app/trip/[slug]/TripLayout";
import Gallery from "@/components/trip/Gallery";
import Similar from "@/components/trip/similar";

export default async function Page({ params }: any) {
  const { slug } = await params;

  console.log("SLUG:", slug);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL missing in Vercel");
  }

  const res = await fetch(`${baseUrl}/api/trips/${slug}`, {
    cache: "no-store",
  });

  const trip = await res.json();

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

      <Gallery images={trip.images || []} />
      <Similar />
    </>
  );
}