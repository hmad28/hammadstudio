"use client";

import Image from "next/image";
import Link from "next/link";
import { workProjects, workSlugs } from "@/lib/work-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const copy = {
  label: { id: "Selected Projects", en: "Selected Projects" },
  title: {
    id: "Karya digital untuk kebutuhan nyata.",
    en: "Digital work for real needs.",
  },
  intro: {
    id: "Website, platform, dan sistem digital yang kami bangun untuk kebutuhan nyata.",
    en: "Websites, platforms, and digital systems we built for real needs.",
  },
  view: { id: "Lihat studi kasus", en: "View case study" },
  projects: { id: "proyek", en: "projects" },
  latest: { id: "Proyek terbaru", en: "Latest project" },
} as const;

const projectLayouts = [
  {
    wrapper: "md:col-span-7",
    image: "aspect-[4/3] sm:aspect-[16/10]",
  },
  {
    wrapper: "md:col-span-5",
    image: "aspect-[4/3] sm:aspect-[5/4]",
  },
  {
    wrapper: "md:col-span-5",
    image: "aspect-[4/3] sm:aspect-[5/4]",
  },
  {
    wrapper: "md:col-span-7",
    image: "aspect-[4/3] sm:aspect-[16/10]",
  },
  {
    wrapper: "md:col-span-12",
    image: "aspect-[4/3] sm:aspect-[2/1]",
  },
  {
    wrapper: "md:col-span-5",
    image: "aspect-[4/3] sm:aspect-[5/4]",
  },
  {
    wrapper: "md:col-span-7",
    image: "aspect-[4/3] sm:aspect-[16/10]",
  },
] as const;

