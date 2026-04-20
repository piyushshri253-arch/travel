import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const trip = await prisma.trip.create({
    data,
  });

  return NextResponse.json(trip);
}