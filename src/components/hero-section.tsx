"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon, ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20Hammad%20Studio%2C%20saya%20tertarik%20dengan%20layanan%20Anda";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 lg:pt-40 pb-16 overflow-hidden text-white"
      style={{
        background: `radial-gradient(circle at 50% 0%, #252525 0%, #151515 30%, #0b0b0b 65%, #050505 100%)`,
      }}
    >
      {/* Subtle Silver Radial Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-silver pointer-events-none z-0 opacity-75" />

      {/* SVG Background Pattern */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[min(92vw,900px)] -translate-x-1/2 overflow-hidden opacity-30 invert">
        <Image
          src="/assets/img/illustration/background-pattern.svg"
          alt="Pattern Background"
          fill
          className="object-contain object-top"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Client Trust Badge */}
        <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Image
                key={num}
                src={`/assets/img/user/user-0${num}.png`}
                alt={`Client avatar ${num}`}
                width={32}
                height={32}
                className="w-7 h-7 rounded-full object-cover ring-2 ring-[#1c1c1c]"
              />
            ))}
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 text-zinc-200" />
              ))}
            </div>
            <span className="text-[11px] text-[#c3c3c0] font-medium">Dipercaya lebih dari 100+ Klien</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          <span className="block">Build Scalable Digital</span>
          <span className="block">
            Products,{" "}
            <span className="text-gradient-silver font-extrabold">
              Not Just
            </span>{" "}
            Websites
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-[#c3c3c0] mb-8 leading-relaxed">
          Hammad Studio adalah digital product studio yang membantu bisnis merancang, mendesain, dan mengembangkan web application modern dengan pendekatan UI/UX dan teknologi modern.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 btn-primary-silver text-sm sm:text-base font-semibold rounded-full cursor-pointer"
          >
            Lets,s Work Together
            <ArrowRightIcon className="w-4 h-4 btn-arrow transition-transform duration-200" />
          </a>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 btn-secondary-monochrome text-sm sm:text-base font-medium rounded-full"
          >
            Portofolio
          </Link>
        </div>

        {/* Hero Illustration Mockup */}
        <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 glow-silver-subtle group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none opacity-60" />
          <Image
            src="/assets/img/illustration/background-web-dytama.webp"
            alt="Hammad Studio Dashboard Preview"
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
