import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CTAFooter } from "@/components/cta-footer";
import { LocaleProvider } from "@/components/locale-provider";

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
    default: "HAMMAD.STUDIO — Digital Development Studio",
    template: "%s — HAMMAD.STUDIO",
  },
  description:
    "Studio development digital untuk website, e-commerce, aplikasi web, automation, dan custom business systems dengan quality engineering dan security.",
  keywords: [
    "HAMMAD.STUDIO",
    "Digital Product Studio",
    "Software Studio",
    "Web Systems",
    "Custom Software Indonesia",
    "Web Application Indonesia",
    "Automation Indonesia",
  ],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "HAMMAD.STUDIO — Digital Development Studio",
    description:
      "Website, commerce, applications, systems, dan automation yang dibangun dengan quality engineering dan security.",
    url: "https://hammad.studio",
    siteName: "HAMMAD.STUDIO",
    locale: "id_ID",
    type: "website",
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
      </body>
    </html>
  );
}
