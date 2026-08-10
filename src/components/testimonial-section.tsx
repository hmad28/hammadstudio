"use client";

import { StarIcon, QuoteIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import { homeContent } from "@/lib/home-content";

export function TestimonialSection() {
  const { locale } = useLocale();
  const copy = homeContent.testimonials;

  return (
    <section className="bg-[#e6e4de] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
          <div>
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="section-heading mt-5">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 lg:ml-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cfef57] text-black shadow-sm">
              <StarIcon className="h-6 w-6 text-black fill-black" />
            </div>
            <div>
              <p className="text-2xl font-[550] tracking-[-0.04em]">{copy.rating}</p>
              <p className="text-xs text-black/52">{copy.ratingText[locale]}</p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.name} delay={index * 0.08} className="surface-card flex flex-col justify-between p-8 sm:p-9 bg-white/60">
              <div>
                <QuoteIcon className="h-7 w-7 text-black/20" />
                <p className="mt-5 text-base sm:text-lg leading-[1.65] font-[450] text-black/80">
                  “{item.quote[locale]}”
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-black/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a09] text-xs font-semibold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-black/90">{item.name}</h3>
                  <p className="text-xs text-black/50">{item.role}</p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
