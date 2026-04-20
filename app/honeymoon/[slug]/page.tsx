import { honeymoonData } from "@/data/honeymoonData";
import { notFound } from "next/navigation";

import Hero from "./Hero";
import BestSelling from "./BestSelling";
import Content from "./Content";
import Enquiry from "./Enquiry";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const place = honeymoonData[slug?.toLowerCase()];
  if (!place) return notFound();

  return (
    <>
      {/* HERO */}
      <Hero place={place} />

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* 🔥 IMPORTANT: items-start */}
        <div className="flex gap-10 items-start">
          
          {/* LEFT SIDE (NORMAL SCROLL) */}
          <div className="w-full lg:w-[65%] space-y-10">
            <BestSelling packages={place.packages} name={place.name} />
            <Content place={place} />
          </div>

          {/* RIGHT SIDE (STICKY FORM) */}
          <div className="hidden lg:block w-[35%]">
            
            {/* ✅ THIS IS KEY */}
            <div className="sticky top-24">
              <Enquiry />
            </div>

          </div>

        </div>

      </div>
    </>
  );
}