import React from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyItMattersSection } from "@/components/why-it-matters-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessPreviewSection } from "@/components/process-preview-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FAQSection } from "@/components/faq-section";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 01 HERO (Black) */}
      <HeroSection />

      {/* 02 INTRO / POSITIONING (Off-white) */}
      <AboutSection />

      {/* 03 SERVICES (Off-white, 2x3 Grid with Icons) */}
      <ServicesSection />

      {/* 04 WHY IT MATTERS (Soft Gray, Split Value & Benefit Cards) */}
      <WhyItMattersSection />

      {/* 05 SELECTED WORK (Dark Section, 1 Hero + 2 Grid Cards) */}
      <PortfolioSection />

      {/* 06 PRICING PREVIEW (Off-white, Starting Price Cards) */}
      <PricingSection />

      {/* 07 PROCESS (Soft Gray, 4 Visual Step Cards) */}
      <ProcessPreviewSection />

      {/* 08 TESTIMONIALS (Soft Gray, Client Proof & Reviews) */}
      <TestimonialSection />

      {/* 09 FAQ (Off-white, Q&A Cards) */}
      <FAQSection />
    </div>
  );
}

