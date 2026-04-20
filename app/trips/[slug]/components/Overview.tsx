export default function Overview({ data }: any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Overview & Highlights</h2>
      <p className="text-gray-600 leading-7">{data}</p>
    </div>
  );
}