"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "uiux",
    num: "01",
    title: "UI/UX Design",
    desc: "Kami membantu perusahaan dan startup merancang pengalaman digital yang modern melalui website, sistem web, dan desain UI/UX yang efektif.",
    image: "/assets/img/services/uiux.webp",
  },
  {
    id: "web-dev",
    num: "02",
    title: "Web Development",
    desc: "Hadirkan website yang cepat, aman, dan ramah SEO untuk memperkuat kredibilitas brand Anda dan menarik lebih banyak calon pembeli.",
    image: "/assets/img/services/web-development.webp",
  },
  {
    id: "mobile-dev",
    num: "03",
    title: "Mobile Application",
    desc: "Pengembangan aplikasi mobile iOS & Android native maupun cross-platform untuk memberikan pengalaman pengguna yang responsif dan lancar.",
    image: "/assets/img/illustration/background-web-dytama.webp",
  },
  {
    id: "seo",
    num: "04",
    title: "SEO & Product Consulting",
    desc: "Strategi optimasi mesin pencari dan konsultasi produk digital untuk meningkatkan jangkauan bisnis Anda secara organik di pasar digital.",
    image: "/assets/img/services/seo.webp",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>("uiux");

  return (
    <section id="services" className="relative w-full py-20 lg:py-28 bg-[#0D1526] text-white overflow-hidden">
      {/* Background Spotlight pattern */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[url('/assets/img/illustration/spotlight.svg')] bg-no-repeat bg-contain bg-top-right opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-[url('/assets/img/illustration/spotlight.svg')] bg-no-repeat bg-contain bg-bottom-left opacity-30 transform scale-y-[-1] scale-x-[-1] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-sm font-semibold tracking-widest text-[#D9FF43] uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Beberapa{" "}
            <span className="font-normal bg-gradient-to-b from-[#DCC5FF] via-[#B294FF] to-[#5946F8] bg-clip-text text-transparent">
              Layanan
            </span>{" "}
            Dari Dytama
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-zinc-300">
            Kami membantu perusahaan membangun website profesional yang mencerminkan kualitas bisnis mereka dan mudah diakses oleh pelanggan.
          </p>
        </div>

        {/* Interactive Services List */}
        <div className="w-full space-y-4">
          {servicesData.map((item) => {
            const isOpen = activeService === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveService(item.id)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 p-6 lg:p-8 ${
                  isOpen
                    ? "bg-white/[0.05] border-[#D9FF43]/40 shadow-2xl shadow-[#5946F8]/10"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-6 min-w-[280px]">
                    <span className={`text-xl font-mono font-light transition-colors ${isOpen ? "text-[#D9FF43]" : "text-white/40"}`}>
                      ({item.num})
                    </span>
                    <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-colors ${isOpen ? "text-[#D9FF43]" : "text-white"}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Expanded Content: Preview Image & Description */}
                  {isOpen && (
                    <div className="flex flex-col lg:flex-row items-center gap-6 flex-1 animate-in fade-in duration-300">
                      <div className="relative w-full lg:w-72 h-44 rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-white/10 shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4 flex-1">
                        <p className="text-sm text-zinc-300 leading-relaxed">
                          {item.desc}
                        </p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9FF43] hover:bg-[#cfe83f] text-black font-semibold text-xs rounded-full transition-all duration-200"
                        >
                          Hubungi Kami
                          <ArrowRightIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Toggle Indicator */}
                  <div className="hidden lg:block ml-auto">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-[#D9FF43] text-[#D9FF43] bg-[#D9FF43]/10 rotate-90"
                          : "border-white/20 text-white/60 group-hover:border-white/40"
                      }`}
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
