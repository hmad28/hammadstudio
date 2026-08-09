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
    <footer className="bg-[#0a0a09] text-white">
      <section className="overflow-hidden bg-[#cfef57] px-5 py-24 text-[#0a0a09] sm:px-8 sm:py-32 lg:py-40">
        <MotionReveal className="mx-auto max-w-[1240px]">
          <div className="flex items-center justify-between border-b border-black/20 pb-5"><span className="label-mono text-black/50">{copy.prompt[locale]}</span><span className="label-mono hidden text-black/50 sm:block">{copy.makeReal[locale]}</span></div>
          <Link href="/contact" className="group mt-9 flex items-end justify-between gap-5">
            <h2 className="text-[clamp(4rem,11vw,11rem)] font-[530] leading-[0.75] tracking-[-0.075em]">{copy.lets[locale]}<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.talk[locale]}</span></h2>
            <span className="mb-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 sm:mb-4 sm:h-20 sm:w-20"><ArrowUpRightIcon className="h-5 w-5 sm:h-7 sm:w-7" /></span>
          </Link>
        </MotionReveal>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="site-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <Link href="/"><HammadStudioLogo /></Link>
              <p className="mt-4 max-w-[360px] text-sm leading-[1.6] text-white/42">{copy.description[locale]}</p>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/45"><span className="availability-dot" /> {copy.available[locale]}</div>
            </div>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/55 lg:col-span-3" aria-label="Footer navigation">
              <Link href="/services" className="hover:text-white">{nav.services[locale]}</Link><Link href="/work" className="hover:text-white">{nav.work[locale]}</Link><Link href="/pricing" className="hover:text-white">{nav.pricing[locale]}</Link><Link href="/studio" className="hover:text-white">{nav.studio[locale]}</Link>
            </nav>
            <div className="lg:col-span-4 lg:text-right">
              <p className="label-mono text-white/30">{copy.newBusiness[locale]}</p>
              <a href="mailto:hello@hammad.studio" className="mt-3 inline-block text-lg tracking-[-0.03em] text-white/85 transition-colors hover:text-[#cfef57] sm:text-xl">hello@hammad.studio</a>
              <p className="mt-3 text-xs text-white/35">Depok &amp; Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.65rem] text-white/30 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} HAMMAD.STUDIO</p><p>{copy.closing[locale]}</p></div>
        </div>
        <div className="pointer-events-none mt-10 whitespace-nowrap text-center text-[13vw] font-semibold leading-[0.72] tracking-[-0.075em] text-white/[0.035]" aria-hidden="true">HAMMAD.STUDIO</div>
      </section>
    </footer>
  );
}
