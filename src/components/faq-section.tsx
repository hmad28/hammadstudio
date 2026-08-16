"use client";

import { Plus } from "@phosphor-icons/react/Plus";
import { faqItems } from "@/lib/faq-content";
import type { Locale } from "@/lib/types";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

function FAQItem({ index, locale }: { index: number; locale: Locale }) {
  const item = faqItems[index];

  return (
    <MotionReveal delay={(index % 4) * 0.025}>
      <details className="group border-b border-black/14">
        <summary className="flex cursor-pointer list-none items-center gap-4 py-6 marker:hidden sm:py-7 [&::-webkit-details-marker]:hidden">
          <span className="font-mono text-[.68rem] font-semibold text-[#8057ff]">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="flex-1 text-lg font-[550] tracking-[-.03em] sm:text-xl">{item.question[locale]}</h3>
          <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45" weight="bold" />
        </summary>
        <p className="max-w-[650px] pb-7 pl-10 pr-8 text-base leading-7 text-black/58">{item.answer[locale]}</p>
      </details>
    </MotionReveal>
  );
}

export function FAQSection() {
  const { locale } = useLocale();

  return (
    <section id="faq" className="scroll-mt-24 bg-[#f2f0e9] py-20 text-[#17181d] sm:py-28">
      <div className="site-container grid gap-12 lg:grid-cols-12">
        <MotionReveal className="lg:col-span-4">
          <div className="flex items-center gap-3"><span className="label-mono !text-[.78rem] text-[#8057ff]">FAQ</span><span className="h-px w-12 bg-black/20" /><span className="font-mono text-xs text-black/38">24 jawaban</span></div>
          <h2 className="mt-4 text-[clamp(3.4rem,7vw,7rem)] font-[520] leading-[.82] tracking-[-.075em]">
            {locale === "id" ? "Yang sering" : "Frequently"}<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">{locale === "id" ? "ditanyakan." : "asked."}</span>
          </h2>
          <p className="mt-7 max-w-[330px] text-base leading-7 text-black/55">{locale === "id" ? "Harga, domain, proses, legalitas, keamanan transaksi, sampai serah terima aset." : "Pricing, domains, process, legal status, transaction security, and asset handover."}</p>
          <div className="mt-9 hidden h-32 w-32 rotate-12 border-[24px] border-[#d2f34c] lg:block" aria-hidden="true" />
        </MotionReveal>

        <div className="lg:col-span-8">
          <div className="grid border-t border-black/14 lg:grid-cols-2 lg:gap-x-8">
            {faqItems.slice(0, 8).map((item, index) => <FAQItem key={item.question.en} index={index} locale={locale} />)}
          </div>

          <details className="group/more mt-8 border border-black/14 bg-white/45">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 marker:hidden sm:px-6 [&::-webkit-details-marker]:hidden">
              <span className="text-base font-semibold">{locale === "id" ? "Lihat 16 pertanyaan lainnya" : "See 16 more questions"}</span>
              <Plus className="h-5 w-5 transition-transform duration-200 group-open/more:rotate-45" weight="bold" />
            </summary>
            <div className="grid border-t border-black/14 px-5 pb-3 lg:grid-cols-2 lg:gap-x-8">
              {faqItems.slice(8).map((item, offset) => {
                const index = offset + 8;
                return <FAQItem key={item.question.en} index={index} locale={locale} />;
              })}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
