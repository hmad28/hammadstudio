"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function AboutSection() {
  const { locale } = useLocale();
  const copy = homeContent.about;
  const capabilities = copy.capabilities[locale];

  return (
    <section className="overflow-hidden bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-36">
      <div className="site-container">
        <MotionReveal className="grid gap-9 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <p className="mt-5 max-w-[190px] whitespace-pre-line text-xs leading-[1.55] text-black/50">{copy.location[locale]}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-[960px] text-[clamp(2.8rem,6.4vw,6.7rem)] font-[510] leading-[0.92] tracking-[-0.06em]">
              {copy.headlineBefore[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic tracking-[-0.035em]">{copy.headlineAccent[locale]}</span>
            </h2>
            <div className="mt-10 flex flex-col gap-6 border-t border-black/15 pt-6 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-[640px] text-base leading-[1.65] text-black/58 sm:text-lg">{copy.description[locale]}</p>
              <Link href="/about" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold">{copy.link[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
            </div>
          </div>
        </MotionReveal>
      </div>

      <div className="ticker mt-20 border-y border-black/10 py-5 sm:mt-28">
        <div className="ticker-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-7 whitespace-nowrap text-[clamp(1.5rem,2.4vw,2.4rem)] font-[500] tracking-[-0.04em]">
              {item}<span className="font-[family-name:var(--font-instrument-serif)] text-[#7f8c36]">&#10035;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
