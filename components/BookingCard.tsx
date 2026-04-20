interface BookingProps {
  booking: {
    tripName: string;
    price: number;
    createdAt: string;
  };
}

export default function BookingCard({ booking }: BookingProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border">
      <h2 className="text-lg font-bold mb-2">
        {booking.tripName}
      </h2>

      <p className="text-gray-600 mb-2">
        Booked On:{" "}
        {new Date(booking.createdAt).toLocaleDateString()}
      </p>

      <p className="text-green-600 font-semibold text-xl">
        ₹{booking.price}
      </p>
    </div>
  );
}