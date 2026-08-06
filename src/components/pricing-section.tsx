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
      whatsappMsg: encodeURIComponent("Halo Hammad Studio, saya tertarik dengan Paket Starter / Landing Page."),
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
      whatsappMsg: encodeURIComponent("Halo Hammad Studio, saya tertarik dengan Paket Company Profile & Business."),
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
      whatsappMsg: encodeURIComponent("Halo Hammad Studio, saya ingin berkonsultasi untuk Custom Web Application / SaaS."),
    },
  ];

  return (
    <section
      id="PricingList"
      className="relative w-full py-20 lg:py-28 text-white border-t border-white/10"
      style={{ background: "linear-gradient(135deg, #141414 0%, #0b0b0b 100%)" }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#858583] uppercase">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f7f7f5]">
            Transparan & Sesuai Kebutuhan
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-[#c3c3c0]">
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
                  ? "bg-gradient-to-b from-white via-[#ececea] to-[#d6d6d6] text-[#090909] border-2 border-white shadow-2xl -translate-y-2"
                  : "bg-[#111111] text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#090909] text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-md">
                  Paling Populer
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-[#090909]" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs min-h-[36px] ${pkg.popular ? "text-zinc-700" : "text-[#858583]"}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className={`pb-6 border-b ${pkg.popular ? "border-black/10" : "border-white/10"}`}>
                  <div className={`text-3xl sm:text-4xl font-extrabold ${pkg.popular ? "text-[#090909]" : "text-white"}`}>
                    {pkg.price}
                  </div>
                  <span className={`text-xs font-medium ${pkg.popular ? "text-zinc-600" : "text-[#858583]"}`}>
                    / {pkg.period}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${pkg.popular ? "text-zinc-800" : "text-zinc-400"}`}>
                    Fitur Termasuk:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className={`flex items-start gap-3 text-xs sm:text-sm ${pkg.popular ? "text-zinc-800" : "text-zinc-200"}`}>
                        <CheckIcon className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-black" : "text-white"}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-8 mt-6 border-t ${pkg.popular ? "border-black/10" : "border-white/10"}`}>
                <a
                  href={`${WHATSAPP_BASE}${pkg.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    pkg.popular
                      ? "bg-[#090909] text-white hover:bg-zinc-800 shadow-xl"
                      : "btn-secondary-monochrome"
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
