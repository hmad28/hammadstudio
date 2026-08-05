"use client";

import React from "react";
import { CheckIcon, ArrowRightIcon } from "./icons";

const WHATSAPP_BASE = "https://wa.me/+6287888362186?text=";

export function PricingSection() {
  const packages = [
    {
      name: "Starter / Landing Page",
      price: "Rp 5.000.000",
      period: "proyek",
      description: "Solusi cepat dan efisien untuk meluncurkan produk atau promosi bisnis baru.",
      popular: false,
      features: [
        "Desain Responsive Mobile & Desktop",
        "Hingga 3-5 Seksi Konten",
        "Integrasi Form Kontak & WhatsApp",
        "Basic SEO Optimization",
        "Waktu Pengerjaan 1-2 Minggu",
        "Free Hosting & Domain 1 Tahun",
      ],
      whatsappMsg: encodeURIComponent("Halo Dytama, saya tertarik dengan Paket Starter / Landing Page."),
    },
    {
      name: "Company Profile & Business",
      price: "Rp 12.000.000",
      period: "proyek",
      description: "Paket lengkap untuk bisnis profesional yang menginginkan branding visual eksklusif.",
      popular: true,
      features: [
        "Custom Premium UI/UX Design",
        "Hingga 8-10 Halaman Lengkap",
        "Animasi Interactive & Micro-interactions",
        "Sistem CMS / Dashboard Admin",
        "Advanced SEO & Performance Optimization",
        "Integrasi Analytics & Meta Pixel",
        "Waktu Pengerjaan 2-3 Minggu",
        "Dukungan Maintenance 3 Bulan",
      ],
      whatsappMsg: encodeURIComponent("Halo Dytama, saya tertarik dengan Paket Company Profile & Business."),
    },
    {
      name: "Custom Web App / SaaS",
      price: "Custom",
      period: "mulai dari kebutuhan Anda",
      description: "Pengembangan sistem web kompleks, platform SaaS, e-commerce, atau dashboard kustom.",
      popular: false,
      features: [
        "Arsitektur Web Scalable (Next.js / React)",
        "Database System & Realtime Backend",
        "User Authentication & Role Control",
        "API Integration & Payment Gateway",
        "SLA & Enterprise Support",
        "Full Source Code & Ownership",
      ],
      whatsappMsg: encodeURIComponent("Halo Dytama, saya ingin berkonsultasi untuk Custom Web Application / SaaS."),
    },
  ];

  return (
    <section id="PricingList" className="relative w-full py-20 lg:py-28 bg-[#0D1526] text-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-sm font-semibold tracking-widest text-[#D9FF43] uppercase">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Transparan & Sesuai Kebutuhan
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-zinc-300">
            Pilih paket pengembangan produk digital yang sesuai dengan skala bisnis dan target pertumbuhan Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#1C1444] to-[#121A2D] border-2 border-[#D9FF43] shadow-2xl shadow-[#5946F8]/20 -translate-y-2"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D9FF43] text-black font-bold text-xs rounded-full uppercase tracking-wider shadow-md">
                  Paling Populer
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-zinc-400 min-h-[36px]">{pkg.description}</p>
                </div>

                <div className="pb-6 border-b border-white/10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">{pkg.price}</div>
                  <span className="text-xs text-zinc-400 font-medium">/ {pkg.period}</span>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Fitur Termasuk:</span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                        <CheckIcon className="w-4 h-4 text-[#D9FF43] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <a
                  href={`${WHATSAPP_BASE}${pkg.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                    pkg.popular
                      ? "bg-[#D9FF43] hover:bg-[#cfe83f] text-black shadow-lg shadow-[#D9FF43]/20"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Pilih Paket
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
