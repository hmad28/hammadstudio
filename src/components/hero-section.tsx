"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";

const projectUrl = "https://wa.me/6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20ingin%20memulai%20project";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = homeContent.hero;
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const showcaseY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const sideY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 150]);

  return (
    <section ref={sectionRef} id="hero" className="hero-surface relative min-h-screen overflow-hidden pb-10 pt-32 text-white sm:pt-36 lg:pt-40">
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="label-mono text-white/45">{copy.eyebrow[locale]}</span>
          <span className="hidden items-center gap-2 text-[0.7rem] text-white/55 sm:flex"><span className="availability-dot" /> {copy.availability[locale]}</span>
        </div>

        <div className="grid gap-8 pb-12 pt-10 lg:grid-cols-12 lg:items-end lg:pb-16 lg:pt-12">
          <h1 className="text-[clamp(4rem,9.7vw,9rem)] font-[540] leading-[0.79] tracking-[-0.072em] text-[#f6f4ee] lg:col-span-9">
            <span className="hero-line"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>{copy.lineOne[locale]}</motion.span></span>
            <span className="hero-line pb-[0.08em]"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic tracking-[-0.045em] text-[#cfef57]">{copy.accent[locale]}</span> {copy.lineTwo[locale]}</motion.span></span>
          </h1>

          <motion.div className="lg:col-span-3 lg:pb-2" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}>
            <p className="max-w-[340px] text-sm leading-[1.6] text-white/58 sm:text-base lg:ml-auto">{copy.description[locale]}</p>
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <a href={projectUrl} target="_blank" rel="noreferrer" className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold">{copy.primary[locale]} <ArrowUpRightIcon className="button-arrow h-3.5 w-3.5" /></a>
              <Link href="#work" className="inline-flex items-center rounded-full border border-white/16 px-5 py-3 text-xs font-medium text-white/80 transition-colors hover:bg-white hover:text-black">{copy.secondary[locale]}</Link>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-stage relative mx-auto h-[330px] max-w-[1180px] sm:h-[490px] lg:h-[620px]" style={{ y: showcaseY }} initial={reduceMotion ? false : { opacity: 0, y: 70, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.05, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div style={{ y: sideY }} className="absolute -left-[13%] top-[15%] h-[64%] w-[38%] -rotate-[5deg] overflow-hidden rounded-[10px] border border-white/10 bg-[#111] opacity-65 shadow-2xl sm:-left-[8%] sm:opacity-90"><Image src="/images/work/ajwa-date-store.webp" alt="Ajwa Date Store website project preview" fill priority sizes="(max-width: 640px) 45vw, 430px" className="object-cover object-top" /></motion.div>
          <motion.div style={{ y: sideY }} className="absolute -right-[13%] top-[15%] h-[64%] w-[38%] rotate-[5deg] overflow-hidden rounded-[10px] border border-white/10 bg-[#111] opacity-65 shadow-2xl sm:-right-[8%] sm:opacity-90"><Image src="/images/work/operations-dashboard.webp" alt="Operations dashboard project preview" fill priority sizes="(max-width: 640px) 45vw, 430px" className="object-cover object-top" /></motion.div>
          <div className="group absolute left-1/2 top-0 z-10 h-[82%] w-[82%] -translate-x-1/2 overflow-hidden rounded-[10px] border border-white/15 bg-[#0d0d0d] shadow-[0_45px_120px_rgba(0,0,0,.7)] sm:w-[70%]">
            <Image src="/images/work/saudi-education-expo.webp" alt="Saudi Education Expo event platform preview" fill priority sizes="(max-width: 640px) 86vw, 820px" className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.018]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-4 pt-16 sm:p-6 sm:pt-24"><div><p className="label-mono text-white/45">{copy.featured[locale]} / 2026</p><p className="mt-2 text-sm font-medium sm:text-lg">Saudi Education Expo</p></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cfef57] text-black sm:h-11 sm:w-11"><ArrowUpRightIcon className="h-4 w-4" /></span></div>
          </div>
          <div className="absolute bottom-[4%] left-[8%] right-[8%] h-[18%] rounded-[50%] bg-[#cfef57]/10 blur-3xl" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
