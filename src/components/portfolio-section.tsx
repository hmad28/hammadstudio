"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const projects = [
  {
    slug: "saudi-education-expo",
    title: "Saudi Education Expo",
    category: "event",
    year: "2026",
    image: "/images/work/saudi-education-expo.webp",
    className: "lg:col-span-12",
    ratio: "aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9]",
  },
  {
    slug: "umrah-operations-platform",
    title: "Umrah Operations Platform",
    category: "operations",
    year: "2026",
    image: "/images/work/operations-dashboard.webp",
    className: "lg:col-span-6",
    ratio: "aspect-[16/10]",
  },
  {
    slug: "ajwa-date-store",
    title: "Ajwa Date Store",
    category: "commerce",
    year: "2026",
    image: "/images/work/ajwa-date-store.webp",
    className: "lg:col-span-6",
    ratio: "aspect-[16/10]",
  },
] as const;

function ProjectCard({
  project,
  index,
  category,
}: {
  project: (typeof projects)[number];
  index: number;
  category: string;
}) {
  return (
    <MotionReveal className={project.className} delay={index === 0 ? 0 : 0.08}>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`project-frame luxury-dark-card relative overflow-hidden rounded-2xl p-1 shadow-[0_30px_80px_rgba(0,0,0,0.8)] ${project.ratio}`}>
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes={index === 0 ? "(max-width: 1200px) 100vw, 1180px" : "(max-width: 1023px) 100vw, 580px"}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
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
    <section id="work" className="dark-mesh-surface relative scroll-mt-20 py-24 text-white sm:py-32 lg:py-36">
      {/* Background Ambient Violet Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.14)_0%,transparent_70%)] blur-3xl" aria-hidden="true" />

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
            {copy.all[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </MotionReveal>

        <div className="grid gap-6 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              category={copy.categories[project.category][locale]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


