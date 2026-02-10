import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy FallbackLoader components
import {
  AboutUs,
  OurServices,
  OurStorageFacilities,
  OurClients,
  ContactUs,
  Error400,
  Error403,
  Error404,
  Error500,
  LandingPage,
  Layout,
  OurTeam,
} from "..";
import { FallbackLoader } from "../components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <LandingPage />
            </Suspense>
          ),
        },
        {
          path: "/about-us",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/our-services",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <OurServices />
            </Suspense>
          ),
        },
        {
          path: "/storage-facilities",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <OurStorageFacilities />
            </Suspense>
          ),
        },
        {
          path: "/our-clients",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <OurClients />
            </Suspense>
          ),
        },
        {
          path: "/our-team",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <OurTeam />
            </Suspense>
          ),
        },
        {
          path: "/contact-us",
          element: (
            <Suspense fallback={<FallbackLoader />}>
              <ContactUs />
            </Suspense>
          ),
        },
      ],
    }
    ,
    {
      path: "/error-400",
      element: (
        <Suspense fallback={<FallbackLoader />}>
          <Error400 />
        </Suspense>
      ),
    },
    {
      path: "/error-403",
      element: (
        <Suspense fallback={<FallbackLoader />}>
          <Error403 />
        </Suspense>
      ),
    },
    {
      path: "/*",
      element: (
        <Suspense fallback={<FallbackLoader />}>
          <Error404 />
        </Suspense>
      ),
    },
    {
      path: "/error-500",
      element: (
        <Suspense fallback={<FallbackLoader />}>
          <Error500 />
        </Suspense>
      ),
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default router;
