import React from "react";
import { PortfolioSection } from "@/components/portfolio-section";

export const metadata = {
  title: "Portofolio Proyek Studio – Hammad Studio",
  description: "Lihat galeri proyek website, aplikasi mobile, dan desain UI/UX yang telah dibangun oleh Hammad Studio.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <PortfolioSection />
    </div>
  );
}
