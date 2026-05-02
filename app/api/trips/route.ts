import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

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

// upload helper
async function uploadToCloudinary(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise<string>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "travel-trips",
          resource_type: "image",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result?.secure_url || "");
        }
      )
      .end(buffer);
  });
}

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

    const itinerary = safeParse(formData.get("itinerary"));
    const inclusions = safeParse(formData.get("inclusions"));
    const exclusions = safeParse(formData.get("exclusions"));
    const otherInfo = safeParse(formData.get("otherInfo"));
    const similarTrips = safeParse(formData.get("similarTrips"));

    // =========================
    // Upload Banner Images
    // =========================
    const bannerFiles = formData.getAll("banner") as File[];
    const banner: string[] = [];

    for (const file of bannerFiles) {
      if (file && file.size > 0) {
        const url = await uploadToCloudinary(file);
        banner.push(url);
      }
    }

    // =========================
    // Upload Gallery Images
    // =========================
    const galleryFiles = formData.getAll("images") as File[];
    const images: string[] = [];

    for (const file of galleryFiles) {
      if (file && file.size > 0) {
        const url = await uploadToCloudinary(file);
        images.push(url);
      }
    }

    // =========================
    // Save DB
    // =========================
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