import Hero from "../international/hero";
import CommunityTrips from "../international/CommunityTrips";
import Exclusive from "../international/Exclusive";
import Uk from "../international/uk";
import FAQ from "../international/Faq";

import { indiaData } from "@/data/indiaData";

type Props = {
  country: keyof typeof indiaData;
};

export default function IndiaPage({ country }: Props) {
  const data = indiaData[country];

  return (
    <>
      <Hero data={data} />
      <CommunityTrips />
      <Exclusive />
      <Uk />
      <FAQ />
    </>
  );
}