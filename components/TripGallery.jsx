export default function TripGallery({ images }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-xl h-40 w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}