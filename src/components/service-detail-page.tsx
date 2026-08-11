"use client";

import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import type { ServiceDetailSlug } from "@/lib/service-detail-content";
import { serviceDetails } from "@/lib/service-detail-content";
import { StickyWhatsAppCTA } from "./sticky-whatsapp-cta";

const categoryHeroGlows: Record<ServiceDetailSlug, string> = {
  website: "bg-[radial-gradient(circle_at_75%_35%,rgba(40,100,255,0.45)_0%,rgba(128,87,255,0.35)_45%,transparent_75%)]",
  "e-commerce": "bg-[radial-gradient(circle_at_75%_35%,rgba(128,87,255,0.45)_0%,rgba(228,75,255,0.35)_45%,transparent_75%)]",
  "web-application": "bg-[radial-gradient(circle_at_75%_35%,rgba(40,100,255,0.45)_0%,rgba(53,201,255,0.35)_45%,transparent_75%)]",
  "business-system": "bg-[radial-gradient(circle_at_75%_35%,rgba(37,78,219,0.45)_0%,rgba(84,185,139,0.35)_45%,transparent_75%)]",
  "automation-ai": "bg-[radial-gradient(circle_at_75%_35%,rgba(128,87,255,0.45)_0%,rgba(255,150,84,0.35)_45%,transparent_75%)]",
  "custom-development": "bg-[radial-gradient(circle_at_75%_35%,rgba(84,40,184,0.45)_0%,rgba(40,100,255,0.35)_35%,rgba(228,75,255,0.3)_60%,transparent_75%)]",
};

export function ServiceDetailPage({ slug }: { slug: ServiceDetailSlug }) {
  const { locale } = useLocale();
  const service = serviceDetails[slug];
  const heroGlow = categoryHeroGlows[slug] || categoryHeroGlows.website;

  return (
    <div className="bg-[#f7f5ef] text-[#17181d]">
      <section className="relative overflow-hidden bg-[#070a12] pb-24 pt-36 text-white sm:pb-32 sm:pt-44">
        {/* Category Colored Illumination Ambient Glow */}
        <div className={`pointer-events-none absolute right-0 top-0 h-[600px] w-[800px] rounded-full blur-3xl opacity-80 ${heroGlow}`} aria-hidden="true" />
        
        <div className="site-container relative z-10">
          <span className="label-mono inline-block rounded-full bg-white/10 px-3.5 py-1 text-[0.68rem] text-[#d2f34c]">{service.number} / {service.title[locale]}</span>
          <h1 className="mt-8 max-w-[1100px] whitespace-pre-line text-[clamp(3.8rem,8vw,8.4rem)] font-[520] leading-[0.84] tracking-[-0.07em]">{service.hero[locale]}</h1>
          <div className="mt-10 grid gap-7 border-t border-white/12 pt-7 lg:grid-cols-12 lg:gap-6"><p className="max-w-[680px] text-base leading-[1.7] text-white/70 sm:text-lg lg:col-span-8">{service.intro[locale]}</p><div className="lg:col-span-4 lg:text-right"><Link href="/contact" className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">{service.cta[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div></div>
        </div>
      </section>

      {service.highlights ? <section className="py-24 sm:py-32"><div className="site-container"><div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">{service.highlights.map((item, index) => <MotionReveal key={item.title} delay={(index % 3) * 0.04} className="min-h-[220px] border-b border-r border-black/15 p-6"><span className="label-mono text-black/30">0{index + 1}</span><h2 className="mt-10 text-2xl font-[520] tracking-[-0.04em]">{item.title}</h2><p className="mt-3 text-sm leading-[1.65] text-black/52">{item.description[locale]}</p></MotionReveal>)}</div></div></section> : null}

      <section className="border-t border-black/15 py-24 sm:py-32"><div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-6"><MotionReveal className="lg:col-span-5"><span className="label-mono text-black/38">{service.usesLabel[locale]}</span><h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-[510] leading-[0.92] tracking-[-0.055em]">{service.title[locale]}</h2></MotionReveal><MotionReveal className="lg:col-span-7" delay={0.06}><div className="flex flex-wrap gap-2">{service.uses.map((item) => <span key={item} className="rounded-full border border-black/15 px-4 py-2.5 text-sm text-black/58">{item}</span>)}</div><span className="label-mono mt-12 block text-black/38">{service.capabilitiesLabel[locale]}</span><ul className="mt-5 grid gap-3 sm:grid-cols-2">{service.capabilities.map((item) => <li key={item} className="flex items-center gap-2.5 border-b border-black/12 pb-3 text-sm text-black/62"><CheckIcon className="h-4 w-4 text-black" />{item}</li>)}</ul></MotionReveal></div></section>

      {service.flow ? <section className="bg-[#e8e5dc] py-20 sm:py-24"><div className="site-container"><span className="label-mono text-black/38">Flow</span><div className="mt-8 flex flex-col border-l border-t border-black/15 sm:flex-row">{service.flow.map((step, index) => <div key={step} className="flex min-h-28 flex-1 items-center justify-between border-b border-r border-black/15 p-5"><span className="text-sm font-[520]">{step}</span>{index < service.flow!.length - 1 ? <span className="text-black/25">→</span> : null}</div>)}</div></div></section> : null}

      {service.packages ? <section className="py-24 sm:py-32"><div className="site-container"><div className="flex items-end justify-between gap-6"><div><span className="label-mono text-black/38">Packages</span><h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-[510] tracking-[-0.055em]">{locale === "id" ? "Titik awal harga" : "Pricing starting points"}</h2></div><Link href="/harga-website" className="group hidden items-center gap-2 text-sm font-semibold sm:inline-flex">{locale === "id" ? "Lihat detail paket" : "View package details"} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div><div className="mt-10 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">{service.packages.map((item) => <Link href="/harga-website" key={item.name} className="group min-h-48 border-b border-r border-black/15 p-6 transition-colors hover:bg-[#0a0a09] hover:text-white"><span className="label-mono opacity-40">{item.name}</span><p className="mt-16 text-2xl font-[520] tracking-[-0.05em]">{item.price}</p></Link>)}</div></div></section> : null}

      <section className="bg-[#0a0a09] py-20 text-white"><div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-6"><div className="lg:col-span-8"><p className="max-w-[760px] text-xl leading-[1.55] text-white/70 sm:text-2xl">{service.note?.[locale] ?? service.pricing[locale]}</p>{service.note ? <p className="mt-5 max-w-[700px] text-sm leading-[1.65] text-white/38">{service.pricing[locale]}</p> : null}</div><div className="lg:col-span-4 lg:text-right"><Link href="/contact" className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">{service.cta[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div></div></section>
      <StickyWhatsAppCTA />
    </div>
  );
}
