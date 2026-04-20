"use client";

import { useParams } from "next/navigation";
import Hero from "../../../components/travel/hero";
import About from "../../../components/travel/about";
import ItineraryPage from "@/components/travel/ItineraryPage";
import BestSellingTours from "@/components/travel/BestSellingTours";
import HoneymoonToursCarousel from "@/components/travel/HoneymoonToursCarousel";
import Recommendations from "../../../components/travel/Recommendations";
import Reviews from "../../../components/travel/reviews";


export default function DestinationPage() {
  const params = useParams();
  const slug = params?.slug || "default";

return (
  <div style={{ background: "#000", color: "#fff" }}>
    <Hero slug={slug} />
    <About />
    <ItineraryPage />
    <Recommendations />
    <BestSellingTours />
    <HoneymoonToursCarousel />
    <Reviews />
    
  </div>
);
}