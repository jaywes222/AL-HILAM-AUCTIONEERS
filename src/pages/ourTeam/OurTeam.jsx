import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import useScrollToHash from "@/hooks/useScrollToHash";
import OurTeamSection from "./sections/OurTeamSection";

function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="Our Team | Al-Hilam Auctioneers"
        description="Meet the Al-Hilam Auctioneers leadership team — committed to professional, compliant, and results-driven asset recovery and auctioneering services."
        type="website"
        url="https://al-hilam-auctioneers.com/our-team"
        ogImage="https://www.alhilamauctions.com/assets/og/al-hilam-og.png"
        ogImageAlt="Al-Hilam Auctioneers leadership team"
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <OurTeamSection />
      </div>
    </>
  );
}

export default OurTeam;
