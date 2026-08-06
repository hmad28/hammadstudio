"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20Hammad%20Studio%2C%20saya%20tertarik%20dengan%20layanan%20Anda";

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
    <section id="services" className="relative w-full py-20 lg:py-28 bg-[#f7f7f5] text-[#090909] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#858583] uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#090909]">
            Beberapa Layanan Dari Hammad Studio
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-zinc-600">
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
                    ? "bg-[#090909] text-white border-zinc-700 shadow-2xl"
                    : "bg-white text-[#090909] border-black/10 hover:border-black/30 hover:bg-zinc-50"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-6 min-w-[280px]">
                    <span className={`text-xl font-mono font-light transition-colors ${isOpen ? "text-white" : "text-[#858583]"}`}>
                      ({item.num})
                    </span>
                    <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-colors ${isOpen ? "text-white" : "text-[#090909]"}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Expanded Content: Preview Image & Description */}
                  {isOpen && (
                    <div className="flex flex-col lg:flex-row items-center gap-6 flex-1 animate-in fade-in duration-300">
                      <div className="relative w-full lg:w-72 h-44 rounded-xl overflow-hidden bg-zinc-900 shrink-0 border border-zinc-700 shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
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
                          className="inline-flex items-center gap-2 px-5 py-2.5 btn-primary-silver text-black font-semibold text-xs rounded-full transition-all duration-200"
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
                          ? "border-white text-white bg-white/10 rotate-90"
                          : "border-black/20 text-zinc-600 group-hover:border-black/40"
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
