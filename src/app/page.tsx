import React from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { SecuritySection } from "@/components/security-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { PricingSection } from "@/components/pricing-section";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 01 HERO */}
      <HeroSection />

      {/* 02 SHORT INTRO */}
      <AboutSection />

      {/* 03 SERVICES */}
      <ServicesSection />

      {/* 04 SECURITY */}
      <SecuritySection />

      {/* 05 SELECTED WORK */}
      <PortfolioSection />

      {/* 06 PRICING */}
      <PricingSection />

      {/* 06 FINAL CTA & 07 FOOTER are rendered seamlessly via RootLayout CTAFooter */}
    </div>
  );
}
