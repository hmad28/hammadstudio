"use client";

import Link from "next/link";
import { pricingGroups, pricingPlans } from "@/lib/pricing-catalog";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const ui = {
  label: { id: "Price list 2026", en: "2026 price list" },
  title: { id: "Harga jelas. Scope tetap fleksibel.", en: "Clear pricing. Flexible scope." },
  intro: {
    id: "Pilih titik awal berdasarkan kebutuhan Anda—mulai dari website personal dan UMKM hingga commerce, sistem bisnis, dan software custom.",
    en: "Choose a starting point based on your needs—from personal and small-business websites to commerce, business systems, and custom software.",
  },
  starting: { id: "Mulai Rp199 ribu", en: "Starting at Rp199K" },
  packages: { id: "21 pilihan layanan", en: "21 service options" },
  quickList: { id: "Ringkasan harga", en: "Price summary" },
  quickIntro: { id: "Bandingkan titik awal setiap layanan sebelum membaca scope lengkapnya.", en: "Compare each starting point before reviewing the full scope." },
  suitable: { id: "Cocok untuk", en: "Best for" },
  included: { id: "Yang termasuk", en: "What's included" },
  examples: { id: "Contoh penerapan", en: "Example use cases" },
  addons: { id: "Add-on", en: "Add-ons" },
  details: { id: "Lihat scope", en: "View scope" },
  discuss: { id: "Diskusikan paket", en: "Discuss this package" },
  customTitle: { id: "Belum yakin masuk paket yang mana?", en: "Not sure which package fits?" },
  customBody: {
    id: "Ceritakan kebutuhan, workflow, target launch, dan budget Anda. Kami bantu memisahkan fitur wajib dari fitur yang bisa dikembangkan bertahap.",
    en: "Share your requirements, workflow, launch target, and budget. We will separate essential features from those that can be developed in stages.",
  },
  request: { id: "Minta estimasi project", en: "Request an estimate" },
  notice: {
    id: "Harga adalah titik awal. Domain, layanan pihak ketiga, payment gateway, WhatsApp API, email provider, AI usage, infrastructure khusus, dan perubahan scope dihitung terpisah bila diperlukan.",
    en: "Prices are starting points. Domains, third-party services, payment gateways, WhatsApp APIs, email providers, AI usage, dedicated infrastructure, and scope changes are quoted separately when required.",
  },
} as const;

