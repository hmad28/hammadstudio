"use client";

import React, { useState } from "react";
import { ArrowUpRightIcon } from "./icons";

const WHATSAPP_BASE = "https://wa.me/+6287888362186?text=";

interface PricingRow {
  num: string;
  title: string;
  price: string;
  description: string;
  whatsappMsg: string;
}

const pricingRows: PricingRow[] = [
  {
    num: "01",
    title: "Website",
    price: "From Rp3.5M",
    description: "Landing pages and focused marketing websites.",
    whatsappMsg: encodeURIComponent("Halo HAMMAD.STUDIO, saya tertarik dengan paket Website (Mulai Rp3.5M)."),
  },
  {
    num: "02",
    title: "Business Website",
    price: "From Rp6.5M",
    description: "Complete websites for growing businesses with custom CMS.",
    whatsappMsg: encodeURIComponent("Halo HAMMAD.STUDIO, saya tertarik dengan paket Business Website (Mulai Rp6.5M)."),
  },
  {
    num: "03",
    title: "Custom Software",
    price: "From Rp12.5M",
    description: "Dashboards, business systems, and custom SaaS web applications.",
    whatsappMsg: encodeURIComponent("Halo HAMMAD.STUDIO, saya berminat konsultasi paket Custom Software (Mulai Rp12.5M)."),
  },
];

export function PricingSection() {
  const [, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative w-full py-24 lg:py-32 bg-[#101010] text-[#FAFAF8] border-t border-white/10">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
              PRICING / 04
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Clear pricing. No surprises.
            </h2>
          </div>
        </div>

        {/* Clean Rows */}
        <div className="border-t border-white/10">
          {pricingRows.map((row, index) => (
            <a
              key={row.num}
              href={`${WHATSAPP_BASE}${row.whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.03] cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-2 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                  ({row.num})
                </div>

                <div className="lg:col-span-4 text-2xl sm:text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 text-white">
                  {row.title}
                </div>

                <div className="lg:col-span-3 text-lg font-mono font-medium text-zinc-300">
                  {row.price}
                </div>

                <div className="lg:col-span-3 text-xs sm:text-sm text-zinc-400 font-normal flex items-center justify-between gap-4">
                  <span>{row.description}</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-white group-hover:bg-white group-hover:text-black transition-all shrink-0">
                    <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
