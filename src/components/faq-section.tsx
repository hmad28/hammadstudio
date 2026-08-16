"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { Plus } from "@phosphor-icons/react/Plus";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import { faqItems } from "@/lib/faq-content";
import type { Locale } from "@/lib/types";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const groups = [
  { number: "01", title: { id: "Biaya & paket", en: "Pricing & packages" }, range: [0, 5] },
  { number: "02", title: { id: "Proses & desain", en: "Process & design" }, range: [5, 9] },
  { number: "03", title: { id: "Domain & SEO", en: "Domains & SEO" }, range: [9, 15] },
  { number: "04", title: { id: "Keamanan & kepemilikan", en: "Security & ownership" }, range: [15, 21] },
  { number: "05", title: { id: "Konsultasi", en: "Consultation" }, range: [21, 24] },
] as const;

function FAQItem({ index, locale }: { index: number; locale: Locale }) {
  const item = faqItems[index];

  return (
    <MotionReveal delay={(index % 3) * 0.025}>
      <details className="group border-b border-black/14">
        <summary className="flex cursor-pointer list-none items-center gap-4 py-6 marker:hidden sm:py-7 [&::-webkit-details-marker]:hidden">
          <span className="font-mono text-[.68rem] font-semibold text-[#8057ff]">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="flex-1 text-lg font-[550] tracking-[-.03em] sm:text-xl">{item.question[locale]}</h3>
          <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45" weight="bold" />
        </summary>
        <p className="max-w-[680px] pb-7 pl-10 pr-8 text-base leading-7 text-black/58">{item.answer[locale]}</p>
      </details>
    </MotionReveal>
  );
}

export function FAQSection() {
  const { locale } = useLocale();

  return (
    <main className="bg-[#f2f0e9] text-[#17181d]">
      <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-36 top-8 h-[34rem] w-[34rem] rounded-full border-[76px] border-[#8057ff]/25" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-10rem] right-[12vw] font-[family-name:var(--font-instrument-serif)] text-[28rem] italic leading-none text-white/[.025]" aria-hidden="true">?</div>

        <div className="site-container relative">
          <MotionReveal>
            <div className="flex items-center justify-between border-b border-white/14 pb-5">
              <span className="label-mono !text-[.78rem] text-[#d2f34c]">FAQ · 24 ANSWERS</span>
              <span className="hidden text-sm text-white/48 sm:block">Hammad Studio · Jakarta</span>
            </div>
            <div className="grid gap-10 pt-11 lg:grid-cols-12 lg:items-end">
              <h1 className="text-[clamp(4.8rem,10vw,10rem)] font-[530] leading-[.78] tracking-[-.08em] lg:col-span-9">
                {locale === "id" ? "Tanya dulu." : "Ask first."}
                <br />
                <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#d2f34c]">{locale === "id" ? "Biar jelas." : "Make it clear."}</span>
              </h1>
              <div className="lg:col-span-3">
                <p className="max-w-[360px] text-lg leading-8 text-white/60">{locale === "id" ? "Jawaban terbuka soal harga, proses, domain, legalitas, dan kepemilikan website." : "Clear answers about pricing, process, domains, legal status, and website ownership."}</p>
                <a href="https://wa.me/6285199391215" target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#d2f34c]">
                  <WhatsappLogo size={20} weight="fill" /> {locale === "id" ? "Tanya via WhatsApp" : "Ask on WhatsApp"} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-20 top-44 h-56 w-56 rotate-12 border-[38px] border-[#d2f34c]/65" aria-hidden="true" />
        <div className="site-container relative">
          {groups.map((group) => {
            const [start, end] = group.range;
            return (
              <section key={group.number} className="grid border-t border-black/16 py-12 first:pt-0 lg:grid-cols-12 lg:gap-10 sm:py-16">
                <MotionReveal className="lg:col-span-3">
                  <span className="font-mono text-xs font-semibold text-[#8057ff]">{group.number}</span>
                  <h2 className="mt-3 text-3xl font-[550] tracking-[-.05em] sm:text-4xl">{group.title[locale]}</h2>
                  <p className="mt-3 font-mono text-xs text-black/38">{end - start} {locale === "id" ? "pertanyaan" : "questions"}</p>
                </MotionReveal>
                <div className="mt-7 grid border-t border-black/14 lg:col-span-9 lg:mt-0 lg:grid-cols-2 lg:gap-x-9">
                  {faqItems.slice(start, end).map((item, offset) => {
                    const index = start + offset;
                    return <FAQItem key={item.question.en} index={index} locale={locale} />;
                  })}
                </div>
              </section>
            );
          })}

          <MotionReveal className="mt-2 grid gap-7 bg-[#d2f34c] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="font-mono text-xs font-semibold tracking-[.1em]">MASIH ADA PERTANYAAN?</p><h2 className="mt-4 max-w-[760px] text-[clamp(3rem,6vw,6.5rem)] font-[540] leading-[.85] tracking-[-.07em]">{locale === "id" ? "Ceritakan kebutuhan Anda." : "Tell us what you need."}</h2></div>
            <Link href="/contact" className="group inline-flex items-center gap-2 text-base font-semibold">{locale === "id" ? "Mulai konsultasi" : "Start a consultation"}<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
