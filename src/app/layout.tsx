import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CTAFooter } from "@/components/cta-footer";

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
  title: {
    default: "HAMMAD.STUDIO — Digital Product & Software Studio",
    template: "%s — HAMMAD.STUDIO",
  },
  description:
    "We design and build digital products — websites, e-commerce, business systems, and custom software for growing businesses.",
  keywords: [
    "HAMMAD.STUDIO",
    "Digital Product Studio",
    "Software Studio",
    "Web Systems",
    "Custom Software Indonesia",
  ],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "HAMMAD.STUDIO — Digital Product & Software Studio",
    description:
      "We design and build websites, commerce experiences, business systems, and custom software.",
    url: "https://hammad.studio",
    siteName: "HAMMAD.STUDIO",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-[#050505] font-[family-name:var(--font-geist)] text-[#FAFAF8] antialiased">
        <Navbar />
        <main>{children}</main>
        <CTAFooter />
      </body>
    </html>
  );
}