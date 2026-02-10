import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import useScrollToHash from "@/hooks/useScrollToHash";
import OurClientsSection from "./sections/OurClientsSection";

function ClientsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="Our Clients | Al-Hilam Auctioneers"
        description="Meet our trusted partners who collaborate with Al-Hilam Auctioneers to deliver top-notch auctioneering, storage, and asset recovery solutions across Kenya."
        type="website"
        url="https://al-hilam-auctioneers.com/our-clients"
        ogImage="https://al-hilam-auctioneers.com/assets/og/auction.jpg"
        ogImageAlt="Al-Hilam Auctioneers trusted clients."
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <OurClientsSection />
      </div>
    </>
  );
}

export default ClientsPage;
