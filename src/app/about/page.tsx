import React from "react";
import { AboutSection } from "@/components/about-section";

export const metadata = {
  title: "Tentang Hammad Studio – Digital Product Studio",
  description: "Mengenal Hammad Studio, filosofi kerja, tim profesional, dan visi kami dalam membangun teknologi berkualitas.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0b0b0b] text-white">
      <div className="container max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#858583] uppercase">About Us</span>
        <h1 className="text-4xl sm:text-6xl font-bold text-white">Mengenal Hammad Studio</h1>
        <p className="text-base text-[#c3c3c0] max-w-2xl mx-auto">
          Hammad Studio didirikan untuk membantu pelaku usaha, startup, dan korporasi menghadirkan produk digital tingkat dunia yang efisien dan memukau secara visual.
        </p>
      </div>

      <AboutSection />
    </div>
  );
}
