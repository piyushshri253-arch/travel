import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const trip = await prisma.trip.create({
    data: {
      slug: "manali",
      category: "india",
      title: "Manali Trip",
      price: "9999",
      duration: "3D / 2N",
      overview: "Beautiful Manali trip",
      pickupDrop: "Delhi",
      routeLine: "Delhi → Manali",
      banner: ["/default.jpg"],
      images: ["/default.jpg"],
      inclusions: ["Hotel", "Breakfast"],
      exclusions: ["Flight"],
      otherInfo: ["Carry ID proof"],
    },
  });

  return NextResponse.json(trip);
}