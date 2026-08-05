import React from "react";
import { TestimonialsAndNews } from "@/components/testimonials-news";

export const metadata = {
  title: "Insight & Berita Teknologi – Dytama Studio",
  description: "Artikel terbaru seputar pengembangan web, tren desain UI/UX, dan strategi produk digital dari Dytama.",
};

export default function InsightPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <TestimonialsAndNews />
    </div>
  );
}
