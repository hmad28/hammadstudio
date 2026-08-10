"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const slugs = ["website", "e-commerce", "web-application", "business-system", "automation-ai", "custom-development"] as const;

export function ServicesSection() {
  const { locale } = useLocale();
  const copy = homeContent.services;

  return (
    <section id="services" className="scroll-mt-24 bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
          <div>
            <span className="label-mono text-black/48">{copy.label[locale]}</span>
            <h2 className="section-heading mt-5 max-w-[650px]">{copy.headline[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.accent[locale]}</span></h2>
          </div>
          <p className="body-copy max-w-[600px] text-black/56 lg:ml-auto">{locale === "id" ? "Mulai dari digital presence hingga software yang mengikuti workflow bisnis Anda." : "From a digital presence to software built around your business workflow."}</p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => (
            <MotionReveal key={item.number} delay={(index % 3) * 0.05}>
              <Link href={`/services/${slugs[index]}`} className="surface-card group flex min-h-[330px] flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_24px_70px_rgba(20,20,16,.08)]">
                <div className="relative h-28 overflow-hidden bg-[#111]">
                  <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover object-top opacity-70 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161614] to-transparent" />
                  <span className="label-mono absolute left-6 top-5 text-white/70">{item.number}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl font-[540] tracking-[-0.045em]">{item.title[locale]}</h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.65] text-black/55">{item.description[locale]}</p>
                  <span className="mt-auto flex items-center justify-between pt-8 text-sm font-semibold">{locale === "id" ? "Lihat layanan" : "Explore service"}<ArrowUpRightIcon className="button-arrow h-4 w-4" /></span>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
