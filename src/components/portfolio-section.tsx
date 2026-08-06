"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "./icons";

interface PortfolioItem {
  id: string;
  title: string;
  category: "Web Application" | "UI/UX Design" | "Mobile App";
  client: string;
  image: string;
  tags: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Apex Finance - AI Investment & Analytics SaaS",
    category: "Web Application",
    client: "Apex Financial Technology",
    image: "/assets/img/illustration/background-web-dytama.webp",
    tags: ["Next.js", "Tailwind CSS", "Dashboard"],
  },
  {
    id: "2",
    title: "Lumina Health - Telemedicine Mobile Experience",
    category: "UI/UX Design",
    client: "Lumina Healthcare Group",
    image: "/assets/img/services/uiux.webp",
    tags: ["Figma", "UI/UX", "Healthtech"],
  },
  {
    id: "3",
    title: "Nexus ERP - Enterprise Resource Management",
    category: "Web Application",
    client: "Nexus Global Logistics",
    image: "/assets/img/illustration/dashboard.png",
    tags: ["React", "TypeScript", "ERP System"],
  },
  {
    id: "4",
    title: "Karsa Workspace - Coworking & Community Booking",
    category: "Mobile App",
    client: "Karsa Indonesia",
    image: "/assets/img/services/web-development.webp",
    tags: ["Mobile", "iOS/Android", "Booking System"],
  },
];

export function PortfolioSection() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web Application", "UI/UX Design", "Mobile App"];

  const filteredItems = filter === "All" 
    ? portfolioData 
    : portfolioData.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="relative w-full py-20 lg:py-28 bg-[#050505] text-[#f7f7f5] border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#858583] uppercase">Portofolio</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Karya Terbaru Dari Studio Kami
            </h2>
            <p className="text-sm sm:text-base text-[#c3c3c0] max-w-xl">
              Lihat bagaimana kami membantu berbagai brand dan perusahaan membangun produk digital yang berdampak tinggi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-white text-black shadow-md font-semibold"
                    : "bg-white/5 text-[#c3c3c0] border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-white/12 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30"
            >
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-white text-black rounded-full">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold leading-snug group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#c3c3c0] font-medium">{item.client}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-[#858583] px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
