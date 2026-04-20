import { NextResponse } from "next/server";
import fs from "fs-extra";
import path from "path";

const dataFile = path.join(process.cwd(), "data/trips.json");
const uploadDir = path.join(process.cwd(), "public/uploads");

// ======================
// 🧼 CLEAN HELPER
// ======================
const clean = (val: FormDataEntryValue | null) =>
  typeof val === "string" ? val.replace(/^"|"$/g, "").trim() : "";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    let trips: any[] = [];

    // 📁 Load existing data
    if (await fs.pathExists(dataFile)) {
      trips = await fs.readJson(dataFile);
    }

    // ======================
    // 📌 BASIC FIELDS (FIXED)
    // ======================
    const slug = clean(formData.get("slug"))
      .toLowerCase()
      .replace(/\s+/g, "-");

    const category = clean(formData.get("category")) || "uncategorized";
    const title = clean(formData.get("title"));
    const price = clean(formData.get("price"));
    const duration = clean(formData.get("duration"));
    const overview = clean(formData.get("overview"));
    const pickupDrop = clean(formData.get("pickupDrop"));
    const routeLine = clean(formData.get("routeLine"));

    // ======================
    // 📁 UPLOAD DIR
    // ======================
    await fs.ensureDir(uploadDir);

    // ======================
    // 🖼 BANNER UPLOAD
    // ======================
    const bannerFiles = formData.getAll("banner") as File[];
    const bannerPaths: string[] = [];

    for (const file of bannerFiles) {
      if (!file || typeof file === "string") continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      await fs.writeFile(filePath, buffer);

      bannerPaths.push(`/uploads/${fileName}`);
    }

    // ======================
    // 🖼 GALLERY UPLOAD
    // ======================
    const imageFiles = formData.getAll("images") as File[];
    const imagePaths: string[] = [];

    for (const file of imageFiles) {
      if (!file || typeof file === "string") continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      await fs.writeFile(filePath, buffer);

      imagePaths.push(`/uploads/${fileName}`);
    }

    // ======================
    // 📅 ITINERARY
    // ======================
    const itinerary = JSON.parse(
      clean(formData.get("itinerary")) || "[]"
    );

    // ======================
    // ✔ INCLUSIONS
    // ======================
    const inclusions = JSON.parse(
      clean(formData.get("inclusions")) || "[]"
    );

    const exclusions = JSON.parse(
      clean(formData.get("exclusions")) || "[]"
    );

    const otherInfo = JSON.parse(
      clean(formData.get("otherInfo")) || "[]"
    );

    // ======================
    // 🧳 FINAL OBJECT
    // ======================
    const newTrip = {
      slug,
      category,
      title,
      price,
      duration,
      overview,
      pickupDrop,
      routeLine,

      banner: bannerPaths,
      images: imagePaths,

      itinerary,
      inclusions,
      exclusions,
      otherInfo,

      createdAt: new Date().toISOString(),
    };

    trips.push(newTrip);

    await fs.writeJson(dataFile, trips, { spaces: 2 });

    console.log("✅ TRIP SAVED:", newTrip);

    return NextResponse.json({
      success: true,
      trip: newTrip,
    });

  } catch (err: any) {
    console.error("❌ ERROR:", err);

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}