"use client";

import { Plus } from "@phosphor-icons/react/Plus";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const items = [
  {
    q: { id: "Berapa lama prosesnya?", en: "How long does it take?" },
    a: { id: "Website sederhana umumnya selesai dalam 2–3 minggu. Sistem custom mengikuti scope dan kesiapan konten.", en: "A standard website usually takes 2–3 weeks. Custom systems follow the agreed scope and content readiness." },
  },
  {
    q: { id: "Domain dan hosting termasuk?", en: "Are domain and hosting included?" },
    a: { id: "Ya, sesuai paket. Setup deployment dan SSL juga kami kerjakan.", en: "Yes, depending on the package. Deployment and SSL setup are also handled." },
  },
  {
    q: { id: "Ada revisi dan garansi?", en: "Are revisions and warranty included?" },
    a: { id: "Ada milestone revisi dan dukungan bug fixing setelah website diluncurkan.", en: "Revision milestones and post-launch bug-fixing support are included." },
  },
  {
    q: { id: "Source code jadi milik siapa?", en: "Who owns the source code?" },
    a: { id: "Setelah pelunasan, source code dan akses project diserahkan kepada Anda.", en: "After final payment, the source code and project access are handed over to you." },
  },
] as const;

export function FAQSection() {
  const { locale } = useLocale();

  return (
    <section id="faq" className="scroll-mt-24 bg-[#f2f0e9] py-20 text-[#17181d] sm:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-12">
        <MotionReveal className="lg:col-span-5">
          <span className="label-mono text-[#8057ff]">FAQ</span>
          <h2 className="mt-4 text-[clamp(3.4rem,7vw,7rem)] font-[520] leading-[.82] tracking-[-.075em]">
            {locale === "id" ? "Yang sering" : "Frequently"}<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">{locale === "id" ? "ditanyakan." : "asked."}</span>
          </h2>
          <div className="mt-9 hidden h-32 w-32 rotate-12 border-[24px] border-[#d2f34c] lg:block" aria-hidden="true" />
        </MotionReveal>

        <div className="border-t border-black/14 lg:col-span-7">
          {items.map((item, index) => (
            <MotionReveal key={item.q.en} delay={index * 0.035}>
              <details className="group border-b border-black/14">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-6 marker:hidden sm:py-7 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-[.62rem] text-[#8057ff]">0{index + 1}</span>
                  <h3 className="flex-1 text-lg font-[540] tracking-[-.03em] sm:text-xl">{item.q[locale]}</h3>
                  <Plus className="h-5 w-5 transition-transform duration-200 group-open:rotate-45" weight="bold" />
                </summary>
                <p className="max-w-[600px] pb-7 pl-9 pr-8 text-sm leading-6 text-black/52">{item.a[locale]}</p>
              </details>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
