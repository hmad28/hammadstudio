"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ArrowRight";
import { Check } from "@phosphor-icons/react/Check";
import { CloudCheck } from "@phosphor-icons/react/CloudCheck";
import { DeviceMobile } from "@phosphor-icons/react/DeviceMobile";
import { FlagBanner } from "@phosphor-icons/react/FlagBanner";
import { LockKey } from "@phosphor-icons/react/LockKey";
import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";
import { Plus } from "@phosphor-icons/react/Plus";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import { Wrench } from "@phosphor-icons/react/Wrench";
import {
  getMerdekaPlanId,
  merdekaFeaturedPlans,
  merdekaOtherPlans,
  type MerdekaPlan,
} from "@/lib/merdeka-pricing";
import { MotionReveal } from "./motion-reveal";
import { PricingIcon } from "./pricing-icon";

const promoMessage = "Halo Hammad Studio, saya melihat Promo Merdeka di website dan ingin klaim sekaligus konsultasi pembuatan website.";
const whatsappHref = `https://wa.me/6285199391215?text=${encodeURIComponent(promoMessage)}`;

const getPlanWhatsappHref = (planName: string) =>
  `https://wa.me/6285199391215?text=${encodeURIComponent(`Halo Hammad Studio, saya melihat Promo Merdeka untuk ${planName} dan ingin klaim sekaligus konsultasi.`)}`;

const includedBenefits = [
  { title: "Fast & Responsive", copy: "Optimal di desktop dan mobile", icon: DeviceMobile },
  { title: "SEO Foundation", copy: "Struktur dasar siap ditemukan", icon: MagnifyingGlass },
  { title: "SSL Security", copy: "HTTPS aktif", icon: LockKey },
  { title: "Hosting", copy: "Sesuai kebutuhan project", icon: CloudCheck },
  { title: "WhatsApp Integration", copy: "Jalur kontak langsung", icon: WhatsappLogo },
  { title: "Post-Launch Support", copy: "Bantuan setelah website live", icon: Wrench },
] as const;

const outcomes = [
  ["01", "Website", "membangun presence", "landing"],
  ["02", "Commerce", "menerima transaksi", "commerce"],
  ["03", "Business Apps", "merapikan workflow", "business"],
  ["04", "Custom Software", "menjawab kebutuhan unik", "custom"],
] as const;

const proof = [
  { name: "Shofi Frozen", type: "UMKM & Commerce", href: "/work/shofi-frozen" },
  { name: "ADD Logistik", type: "Company Profile", href: "/work/add-logistik" },
  { name: "Sahabat Qolbu", type: "Tour & Travel", href: "/work/sahabat-qolbu" },
] as const;

function PlanCard({ plan }: { plan: MerdekaPlan }) {
  return (
    <article
      id={getMerdekaPlanId(plan.name)}
      className={`group relative flex min-h-[610px] scroll-mt-36 flex-col rounded-[26px] border bg-[#121824] p-3 text-white shadow-[0_24px_55px_rgba(7,17,31,.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(7,17,31,.24)] ${plan.featured ? "border-[#e1262f] ring-2 ring-[#e1262f]/15" : "border-white/8"}`}
    >
      {plan.featured ? <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#265ee8] px-4 py-1.5 text-[.66rem] font-bold tracking-[.08em]">PALING POPULER</span> : null}

      <div className="merdeka-price-panel relative overflow-hidden rounded-[18px] p-5 text-[#111827] sm:p-6">
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c91620] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.35)]">
              <PricingIcon name={plan.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-xl font-[650] leading-tight tracking-[-.035em]">{plan.name}</h3>
          </div>
          {plan.badge ? <span className="max-w-[112px] text-right font-mono text-[.57rem] font-bold leading-4 tracking-[.08em] text-[#b2131c]">{plan.badge}</span> : null}
        </div>
        <div className="relative mt-8">
          <p className="text-[.66rem] font-bold uppercase tracking-[.12em] text-[#b2131c]">Harga mulai</p>
          <p className="mt-1 whitespace-nowrap text-[clamp(1.85rem,3vw,2.45rem)] font-[720] leading-none tracking-[-.065em] text-[#9f111a]">{plan.price}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-2 pt-6 sm:px-4">
        <p className="min-h-12 text-sm leading-6 text-white/54">{plan.summary}</p>
        <ul className="mt-6 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-[.84rem] text-white/82">
              <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#d2f34c]/65 text-[#d2f34c]"><Check className="h-3 w-3" weight="bold" /></span>
              {feature}
            </li>
          ))}
        </ul>
        <a href={getPlanWhatsappHref(plan.name)} target="_blank" rel="noreferrer" className="mt-auto flex min-h-12 items-center justify-between rounded-xl bg-[#e1262f] px-4 text-sm font-semibold transition hover:bg-[#f02b34]">
          {plan.cta}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
        </a>
      </div>
    </article>
  );
}

