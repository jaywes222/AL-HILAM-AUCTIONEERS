import useScrollToHash from "@/hooks/useScrollToHash";
import LandingWrapper from "../../components/LandingWrapper";
import SeoMetadata from "../../components/SeoMetadata";
import ScrollToTop from "../../utilities/ScrollToTop";
import {HeroSection} from "./sections";

function LandingPage() {

  useScrollToHash();
  
  return (
    <>
      <SeoMetadata
        title="Al-Hilam Auctioneers - Professional Asset Recovery & Auctioneering Services"
        description="Al-Hilam Auctioneers is Kenya's leading specialist in motor vehicle repossession, auctioneering & commission agents. Serving individuals and financial institutions with competence and professionalism since 2020."
        type="website"
        url="https://al-hilam-auctioneers.com/"
        ogImage="https://al-hilam-auctioneers.com/assets/og/auction.jpg"
        ogImageAlt="Al-Hilam Auctioneers - Professional Auctioneers & Asset Recovery Specialists."
      />
      <div className="w-screen overflow-x-hidden bg-white">
        <ScrollToTop />
        <HeroSection />
      </div>
    </>
  );
}

export default LandingPage;