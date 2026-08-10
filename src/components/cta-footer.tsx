"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon, HammadStudioLogo } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function CTAFooter() {
  const { locale } = useLocale();
  const copy = homeContent.footer;
  const nav = homeContent.nav;

  return (
    <footer className="bg-[#07060b] text-white">
      {/* Signature Vibrant Luxury Acid Gradient CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#cfef57] via-[#e1fd72] to-[#9ee81c] px-5 py-24 text-[#0a0a09] shadow-2xl sm:px-8 sm:py-32 lg:py-36">
        {/* Subtle Ambient Mesh Pattern */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-3xl" aria-hidden="true" />

        <MotionReveal className="relative z-10 mx-auto max-w-[1240px]">
          <div className="flex flex-wrap items-center justify-between border-b border-black/15 pb-6">
            <span className="label-mono font-bold tracking-wider text-black/70">{copy.prompt[locale]}</span>
            <span className="label-mono hidden text-black/70 sm:block">{copy.makeReal[locale]}</span>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Link href="/contact" className="group block">
              <h2 className="text-[clamp(3.8rem,10.5vw,10rem)] font-[540] leading-[0.8] tracking-[-0.075em] text-black">
                {copy.lets[locale]}
                <br />
                <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                  {copy.talk[locale]}
                </span>
              </h2>
            </Link>

            <div className="max-w-[420px] lg:text-left">
              <p className="text-base font-medium leading-[1.65] text-black/85 sm:text-lg">
                {copy.description[locale]}
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#07060b] px-7 py-4 text-sm font-semibold text-white shadow-2xl transition hover:bg-black/90"
                >
                  {copy.ctaButton[locale]}
                  <ArrowUpRightIcon className="button-arrow h-4 w-4 text-[#cfef57]" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Rich Dark Mesh Footer */}
      <section className="dark-mesh-surface relative overflow-hidden py-16 sm:py-20">
        <div className="site-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Col 1: Brand & Availability */}
            <div className="lg:col-span-4">
              <Link href="/"><HammadStudioLogo /></Link>
              <p className="mt-4 max-w-[340px] text-xs leading-[1.65] text-white/55 sm:text-sm">
                {copy.description[locale]}
              </p>
              <div className="mt-6 flex items-center gap-2.5 text-xs text-white/70">
                <span className="availability-dot" /> {copy.available[locale]}
              </div>
            </div>

            {/* Col 2: Primary Nav */}
            <div className="lg:col-span-3">
              <p className="label-mono purple-glow-badge w-fit rounded-full px-2.5 py-0.5 text-[0.65rem]">NAVIGASI</p>
              <nav className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-white/70" aria-label="Footer navigation">
                <Link href="/services" className="transition hover:text-[#cfef57]">{nav.services[locale]}</Link>
                <Link href="/work" className="transition hover:text-[#cfef57]">{nav.work[locale]}</Link>
                <Link href="/pricing" className="transition hover:text-[#cfef57]">{nav.pricing[locale]}</Link>
                <Link href="/studio" className="transition hover:text-[#cfef57]">{nav.studio[locale]}</Link>
                <Link href="/contact" className="transition hover:text-[#cfef57]">Contact</Link>
              </nav>
            </div>

            {/* Col 3: Services Nav */}
            <div className="lg:col-span-2">
              <p className="label-mono purple-glow-badge w-fit rounded-full px-2.5 py-0.5 text-[0.65rem]">LAYANAN</p>
              <nav className="mt-4 grid gap-2.5 text-xs text-white/60 sm:text-sm" aria-label="Services footer link">
                <Link href="/services/website" className="transition hover:text-white">Website</Link>
                <Link href="/services/e-commerce" className="transition hover:text-white">E-Commerce</Link>
                <Link href="/services/web-application" className="transition hover:text-white">Web Application</Link>
                <Link href="/services/custom-development" className="transition hover:text-white">Custom Dev</Link>
              </nav>
            </div>

            {/* Col 4: Contact & Office */}
            <div className="lg:col-span-3 lg:text-right">
              <p className="label-mono acid-glow-badge inline-block rounded-full px-2.5 py-0.5 text-[0.65rem]">{copy.newBusiness[locale]}</p>
              <a
                href="mailto:hello@hammad.studio"
                className="mt-3 inline-block text-lg font-medium tracking-[-0.03em] text-white transition hover:text-[#cfef57] sm:text-xl"
              >
                hello@hammad.studio
              </a>
              <p className="mt-2 text-xs text-white/50">Depok &amp; Jakarta, Indonesia</p>
              <p className="mt-1 text-xs text-white/40">Global Remote Services</p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-6 text-[0.7rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HAMMAD.STUDIO · All rights reserved.</p>
            <p>{copy.closing[locale]}</p>
          </div>
        </div>

        {/* Ambient Big Watermark Background */}
        <div
          className="pointer-events-none mt-12 whitespace-nowrap text-center text-[12vw] font-bold leading-[0.7] tracking-[-0.075em] text-white/[0.04]"
          aria-hidden="true"
        >
          HAMMAD.STUDIO
        </div>
      </section>
    </footer>
  );
}


