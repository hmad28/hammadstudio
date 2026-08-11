import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CTAFooter } from "@/components/cta-footer";
import { LocaleProvider } from "@/components/locale-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { WebVitals } from "@/components/web-vitals";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hammad.studio"),
  applicationName: "HAMMAD.STUDIO",
  title: {
    default: "Jasa Pembuatan Website Profesional untuk Bisnis | HAMMAD.STUDIO",
    template: "%s | HAMMAD.STUDIO",
  },
  description:
    "Jasa pembuatan website untuk UMKM dan perusahaan. Website modern, cepat, mobile-friendly, SEO-ready, dan sesuai kebutuhan bisnis.",
  authors: [{ name: "HAMMAD.STUDIO", url: "https://hammad.studio" }],
  creator: "HAMMAD.STUDIO",
  publisher: "HAMMAD.STUDIO",
  category: "technology",
  keywords: [
    "HAMMAD.STUDIO",
    "jasa pembuatan website",
    "jasa website Indonesia",
    "software house Indonesia",
    "web application Indonesia",
    "sistem bisnis custom",
    "automation AI Indonesia",
    "digital development studio",
  ],
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Jasa Pembuatan Website Profesional untuk Bisnis | HAMMAD.STUDIO",
    description:
      "Website untuk UMKM dan perusahaan yang dibangun dengan desain, development, performa, SEO foundation, dan keamanan sejak awal.",
    url: "https://hammad.studio",
    siteName: "HAMMAD.STUDIO",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional untuk Bisnis | HAMMAD.STUDIO",
    description:
      "Website, e-commerce, aplikasi web, automation, dan sistem bisnis custom yang dirancang untuk kebutuhan nyata.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-[#050505] font-[family-name:var(--font-geist)] text-[#FAFAF8] antialiased">
        <LocaleProvider>
          <Navbar />
          <main>{children}</main>
          <CTAFooter />
        </LocaleProvider>
        <GoogleAnalytics />
        {process.env.NEXT_PUBLIC_GA_ID ? <WebVitals /> : null}
      </body>
    </html>
  );
}
