"use client";

import Link from "next/link";
import { pricingGroups } from "@/lib/pricing-catalog";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { MotionReveal } from "./motion-reveal";
import { PricingIcon } from "./pricing-icon";

const planId = (name: string) => `plan-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export function PricingPageContent() {
  return (
    <main className="bg-[#f2f0e9] text-[#17181d]">
      <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <div className="pointer-events-none absolute right-[-12rem] top-[-14rem] h-[42rem] w-[42rem] rounded-full border border-[#d2f34c]/20 bg-[#8057ff]/20 blur-3xl" aria-hidden="true" />
        <div className="site-container relative">
          <p className="label-mono text-[#d2f34c]">PRICE LIST 2026</p>
          <h1 className="mt-6 max-w-[1050px] text-[clamp(3.5rem,8vw,8.2rem)] font-[520] leading-[.84] tracking-[-.074em]">Pilih kebutuhan.<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-white/55">Bukan jargon agency.</span></h1>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6">
            {pricingGroups.map((group) => <a key={group.id} href={`#${group.id}`} className="text-sm text-white/55 transition hover:text-[#d2f34c]"><span className="mr-2 font-mono text-[.65rem] text-[#d2f34c]">{group.number}</span>{group.title}</a>)}
          </div>
        </div>
      </section>

      <div className="site-container py-20 sm:py-28">
        {pricingGroups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24 border-t border-black/14 py-14 first:border-t-0 first:pt-0 sm:py-20">
            <MotionReveal className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="label-mono text-[#8057ff]">{group.number}</p><h2 className="mt-3 text-[clamp(2.6rem,5vw,5rem)] font-[520] tracking-[-.06em]">{group.title}</h2></div><p className="max-w-[420px] text-sm leading-6 text-black/50">{group.description}</p></MotionReveal>
            <div className="mt-9 grid items-start border-l border-t border-black/14 sm:grid-cols-2 lg:grid-cols-3">
              {group.plans.map((plan, index) => (
                <MotionReveal key={plan.name} delay={(index % 3) * 0.035}>
                  <details id={planId(plan.name)} className="group scroll-mt-24 border-b border-r border-black/14 bg-[#f2f0e9] transition-colors open:bg-white">
                    <summary className="flex min-h-72 cursor-pointer list-none flex-col p-6 marker:hidden sm:p-7 [&::-webkit-details-marker]:hidden">
                      <div className="flex items-start justify-between"><PricingIcon name={plan.icon} className="h-8 w-8 text-[#8057ff]" /><span className="flex h-7 w-7 items-center justify-center border border-black/15 font-mono text-xs transition group-open:rotate-45 group-open:bg-[#17181d] group-open:text-white">+</span></div>
                      <h3 className="mt-10 text-2xl font-[540] tracking-[-.045em]">{plan.name}</h3>
                      <p className="mt-3 max-w-[310px] text-sm leading-6 text-black/50">{plan.summary}</p>
                      <div className="mt-auto pt-8"><span className="block text-[.62rem] uppercase tracking-[.12em] text-black/35">Mulai</span><strong className="mt-1 block text-3xl font-[560] tracking-[-.055em]">{plan.price}</strong></div>
                    </summary>
                    <div className="border-t border-black/10 px-6 pb-7 pt-6 sm:px-7">
                      {plan.audience ? <div className="flex flex-wrap gap-1.5">{plan.audience.map((item) => <span key={item} className="border border-black/10 bg-[#f2f0e9] px-2.5 py-1 text-[.68rem] text-black/55">{item}</span>)}</div> : null}
                      <ul className="mt-5 space-y-2.5">{plan.includes.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-5 text-black/60"><CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8057ff]" />{item}</li>)}</ul>
                      {plan.examples ? <p className="mt-5 border-l-2 border-[#8057ff] pl-3 text-xs leading-5 text-black/50">{plan.examples.join(" · ")}</p> : null}
                      {plan.addons ? <p className="mt-5 text-xs leading-5 text-black/50"><strong className="text-black/70">Upgrade:</strong> {plan.addons}</p> : null}
                      {plan.note ? <p className="mt-5 bg-[#070a12] p-3 text-xs leading-5 text-white/65">{plan.note}</p> : null}
                      <Link href={`/contact?package=${encodeURIComponent(plan.name)}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8057ff]">Diskusikan <ArrowUpRightIcon className="h-4 w-4" /></Link>
                    </div>
                  </details>
                </MotionReveal>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-2 grid gap-8 bg-[#070a12] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="label-mono text-[#d2f34c]">CUSTOM SCOPE</p><h2 className="mt-4 max-w-[750px] text-[clamp(2.6rem,5vw,5rem)] font-[520] leading-[.92] tracking-[-.06em]">Kebutuhan Anda tidak masuk paket?</h2><p className="mt-5 max-w-[620px] text-sm leading-6 text-white/50">Kirim workflow dan targetnya. Kami pecah menjadi scope, fase, timeline, dan quotation.</p></div><Link href="/contact" className="acid-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">Minta estimasi <ArrowUpRightIcon className="h-4 w-4" /></Link></section>
      </div>
    </main>
  );
}
