import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { site } from "@/config/site";
import { getSiteOriginUrl } from "@/lib/site-url";

// Produce absolute metadata at runtime so OG/Twitter URLs are correct in prod
export async function generateMetadata(): Promise<Metadata> {
  const base = new URL(getSiteOriginUrl());

  return {
    metadataBase: base,
    alternates: { canonical: "/" },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: "/icon",
      apple: "/apple-icon",
    },
    openGraph: {
      type: "website",
      url: "/",
      images: [
        {
          url: new URL("/opengraph-image", base).toString(),
          width: 1200,
          height: 630,
          alt: "Baumgartner Digital Infrastructure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [new URL("/opengraph-image", base).toString()],
    },
  };
}

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
