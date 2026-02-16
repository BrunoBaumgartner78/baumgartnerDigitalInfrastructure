import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { site } from "@/config/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Baumgartner Digital Infrastructure",
    template: "%s · Baumgartner Digital Infrastructure",
  },
  description:
    "Digitale Infrastruktur für Gemeinden und Bildungsinstitutionen: Portale, Plattform-Architektur, Governance & langfristige Wartbarkeit.",
  applicationName: "Baumgartner Digital Infrastructure",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Baumgartner Digital Infrastructure",
    description:
      "Digitale Infrastruktur für Gemeinden und Bildungsinstitutionen: Portale, Plattform-Architektur, Governance & langfristige Wartbarkeit.",
    siteName: "Baumgartner Digital Infrastructure",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baumgartner Digital Infrastructure",
    description:
      "Digitale Infrastruktur für Gemeinden und Bildungsinstitutionen: Portale, Plattform-Architektur, Governance & langfristige Wartbarkeit.",
  },
};

// Mobile browser address-bar color (Chrome/Android, some PWAs)
export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <div className="site-bg min-h-screen bg-[var(--bg)] text-[var(--fg)]">
          <Header />
          <main className="mx-auto max-w-6xl px-5 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
