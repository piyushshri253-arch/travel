import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ GET (destination wise filter)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const destination = searchParams.get("destination");

    const reviews = await prisma.review.findMany({
      where: destination
        ? {
            destination: destination, // ✅ filter
          }
        : {},
      orderBy: { date: "desc" },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

// ✅ POST (save with destination)
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const review = await prisma.review.create({
      data: {
        name: data.name,
        email: data.email,
        rating: data.rating,
        comment: data.comment,
        destination: data.destination || "general", // ✅ IMPORTANT
        avatar: data.avatar,
        date: new Date(data.date || Date.now()),
      },
    });

    return NextResponse.json({ success: true, review });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save review" },
      { status: 500 }
    );
  }
}