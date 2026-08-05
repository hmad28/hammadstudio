import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CTAFooter } from "@/components/cta-footer";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & UI/UX Design Profesional – Dytama",
  description:
    "Dytama menyediakan jasa pembuatan website profesional, desain UI/UX modern, dan pengembangan web untuk bisnis, startup, dan personal brand di Indonesia.",
  keywords: [
    "jasa pembuatan website indonesia",
    "jasa pembuatan website profesional",
    "jasa web developer indonesia",
    "jasa desain ui ux",
    "Dytama",
    "digital product studio",
  ],
  icons: {
    icon: "/assets/img/brand/dytama-icon.svg",
  },
  openGraph: {
    title: "Jasa Pembuatan Website & UI/UX Design Profesional – Dytama",
    description:
      "Dytama menyediakan jasa pembuatan website profesional, desain UI/UX modern, dan pengembangan web untuk bisnis, startup, dan personal brand di Indonesia.",
    url: "https://dytama.com",
    siteName: "Dytama Studio",
    images: [
      {
        url: "/assets/img/brand/opengraphdytama.jpg",
        width: 1200,
        height: 630,
        alt: "Dytama Studio Preview",
      },
    ],
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
      <body className="bg-[#0D1526] text-white antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CTAFooter />
      </body>
    </html>
  );
}
