import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import useScrollToHash from "@/hooks/useScrollToHash";
import StorageFacilitiesSection from "./sections/StorageFacilitiesSection";

function OurStorageFacilities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="Our Storage Facilities | Al-Hilam Auctioneers"
        description="Northern Kenya Storage: Secure vehicle storage and parking in Garissa. Professional storage services for vehicles with CCTV, ample parking, and insurance coverage."
        type="website"
        url="https://al-hilam-auctioneers.com/storage-facilities"
        ogImage="https://www.alhilamauctions.com/assets/og/al-hilam-og.png"
        ogImageAlt="Northern Kenya Storage facility by Al-Hilam Auctioneers"
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <StorageFacilitiesSection />
      </div>
    </>
  );
}

export default OurStorageFacilities;