export function WorkPageContent() {
  const { locale } = useLocale();
  const orderedSlugs = [
    "newsraya",
    ...workSlugs.filter((slug) => slug !== "newsraya"),
  ] as const;
  const [leadSlug, ...projectSlugs] = orderedSlugs;
  const leadProject = workProjects[leadSlug];

  return (
    <main className="work-surface-v2 min-h-[100dvh] overflow-hidden pb-24 pt-28 text-white sm:pb-32 sm:pt-32 lg:pt-36">
      <div className="site-container">
        <MotionReveal className="grid gap-8 border-b border-white/12 pb-12 sm:pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <span className="label-mono text-[#d2f34c]">{copy.label[locale]}</span>
            <h1 className="mt-5 max-w-[980px] text-[clamp(3.6rem,8vw,8.5rem)] font-[520] leading-[0.82] tracking-[-0.075em] text-[#f8f8f5] text-balance">
              {copy.title[locale]}
            </h1>
          </div>
          <div className="lg:col-span-3 lg:pb-2">
            <p className="max-w-[330px] text-sm leading-6 text-white/58 sm:text-base">
              {copy.intro[locale]}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-white/35">
              {String(orderedSlugs.length).padStart(2, "0")} {copy.projects[locale]} · 2026
            </p>
          </div>
        </MotionReveal>

        <MotionReveal className="pt-8 sm:pt-10" delay={0.04}>
          <LeadProjectCard
            slug={leadSlug}
            title={leadProject.title}
            image={leadProject.image}
            category={leadProject.category[locale]}
            year={leadProject.year}
            overview={leadProject.overview[locale]}
            viewLabel={copy.view[locale]}
            latestLabel={copy.latest[locale]}
          />
        </MotionReveal>

        <div className="mt-5 grid gap-5 md:grid-cols-12 lg:mt-7 lg:gap-7">
          {projectSlugs.map((slug, index) => {
            const project = workProjects[slug];
            const layout = projectLayouts[index % projectLayouts.length];
            const isLastProject = index === projectSlugs.length - 1;

            return (
              <MotionReveal
                key={slug}
                className={isLastProject ? "md:col-span-12" : layout.wrapper}
                delay={index % 2 === 0 ? 0 : 0.06}
              >
                <ProjectCard
                  slug={slug}
                  title={project.title}
                  image={project.image}
                  category={project.category[locale]}
                  year={project.year}
                  overview={project.overview[locale]}
                  imageClassName={isLastProject ? "aspect-[4/3] sm:aspect-[2/1]" : layout.image}
                  viewLabel={copy.view[locale]}
                />
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function ProjectCard({
  slug,
  title,
  image,
  category,
  year,
  overview,
  imageClassName,
  viewLabel,
}: {
  slug: string;
  title: string;
  image: string | null;
  category: string;
  year: string;
  overview: string;
  imageClassName: string;
  viewLabel: string;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      aria-label={`${viewLabel}: ${title}`}
      className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d2f34c] active:translate-y-px"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.045] [content-visibility:auto] [contain-intrinsic-size:auto_560px] transition-[border-color,background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:border-[#d2f34c]/45 group-hover:bg-white/[0.065] group-hover:shadow-[0_26px_70px_rgba(3,5,12,0.38)]">
        <div
          className={`${imageClassName} relative overflow-hidden bg-[#111217]`}
        >
          {image ? (
            <Image
              src={image}
              alt={`${title} — ${category}`}
              fill
              loading="lazy"
              quality={60}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 720px"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            />
          ) : (
            <div className="absolute inset-0 bg-[#111217]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070a12]/35 via-transparent to-white/[0.035]" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#070a12]/72 px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/75 backdrop-blur-md sm:left-5 sm:top-5">
            {category}
          </span>
        </div>

        <div className="flex flex-1 items-start justify-between gap-5 p-5 sm:p-6">
          <div className="min-w-0">
            <div className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-white/38">{year}</div>
            <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.65rem)] font-[520] leading-[0.95] tracking-[-0.052em] text-[#f8f8f5] transition-colors duration-300 group-hover:text-[#d2f34c]">
              {title}
            </h2>
            <p className="mt-3 line-clamp-2 max-w-[620px] text-sm leading-6 text-white/48">
              {overview}
            </p>
          </div>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 text-white transition-[background-color,border-color,color,transform] duration-300 group-hover:rotate-45 group-hover:border-[#d2f34c] group-hover:bg-[#d2f34c] group-hover:text-[#070a12]">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

function LeadProjectCard({
  slug,
  title,
  image,
  category,
  year,
  overview,
  viewLabel,
  latestLabel,
}: {
  slug: string;
  title: string;
  image: string | null;
  category: string;
  year: string;
  overview: string;
  viewLabel: string;
  latestLabel: string;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      aria-label={`${viewLabel}: ${title}`}
      className="group block rounded-[1.25rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d2f34c]"
    >
      <article className="relative min-h-[500px] overflow-hidden rounded-[1.25rem] border border-white/14 bg-[#111217] shadow-[0_34px_100px_rgba(3,5,12,0.48)] sm:min-h-[620px] lg:min-h-[680px]">
        {image ? (
          <Image
            src={image}
            alt={`${title} — ${category}`}
            fill
            preload
            quality={70}
            sizes="(max-width: 1279px) 100vw, 1240px"
            className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 grid gap-6 p-6 sm:p-9 lg:grid-cols-12 lg:items-end lg:p-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/72">
              <span className="rounded-full bg-[#d2f34c] px-3 py-1.5 text-[#070a12]">{latestLabel}</span>
              <span>{category}</span>
              <span>{year}</span>
            </div>
            <h2 className="mt-4 text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.84] tracking-[-0.072em] text-white transition-colors duration-300 group-hover:text-[#d2f34c]">
              {title}
            </h2>
          </div>
          <div className="flex items-end gap-5 lg:col-span-4">
            <p className="max-w-[390px] text-sm leading-6 text-white/68 sm:text-base">
              {overview}
            </p>
            <span className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/28 bg-white/10 text-white backdrop-blur-md transition-[background-color,border-color,color,transform] duration-300 group-hover:rotate-45 group-hover:border-[#d2f34c] group-hover:bg-[#d2f34c] group-hover:text-[#070a12]">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
