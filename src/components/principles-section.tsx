"use client";

import { homeContent } from "@/lib/home-content";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function PrinciplesSection() {
  const { locale } = useLocale();
  const copy = homeContent.principles;

  return (
    <section className="bg-[#f0eee7] py-24 text-[#0a0a09] sm:py-32 lg:py-40">
      <div className="site-container">
        <MotionReveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3"><span className="label-mono text-black/45">{copy.label[locale]} / 04</span></div>
          <div className="lg:col-span-9">
            <h2 className="max-w-[940px] text-[clamp(3rem,6.5vw,6.5rem)] font-[510] leading-[0.9] tracking-[-0.06em]">{copy.headline[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.accent[locale]}</span></h2>
            <p className="mt-8 max-w-[700px] text-base leading-[1.7] text-black/58 sm:text-lg">{copy.description[locale]}</p>
          </div>
        </MotionReveal>

        <div className="mt-14 grid border-l border-t border-black/15 sm:grid-cols-2 lg:ml-[25%]">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.title.en} delay={index * 0.05} className="min-h-[230px] border-b border-r border-black/15 p-6 sm:p-8">
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.62rem] text-black/35">0{index + 1}</span>
              <h3 className="mt-12 text-[clamp(1.7rem,3vw,2.7rem)] font-[510] leading-none tracking-[-0.05em]">{item.title[locale]}</h3>
              <p className="mt-4 max-w-[390px] text-sm leading-[1.65] text-black/52">{item.description[locale]}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
