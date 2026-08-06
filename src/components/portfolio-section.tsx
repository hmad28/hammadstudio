"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "./icons";

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

const selectedWorkData: FeaturedProject[] = [
  {
    id: "1",
    title: "Saudi Education Expo",
    category: "Event Platform",
    year: "2026",
    image: "/assets/img/illustration/background-web-dytama.webp",
    featured: true,
  },
  {
    id: "2",
    title: "Lumina Healthcare Portal",
    category: "Telemedicine Platform",
    year: "2026",
    image: "/assets/img/services/uiux.webp",
  },
  {
    id: "3",
    title: "Nexus Global Logistics ERP",
    category: "Business System",
    year: "2025",
    image: "/assets/img/illustration/dashboard.png",
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="relative w-full py-24 lg:py-32 bg-[#050505] text-[#FAFAF8] border-t border-white/10">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
              SELECTED WORK / 03
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              A few things we&apos;ve built.
            </h2>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {/* Featured Main Project (Full-Width) */}
          {selectedWorkData.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30"
            >
              <div className="relative w-full h-[400px] sm:h-[550px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              <div className="p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0d0d0d]">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {project.category} / {project.year}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}

          {/* 2-Column Grid Secondary Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedWorkData.filter(p => !p.featured).map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:border-white/30"
              >
                <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                </div>

                <div className="p-6 flex items-center justify-between gap-4 bg-[#0d0d0d]">
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      {project.category} / {project.year}
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white group-hover:bg-white group-hover:text-black transition-all shrink-0">
                    <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
