"use client";

import Link from "next/link";
import { getPricingPlanId, pricingPlans } from "@/lib/pricing-catalog";
import { ArrowUpRightIcon } from "./icons";
import { MotionReveal } from "./motion-reveal";
import { PricingIcon } from "./pricing-icon";

const featuredNames = ["Landing Page", "Company Profile", "Tour & Travel", "Product Catalog", "Business System", "Custom Software"];

export function PricingSection() {
  const featuredPlans = featuredNames.map((name) => pricingPlans.find((plan) => plan.name === name)).filter((plan): plan is (typeof pricingPlans)[number] => Boolean(plan));

  return (
    <section id="pricing" className="scroll-mt-20 border-y border-black/10 bg-[#f2f0e9] py-20 text-[#17181d] sm:py-28">
      <div className="site-container">
        <MotionReveal className="flex items-end justify-between gap-6">
          <div><p className="label-mono text-[#8057ff]">PRICE LIST 2026</p><h2 className="mt-4 max-w-[720px] text-[clamp(2.9rem,5.8vw,5.8rem)] font-[520] leading-[.9] tracking-[-.065em]">Mulai dari yang bisnis Anda butuhkan.</h2></div>
          <Link href="/harga-website" className="group hidden items-center gap-2 text-sm font-semibold sm:inline-flex">Semua harga <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
        </MotionReveal>

        <div className="mt-12 grid border-l border-t border-black/14 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlans.map((plan, index) => (
            <MotionReveal key={plan.name} delay={(index % 3) * 0.04}>
              <Link href={`/harga-website#${getPricingPlanId(plan.name)}`} className="group flex min-h-64 flex-col border-b border-r border-black/14 bg-[#f2f0e9] p-6 transition-colors duration-300 hover:bg-[#070a12] hover:text-white sm:p-7">
                <div className="flex items-start justify-between"><PricingIcon name={plan.icon} className="h-8 w-8 text-[#8057ff] transition-colors group-hover:text-[#d2f34c]" /><span className="font-mono text-[.65rem] opacity-35">{String(index + 1).padStart(2, "0")}</span></div>
                <h3 className="mt-9 text-2xl font-[540] tracking-[-.045em]">{plan.name}</h3>
                <p className="mt-2 max-w-[300px] text-sm leading-6 opacity-55">{plan.summary}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-8"><div><span className="block text-[.62rem] uppercase tracking-[.12em] opacity-40">Mulai</span><strong className="mt-1 block text-2xl font-[560] tracking-[-.045em]">{plan.price}</strong></div><ArrowUpRightIcon className="button-arrow h-4 w-4" /></div>
              </Link>
            </MotionReveal>
          ))}
        </div>
        <Link href="/harga-website" className="acid-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold sm:hidden">Lihat semua harga <ArrowUpRightIcon className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
