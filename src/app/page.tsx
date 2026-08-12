import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyItMattersSection } from "@/components/why-it-matters-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessPreviewSection } from "@/components/process-preview-section";
import { FAQSection } from "@/components/faq-section";
import { AudiencePathsSection } from "@/components/audience-paths-section";
import { HomepageProofSection } from "@/components/homepage-proof-section";
import { StudioDifferenceSection } from "@/components/studio-difference-section";

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

      {/* 02 INTRO / POSITIONING (Off-white) */}
      <AboutSection />

      {/* 03 SERVICES (Off-white, 2x3 Grid with Icons) */}
      <ServicesSection />

      <AudiencePathsSection />

      {/* 04 WHY IT MATTERS (Soft Gray, Split Value & Benefit Cards) */}
      <WhyItMattersSection />

      <StudioDifferenceSection />

      {/* 05 SELECTED WORK (Dark Section, 1 Hero + 2 Grid Cards) */}
      <PortfolioSection />

      {/* 06 PRICING PREVIEW (Off-white, Starting Price Cards) */}
      <PricingSection />

      {/* 07 PROCESS (Soft Gray, 4 Visual Step Cards) */}
      <ProcessPreviewSection />

      {/* 08 FAQ (Off-white, Q&A Cards) */}
      <FAQSection />
    </div>
  );
}
