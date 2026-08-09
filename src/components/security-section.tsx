"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function SecuritySection() {
  const { locale } = useLocale();
  const copy = homeContent.security;

  return (
    <section className="bg-[#11110f] py-24 text-white sm:py-32 lg:py-40">
      <div className="site-container">
        <MotionReveal className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <span className="label-mono text-[#cfef57]">{copy.label[locale]} / 03</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-[950px] text-[clamp(3.2rem,7vw,7rem)] font-[510] leading-[0.88] tracking-[-0.065em]">
              {copy.headline[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#cfef57]">{copy.accent[locale]}</span>
            </h2>
            <p className="mt-10 max-w-[720px] border-t border-white/12 pt-7 text-base leading-[1.7] text-white/62 sm:text-lg lg:mt-14">{copy.description[locale]}</p>
          </div>
        </MotionReveal>

        <MotionReveal className="mt-14 grid border-l border-t border-white/12 sm:grid-cols-2 lg:ml-[25%] lg:grid-cols-4" delay={0.08}>
          {copy.practices[locale].map((practice, index) => (
            <div key={practice} className="min-h-28 border-b border-r border-white/12 p-5 sm:min-h-32">
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.6rem] text-[#cfef57]/60">0{index + 1}</span>
              <p className="mt-7 max-w-[180px] text-sm leading-[1.35] text-white/72">{practice}</p>
            </div>
          ))}
        </MotionReveal>
        <div className="mt-8 flex justify-end">
          <Link href="/security" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white">{copy.link[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
