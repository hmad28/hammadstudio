import React from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsAndNews } from "@/components/testimonials-news";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsAndNews />
    </div>
  );
}
