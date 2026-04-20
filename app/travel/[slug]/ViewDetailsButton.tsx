// app/[slug]/ViewDetailsButton.tsx
"use client";

type Props = { price: string };

export default function ViewDetailsButton({ price }: Props) {
  return (
    <button className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition">
      Book Now - {price}
    </button>
  );
}