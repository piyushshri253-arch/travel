import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import PopularDestinations from "@/components/PopularDestinations";
import InternationalTrips from "@/components/InternationalTrips";
import UpcomingTrips from "@/components/UpcomingTrips";
import Discover from "@/components/Discover"
import TravelVideoForm from "@/components/TravelVideoForm";

import TravelInspiration from "@/components/TravelInspiration";
import Event from"@/components/event";
import  MobileDestinations from"@/components/MobileDestinations";
import UpcomingBanner from "@/components/UpcomingBanner";



export default function Home() {
  return (
    <>
      <Hero />
<MobileDestinations />
<Event />
<UpcomingBanner />
      <Destinations />
            <PopularDestinations />
<InternationalTrips />
< Discover />
<UpcomingTrips />
      <TravelInspiration />
      <TravelVideoForm />



      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Travel & Earn Rewards
        </h2>
        <p className="text-gray-600">
          Get points on every booking and redeem for discounts.
        </p>
      </section>

      <footer className="bg-black text-white text-center py-6">
        © 2026 Travel Rewards. All rights reserved.
      </footer>
    </>
  );
}
