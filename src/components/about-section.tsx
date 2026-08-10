"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function AboutSection() {
  const { locale } = useLocale();
  const copy = homeContent.about;

  return (
    <section className="bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="section-heading mt-5 max-w-[560px]">
              {copy.headlineBefore[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.headlineAccent[locale]}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <p className="body-copy max-w-[620px] text-black/60">
              {copy.description[locale]}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.proofs.map((proof) => (
                <div key={proof[locale]} className="flex items-center gap-2.5 rounded-lg border border-black/10 bg-white/50 px-4 py-3 text-xs font-semibold text-black/80 sm:text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cfef57] text-black">
                    <CheckIcon className="h-3 w-3 text-black" />
                  </span>
                  <span>{proof[locale]}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/studio" className="group inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-5 py-3 text-xs font-semibold text-black transition hover:bg-black hover:text-white sm:text-sm">
                {copy.link[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

