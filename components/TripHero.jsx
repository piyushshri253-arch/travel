export default function TripHero({ trip }) {
  return (
    <div className="relative">
      <img
        src={trip.heroImage}
        className="w-full h-[350px] object-cover rounded-2xl"
        alt={trip.title}
      />
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-3xl font-bold">{trip.title}</h1>
        <p>{trip.location}</p>
      </div>
    </div>
  );
}