"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { Browser } from "@phosphor-icons/react/Browser";
import { ShoppingCart } from "@phosphor-icons/react/ShoppingCart";
import { AppWindow } from "@phosphor-icons/react/AppWindow";
import { ChartLineUp } from "@phosphor-icons/react/ChartLineUp";
import { Robot } from "@phosphor-icons/react/Robot";
import { Code } from "@phosphor-icons/react/Code";
import { homeContent } from "@/lib/home-content";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const services = [
  { href: "/jasa-pembuatan-website", icon: Browser, id: "Website", en: "Website", shortId: "Landing page · Company profile · CMS", shortEn: "Landing page · Company profile · CMS" },
  { href: "/services/e-commerce", icon: ShoppingCart, id: "E-Commerce", en: "E-Commerce", shortId: "Katalog · Checkout · Payment", shortEn: "Catalog · Checkout · Payment" },
  { href: "/jasa-web-app", icon: AppWindow, id: "Web Application", en: "Web Application", shortId: "Portal · Booking · Member area", shortEn: "Portal · Booking · Member area" },
  { href: "/services/business-system", icon: ChartLineUp, id: "Business System", en: "Business System", shortId: "CRM · Dashboard · Operasional", shortEn: "CRM · Dashboard · Operations" },
  { href: "/services/automation-ai", icon: Robot, id: "Automation & AI", en: "Automation & AI", shortId: "Workflow · Follow-up · AI tools", shortEn: "Workflow · Follow-up · AI tools" },
  { href: "/website-custom", icon: Code, id: "Custom Software", en: "Custom Software", shortId: "SaaS · Platform · Integrasi", shortEn: "SaaS · Platform · Integrations" },
] as const;

const layout = [
  "lg:col-span-7 lg:row-span-2 lg:min-h-[510px]",
  "lg:col-span-5 lg:min-h-[245px]",
  "lg:col-span-5 lg:min-h-[245px]",
  "lg:col-span-4 lg:min-h-[290px]",
  "lg:col-span-4 lg:min-h-[290px]",
  "lg:col-span-4 lg:min-h-[290px]",
] as const;

export function ServicesSection() {
  const { locale } = useLocale();
  const copy = homeContent.services;

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-[#f2f0e9] py-20 text-[#17181d] sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border-[48px] border-[#8057ff]/[.07]" aria-hidden="true" />
      <div className="site-container relative">
        <MotionReveal className="flex items-end justify-between gap-5 border-b border-black/12 pb-7">
          <div>
            <span className="label-mono text-[#8057ff]">{copy.label[locale]}</span>
            <h2 className="mt-4 max-w-[680px] text-[clamp(3.1rem,6vw,6.2rem)] font-[520] leading-[.86] tracking-[-.068em]">
              {copy.headline[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">{copy.accent[locale]}</span>
            </h2>
          </div>
          <Link href="/harga-website" aria-label={copy.viewAll[locale]} className="group hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#17181d] text-white transition hover:-rotate-6 hover:bg-[#8057ff] sm:flex"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" /></Link>
        </MotionReveal>

        <div className="mt-8 grid gap-3 lg:grid-cols-12 lg:grid-rows-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionReveal key={service.href} className={layout[index]} delay={(index % 3) * 0.04}>
                <Link href={service.href} className="group relative flex h-full min-h-[260px] flex-col overflow-hidden border border-black/10 bg-white/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8057ff]/35 hover:bg-white sm:p-8">
                  <Icon className={`absolute -right-8 -top-8 text-[#8057ff]/[.07] transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${index === 0 ? "h-72 w-72" : "h-44 w-44"}`} weight="duotone" aria-hidden="true" />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-[#8057ff]/20 bg-[#8057ff]/[.07] text-[#8057ff]"><Icon className="h-6 w-6" weight="duotone" /></span>
                    <span className="font-mono text-[.62rem] text-black/30">0{index + 1}</span>
                  </div>
                  <div className="relative mt-auto pt-16">
                    <h3 className={`font-[540] leading-none tracking-[-.055em] ${index === 0 ? "text-4xl sm:text-6xl" : "text-3xl"}`}>{service[locale === "id" ? "id" : "en"]}</h3>
                    <p className="mt-3 text-xs tracking-[.02em] text-black/42">{service[locale === "id" ? "shortId" : "shortEn"]}</p>
                  </div>
                  <ArrowUpRight className="absolute bottom-6 right-6 h-4 w-4 text-black/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#8057ff] sm:bottom-8 sm:right-8" weight="bold" />
                </Link>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
