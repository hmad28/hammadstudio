"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = homeContent.services;
  const services = copy.items;
  const service = services[active];
  const slugs = ["website", "e-commerce", "web-application", "business-system", "automation-ai", "custom-development"] as const;

  return (
    <section id="services" className="scroll-mt-24 bg-[#f0eee7] pb-24 text-[#0a0a09] sm:pb-32 lg:pb-40">
      <div className="site-container grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="mt-6 max-w-[420px] text-[clamp(3rem,5vw,5.5rem)] font-[510] leading-[0.9] tracking-[-0.06em]">{copy.headline[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.accent[locale]}</span></h2>
            <div className="relative mt-10 hidden aspect-[4/3] max-w-[390px] overflow-hidden rounded-[8px] bg-[#111] lg:block">
              <AnimatePresence mode="wait">
                <motion.div key={service.image + active} initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} className="absolute inset-0">
                  <Image src={service.image} alt="" fill sizes="390px" className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <span className="label-mono absolute bottom-5 left-5 text-white/60">{service.number} / {service.title[locale]}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="border-t border-black/20 lg:col-span-8">
          {services.map((item, index) => {
            const isActive = active === index;
            return (
              <Link key={item.number} href={`/services/${slugs[index]}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} className="group block border-b border-black/20 py-6 sm:py-8">
                <div className="grid grid-cols-[36px_1fr_auto] items-start gap-3 sm:grid-cols-[54px_1fr_auto]">
                  <span className="pt-1 font-[family-name:var(--font-geist-mono)] text-[0.65rem] text-black/40">{item.number}</span>
                  <div>
                    <h3 className="text-[clamp(2rem,4vw,4.2rem)] font-[500] leading-[0.94] tracking-[-0.055em] transition-transform duration-500 ease-out group-hover:translate-x-2">{item.title[locale]}</h3>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p initial={reduceMotion ? false : { height: 0, opacity: 0, y: 8 }} animate={{ height: "auto", opacity: 1, y: 0 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="max-w-[590px] overflow-hidden pt-4 text-sm leading-[1.6] text-black/55 sm:text-base">{item.description[locale]}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 ${isActive ? "rotate-45 bg-black text-white" : ""}`}><ArrowUpRightIcon className="h-4 w-4" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
