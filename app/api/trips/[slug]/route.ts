import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: Request, context: Context) {
  try {
    const { slug } = await context.params;

    console.log("🔥 SLUG:", slug);

    const trip = await prisma.trip.findUnique({
      where: {
        slug,
      },
      include: {
        itinerary: true,
        similarTrips: true,
      },
    });

    if (!trip) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json(trip, { status: 200 });
  } catch (err: any) {
    console.error("❌ GET TRIP ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}