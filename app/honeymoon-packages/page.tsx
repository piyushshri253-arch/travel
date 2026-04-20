import HoneymoonHero from "../../components/Honey/hero";
import About from "../../components/Honey/About";
import Love from "../../components/Honey/love"
import Jounery from "../../components/Honey/jounery"
import BaliPackages from "@/components/Honey/BaliPackages";
import VietnamPackages from "@/components/Honey/VietnamPackages";
import Maldives from "@/components/Honey/Maldives";
import ThailandPackages from "@/components/Honey/Thailand";
import Cta from "@/components/Honey/cta";
import KashmirPackages from "@/components/Honey/kashmir";
import AndamanPackages from "@/components/Honey/Adanaman";
import PlanningSection from "@/components/Honey/planning";
import GallerySection from "@/components/Honey/Gallery";
import Card from "@/components/Honey/cards"
export default function HoneymoonPage() {

  return (
    <div>
      {/* HERO */}
      <HoneymoonHero />

      {/* ABOUT (NEECHE AAYEGA) */}
      <About />
    <Love />
    <Jounery />
    <BaliPackages />
    <VietnamPackages />
    <Maldives />
    <ThailandPackages />
    <Cta />
    <KashmirPackages />
    <AndamanPackages />
    <PlanningSection />
<GallerySection />
<Card />
      {/* Future sections */}
    </div>
  );
}