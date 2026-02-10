import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import {
  HeroSection,
  MissionVisionSection,
} from "./sections";
import useScrollToHash from "@/hooks/useScrollToHash";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="About Us | Al-Hilam Auctioneers"
        description="Al-Hilam Auctioneers is a professional auctioneering and asset recovery firm in Kenya, delivering transparent, compliant, and results-driven auction and repossession services across multiple regions."
        type="website"
        url="https://www.al-hilam-auctioneers.com/about-us"
        ogImage="https://www.al-hilam-auctioneers.com/assets/og/auction.jpg"
        ogImageAlt="Al-Hilam Auctioneers brand showcasing professional auction and asset recovery services."
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <HeroSection />
        <MissionVisionSection />
      </div>
    </>
  );
}

export default AboutUs;
