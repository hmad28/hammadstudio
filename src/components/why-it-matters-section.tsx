"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import {
  ArrowUpRightIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendingUpIcon,
  BuildingIcon,
} from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const iconMap = {
  ShieldCheckIcon,
  TargetIcon,
  TrendingUpIcon,
  BuildingIcon,
};

export function WhyItMattersSection() {
  const { locale } = useLocale();
  const copy = homeContent.whyItMatters;

  return (
    <section id="why-it-matters" className="gray-tint-surface scroll-mt-20 py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="surface-card relative overflow-hidden rounded-2xl bg-[#eceae4]/90 border border-[#deddd5] shadow-xl lg:grid-cols-12 lg:grid">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />

          {/* Left: Beautiful Website Mockup */}
          <div className="relative min-h-[380px] overflow-hidden bg-[#0b0b12] sm:min-h-[500px] lg:col-span-6">
            <Image
              src="/images/work/saudi-education-expo.webp"
              alt="Website Saudi Education Expo preview"
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover object-top transition duration-1000 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06050b] via-[#06050b]/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
              <div>
                <span className="purple-glow-badge inline-block rounded-full px-3 py-1 text-[0.65rem] font-semibold">
                  Website Experience
                </span>
                <p className="mt-2 text-lg font-semibold sm:text-xl">Saudi Education Expo</p>
              </div>
              <span className="acid-button rounded-full px-3.5 py-1.5 text-xs font-semibold text-black">
                2026
              </span>
            </div>
          </div>

          {/* Right: Seductive Business Copy + 4 Benefit Cards */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-6 lg:p-14">
            <span className="label-mono purple-glow-badge w-fit rounded-full px-3 py-1 text-[0.68rem]">
              {copy.label[locale]}
            </span>
            <h2 className="mt-4 text-[clamp(2.4rem,4.2vw,4.2rem)] font-[540] leading-[0.94] tracking-[-0.055em]">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.accent[locale]}
              </span>
            </h2>
            <p className="mt-5 text-sm leading-[1.65] text-black/65 sm:text-base">
              {copy.description[locale]}
            </p>

            {/* 4 Benefit Cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.items.map((item) => {
                const IconComp = iconMap[item.icon as keyof typeof iconMap] || ShieldCheckIcon;
                return (
                  <div key={item.title} className="rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0a0a09] text-[#cfef57]">
                        <IconComp className="h-4 w-4" />
                      </span>
                      <h3 className="text-sm font-bold text-black">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-xs leading-[1.6] text-black/65">
                      {item.description[locale]}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9">
              <Link
                href="/services/website"
                className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-black"
              >
                Website development <ArrowUpRightIcon className="button-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}


