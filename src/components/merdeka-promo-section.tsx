"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { FlagBanner } from "@phosphor-icons/react/FlagBanner";
import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";
import { Sparkle } from "@phosphor-icons/react/Sparkle";
import { MotionReveal } from "./motion-reveal";

export function MerdekaPromoSection() {
  return (
    <section className="relative overflow-hidden bg-[#e52a31] px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[44px] border-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-28 left-[42%] h-72 w-72 rotate-12 border-[36px] border-[#d2f34c]/20" aria-hidden="true" />
      <Sparkle className="pointer-events-none absolute left-[7%] top-16 h-16 w-16 rotate-12 text-[#d2f34c] sm:h-24 sm:w-24" weight="fill" aria-hidden="true" />
      <Sparkle className="pointer-events-none absolute bottom-12 right-[8%] h-10 w-10 -rotate-12 text-white/45" weight="fill" aria-hidden="true" />

      <MotionReveal className="relative mx-auto max-w-[1240px]">
        <div className="flex items-center justify-between border-b border-white/25 pb-5">
          <span className="flex items-center gap-2 font-mono text-[.68rem] font-semibold tracking-[.14em]">
            <FlagBanner className="h-4 w-4" weight="fill" /> PROMO MERDEKA
          </span>
          <span className="font-mono text-[.62rem] tracking-[.12em] text-white/65">S.D. 31 AGUSTUS 2026</span>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[clamp(4.8rem,13vw,12rem)] font-[560] leading-[.72] tracking-[-.085em]">499<span className="text-[.28em] tracking-[-.04em]">RB</span></p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium sm:text-base">
              <span className="border border-white/25 bg-white/10 px-4 py-2">Landing page</span>
              <span className="flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-2"><GlobeHemisphereWest className="h-5 w-5" weight="duotone" /> Domain .com</span>
              <span className="border border-white/25 bg-white/10 px-4 py-2">Hosting + SSL</span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="font-[family-name:var(--font-instrument-serif)] text-3xl italic leading-none sm:text-4xl">Merdeka punya website sendiri.</p>
            <Link href="/contact?package=Promo%20Merdeka" className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#070a12] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#111522]">
              Ambil promo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" />
            </Link>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
