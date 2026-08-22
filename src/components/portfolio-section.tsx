"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { featuredWorkSlugs, workProjects } from "@/lib/work-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

function ProjectCard({
  project,
  index,
  category,
}: {
  project: (typeof workProjects)[(typeof featuredWorkSlugs)[number]];
  index: number;
  category: string;
}) {
  return (
    <MotionReveal className="lg:col-span-6" delay={index === 0 ? 0 : 0.08}>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="project-frame luxury-dark-card relative aspect-[4/3] overflow-hidden rounded-2xl p-1 shadow-[0_30px_80px_rgba(0,0,0,0.8)] sm:aspect-[16/10]">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} homepage hero`}
                fill
                quality={60}
                loading="lazy"
                sizes="(max-width: 1023px) 100vw, 580px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(210,243,76,0.22),transparent_28%),linear-gradient(135deg,#151027,#070a12_70%)]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06050b] via-[#06050b]/30 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

            {/* Corner Action Arrow */}
            <span className="acid-button absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-black shadow-lg transition-transform duration-300 group-hover:scale-110 sm:right-6 sm:top-6 sm:h-12 sm:w-12">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>

            {/* Inner Content Label */}
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
              <div>
                <span className="purple-glow-badge inline-block rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-wider">
                  {category} · {project.year}
                </span>
                <h3 className="mt-2.5 text-xl font-[550] tracking-[-0.04em] text-white sm:text-2xl lg:text-3xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </MotionReveal>
  );
}

export function PortfolioSection() {
  const { locale } = useLocale();
  const copy = homeContent.work;

  return (
    <section
      id="work"
      className="work-surface-v2 relative scroll-mt-20 py-24 text-white sm:py-32 lg:py-36"
    >
      {/* Background Ambient Purple/Indigo Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(91,55,213,0.32)_0%,rgba(40,100,255,0.18)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container">
        <MotionReveal className="flex flex-col items-start justify-between gap-6 pb-12 sm:flex-row sm:items-end lg:pb-16">
          <div>
            <span className="label-mono acid-glow-badge rounded-full px-3 py-1 text-[0.68rem]">
              {copy.label[locale]}
            </span>
            <h2 className="text-[clamp(3rem,5.5vw,5.5rem)] font-[520] leading-[0.9] tracking-[-0.06em] mt-4">
              {copy.headline[locale]}
              <br />
              <span className="bg-gradient-to-r from-[#cfef57] via-[#e2fd78] to-[#93c5fd] bg-clip-text font-[family-name:var(--font-instrument-serif)] font-normal italic text-transparent">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <Link
            href="/work"
            className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-black sm:text-sm"
          >
            {copy.all[locale]}{" "}
            <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </MotionReveal>

        <div className="grid gap-6 lg:grid-cols-12">
          {featuredWorkSlugs.map((slug, index) => {
            const project = workProjects[slug];
            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                category={project.category[locale]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
