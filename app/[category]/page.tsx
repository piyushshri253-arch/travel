export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const res = await fetch("http://localhost:3000/api/trips", {
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