export function PricingPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#f7f5ef] text-[#17181d]">
      <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(91,55,213,0.45)_0%,rgba(40,100,255,0.25)_50%,transparent_70%)] blur-3xl" aria-hidden="true" />
        <div className="site-container relative z-10">
          <MotionReveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="label-mono acid-glow-badge inline-block rounded-full px-3.5 py-1 text-[0.68rem]">{ui.label[locale]}</span>
              <h1 className="mt-6 max-w-[900px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.87] tracking-[-0.068em] text-white">
                {ui.title[locale]}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="max-w-[560px] text-base leading-7 text-white/65">{ui.intro[locale]}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/80">{ui.starting[locale]}</span>
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/80">{ui.packages[locale]}</span>
              </div>
            </div>
          </MotionReveal>

          <nav className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/55" aria-label="Kategori harga">
            {pricingGroups.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="transition hover:text-[#d2f34c]">
                <span className="mr-2 font-[family-name:var(--font-geist-mono)] text-[0.65rem] text-[#d2f34c]">{group.number}</span>
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="site-container py-16 sm:py-24" aria-labelledby="price-summary-title">
        <MotionReveal className="grid gap-6 border-b border-black/12 pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mono text-[#8057ff]">OVERVIEW</p>
            <h2 id="price-summary-title" className="mt-4 text-[clamp(2.7rem,5vw,5rem)] font-[520] leading-[0.92] tracking-[-0.058em]">{ui.quickList[locale]}</h2>
          </div>
          <p className="max-w-[520px] text-sm leading-7 text-black/55 lg:col-span-5 lg:ml-auto">{ui.quickIntro[locale]}</p>
        </MotionReveal>

        <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
          {pricingPlans.map((plan, index) => (
            <a key={plan.name} href={`#plan-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="group grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3 py-4 transition hover:bg-white/55 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:px-3">
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] text-black/30">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium tracking-[-0.015em] sm:text-base">{plan.name}</span>
              <span className="col-start-2 font-[family-name:var(--font-geist-mono)] text-xs font-semibold text-[#8057ff] sm:col-start-auto sm:text-sm">{plan.price}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="site-container pb-24 sm:pb-32">
        {pricingGroups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24 border-t border-black/12 py-16 sm:py-20">
            <MotionReveal className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="label-mono text-[#8057ff]">{group.number} / PRICE CATEGORY</span>
                <h2 className="mt-5 max-w-[570px] text-[clamp(2.8rem,5vw,5.4rem)] font-[520] leading-[0.9] tracking-[-0.06em]">{group.title}</h2>
              </div>
              <p className="max-w-[620px] text-base leading-7 text-black/55 lg:col-span-7 lg:pt-9">{group.description}</p>
            </MotionReveal>

            <div className={`mt-12 grid items-start gap-4 ${group.plans.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
              {group.plans.map((plan, index) => {
                const planId = `plan-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <MotionReveal key={plan.name} delay={(index % 2) * 0.04}>
                    <details id={planId} open={plan.featured} className={`group scroll-mt-24 overflow-hidden rounded-2xl border transition duration-300 open:shadow-[0_24px_70px_rgba(36,25,74,0.12)] ${plan.featured ? "border-[#8057ff]/30 bg-[#efeafd]" : "border-black/12 bg-white"}`}>
                      <summary className="cursor-pointer list-none p-6 marker:hidden sm:p-8 [&::-webkit-details-marker]:hidden">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="label-mono text-[#8057ff]">{plan.featured ? "RECOMMENDED START" : `PACKAGE ${String(index + 1).padStart(2, "0")}`}</p>
                            <h3 className="mt-4 text-2xl font-[540] tracking-[-0.04em] sm:text-3xl">{plan.name}</h3>
                          </div>
                          <span className="shrink-0 rounded-full border border-black/12 px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[0.65rem] text-black/45 transition group-open:rotate-45">+</span>
                        </div>
                        <p className="mt-8 font-[family-name:var(--font-geist-mono)] text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-none tracking-[-0.055em] text-[#17181d]">{plan.price}</p>
                        <p className="mt-4 max-w-[600px] text-sm leading-6 text-black/55">{plan.summary}</p>
                        <span className="mt-6 inline-block text-xs font-semibold text-[#8057ff]">{ui.details[locale]}</span>
                      </summary>

                      <div className="border-t border-black/10 px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
                        {plan.audience ? (
                          <div>
                            <p className="label-mono text-black/38">{ui.suitable[locale]}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {plan.audience.map((item) => <span key={item} className="rounded-full border border-black/12 bg-white/55 px-3 py-1.5 text-xs text-black/60">{item}</span>)}
                            </div>
                          </div>
                        ) : null}

                        <div className={plan.audience ? "mt-7" : ""}>
                          <p className="label-mono text-black/38">{ui.included[locale]}</p>
                          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                            {plan.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-black/65">
                                <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[#8057ff]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {plan.examples ? <div className="mt-7"><p className="label-mono text-black/38">{ui.examples[locale]}</p><p className="mt-3 text-sm leading-6 text-black/60">{plan.examples.join(" · ")}</p></div> : null}
                        {plan.addons ? <div className="mt-7 border-l-2 border-[#8057ff] pl-4"><p className="label-mono text-[#8057ff]">{ui.addons[locale]}</p><p className="mt-2 text-sm leading-6 text-black/60">{plan.addons}</p></div> : null}
                        {plan.note ? <p className="mt-7 rounded-xl bg-[#070a12] px-4 py-3 text-xs leading-6 text-white/70">{plan.note}</p> : null}

                        <Link href={`/contact?package=${encodeURIComponent(plan.name)}`} className="acid-button group/link mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold">
                          {ui.discuss[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                        </Link>
                      </div>
                    </details>
                  </MotionReveal>
                );
              })}
            </div>
          </section>
        ))}

        <MotionReveal className="mt-4 grid gap-10 rounded-2xl border border-white/12 bg-[#070a12] p-8 text-white shadow-2xl sm:p-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-mono text-[#d2f34c]">CUSTOM SCOPE</p>
            <h2 className="mt-5 max-w-[760px] text-[clamp(2.6rem,5vw,5.2rem)] font-[520] leading-[0.92] tracking-[-0.058em]">{ui.customTitle[locale]}</h2>
            <p className="mt-6 max-w-[700px] text-sm leading-7 text-white/60 sm:text-base">{ui.customBody[locale]}</p>
            <p className="mt-5 max-w-[760px] text-xs leading-6 text-white/38">{ui.notice[locale]}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/contact" className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              {ui.request[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
