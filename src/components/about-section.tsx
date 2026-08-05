"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda";

export function AboutSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-black">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col space-y-12">
        {/* About Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div>
            <span className="text-sm font-semibold tracking-wider text-indigo-700 uppercase">About</span>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium leading-tight text-slate-900">
              Dytama adalah{" "}
              <span className="font-normal bg-gradient-to-b from-[#4338CA] to-[#211C64] bg-clip-text text-transparent">
                tech consulting, creative dan digital product studio
              </span>{" "}
              yang membantu bisnis Merancang, Mendesain, dan Mengembangkan produk digital modern.
            </h2>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 pl-5 pr-2 py-2.5 bg-gradient-to-br from-indigo-700 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-md hover:scale-105"
              >
                Selengkapnya
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-indigo-700">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
          {/* Card 1: Retention Metric (Lime Yellow Card) */}
          <div className="relative w-full p-6 bg-[#D9FF43] rounded-2xl overflow-hidden h-96 flex flex-col justify-between shadow-xl group">
            <div className="absolute -right-20 top-0 w-[450px] opacity-95 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/assets/img/illustration/ribbon.webp"
                alt="Ribbon Illustration"
                width={450}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-black max-w-[220px] relative z-10 leading-snug">
              Client Retention Rate
            </h3>

            <div className="relative z-10 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 border border-zinc-700/50 shadow-2xl">
              <div className="absolute right-0 bottom-0 w-36 opacity-30 pointer-events-none">
                <Image
                  src="/assets/img/illustration/topology.svg"
                  alt="Topology Pattern"
                  width={150}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-5xl font-extrabold text-[#D9FF43]">98%</span>
                <span className="text-xs text-white/70 px-3 py-1 rounded-full border border-zinc-600 font-medium">
                  Metric
                </span>
              </div>
              <p className="mt-3 text-xs text-white/80 leading-relaxed">
                Dytama membangun kepercayaan dan prinsip itu yang selalu kami jaga untuk memberikan hasil terbaik.
              </p>
            </div>
          </div>

          {/* Card 2: Deep Purple Potential Card */}
          <div className="relative w-full p-6 bg-gradient-to-b from-[#200D5B] via-[#341593] to-[#18054D] rounded-2xl overflow-hidden h-96 flex flex-col justify-between text-white shadow-xl group">
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Memaksimalkan Potensi Bisnis Anda
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Kami membantu bisnis mengatasi masalah tersebut melalui solusi digital yang tepat dan terarah.
              </p>
            </div>

            <div className="relative w-full h-48 rounded-xl overflow-hidden mt-4 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/assets/img/illustration/dashboard.png"
                alt="Dashboard Preview"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Card 3: Custom Character Card */}
          <div className="relative w-full p-6 bg-slate-100 rounded-2xl overflow-hidden h-96 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Menyesuaikan Karakter Bisnis Anda
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tampilan visual yang eye-catching untuk menaikkan level bisnis Anda ke tingkatan yang baru.
              </p>

              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pl-4 pr-1.5 py-2 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white text-xs font-semibold rounded-full hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-md"
                >
                  Coba Konsultasi
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-black">
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            <div className="space-y-2.5 pt-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-700 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white font-medium">
                  #Web Development
                </span>
                <span className="text-xs text-zinc-700 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white font-medium">
                  #UI/UX Design
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-700 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white font-medium">
                  #SEO Strategy
                </span>
                <span className="text-xs text-zinc-700 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white font-medium">
                  #Mobile Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
