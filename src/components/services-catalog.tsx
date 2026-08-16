"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { getPricingPlanId, pricingGroups } from "@/lib/pricing-catalog";
import { MotionReveal } from "./motion-reveal";
import { PricingIcon } from "./pricing-icon";
import { useLocale } from "./locale-provider";

export function ServicesCatalog() {
  const { locale } = useLocale();

  return (
    <section className="bg-[#f2f0e9] py-16 text-[#17181d] sm:py-24">
      <div className="site-container">
        {pricingGroups.map((group) => (
          <section key={group.id} className="border-t border-black/14 py-14 first:border-t-0 first:pt-0 sm:py-20">
            <MotionReveal className="grid gap-4 sm:grid-cols-12 sm:items-end">
              <div className="sm:col-span-8">
                <p className="font-mono text-[.62rem] font-semibold tracking-[.14em] text-[#8057ff]">{group.number}</p>
                <h2 className="mt-3 text-[clamp(3.2rem,6vw,6.4rem)] font-[520] leading-[.84] tracking-[-.075em]">{group.title}</h2>
              </div>
              <p className="max-w-[390px] text-sm leading-6 text-black/45 sm:col-span-4 sm:ml-auto">{group.description}</p>
            </MotionReveal>

            <div className="mt-9 grid border-l border-t border-black/14 sm:grid-cols-2 lg:grid-cols-3">
              {group.plans.map((plan, index) => (
                <MotionReveal key={plan.name} delay={(index % 3) * 0.035}>
                  <Link href={`/harga-website#${getPricingPlanId(plan.name)}`} className="group relative flex min-h-64 flex-col overflow-hidden border-b border-r border-black/14 bg-[#f2f0e9] p-6 transition duration-300 hover:z-10 hover:-translate-y-1 hover:bg-[#0b0d16] hover:text-white hover:shadow-[0_24px_65px_rgba(13,12,24,.18)] sm:p-7">
                    <PricingIcon name={plan.icon} className="absolute -right-7 -top-7 h-36 w-36 text-[#8057ff]/[.07] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-[#d2f34c]/10" />
                    <div className="relative flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center border border-[#8057ff]/20 bg-[#8057ff]/[.06] text-[#8057ff] transition group-hover:border-[#d2f34c]/25 group-hover:text-[#d2f34c]"><PricingIcon name={plan.icon} className="h-5 w-5" /></span>
                      <span className="font-mono text-[.58rem] text-black/25 transition group-hover:text-white/25">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="relative mt-auto pt-12">
                      <h3 className="text-2xl font-[540] leading-none tracking-[-.045em]">{plan.name}</h3>
                      <p className="mt-3 max-w-[310px] text-xs leading-5 text-black/45 transition group-hover:text-white/48">{plan.summary}</p>
                      <div className="mt-6 flex items-end justify-between border-t border-black/10 pt-4 transition group-hover:border-white/10">
                        <div><span className="block text-[.55rem] uppercase tracking-[.12em] text-black/30 transition group-hover:text-white/30">{locale === "id" ? "Mulai" : "From"}</span><strong className="mt-1 block text-xl font-[560] tracking-[-.04em]">{plan.price}</strong></div>
                        <ArrowUpRight className="h-4 w-4 text-black/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d2f34c]" weight="bold" />
                      </div>
                    </div>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
