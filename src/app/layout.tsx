import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CTAFooter } from "@/components/cta-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hammad.studio"),
  title: {
    default: "HAMMAD.STUDIO — Premium Digital Product & Software Studio",
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
  icons: {
    icon: "/assets/img/brand/dytama-icon.svg",
  },
  openGraph: {
    title: "HAMMAD.STUDIO — Premium Digital Product & Software Studio",
    description:
      "We design and build digital products — websites, e-commerce, business systems, and custom software.",
    url: "https://hammad.studio",
    siteName: "HAMMAD.STUDIO",
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-[#FAFAF8] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CTAFooter />
      </body>
    </html>
  );
}
