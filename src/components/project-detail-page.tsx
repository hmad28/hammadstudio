"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import type { WorkSlug } from "@/lib/work-content";
import { workProjects } from "@/lib/work-content";

const labels = {
  overview: { id: "Overview", en: "Overview" },
  challenge: { id: "Challenge", en: "Challenge" },
  built: { id: "What we built", en: "What we built" },
  experience: { id: "Experience", en: "Experience" },
  features: { id: "Key features", en: "Key features" },
  flow: { id: "System / flow", en: "System / flow" },
  outcome: { id: "Outcome", en: "Outcome" },
  next: { id: "Project berikutnya", en: "Next project" },
  visit: { id: "Kunjungi website", en: "Visit website" },
} as const;

const relatedServiceBySlug: Partial<Record<WorkSlug, { href: string; label: string }>> = {
  jamwisata: { href: "/industri/travel", label: "Website untuk tour dan travel" },
  drivemate: { href: "/harga-website#plan-booking-rental", label: "Booking dan rental system" },
  "shofi-frozen": { href: "/jasa-website-umkm", label: "Jasa website untuk UMKM" },
  "cpx-jersey": { href: "/jasa-website-umkm", label: "Jasa website untuk UMKM" },
  "add-logistik": { href: "/industri/logistik", label: "Website untuk perusahaan logistik" },
  "buraq-logistik": { href: "/industri/logistik", label: "Website untuk perusahaan logistik" },
  "sahabat-qolbu": { href: "/jasa-website-company-profile", label: "Jasa website company profile" },
  "solivate": { href: "/jasa-website-company-profile", label: "Jasa website company profile" },
};

export function ProjectDetailPage({ slug }: { slug: WorkSlug }) {
  const { locale } = useLocale();
  const project = workProjects[slug];
  const nextProject = workProjects[project.next];
  const relatedService = relatedServiceBySlug[slug] ?? { href: "/jasa-pembuatan-website", label: "Jasa pembuatan website" };

  return (
    <article className="bg-[#f7f5ef] text-[#17181d]">
      <header className="relative overflow-hidden bg-[#070a12] pb-14 pt-36 text-white sm:pt-44">
        {/* Purple/Magenta Ambient Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(128,87,255,0.4)_0%,rgba(228,75,255,0.25)_45%,transparent_75%)] blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          <span className="purple-glow-badge inline-block rounded-full px-3.5 py-1 text-[0.68rem] font-bold">
            {project.category[locale]} · {project.year}
          </span>
          <h1 className="mt-7 max-w-[1150px] text-[clamp(4rem,10vw,10rem)] font-[520] leading-[0.8] tracking-[-0.075em]">
            {project.title}
          </h1>
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="acid-button mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black"
            >
              {labels.visit[locale]} <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </header>

      <div className="bg-[#070a12] pb-20 sm:pb-28">
        <div className="site-container">
          <div className="luxury-dark-card relative aspect-[4/3] overflow-hidden rounded-2xl p-2 shadow-[0_40px_100px_rgba(0,0,0,0.8)] sm:aspect-[2/1]">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category[locale]}`}
                  fill
                  priority
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_70%_20%,rgba(210,243,76,0.22),transparent_30%),linear-gradient(135deg,#171027,#070a12_72%)] p-8 text-center">
                  <span className="text-[clamp(3rem,8vw,8rem)] font-[520] leading-none tracking-[-0.07em] text-white/90">
                    {project.title}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="about-surface-v2 py-24 sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <span className="label-mono text-[#8057ff] font-semibold">
              {labels.overview[locale]}
            </span>
          </div>
          <div className="space-y-16 lg:col-span-9">
            <MotionReveal>
              <p className="max-w-[900px] text-[clamp(2rem,4.5vw,4.2rem)] font-[500] leading-[1.02] tracking-[-0.05em] text-[#17181d]">
                {project.overview[locale]}
              </p>
            </MotionReveal>
            <div className="grid gap-10 border-t border-black/10 pt-8 sm:grid-cols-2">
              <MotionReveal className="tint-card-lavender p-6 rounded-2xl">
                <span className="label-mono text-[#8057ff] font-bold">
                  {labels.challenge[locale]}
                </span>
                <p className="mt-4 text-base leading-[1.7] text-[#17181d]">
                  {project.challenge[locale]}
                </p>
              </MotionReveal>
              <MotionReveal
                delay={0.06}
                className="tint-card-ice p-6 rounded-2xl"
              >
                <span className="label-mono text-[#2864ff] font-bold">
                  {labels.built[locale]}
                </span>
                <p className="mt-4 text-base leading-[1.7] text-[#17181d]">
                  {project.built[locale]}
                </p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="services-surface-v2 py-24 sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-6">
          <MotionReveal className="lg:col-span-5">
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
              {labels.experience[locale]}
            </span>
            <p className="mt-6 text-[clamp(2rem,4vw,3.7rem)] font-[500] leading-[1.05] tracking-[-0.05em] text-[#17181d]">
              {project.experience[locale]}
            </p>
          </MotionReveal>
          <MotionReveal className="lg:col-span-7" delay={0.06}>
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
              {labels.features[locale]}
            </span>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="surface-card rounded-xl border border-[#dde0e7] bg-white p-5 shadow-sm"
                >
                  <span className="text-xs font-mono font-bold text-[#8057ff]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-[#17181d]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#ebe9e2] py-20 sm:py-28">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="label-mono font-semibold text-[#8057ff]">{labels.outcome[locale]}</span>
          </div>
          <div className="lg:col-span-9">
            <p className="max-w-[900px] text-[clamp(2rem,4vw,4rem)] font-[500] leading-[1.04] tracking-[-0.05em]">{project.outcome[locale]}</p>
            <Link href={relatedService.href} className="group mt-8 inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold">
              {relatedService.label} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Project Signature CTA */}
      <section className="cta-surface-signature py-20">
        <Link
          href={`/work/${nextProject.slug}`}
          className="site-container group flex items-end justify-between gap-5 text-[#070a12]"
        >
          <div>
            <span className="label-mono font-bold tracking-wider text-[#070a12]/80">
              {labels.next[locale]}
            </span>
            <h2 className="mt-5 text-[clamp(2.8rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em] text-[#070a12]">
              {nextProject.title}
            </h2>
          </div>
          <span className="mb-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#070a12] text-white transition-transform duration-500 group-hover:rotate-45 sm:h-20 sm:w-20">
            <ArrowUpRightIcon className="h-6 w-6 text-[#d2f34c]" />
          </span>
        </Link>
      </section>
    </article>
  );
}
