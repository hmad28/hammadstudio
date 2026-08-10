"use client";

import { StarIcon, QuoteIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import { homeContent } from "@/lib/home-content";

export function TestimonialSection() {
  const { locale } = useLocale();
  const copy = homeContent.testimonials;

  return (
    <section className="testimonial-surface-v2 py-20 text-[#17181d] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
          <div>
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
              {copy.label[locale]}
            </span>
            <h2 className="section-heading mt-5">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 lg:ml-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#070a12] text-[#d2f34c] shadow-md ring-4 ring-[#ff7262]/20">
              <StarIcon className="h-6 w-6 text-[#d2f34c] fill-[#d2f34c]" />
            </div>
            <div>
              <p className="text-2xl font-[550] tracking-[-0.04em] text-[#17181d]">{copy.rating}</p>
              <p className="text-xs text-[#6d7180]">{copy.ratingText[locale]}</p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.name} delay={index * 0.08} className="surface-card flex flex-col justify-between p-8 sm:p-9 bg-white/90 border border-[#dde0e7]">
              <div>
                <QuoteIcon className="h-7 w-7 text-[#8057ff]/30" />
                <p className="mt-5 text-base sm:text-lg leading-[1.65] font-[450] text-[#17181d]">
                  “{item.quote[locale]}”
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-black/8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#070a12] text-xs font-semibold text-[#d2f34c] ring-2 ring-[#ff7262]/35">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#17181d]">{item.name}</h3>
                  <p className="text-xs text-[#6d7180]">{item.role}</p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
