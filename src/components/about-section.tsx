"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const cardTintClasses = [
  "tint-card-lavender",
  "tint-card-ice",
  "tint-card-lime",
  "tint-card-coral",
];

const checkBgClasses = [
  "bg-[#8057ff] text-white",
  "bg-[#2864ff] text-white",
  "bg-[#0a0a09] text-[#d2f34c]",
  "bg-[#ff7262] text-white",
];

export function AboutSection() {
  const { locale } = useLocale();
  const copy = homeContent.about;

  return (
    <section className="about-surface-v2 py-20 text-[#17181d] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="label-mono text-[#8057ff] font-semibold">{copy.label[locale]}</span>
            <h2 className="section-heading mt-5 max-w-[560px]">
              {copy.headlineBefore[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
                {copy.headlineAccent[locale]}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <p className="body-copy max-w-[620px] text-[#6d7180]">
              {copy.description[locale]}
            </p>
            <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {copy.proofs.map((proof, index) => (
                <div
                  key={proof[locale]}
                  className={`flex items-center gap-3 p-4 text-xs font-semibold text-[#17181d] sm:text-sm ${cardTintClasses[index % cardTintClasses.length]}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${checkBgClasses[index % checkBgClasses.length]}`}>
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{proof[locale]}</span>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Link href="/studio" className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-6 py-3.5 text-xs font-semibold text-black shadow-sm transition hover:bg-black hover:text-white sm:text-sm">
                {copy.link[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

