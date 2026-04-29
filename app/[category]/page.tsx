export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://travel-steel-sigma.vercel.app";

  const res = await fetch(`${baseUrl}/api/trips`, {
    cache: "no-store",
  });

  const trips = await res.json();

  const trip = trips.find(
    (t: any) => t.category === category && t.slug === slug
  );

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div>
      <h1>{trip.title}</h1>
      <p>{trip.overview}</p>
    </div>
  );
}