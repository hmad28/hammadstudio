import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FAQSection } from "@/components/faq-section";
import { HomepageProofSection } from "@/components/homepage-proof-section";
import { MerdekaPromoSection } from "@/components/merdeka-promo-section";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional untuk Bisnis | Hammad Studio",
  description: "Jasa pembuatan website untuk UMKM dan perusahaan. Website modern, cepat, mobile-friendly, SEO-ready, dan sesuai kebutuhan bisnis. Konsultasikan project Anda.",
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://hammad.studio/#organization",
      name: "Hammad Studio",
      alternateName: "HAMMAD.STUDIO",
      url: "https://hammad.studio",
      logo: {
        "@type": "ImageObject",
        url: "https://hammad.studio/images/brand/hammad-studio-logo.png",
        width: 6363,
        height: 1666,
      },
      email: "hello@hammad.studio",
      telephone: "+62-851-9939-1215",
      description:
        "Studio pengembangan digital untuk website, e-commerce, aplikasi web, automation, dan sistem bisnis custom.",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      knowsAbout: [
        "Website development",
        "E-commerce development",
        "Web application development",
        "Business systems",
        "AI automation",
        "Custom software development",
      ],
      sameAs: [
        "https://www.instagram.com/hammad.biz/",
        "https://www.facebook.com/itshammadstudio",
        "https://www.tiktok.com/@its_hammadstudio",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-851-9939-1215",
        contactType: "sales",
        availableLanguage: ["Indonesian", "English"],
      },
      founder: {
        "@id": "https://hammad.studio/#hammad-matt",
      },
    },
    {
      "@type": "Person",
      "@id": "https://hammad.studio/#hammad-matt",
      name: "Hammad Matt",
      jobTitle: "Founder & Lead Engineer",
      worksFor: { "@id": "https://hammad.studio/#organization" },
      url: "https://hammad.studio/studio",
    },
    {
      "@type": "WebSite",
      "@id": "https://hammad.studio/#website",
      url: "https://hammad.studio",
      name: "Hammad Studio",
      alternateName: "HAMMAD.STUDIO",
      inLanguage: "id-ID",
      publisher: {
        "@id": "https://hammad.studio/#organization",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* 01 HERO (Black) */}
      <HeroSection />

      <HomepageProofSection />

      {/* 02 SERVICES */}
      <ServicesSection />

      {/* 03 SELECTED WORK */}
      <PortfolioSection />

      <MerdekaPromoSection />

      {/* 05 FAQ */}
      <FAQSection />
    </div>
  );
}
