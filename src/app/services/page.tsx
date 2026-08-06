import React from "react";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";

export const metadata = {
  title: "Layanan UI/UX & Web Development – Hammad Studio",
  description: "Layanan pembuatan website profesional, aplikasi mobile, UI/UX design, dan optimasi SEO oleh Hammad Studio.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#f7f7f5]">
      <div className="container max-w-7xl mx-auto px-4 py-12 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#858583] uppercase">Our Capabilities</span>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#090909]">Layanan & Solusi Digital Studio</h1>
        <p className="text-base text-zinc-600 max-w-2xl mx-auto">
          Hammad Studio menawarkan layanan menyeluruh mulai dari riset UI/UX, pengembangan web modern, hingga strategi pertumbuhan digital.
        </p>
      </div>

      <ServicesSection />
      <PricingSection />
    </div>
  );
}
