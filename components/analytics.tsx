"use client";

import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const Analytics = () => {
  if (
    process.env.NODE_ENV !== "production" ||
    process.env.VERCEL_ENV === "preview"
  )
    return null;
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      />

      <VercelAnalytics />
    </>
  );
};

export default Analytics;
