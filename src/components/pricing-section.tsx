"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Titik awal harga", en: "Starting prices" },
  title: { id: "Mulai sesuai", en: "Start with the" },
  accent: { id: "kebutuhan.", en: "right fit." },
  intro: { id: "Homepage cukup memberi orientasi. Detail scope, paket, dan biaya pihak ketiga dijelaskan transparan di halaman harga.", en: "The homepage provides orientation. Scope, packages, and third-party costs are explained transparently on the pricing page." },
  from: { id: "Mulai", en: "Starting at" },
  view: { id: "Lihat paket", en: "View packages" },
  all: { id: "Lihat semua harga", en: "View all pricing" },
  note: { id: "Web application, automation, dan business system dihitung berdasarkan scope.", en: "Web applications, automation, and business systems are scoped individually." },
  cards: [
    { title: "Website", price: "Rp 2,5 juta", copy: { id: "Landing page, company profile, portfolio, dan corporate website.", en: "Landing pages, company profiles, portfolios, and corporate websites." } },
    { title: "E-Commerce", price: "Rp 5 juta", copy: { id: "Catalog, checkout, payment, dan pengelolaan order.", en: "Catalogues, checkout, payments, and order management." } },
    { title: "Custom Development", price: "Rp 15 juta+", copy: { id: "Aplikasi, sistem, automation, SaaS, dan kebutuhan khusus.", en: "Applications, systems, automation, SaaS, and specialized requirements." } },
  ],
} as const;

export function PricingSection() {
  const { locale } = useLocale();
  return (
    <section id="pricing" className="scroll-mt-20 bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end"><div><span className="label-mono text-black/45">{content.label[locale]}</span><h2 className="section-heading mt-5">{content.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.accent[locale]}</span></h2></div><p className="body-copy max-w-[590px] text-black/55 lg:ml-auto">{content.intro[locale]}</p></MotionReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">{content.cards.map((card, index) => <MotionReveal key={card.title} delay={index * 0.05}><Link href="/pricing" className={`surface-card group flex min-h-[330px] flex-col p-7 transition duration-500 hover:-translate-y-1 sm:p-8 ${index === 1 ? "bg-[#0a0a09] text-white" : "hover:bg-white/70"}`}><div className="flex items-start justify-between"><span className={`label-mono ${index === 1 ? "text-[#cfef57]" : "text-black/35"}`}>0{index + 1}</span><ArrowUpRightIcon className="button-arrow h-4 w-4 opacity-45" /></div><h3 className="mt-10 text-2xl font-[550] tracking-[-0.04em]">{card.title}</h3><p className={`mt-4 text-sm leading-[1.65] ${index === 1 ? "text-white/52" : "text-black/52"}`}>{card.copy[locale]}</p><div className="mt-auto pt-8"><span className="text-xs opacity-45">{content.from[locale]}</span><p className="mt-1 text-[clamp(2.1rem,4vw,3.3rem)] font-[540] leading-none tracking-[-0.06em]">{card.price}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">{content.view[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></span></div></Link></MotionReveal>)}</div>
        <div className="mt-8 flex flex-col gap-4 border-t border-black/12 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-black/48">{content.note[locale]}</p><Link href="/pricing" className="group inline-flex items-center gap-2 text-sm font-semibold">{content.all[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}
