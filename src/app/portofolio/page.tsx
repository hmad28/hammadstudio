import React from "react";
import { PortfolioSection } from "@/components/portfolio-section";

export const metadata = {
  title: "Portofolio Proyek Studio – Dytama",
  description: "Lihat galeri proyek website, aplikasi mobile, dan desain UI/UX yang telah dibangun oleh Dytama Studio.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <PortfolioSection />
    </div>
  );
}
