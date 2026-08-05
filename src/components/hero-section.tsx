"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon, ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 lg:pt-40 pb-16 overflow-hidden bg-[#0D1526]">
      {/* Background Radial Glow & Gradient Mesh */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 900px 520px at 50% 10%, rgba(109, 40, 217, 0.32), transparent 68%),
            radial-gradient(ellipse 620px 420px at 50% 28%, rgba(79, 70, 229, 0.2), transparent 72%),
            linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0D1526 82%)
          `,
        }}
      />

      {/* SVG Background Pattern */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[min(92vw,900px)] -translate-x-1/2 overflow-hidden opacity-80">
        <Image
          src="/assets/img/illustration/background-pattern.svg"
          alt="Pattern Background"
          fill
          className="object-contain object-top"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0D1526]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Client Trust Badge */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Image
                key={num}
                src={`/assets/img/user/user-0${num}.png`}
                alt={`Client avatar ${num}`}
                width={32}
                height={32}
                className="w-7 h-7 rounded-full object-cover ring-2 ring-[#27215f]"
              />
            ))}
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 text-[#ffc83d]" />
              ))}
            </div>
            <span className="text-[11px] text-white/80 font-medium">Dipercaya lebih dari 100+ Klien</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          <span className="block">Build Scalable Digital</span>
          <span className="block">
            Products,{" "}
            <span className="font-normal bg-gradient-to-b from-[#DCC5FF] via-[#B294FF] to-[#5946F8] bg-clip-text text-transparent">
              Not Just
            </span>{" "}
            Websites
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-zinc-300 mb-8 leading-relaxed">
          Dytama adalah digital product studio yang membantu bisnis merancang, mendesain, dan mengembangkan web application modern dengan pendekatan UI/UX dan teknologi modern.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9FF43] hover:bg-[#cfe83f] text-black font-semibold text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg shadow-[#D9FF43]/20 hover:scale-105"
          >
            Lets,s Work Together
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 hover:bg-indigo-600 text-white font-medium text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg shadow-indigo-700/20 hover:scale-105"
          >
            Portofolio
          </Link>
        </div>

        {/* Hero Illustration Mockup */}
        <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1526] via-transparent to-transparent z-10 pointer-events-none opacity-60" />
          <Image
            src="/assets/img/illustration/background-web-dytama.webp"
            alt="Dytama Dashboard & Website Preview"
            width={1200}
            height={600}
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