function CompactPlan({ plan }: { plan: MerdekaPlan }) {
  return (
    <a id={getMerdekaPlanId(plan.name)} href={getPlanWhatsappHref(plan.name)} target="_blank" rel="noreferrer" className="group flex scroll-mt-36 items-center gap-4 border-b border-black/12 px-1 py-6 transition hover:border-[#e1262f] sm:px-4">
      <PricingIcon name={plan.icon} className="h-8 w-8 shrink-0 text-[#0b1a33] transition group-hover:text-[#e1262f]" />
      <span className="min-w-0 flex-1">
        <span className="block text-base font-[620] tracking-[-.025em]">{plan.name}</span>
        <span className="mt-1 block text-sm text-black/48">Mulai <strong className="font-[620] text-[#d21c25]">{plan.price}</strong></span>
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 text-[#e1262f] transition-transform group-hover:translate-x-1" weight="bold" />
    </a>
  );
}

export function PricingPageContent() {
  const firstOtherPlans = merdekaOtherPlans.slice(0, 8);
  const remainingPlans = merdekaOtherPlans.slice(8);

  return (
    <div className="bg-[#f7f4ed] text-[#111827]">
      <section className="merdeka-grid relative min-h-[820px] overflow-hidden bg-[#07111f] pb-20 pt-40 text-white sm:min-h-[860px] sm:pt-48">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_45%,rgba(225,38,47,.25),transparent_56%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-28 top-44 hidden h-24 w-[720px] rotate-[-24deg] bg-[#e1262f] shadow-[0_24px_50px_rgba(225,38,47,.18)] sm:block" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-28 top-[19rem] hidden h-10 w-[720px] rotate-[-24deg] bg-white/90 sm:block" aria-hidden="true" />

        <div className="site-container relative grid gap-16 lg:grid-cols-[1.03fr_.97fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-[#ff4a52]"><span className="h-8 w-1 bg-[#e1262f]" /><p className="font-mono text-xs font-bold tracking-[.16em]">MERDEKA DIGITAL SALE 2026</p></div>
            <h1 className="mt-8 max-w-[730px] text-[clamp(3.5rem,6vw,5.7rem)] font-[620] leading-[.88] tracking-[-.07em]">Waktunya bisnis ikut merdeka secara digital<span className="text-[#e1262f]">.</span></h1>
            <p className="mt-7 max-w-[610px] text-base leading-7 text-white/60 sm:text-lg">Website modern, toko online, sampai sistem bisnis—sekarang dengan Harga Merdeka.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#e1262f] px-6 text-sm font-semibold transition hover:bg-[#f02b34]">Klaim Harga Merdeka <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" /></a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-white/28 px-6 text-sm font-semibold transition hover:bg-white hover:text-[#07111f]">Konsultasikan Kebutuhan <WhatsappLogo className="h-4 w-4" weight="fill" /></a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-white/55"><span className="h-2 w-2 rounded-full bg-[#d2f34c] shadow-[0_0_0_5px_rgba(210,243,76,.1)]" />Berlaku hingga 31 Agustus 2026</p>
          </div>

          <div className="relative mx-auto w-full max-w-[530px] lg:mx-0 lg:ml-auto">
            <div className="relative rotate-[1.5deg] border border-white/18 bg-[#0c192b] p-5 shadow-[0_50px_100px_rgba(0,0,0,.48)] sm:p-8">
              <div className="border border-white/12 p-6 sm:p-9">
                <div className="flex items-center justify-between gap-4 text-[#eecf91]"><FlagBanner className="h-9 w-9" weight="duotone" /><span className="font-mono text-[.65rem] tracking-[.14em]">17 · 08 · 2026</span></div>
                <p className="mt-16 text-lg text-white/72">Harga spesial mulai dari</p>
                <p className="mt-2 text-[clamp(3.7rem,7vw,6.7rem)] font-[680] leading-none tracking-[-.08em]">Rp499<span className="text-[.45em] tracking-[-.04em]">.000</span></p>
                <div className="mt-8 h-1 w-24 bg-[#e1262f]" />
                <p className="mt-9 text-sm leading-6 text-white/50">Konsultasi gratis · Responsive<br />SEO Foundation · Hosting & SSL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="paket-populer" className="relative scroll-mt-32 overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full border border-[#e1262f]/12" aria-hidden="true" />
        <div className="site-container">
          <MotionReveal className="max-w-[760px]">
            <p className="label-mono text-[#d21c25]">PILIHAN TERPOPULER</p>
            <h2 className="mt-4 text-[clamp(3rem,6vw,5.8rem)] font-[620] leading-[.92] tracking-[-.065em]">Pilih titik mulai yang paling masuk akal.</h2>
          </MotionReveal>
          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {merdekaFeaturedPlans.map((plan, index) => <MotionReveal key={plan.name} delay={(index % 3) * 0.045}><PlanCard plan={plan} /></MotionReveal>)}
          </div>
          <p className="mt-6 max-w-[980px] text-xs leading-5 text-black/43">Harga merupakan harga mulai untuk scope standar. Harga final menyesuaikan fitur, halaman atau modul, integrasi, timeline, dan kebutuhan project.</p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fffdf8] py-24 sm:py-32">
        <div className="site-container">
          <MotionReveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><span className="mb-7 block h-1 w-14 bg-[#e1262f]" /><h2 className="text-[clamp(2.8rem,5vw,5rem)] font-[620] leading-[.94] tracking-[-.06em]">Masih ada kebutuhan lain?</h2></div>
            <p className="max-w-[420px] text-sm leading-6 text-black/48">Pilih berdasarkan kebutuhan bisnis—bukan istilah internal agency.</p>
          </MotionReveal>
          <div className="mt-12 grid border-t border-black/12 md:grid-cols-2 lg:grid-cols-4">
            {firstOtherPlans.map((plan) => <CompactPlan key={plan.name} plan={plan} />)}
          </div>
          <details className="group mt-4 border-t border-black/12">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">Lihat seluruh solusi dan harga <Plus className="h-5 w-5 transition group-open:rotate-45" weight="bold" /></summary>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">{remainingPlans.map((plan) => <CompactPlan key={plan.name} plan={plan} />)}</div>
          </details>
        </div>
      </section>

      <section className="bg-[#07111f] py-16 text-white sm:py-20">
        <div className="site-container">
          <p className="max-w-[250px] text-2xl font-[620] leading-tight tracking-[-.04em]">Semua website sudah mendapatkan</p>
          <div className="mt-10 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {includedBenefits.map(({ title, copy, icon: Icon }) => (
              <div key={title} className="border-b border-r border-white/12 p-5">
                <Icon className="h-7 w-7 text-[#d2f34c]" weight="duotone" />
                <h3 className="mt-6 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/42">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <MotionReveal><p className="max-w-[430px] text-[clamp(3rem,5.5vw,5.6rem)] font-[620] leading-[.9] tracking-[-.065em]">Bukan sekadar punya website<span className="text-[#e1262f]">.</span></p></MotionReveal>
          <div className="grid sm:grid-cols-2">
            {outcomes.map(([number, title, result, icon]) => (
              <MotionReveal key={number} className="border-b border-black/12 py-7 sm:px-6" delay={Number(number) * 0.025}>
                <div className="flex items-start gap-5"><span className="font-[family-name:var(--font-instrument-serif)] text-6xl leading-none text-[#d21c25]">{number}</span><PricingIcon name={icon} className="mt-1 h-8 w-8 shrink-0 text-[#0b1a33]" /></div>
                <h3 className="mt-6 text-xl font-[640] tracking-[-.035em]">{title}</h3>
                <p className="mt-2 text-sm text-black/52"><span className="mr-2 text-[#e1262f]">→</span>{result}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fffdf8] py-20 sm:py-24">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="label-mono text-[#d21c25]">BUKTI KERJA</p><h2 className="mt-4 text-4xl font-[620] tracking-[-.055em] sm:text-5xl">Project nyata. Bukan mockup.</h2></div><Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d21c25]">Lihat semua karya <ArrowRight className="h-4 w-4" weight="bold" /></Link></div>
          <div className="mt-10 grid border-t border-black/12 sm:grid-cols-3">
            {proof.map((project, index) => <Link key={project.name} href={project.href} className="group border-b border-black/12 py-7 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"><span className="font-mono text-[.65rem] text-[#d21c25]">0{index + 1}</span><h3 className="mt-5 text-2xl font-[620] tracking-[-.04em]">{project.name}</h3><p className="mt-2 flex items-center justify-between text-sm text-black/45">{project.type}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></p></Link>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111f] py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute -bottom-16 -right-40 h-24 w-[760px] rotate-[-12deg] bg-[#e1262f]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-5 -right-40 h-10 w-[760px] rotate-[-12deg] bg-white" aria-hidden="true" />
        <div className="site-container relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div><p className="label-mono text-[#ff4a52]">MERDEKA DIGITAL SALE</p><h2 className="mt-5 max-w-[760px] text-[clamp(3.2rem,6vw,6rem)] font-[620] leading-[.9] tracking-[-.07em]">Bisnis sudah jalan. Sekarang digitalnya ikut naik level<span className="text-[#e1262f]">.</span></h2><p className="mt-6 max-w-[620px] text-sm leading-6 text-white/55">Tidak yakin paket mana yang cocok? Ceritakan kebutuhan bisnis kamu, kami bantu menentukan solusi dan scope yang tepat.</p></div>
          <div className="border-l border-white/16 lg:pl-12">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-between rounded-xl bg-[#e1262f] px-5 text-sm font-semibold transition hover:bg-[#f02b34]">Klaim Harga Merdeka <ArrowRight className="h-4 w-4" weight="bold" /></a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-3 flex min-h-14 items-center justify-between rounded-xl border border-white/30 px-5 text-sm font-semibold transition hover:bg-white hover:text-[#07111f]">Konsultasi Gratis via WhatsApp <WhatsappLogo className="h-5 w-5" weight="fill" /></a>
            <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-white/45"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#d2f34c]" />Tidak harus langsung order. Konsultasikan kebutuhan terlebih dahulu.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] py-14">
        <div className="site-container grid gap-8 text-xs leading-5 text-black/45 md:grid-cols-2">
          <p><strong className="text-black/65">Tentang harga.</strong> Harga yang ditampilkan merupakan harga mulai untuk scope standar. Harga final menyesuaikan fitur, halaman atau modul, integrasi, timeline, dan kebutuhan project.</p>
          <p><strong className="text-black/65">Domain dan layanan pihak ketiga.</strong> Domain umum dapat termasuk pada paket tertentu sesuai promo dan ketersediaan. Domain premium, integrasi, serta layanan pihak ketiga dapat dikenakan biaya tambahan.</p>
        </div>
      </section>
    </div>
  );
}
