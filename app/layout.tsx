import "./global.css";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import AOSInit from "@/components/AOS";

import Footer from "../components/footer";
import { Navbar } from "../components/nav";
import { baseUrl } from "./sitemap";

const mulish = Mulish({
  weight: ["500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Clément DUNGLER",
    template: "%s | CV site",
  },
  description:
    "Je suis responsable R&D, achitecte, développeur. J'apprécie l'esprit entrepreneurial où tout est possible avec du travail et de la détermination.",
  openGraph: {
    title: "Clément DUNGLER",
    description: "Mon CV site",
    url: baseUrl,
    siteName: "Clément DUNGLER",
    locale: "fr_FR",
    type: "website",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth bg-background text-foreground print:bg-white print:text-background",
        mulish.variable
      )}
    >
      <body
        className="min-h-screen overflow-x-hidden"
        data-aos-easing="ease"
        data-aos-duration="800"
        data-aos-delay="0"
      >
        <AOSInit />

        <div className="grid flex-1 gap-4 md:grid-cols-[280px_1fr] print:grid-cols-1">
          <aside className="relative hidden h-screen w-[280px] flex-col md:flex print:hidden">
            <Navbar />
          </aside>
          <main className="flex min-w-0 flex-auto flex-col px-2 md:px-0">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
