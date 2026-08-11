"use client";

import Image from "next/image";
import Link from "next/link";
import { priorityCaseStudySlugs, selectedWorkSlugs, workProjects } from "@/lib/work-content";
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
    id: "Website, platform, dan sistem yang dirancang untuk bisnis, komunitas, dan organisasi dari berbagai industri.",
    en: "Websites, platforms, and systems designed for businesses, communities, and organisations across industries.",
  },
  view: { id: "Lihat studi kasus", en: "View case study" },
} as const;

const projectLayouts = [
  {
    wrapper: "md:col-span-7",
    image: "aspect-[4/3] sm:aspect-[16/11]",
    title: "text-[clamp(2.15rem,4vw,4rem)]",
  },
  {
    wrapper: "md:col-span-5 md:pt-24",
    image: "aspect-[4/3] sm:aspect-[5/4]",
    title: "text-[clamp(2rem,3.2vw,3.15rem)]",
  },
  {
    wrapper: "md:col-span-5",
    image: "aspect-[4/3] sm:aspect-[5/4]",
    title: "text-[clamp(2rem,3.2vw,3.15rem)]",
  },
  {
    wrapper: "md:col-span-7 md:pt-24",
    image: "aspect-[4/3] sm:aspect-[16/11]",
    title: "text-[clamp(2.15rem,4vw,4rem)]",
  },
  {
    wrapper: "md:col-span-7",
    image: "aspect-[4/3] sm:aspect-[16/11]",
    title: "text-[clamp(2.15rem,4vw,4rem)]",
  },
  {
    wrapper: "md:col-span-5 md:pt-24",
    image: "aspect-[4/3] sm:aspect-[5/4]",
    title: "text-[clamp(2rem,3.2vw,3.15rem)]",
  },
  {
    wrapper: "md:col-span-12",
    image: "aspect-[4/3] sm:aspect-[2/1]",
    title: "text-[clamp(2.5rem,5.2vw,5.5rem)]",
  },
] as const;

export function WorkPageContent() {
  const { locale } = useLocale();
  const orderedSlugs = [
    ...priorityCaseStudySlugs,
    ...selectedWorkSlugs.filter((slug) => !(priorityCaseStudySlugs as readonly string[]).includes(slug)),
  ];

  return (
    <main className="work-surface-v2 min-h-[100dvh] overflow-hidden pb-28 pt-28 text-white sm:pb-36 sm:pt-32 lg:pt-36">
      <div className="site-container">
        <MotionReveal className="max-w-[940px] pb-20 sm:pb-28 lg:pb-36">
          <span className="label-mono text-[#d2f34c]">{copy.label[locale]}</span>
          <h1 className="mt-6 text-[clamp(3.35rem,7.2vw,7.25rem)] font-[520] leading-[0.88] tracking-[-0.072em] text-[#f8f8f5] text-balance">
            {copy.title[locale]}
          </h1>
          <p className="body-copy mt-7 max-w-[630px] text-white/62">
            {copy.intro[locale]}
          </p>
        </MotionReveal>

        <div className="grid gap-x-6 gap-y-24 md:grid-cols-12 md:gap-y-32 lg:gap-x-10 lg:gap-y-40">
          {orderedSlugs.map((slug, index) => {
            const project = workProjects[slug];
            const layout = projectLayouts[index % projectLayouts.length];

            return (
              <MotionReveal
                key={slug}
                className={layout.wrapper}
                delay={index % 2 === 0 ? 0 : 0.06}
              >
                <ProjectCard
                  slug={slug}
                  title={project.title}
                  image={project.image}
                  category={project.category[locale]}
                  year={project.year}
                  description={project.overview[locale]}
                  imageClassName={layout.image}
                  titleClassName={layout.title}
                  priority={index === 0}
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
  description,
  imageClassName,
  titleClassName,
  priority,
  viewLabel,
}: {
  slug: string;
  title: string;
  image: string | null;
  category: string;
  year: string;
  description: string;
  imageClassName: string;
  titleClassName: string;
  priority: boolean;
  viewLabel: string;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      aria-label={`${viewLabel}: ${title}`}
      className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#d2f34c] active:translate-y-px"
    >
      <article>
        <div
          className={`${imageClassName} relative overflow-hidden rounded-2xl border border-white/12 bg-[#111217] shadow-[0_24px_70px_rgba(3,5,12,0.38)] transition-[border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:border-[#d2f34c]/48 group-hover:shadow-[0_34px_90px_rgba(3,5,12,0.5)]`}
        >
          {image ? (
            <Image
              src={image}
              alt={`${title} — ${category}`}
              fill
              priority={priority}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 720px"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
            />
          ) : (
            <div className="absolute inset-0 bg-[#111217]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070a12]/22 via-transparent to-white/[0.035]" />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/48">
              <span>{category}</span>
              <span className="text-white/72">{year}</span>
            </div>
            <h2
              className={`${titleClassName} mt-3 font-[520] leading-[0.94] tracking-[-0.055em] text-[#f8f8f5] transition-colors duration-300 group-hover:text-[#d2f34c]`}
            >
              {title}
            </h2>
            <p className="mt-4 max-w-[680px] text-sm leading-7 text-white/56 sm:text-base">
              {description}
            </p>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/18 text-white transition-[background-color,border-color,color,transform] duration-300 group-hover:rotate-45 group-hover:border-[#d2f34c] group-hover:bg-[#d2f34c] group-hover:text-[#070a12] sm:mt-1">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
