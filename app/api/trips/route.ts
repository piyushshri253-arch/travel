import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const clean = (val: FormDataEntryValue | null) =>
  typeof val === "string" ? val.replace(/^"|"$/g, "").trim() : "";

const safeParse = (value: FormDataEntryValue | null) => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(String(value));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const slug = clean(formData.get("slug"))
      .toLowerCase()
      .replace(/\s+/g, "-");

    const category = clean(formData.get("category")) || "trip";
    const title = clean(formData.get("title"));
    const price = clean(formData.get("price"));
    const duration = clean(formData.get("duration"));
    const overview = clean(formData.get("overview"));
    const pickupDrop = clean(formData.get("pickupDrop"));
    const routeLine = clean(formData.get("routeLine"));

    const banner: string[] = [];
    const images: string[] = [];

    const itinerary = safeParse(formData.get("itinerary"));
    const inclusions = safeParse(formData.get("inclusions"));
    const exclusions = safeParse(formData.get("exclusions"));
    const otherInfo = safeParse(formData.get("otherInfo"));
    const similarTrips = safeParse(formData.get("similarTrips"));

    const trip = await prisma.trip.create({
      data: {
        slug,
        category,
        title,
        price,
        duration,
        overview,
        pickupDrop,
        routeLine,

        banner,
        images,

        inclusions,
        exclusions,
        otherInfo,

        itinerary: {
          create: itinerary.map((item: any) => ({
            title: item.title || "",
            description: item.description || "",
          })),
        },

        similarTrips: {
          create: similarTrips.map((item: any) => ({
            title: item.title || "",
            price: item.price || "",
            duration: item.duration || "",
            location: item.location || "",
            date: item.date || "",
            batch: item.batch || "",
            image: item.image || "",
            slug: item.slug || "",
          })),
        },
      },
      include: {
        itinerary: true,
        similarTrips: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        trip,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("❌ TRIP CREATE ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}