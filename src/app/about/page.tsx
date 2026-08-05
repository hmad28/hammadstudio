import React from "react";
import Image from "next/image";
import { AboutSection } from "@/components/about-section";

export const metadata = {
  title: "Tentang Dytama Studio – Digital Product Studio",
  description: "Mengenal Dytama Studio, filosofi kerja, tim profesional, dan visi kami dalam membangun teknologi berkualitas.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0D1526] text-white">
      <div className="container max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <span className="text-sm font-semibold tracking-widest text-[#D9FF43] uppercase">About Us</span>
        <h1 className="text-4xl sm:text-6xl font-bold">Mengenal Dytama Studio</h1>
        <p className="text-base text-zinc-300 max-w-2xl mx-auto">
          Dytama didirikan untuk membantu pelaku usaha, startup, dan korporasi menghadirkan produk digital tingkat dunia yang efisien dan memukau secara visual.
        </p>
      </div>

      <AboutSection />
    </div>
  );
}
