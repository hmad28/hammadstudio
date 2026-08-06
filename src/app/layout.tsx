import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CTAFooter } from "@/components/cta-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hammad.studio"),
  title: {
    default: "Hammad Studio — Premium Digital Product Studio Indonesia",
    template: "%s — Hammad Studio",
  },
  description:
    "Hammad Studio designs and builds premium websites, digital products, business systems, automation, and custom software.",
  keywords: [
    "Hammad Studio",
    "jasa pembuatan website profesional",
    "digital product studio indonesia",
    "ui ux design studio",
    "web development indonesia",
    "next.js developer",
  ],
  icons: {
    icon: "/assets/img/brand/dytama-icon.svg",
  },
  openGraph: {
    title: "HAMMAD.STUDIO® — Premium Digital Product Studio",
    description:
      "Hammad Studio designs and builds premium websites, digital products, business systems, automation, and custom software.",
    url: "https://hammad.studio",
    siteName: "Hammad Studio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#050505] text-[#f7f7f5] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CTAFooter />
      </body>
    </html>
  );
}
