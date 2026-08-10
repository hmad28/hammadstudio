import React from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyItMattersSection } from "@/components/why-it-matters-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessPreviewSection } from "@/components/process-preview-section";
import { FAQSection } from "@/components/faq-section";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 01 HERO */}
      <HeroSection />

      {/* 02 SHORT INTRO */}
      <AboutSection />

      {/* 02 SERVICES */}
      <ServicesSection />

      {/* 03 WHY IT MATTERS */}
      <WhyItMattersSection />

      {/* 05 SELECTED WORK */}
      <PortfolioSection />

      {/* 05 PROCESS */}
      <ProcessPreviewSection />

      {/* 06 PRICING */}
      <PricingSection />

      {/* 07 FAQ */}
      <FAQSection />
    </div>
  );
}
