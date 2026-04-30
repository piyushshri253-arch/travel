import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const trips = await prisma.trip.findMany({
    select: {
      slug: true,
      title: true,
    },
  });

  return NextResponse.json(trips);
}