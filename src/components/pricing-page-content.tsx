"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Paket & harga", en: "Packages & pricing" },
  title: { id: "Scope jelas sebelum development dimulai.", en: "Clear scope before development begins." },
  intro: { id: "Setiap project berbeda. Harga berikut adalah titik awal untuk scope standar dan akan dikonfirmasi setelah discovery.", en: "Every project is different. These prices are starting points for a standard scope and are confirmed after discovery." },
  starting: { id: "Mulai dari", en: "Starting from" },
  custom: { id: "Berdasarkan scope", en: "Based on scope" },
  bestFor: { id: "Umumnya mencakup", en: "Typically includes" },
  action: { id: "Minta estimasi project", en: "Request a project estimate" },
  noteTitle: { id: "Yang perlu diketahui", en: "Good to know" },
  notes: {
    id: ["Scope, timeline, dan milestone disepakati sebelum development.", "Biaya infrastructure, API, WhatsApp BSP, payment gateway, AI usage, dan layanan pihak ketiga tidak termasuk kecuali disebutkan.", "Perubahan di luar scope akan diestimasi dan disetujui sebelum dikerjakan."],
    en: ["Scope, timeline, and milestones are agreed before development.", "Infrastructure, APIs, WhatsApp BSP, payment gateways, AI usage, and third-party service fees are excluded unless stated.", "Out-of-scope changes are estimated and approved before work begins."],
  },
  tiers: [
    { number: "01", name: "Website", price: { id: "Rp3,5jt+", en: "IDR 3.5M+" }, summary: { id: "Landing page, portfolio, company profile, dan corporate website.", en: "Landing pages, portfolios, company profiles, and corporate websites." }, includes: ["Responsive UI", "SEO foundation", "Analytics", "Deployment"] },
    { number: "02", name: "E-Commerce", price: { id: "Rp9,5jt+", en: "IDR 9.5M+" }, summary: { id: "Online store dengan alur transaksi dan operasional yang proper.", en: "Online stores with proper transaction and operational flows." }, includes: ["CMS & catalogue", "Cart & checkout", "Payment gateway", "Order management"] },
    { number: "03", name: "Web Application", price: { id: "Rp12,5jt+", en: "IDR 12.5M+" }, summary: { id: "Dashboard, portal, booking, membership, registrasi, dan workflow aplikasi.", en: "Dashboards, portals, booking, memberships, registration, and application workflows." }, includes: ["Authentication", "Database", "Roles", "Core workflow"] },
    { number: "04", name: "Automation & AI", price: { id: "Rp5jt+", en: "IDR 5M+" }, summary: { id: "Satu workflow automation yang terdefinisi jelas.", en: "One clearly defined automation workflow." }, includes: ["Workflow mapping", "API connection", "Notifications", "Documentation"] },
    { number: "05", name: "Business System", price: { id: "Rp15jt+", en: "IDR 15M+" }, summary: { id: "Sistem operasional custom dengan kompleksitas yang ditentukan melalui discovery.", en: "Custom operational systems with complexity defined through discovery." }, includes: ["Roles & access", "Operational workflow", "Reporting", "Milestone review"] },
    { number: "06", name: "Custom Development", price: null, summary: { id: "SaaS, marketplace, API, platform, dan kebutuhan khusus lainnya.", en: "SaaS, marketplaces, APIs, platforms, and other specialized requirements." }, includes: ["Product definition", "Custom architecture", "Production engineering", "Launch support"] },
  ],
} as const;

export function PricingPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#f0eee7] pb-28 pt-32 text-[#0a0a09] sm:pb-36 sm:pt-40">
      <div className="site-container">
        <MotionReveal className="grid gap-8 pb-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3"><span className="label-mono text-black/40">{content.label[locale]}</span></div>
          <div className="lg:col-span-9">
            <h1 className="max-w-[960px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em]">{content.title[locale]}</h1>
            <p className="mt-8 max-w-[680px] text-base leading-[1.7] text-black/55 sm:text-lg">{content.intro[locale]}</p>
          </div>
        </MotionReveal>

        <div className="border-t border-black/15">
          {content.tiers.map((tier) => (
            <MotionReveal key={tier.number} className="grid gap-7 border-b border-black/15 py-9 sm:py-11 lg:grid-cols-12 lg:items-start lg:gap-6">
              <span className="label-mono text-black/35 lg:col-span-1">{tier.number}</span>
              <div className="lg:col-span-4"><h2 className="text-[clamp(2rem,4vw,3.8rem)] font-[510] leading-none tracking-[-0.05em]">{tier.name}</h2><p className="mt-4 max-w-[430px] text-sm leading-[1.65] text-black/52">{tier.summary[locale]}</p></div>
              <div className="lg:col-span-4"><span className="label-mono text-black/35">{content.bestFor[locale]}</span><div className="mt-4 flex flex-wrap gap-2">{tier.includes.map((item) => <span key={item} className="rounded-full border border-black/15 px-3 py-2 text-xs text-black/58">{item}</span>)}</div></div>
              <div className="lg:col-span-3 lg:text-right"><span className="text-[0.65rem] text-black/40">{tier.price ? content.starting[locale] : ""}</span><p className="mt-1 text-[clamp(1.8rem,3vw,3rem)] font-[520] leading-none tracking-[-0.05em]">{tier.price ? tier.price[locale] : content.custom[locale]}</p></div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-14 grid gap-8 rounded-[10px] bg-[#0a0a09] p-7 text-white sm:p-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4"><h2 className="text-3xl font-[510] tracking-[-0.05em]">{content.noteTitle[locale]}</h2></div>
          <ul className="space-y-4 text-sm leading-[1.65] text-white/55 lg:col-span-5">{content.notes[locale].map((note) => <li key={note} className="border-b border-white/10 pb-4 last:border-0">{note}</li>)}</ul>
          <div className="lg:col-span-3 lg:text-right"><Link href="mailto:hello@hammad.studio" className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">{content.action[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
        </MotionReveal>
      </div>
    </div>
  );
}
