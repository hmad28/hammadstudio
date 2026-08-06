import React from "react";
import { TestimonialsAndNews } from "@/components/testimonials-news";

export const metadata = {
  title: "Insight & Berita Teknologi – Hammad Studio",
  description: "Artikel terbaru seputar pengembangan web, tren desain UI/UX, dan strategi produk digital dari Hammad Studio.",
};

export default function InsightPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f7f7f5]">
      <TestimonialsAndNews />
    </div>
  );
}
