"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = homeContent.hero;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const showcaseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 90],
  );
  const sideY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 150],
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-surface-v2 relative min-h-screen overflow-hidden pb-16 pt-32 text-white sm:pt-36 lg:pt-40"
    >
      <div
        className="hero-noise pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Rich Multi-tone Ambient Mesh Glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(128,87,255,0.35)_0%,rgba(228,75,255,0.18)_40%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-5 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,100,255,0.25)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-4">
          <span className="label-mono purple-glow-badge rounded-full px-3 py-1 text-[0.68rem]">
            {copy.eyebrow[locale]}
          </span>
          <div className="flex items-center gap-4 text-[0.72rem] text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="availability-dot" /> {copy.availability[locale]}
            </span>
            <span className="hidden text-white/30 sm:inline">•</span>
            <span className="hidden items-center gap-1 text-white/60 sm:inline-flex">
              🌐 {copy.location[locale]}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-[880px] pb-12 pt-10 text-center lg:pb-16 lg:pt-14">
          <h1 className="text-[clamp(3.4rem,7.2vw,6.8rem)] font-[540] leading-[0.88] tracking-[-0.065em]">
            <span className="hero-line">
              <motion.span
                className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent"
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                {copy.lineOne[locale]}
              </motion.span>
            </span>
            <span className="hero-line pb-[0.08em]">
              <motion.span
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="bg-gradient-to-r from-[#cfef57] via-[#e2fd78] to-[#93c5fd] bg-clip-text font-[family-name:var(--font-instrument-serif)] font-normal italic tracking-[-0.04em] text-transparent drop-shadow-[0_4px_25px_rgba(207,239,87,0.3)]">
                  {copy.accent[locale]}
                </span>{" "}
                <span className="bg-gradient-to-b from-white to-white/85 bg-clip-text text-transparent">
                  {copy.lineTwo[locale]}
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mx-auto mt-6 max-w-[640px] text-base leading-[1.68] text-white/68 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {copy.description[locale]}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href="/contact"
              className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold sm:text-sm"
            >
              {copy.primary[locale]}{" "}
              <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-white hover:text-black sm:text-sm"
            >
              {copy.secondary[locale]}
            </Link>
          </motion.div>
        </div>

        {/* 3D Stage Hero Showcase with Gradient Borders & Glowing Aura */}
        <motion.div
          className="hero-stage relative mx-auto h-[330px] max-w-[1180px] sm:h-[490px] lg:h-[620px]"
          style={{ y: showcaseY }}
          initial={reduceMotion ? false : { opacity: 0, y: 70, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Tilted Card */}
          <motion.div
            style={{ y: sideY }}
            className="absolute -left-[13%] top-[15%] h-[64%] w-[38%] -rotate-[5deg] overflow-hidden rounded-xl border border-white/20 bg-[#111] opacity-75 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md sm:-left-[8%] sm:opacity-95"
          >
            <Image
              src="/images/work/cpx-jersey.png"
              alt="CPX Jersey homepage hero"
              fill
              priority
              sizes="(max-width: 640px) 45vw, 430px"
              className="object-cover object-top"
            />
          </motion.div>

          {/* Right Tilted Card */}
          <motion.div
            style={{ y: sideY }}
            className="absolute -right-[13%] top-[15%] h-[64%] w-[38%] rotate-[5deg] overflow-hidden rounded-xl border border-white/20 bg-[#111] opacity-75 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md sm:-right-[8%] sm:opacity-95"
          >
            <Image
              src="/images/work/sahabat-qolbu.png"
              alt="Sahabat Qolbu homepage hero"
              fill
              priority
              sizes="(max-width: 640px) 45vw, 430px"
              className="object-cover object-top"
            />
          </motion.div>

          {/* Main Center Card with Glowing Gradient Border */}
          <div className="group absolute left-1/2 top-0 z-10 h-[82%] w-[82%] -translate-x-1/2 overflow-hidden rounded-2xl border-2 border-white/25 bg-[#0d0d14] p-0.5 shadow-[0_45px_120px_rgba(0,0,0,0.9)] sm:w-[70%]">
            <div className="relative h-full w-full overflow-hidden rounded-[14px]">
              <Image
                src="/images/work/solivate.png"
                alt="Solivate Studio homepage hero"
                fill
                priority
                sizes="(max-width: 640px) 86vw, 820px"
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.018]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#06050b] via-[#06050b]/60 to-transparent p-5 pt-16 sm:p-7 sm:pt-24">
                <div>
                  <span className="purple-glow-badge inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold">
                    {copy.featured[locale]} · 2026
                  </span>
                  <p className="mt-2 text-base font-semibold text-white sm:text-xl">
                    Solivate Studio
                  </p>
                </div>
                <span className="acid-button flex h-10 w-10 items-center justify-center rounded-full text-black sm:h-12 sm:w-12">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Dual Multi-color Glowing Ambient Backdrop */}
          <div
            className="absolute bottom-[4%] left-[10%] right-[10%] h-[25%] rounded-[50%] bg-gradient-to-r from-[#8b5cf6]/25 via-[#cfef57]/20 to-[#6366f1]/25 blur-3xl"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
