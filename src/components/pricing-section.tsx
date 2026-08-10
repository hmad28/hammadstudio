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
    <section id="pricing" className="scroll-mt-20 bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="flex flex-col items-start justify-between gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="section-heading mt-4 max-w-[650px]">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <p className="max-w-[460px] text-sm leading-[1.65] text-black/55 sm:text-base">
            {copy.description[locale]}
          </p>
        </MotionReveal>

        {/* 6 Clean Price Buckets Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.title[locale]} delay={index * 0.04}>
              <Link
                href="/pricing"
                className={`surface-card group flex flex-col rounded-xl border border-[#deddd5] p-6 transition duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-7 ${
                  index === 0 ? "bg-[#0a0a09] text-white" : "bg-white/70 text-black hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`label-mono ${index === 0 ? "text-[#cfef57]" : "text-black/35"}`}>
                    0{index + 1}
                  </span>
                  <ArrowUpRightIcon
                    className={`button-arrow h-4 w-4 ${index === 0 ? "text-white/60" : "text-black/40"}`}
                  />
                </div>

                <h3 className="mt-6 text-xl font-[550] tracking-[-0.035em]">
                  {item.title[locale]}
                </h3>
                <p className={`mt-2 text-xs leading-[1.6] ${index === 0 ? "text-white/60" : "text-black/55"}`}>
                  {item.desc}
                </p>

                <div className="mt-8 pt-5 border-t border-current/10">
                  <span className={`text-[0.7rem] uppercase tracking-wider ${index === 0 ? "text-white/40" : "text-black/40"}`}>
                    {copy.from[locale]}
                  </span>
                  <p className="mt-1 text-2xl font-[560] tracking-[-0.045em] sm:text-3xl">
                    {item.price}
                  </p>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-black/50 sm:text-sm">{copy.note[locale]}</p>
          <Link
            href="/pricing"
            className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-black"
          >
            {copy.all[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

