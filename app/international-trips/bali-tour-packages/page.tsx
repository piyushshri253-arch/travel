// import Hero from "../../../components/international/hero";
import CommunityTrips from "@/components/international/CommunityTrips";
import PopularDestination from "@/components/international/popular"
import Exclusive from "@/components/international/Exclusive "
import Uk from "@/components/international/uk"
import FAQ from "@/components/international/Faq";
import Hero from "../../../components/international/hero";
import { internationalData } from "../../../data/internationalData";

export default function EuropeTourPackagesPage() {
  const europeData = internationalData.bali; // ya array hai to [0]

  return (
    <>
      <Hero data={europeData} />
      <CommunityTrips
  heading={europeData.community.heading}
  description={europeData.community.description}
  trips={europeData.community.trips}
/>
      <PopularDestination
  heading={europeData.heading}
  description={europeData.description}
  trips={europeData.trips}
/>
      <Exclusive />
      <Uk
  heading={europeData.ukSection.heading}
  description={europeData.ukSection.description}
  trips={europeData.ukSection.trips}
/>
      <FAQ />
    </>
  );
}