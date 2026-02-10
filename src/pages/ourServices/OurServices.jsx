import { useEffect } from "react";
import useScrollToHash from "@/hooks/useScrollToHash";
import SeoMetadata from "@/components/SeoMetadata";
import WhatWeDoSection from "./sections/WhatWeDo";

function WhatWeDo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="What We Do | Al-Hilam Auctioneers"
        description="Explore Al-Hilam Auctioneers’ comprehensive asset recovery, auctioneering, valuation, and repossession services—delivered with professionalism, compliance, and results."
        type="website"
        url="https://www.alhilamauctions.com/what-we-do"
        ogImage="https://www.alhilamauctions.com/assets/og/al-hilam-og.png"
        ogImageAlt="Al-Hilam Auctioneers professional asset recovery and auction services."
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <WhatWeDoSection /> 
      </div>
    </>
  );
}

export default WhatWeDo;
