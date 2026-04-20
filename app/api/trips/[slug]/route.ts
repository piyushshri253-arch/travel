import { NextResponse } from "next/server";
import fs from "fs-extra";
import path from "path";

const dataFile = path.join(process.cwd(), "data/trips.json");

export async function GET(req: Request, { params }: any) {
  try {
    // ✅ FIX HERE
    const { slug } = await params;

    console.log("🔥 SLUG:", slug);

    if (!(await fs.pathExists(dataFile))) {
      return NextResponse.json(null, { status: 200 });
    }

    const trips = await fs.readJson(dataFile);

    console.log("ALL TRIPS:", trips);

    const trip = trips.find(
      (t: any) => String(t.slug) === String(slug)
    );

    return NextResponse.json(trip || null, { status: 200 });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}