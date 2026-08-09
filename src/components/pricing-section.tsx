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

        <div className="grid gap-3 lg:grid-cols-3">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <Link href="/services" className="pricing-card group flex min-h-[340px] flex-col justify-between rounded-[8px] border border-black/12 bg-[#e8e5dc] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0a0a09] hover:text-white sm:min-h-[390px] sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="label-mono opacity-45">0{index + 1} / {copy.package[locale]}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#cfef57] group-hover:text-black"><ArrowUpRightIcon className="h-4 w-4" /></span>
                </div>
                <div>
                  <h3 className="text-[clamp(1.8rem,3vw,3rem)] font-[500] leading-none tracking-[-0.05em]">{item.title}</h3>
                  <p className="mt-5 max-w-[310px] text-sm leading-[1.6] opacity-55">{item.description[locale]}</p>
                  <div className="mt-8 border-t border-current/15 pt-5"><span className="text-[0.65rem] opacity-45">{copy.starting[locale]}</span><p className="mt-1 text-[2.5rem] font-[500] leading-none tracking-[-0.05em]">{item.price}</p></div>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
