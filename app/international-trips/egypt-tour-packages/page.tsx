import CommunityTrips from "@/components/international/CommunityTrips";
import PopularDestination from "@/components/international/popular";
import Exclusive from "@/components/international/Exclusive";
import Uk from "@/components/international/uk";
import FAQ from "@/components/international/Faq";
import Hero from "@/components/international/hero";
import { internationalData } from "@/data/internationalData";

export default function VietnamTourPackagesPage() {
  const data = internationalData.egypt;

  return (
    <>
      <Hero data={data} />

      <PopularDestination
        heading={data.heading}
        description={data.description}
        trips={data.trips}
      />

      <CommunityTrips
        heading={data.community.heading}
        description={data.community.description}
        trips={data.community.trips}
      />

      <Exclusive
        heading={data.exclusive.heading}
        items={data.exclusive.items}
      />

      <Uk
        heading={data.ukSection.heading}
        description={data.ukSection.description}
        trips={data.ukSection.trips}
      />

      <FAQ />
    </>
  );
}