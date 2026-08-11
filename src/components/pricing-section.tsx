"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const pricingCardStyles = [
  "border border-[#dde0e7] bg-white text-[#17181d] shadow-sm", // Website: White
  "border border-[#8057ff]/20 bg-[#f1edff] text-[#17181d] shadow-sm", // Commerce: Lavender tint
  "border border-[#dde0e7] bg-white text-[#17181d] shadow-sm", // Web App: White
  "border border-[#2864ff]/20 bg-[#edf5ff] text-[#17181d] shadow-sm", // Automation: Ice tint
  "border border-[#dde0e7] bg-white text-[#17181d] shadow-sm", // Business System: White
  "luxury-dark-card text-white shadow-[0_25px_60px_rgba(7,10,18,0.5)]", // Custom: Dark Premium
];

export function PricingSection() {
  const { locale } = useLocale();
  const copy = homeContent.pricing;

  return (
    <section id="pricing" className="pricing-surface-v2 scroll-mt-20 py-20 text-[#17181d] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="flex flex-col items-start justify-between gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
              {copy.label[locale]}
            </span>
            <h2 className="section-heading mt-4 max-w-[650px]">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <p className="max-w-[460px] text-sm leading-[1.65] text-[#6d7180] sm:text-base">
            {copy.description[locale]}
          </p>
        </MotionReveal>

        {/* 6 Price Buckets Grid with Chromatic Visual Rhythm */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const isDarkCustom = index === 5;
            const cardStyle = pricingCardStyles[index % pricingCardStyles.length];

            return (
              <MotionReveal key={item.title[locale]} delay={index * 0.04}>
                <Link
                  href="/harga-website"
                  className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 transition duration-300 hover:-translate-y-1 ${cardStyle}`}
                >
                  {isDarkCustom && (
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(210,243,76,0.25)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />
                  )}

                  <div className="flex items-center justify-between">
                    <span className={`label-mono ${isDarkCustom ? "acid-glow-badge rounded-full px-2.5 py-0.5 text-[0.65rem]" : "text-black/40"}`}>
                      0{index + 1}
                    </span>
                    <ArrowUpRightIcon
                      className={`button-arrow h-4 w-4 ${isDarkCustom ? "text-[#d2f34c]" : "text-black/40"}`}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-[550] tracking-[-0.035em]">
                    {item.title[locale]}
                  </h3>
                  <p className={`mt-2 text-xs leading-[1.65] ${isDarkCustom ? "text-white/70" : "text-[#6d7180]"}`}>
                    {item.desc}
                  </p>

                  <div className="mt-8 pt-5 border-t border-current/10">
                    <span className={`text-[0.7rem] uppercase tracking-wider font-mono ${isDarkCustom ? "text-[#d2f34c]" : "text-black/40"}`}>
                      {copy.from[locale]}
                    </span>
                    <p className="mt-1 text-2xl font-[560] tracking-[-0.045em] sm:text-3xl">
                      {item.price}
                    </p>
                  </div>
                </Link>
              </MotionReveal>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-black/60 sm:text-sm">{copy.note[locale]}</p>
          <Link
            href="/harga-website"
            className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-black"
          >
            {copy.all[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

