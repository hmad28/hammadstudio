"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20Hammad%20Studio%2C%20saya%20tertarik%20dengan%20layanan%20Anda";

export function AboutSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0b0b0b] text-white border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col space-y-12">
        {/* About Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#ababaa] uppercase">About Us</span>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium leading-tight text-[#f7f7f5]">
              Hammad Studio adalah{" "}
              <span className="text-gradient-silver font-bold">
                tech consulting, creative dan digital product studio
              </span>{" "}
              yang membantu bisnis Merancang, Mendesain, dan Mengembangkan produk digital modern.
            </h2>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 pl-5 pr-2 py-2.5 btn-secondary-monochrome text-xs sm:text-sm font-medium rounded-full"
              >
                Selengkapnya
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-black">
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
          {/* Card 01: Premium Silver Card */}
          <div
            className="relative w-full p-6 rounded-2xl overflow-hidden h-96 flex flex-col justify-between shadow-xl group border border-black/10"
            style={{ background: "linear-gradient(135deg, #ffffff 0%, #ececea 45%, #cfcfcd 100%)" }}
          >
            <div className="absolute -right-20 top-0 w-[450px] opacity-25 grayscale transition-transform duration-500 group-hover:scale-105 pointer-events-none">
              <Image
                src="/assets/img/illustration/ribbon.webp"
                alt="Ribbon Illustration"
                width={450}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#090909] max-w-[220px] relative z-10 leading-snug">
              Client Retention Rate
            </h3>

            <div className="relative z-10 rounded-2xl bg-[#090909] p-5 border border-zinc-800 shadow-2xl text-white">
              <div className="absolute right-0 bottom-0 w-36 opacity-15 pointer-events-none invert">
                <Image
                  src="/assets/img/illustration/topology.svg"
                  alt="Topology Pattern"
                  width={150}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-5xl font-extrabold text-white">98%</span>
                <span className="text-xs text-zinc-300 px-3 py-1 rounded-full border border-zinc-700 font-medium">
                  Metric
                </span>
              </div>
              <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                Hammad Studio membangun kepercayaan dan prinsip itu yang selalu kami jaga untuk memberikan hasil terbaik.
              </p>
            </div>
          </div>

          {/* Card 02: Deep Graphite Gradient */}
          <div
            className="relative w-full p-6 rounded-2xl overflow-hidden h-96 flex flex-col justify-between text-white shadow-xl group border border-white/12"
            style={{ background: "linear-gradient(135deg, #1c1c1c 0%, #111111 100%)" }}
          >
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-[#f7f7f5]">
                Memaksimalkan Potensi Bisnis Anda
              </h3>
              <p className="text-xs sm:text-sm text-[#c3c3c0] leading-relaxed">
                Kami membantu bisnis mengatasi masalah tersebut melalui solusi digital yang tepat dan terarah.
              </p>
            </div>

            <div className="relative w-full h-48 rounded-xl overflow-hidden mt-4 group-hover:scale-105 transition-transform duration-500 border border-white/10">
              <Image
                src="/assets/img/illustration/dashboard.png"
                alt="Dashboard Preview"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Card 03: Off-White / Silver Card */}
          <div
            className="relative w-full p-6 rounded-2xl overflow-hidden h-96 flex flex-col justify-between shadow-xl border border-black/10 text-[#090909]"
            style={{ background: "linear-gradient(145deg, #f7f7f5, #dededb)" }}
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#090909] leading-tight">
                Menyesuaikan Karakter Bisnis Anda
              </h3>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                Tampilan visual yang eye-catching untuk menaikkan level bisnis Anda ke tingkatan yang baru.
              </p>

              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pl-4 pr-1.5 py-2 bg-[#090909] text-white text-xs font-semibold rounded-full hover:bg-zinc-800 transition-all duration-200 shadow-md"
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
                <span className="text-xs text-zinc-800 px-3.5 py-1.5 rounded-full border border-zinc-300 bg-white/80 font-medium">
                  #Web Development
                </span>
                <span className="text-xs text-zinc-800 px-3.5 py-1.5 rounded-full border border-zinc-300 bg-white/80 font-medium">
                  #UI/UX Design
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-800 px-3.5 py-1.5 rounded-full border border-zinc-300 bg-white/80 font-medium">
                  #SEO Strategy
                </span>
                <span className="text-xs text-zinc-800 px-3.5 py-1.5 rounded-full border border-zinc-300 bg-white/80 font-medium">
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
