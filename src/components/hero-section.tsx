"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20tertarik%20untuk%20memulai%20proyek";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-36 lg:pt-44 pb-20 overflow-hidden text-white bg-hero-radial bg-subtle-grid"
    >
      <div className="container max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-[84px] font-medium tracking-[-0.05em] text-white leading-[0.96] uppercase mb-8">
          We design and build{" "}
          <span className="font-serif italic font-normal text-gradient-silver lowercase">
            digital products.
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-300 mb-10 leading-relaxed font-normal">
          Websites, e-commerce, business systems, and custom software for growing businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 btn-primary-platinum text-sm font-semibold rounded-xl cursor-pointer"
          >
            Start a Project
            <ArrowUpRightIcon className="w-4 h-4 btn-arrow transition-transform duration-200" />
          </a>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 btn-secondary-transparent text-sm font-medium rounded-xl"
          >
            View Our Work
          </Link>
        </div>

        {/* Starting Price Anchor */}
        <p className="text-xs text-zinc-400 font-medium tracking-wide mb-16">
          Projects starting from Rp3.5M
        </p>

        {/* Dominant Project Showcase Visual */}
        <div className="relative w-full max-w-[1100px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <Image
            src="/assets/img/illustration/background-web-dytama.webp"
            alt="HAMMAD.STUDIO Project Showcase"
            width={1200}
            height={650}
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
