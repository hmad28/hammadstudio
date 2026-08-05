import React from "react";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";

export const metadata = {
  title: "Layanan UI/UX & Web Development – Dytama Studio",
  description: "Layanan pembuatan website profesional, aplikasi mobile, UI/UX design, dan optimasi SEO oleh Dytama.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0D1526]">
      <div className="container max-w-7xl mx-auto px-4 py-12 text-center space-y-4">
        <span className="text-sm font-semibold tracking-widest text-[#D9FF43] uppercase">Our Capabilities</span>
        <h1 className="text-4xl sm:text-6xl font-bold text-white">Layanan & Solusi Digital Studio</h1>
        <p className="text-base text-zinc-300 max-w-2xl mx-auto">
          Dytama menawarkan layanan menyeluruh mulai dari riset UI/UX, pengembangan web modern, hingga strategi pertumbuhan digital.
        </p>
      </div>

      <ServicesSection />
      <PricingSection />
    </div>
  );
}
