"use client";

import React from "react";
import Link from "next/link";
import { HammadStudioLogo, ArrowUpRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20tertarik%20untuk%20memulai%20proyek";

export function CTAFooter() {
  return (
    <footer className="relative w-full bg-[#050505] text-white">
      {/* SECTION 06 — FINAL CTA (IVORY VISUAL INVERSION BREAK) */}
      <section className="relative w-full py-24 lg:py-32 bg-[#F4F2EC] text-[#080808]">
        <div className="container max-w-[1200px] mx-auto px-4 text-center flex flex-col items-center space-y-6">
          <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
            START A PROJECT
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#080808] leading-[0.98]">
            Got a project in mind?
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 max-w-xl leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll help figure out the best way to make it happen.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#080808] hover:bg-zinc-800 text-white font-semibold text-sm rounded-xl transition-all duration-200 cursor-pointer shadow-xl"
            >
              Start a Project
              <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:hello@hammad.studio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-black/15 hover:border-black/40 text-[#080808] font-medium text-sm rounded-xl transition-all duration-200"
            >
              hello@hammad.studio
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 07 — FOOTER */}
      <section className="relative w-full py-16 bg-[#050505] border-t border-white/10 overflow-hidden">
        {/* Massive Subtle Typography Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <span className="text-[14vw] font-black tracking-tighter text-white/[0.03] whitespace-nowrap">
            HAMMAD.STUDIO
          </span>
        </div>

        <div className="container max-w-[1200px] mx-auto px-4 relative z-10 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-3">
              <Link href="/">
                <HammadStudioLogo />
              </Link>
              <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                Digital Product & Software Studio.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-medium">
                <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#work" className="hover:text-white transition-colors">Work</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Studio</Link></li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Social</h4>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-medium">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram ↗</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub ↗</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Contact</h4>
              <p className="text-xs text-zinc-400 font-medium">
                hello@hammad.studio
              </p>
              <p className="text-xs text-zinc-400">
                Depok & Jakarta, Indonesia
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
            <p>© {new Date().getFullYear()} HAMMAD.STUDIO. All rights reserved.</p>
            <p>Quiet confidence. Clean execution.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
