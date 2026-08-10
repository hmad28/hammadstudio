"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = homeContent.hero;
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const showcaseY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);

  return (
    <section ref={sectionRef} id="hero" className="hero-surface relative overflow-hidden pb-16 pt-32 text-white sm:pt-36 lg:pt-40">
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <span className="label-mono text-white/50">{copy.eyebrow[locale]}</span>
          <div className="flex items-center gap-4 text-[0.72rem] text-white/55">
            <span className="inline-flex items-center gap-2">
              <span className="availability-dot" /> {copy.availability[locale]}
            </span>
            <span className="hidden text-white/30 sm:inline">•</span>
            <span className="hidden text-white/45 sm:inline">🌐 {copy.location[locale]}</span>
          </div>
        </div>

        <div className="mx-auto max-w-[840px] pb-12 pt-10 text-center lg:pb-16 lg:pt-14">
          <h1 className="text-[clamp(3.4rem,7.2vw,6.8rem)] font-[540] leading-[0.88] tracking-[-0.065em] text-[#f6f4ee]">
            <span className="hero-line">
              <motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
                {copy.lineOne[locale]}
              </motion.span>
            </span>
            <span className="hero-line pb-[0.08em]">
              <motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
                <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic tracking-[-0.04em] text-[#cfef57]">
                  {copy.accent[locale]}
                </span>{" "}
                {copy.lineTwo[locale]}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mx-auto mt-6 max-w-[620px] text-base leading-[1.65] text-white/60 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {copy.description[locale]}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/contact" className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold sm:text-sm">
              {copy.primary[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </Link>
            <Link href="#work" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-medium text-white/85 transition-colors hover:bg-white hover:text-black sm:text-sm">
              {copy.secondary[locale]}
            </Link>
          </motion.div>
        </div>

        {/* Hero Device Showcase Mockups - Laptop (Center) + Mobile (Left) + Tablet (Right) */}
        <motion.div
          className="hero-stage relative mx-auto h-[320px] max-w-[1140px] sm:h-[480px] lg:h-[580px]"
          style={{ y: showcaseY }}
          initial={reduceMotion ? false : { opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left: Mobile App Mockup */}
          <div className="absolute -left-[4%] top-[12%] z-20 h-[72%] w-[26%] overflow-hidden rounded-[22px] border-2 border-white/18 bg-[#0c0c0b] shadow-[0_25px_60px_rgba(0,0,0,0.8)] sm:-left-[2%] lg:left-[2%]">
            <Image src="/images/work/operations-dashboard.webp" alt="Mobile app UI mockup" fill sizes="(max-width: 640px) 30vw, 300px" className="object-cover object-top" />
          </div>

          {/* Right: Tablet / Secondary Mockup */}
          <div className="absolute -right-[4%] top-[18%] z-20 h-[68%] w-[32%] overflow-hidden rounded-[16px] border-2 border-white/18 bg-[#0c0c0b] shadow-[0_25px_60px_rgba(0,0,0,0.8)] sm:-right-[2%] lg:right-[2%]">
            <Image src="/images/work/ajwa-date-store.webp" alt="Store product mockup" fill sizes="(max-width: 640px) 35vw, 360px" className="object-cover object-top" />
          </div>

          {/* Center: Main Laptop Frame Mockup */}
          <div className="group absolute left-1/2 top-0 z-10 h-[88%] w-[84%] -translate-x-1/2 overflow-hidden rounded-[14px] border-2 border-white/20 bg-[#0d0d0d] shadow-[0_35px_100px_rgba(0,0,0,0.95)] sm:w-[72%]">
            <Image src="/images/work/saudi-education-expo.webp" alt="Saudi Education Expo platform" fill priority sizes="(max-width: 640px) 90vw, 840px" className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.018]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 sm:p-7">
              <div>
                <p className="label-mono text-white/50">{copy.featured[locale]} · 2026</p>
                <p className="mt-1 text-base font-semibold text-white sm:text-xl">Saudi Education Expo</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cfef57] text-black shadow-lg sm:h-11 sm:w-11">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Ambient Glow */}
          <div className="absolute bottom-[2%] left-[10%] right-[10%] h-[20%] rounded-[50%] bg-[#cfef57]/12 blur-3xl" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

