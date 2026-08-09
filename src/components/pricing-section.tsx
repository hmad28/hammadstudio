"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function PricingSection() {
  const { locale } = useLocale();
  const copy = homeContent.pricing;

  return (
    <section id="pricing" className="scroll-mt-20 bg-[#f0eee7] py-24 text-[#0a0a09] sm:py-32 lg:py-40">
      <div className="site-container">
        <MotionReveal className="grid gap-9 pb-12 lg:grid-cols-12 lg:items-end lg:gap-6 lg:pb-16">
          <div className="lg:col-span-3"><span className="label-mono text-black/45">{copy.label[locale]}</span></div>
          <div className="lg:col-span-7"><h2 className="text-[clamp(3rem,6vw,6.2rem)] font-[510] leading-[0.9] tracking-[-0.06em]">{copy.headline[locale]}<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.accent[locale]}</span></h2></div>
          <p className="max-w-[280px] text-sm leading-[1.55] text-black/50 lg:col-span-2">{copy.description[locale]}</p>
        </MotionReveal>

        <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.title.en} delay={index * 0.08}>
              <Link href="/pricing" className="group flex min-h-[220px] flex-col justify-between border-b border-r border-black/15 bg-[#f0eee7] p-6 transition-colors duration-400 hover:bg-[#0a0a09] hover:text-white sm:min-h-[240px] sm:p-7">
                <div className="flex items-start justify-between"><span className="label-mono opacity-40">0{index + 1}</span><ArrowUpRightIcon className="button-arrow h-4 w-4 opacity-45" /></div>
                <div><h3 className="text-xl font-[520] tracking-[-0.04em] sm:text-2xl">{item.title[locale]}</h3><span className="mt-5 block text-[0.65rem] opacity-40">{copy.starting[locale]}</span><p className="mt-1 text-[clamp(1.8rem,3vw,2.7rem)] font-[520] leading-none tracking-[-0.05em]">{item.price}</p></div>
              </Link>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-9 flex justify-end">
          <Link href="/pricing" className="group inline-flex items-center gap-2 text-sm font-semibold">{copy.detail[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
