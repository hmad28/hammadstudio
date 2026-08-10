"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function WhyItMattersSection() {
  const { locale } = useLocale();
  const copy = homeContent.whyItMatters;

  return (
    <section id="why-it-matters" className="scroll-mt-20 bg-[#e6e4de] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="surface-card grid overflow-hidden bg-[#eceae4] lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden bg-[#0b0b0a] sm:min-h-[520px]">
            <Image src="/images/work/saudi-education-expo.webp" alt="Website Saudi Education Expo dalam tampilan desktop" fill sizes="(max-width: 1024px) 100vw, 620px" className="object-cover object-top transition duration-1000 hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white"><div><span className="label-mono text-white/55">Website experience</span><p className="mt-2 text-xl font-[520]">Saudi Education Expo</p></div><span className="rounded-full bg-[#cfef57] px-3 py-1.5 text-xs font-semibold text-black">2026</span></div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-[520] leading-[0.94] tracking-[-0.058em]">{copy.headline[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.accent[locale]}</span></h2>
            <p className="mt-6 max-w-[560px] text-base leading-[1.7] text-black/58 sm:text-lg">{copy.description[locale]}</p>
            <div className="mt-8 flex flex-wrap gap-2">{copy.items.map((item) => <span key={item.title} className="rounded-full border border-black/15 bg-white/35 px-4 py-2 text-sm font-[520]">{item.title}</span>)}</div>
            <Link href="/services/website" className="group mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold">Website development <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
