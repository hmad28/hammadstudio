"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const projects = [
  { slug: "saudi-education-expo", title: "Saudi Education Expo", category: "event", year: "2026", image: "/images/work/saudi-education-expo.webp", className: "lg:col-span-12", ratio: "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]" },
  { slug: "umrah-operations-platform", title: "Umrah Operations Platform", category: "operations", year: "2026", image: "/images/work/operations-dashboard.webp", className: "lg:col-span-7", ratio: "aspect-[4/3]" },
  { slug: "ajwa-date-store", title: "Ajwa Date Store", category: "commerce", year: "2026", image: "/images/work/ajwa-date-store.webp", className: "lg:col-span-5 lg:mt-28", ratio: "aspect-[4/3] lg:aspect-[5/6]" },
] as const;

function ProjectCard({ project, index, category }: { project: (typeof projects)[number]; index: number; category: string }) {
  return (
    <MotionReveal className={project.className} delay={index === 0 ? 0 : 0.08}>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`project-frame relative overflow-hidden rounded-[8px] bg-[#151514] ${project.ratio}`}>
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes={index === 0 ? "(max-width: 1200px) 100vw, 1180px" : "(max-width: 1023px) 100vw, 680px"} className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
          <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#cfef57] text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-6 sm:top-6"><ArrowUpRightIcon className="h-4 w-4" /></span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-white/12 py-5 sm:py-6">
          <div>
            <p className="label-mono text-white/35">0{index + 1} / {category}</p>
            <h3 className="mt-2 text-[clamp(1.7rem,3vw,3.3rem)] font-[500] leading-none tracking-[-0.05em] text-[#f2f0e9]">{project.title}</h3>
          </div>
          <span className="self-end pb-1 text-xs text-white/40">{project.year}</span>
        </div>
      </Link>
    </MotionReveal>
  );
}

export function PortfolioSection() {
  const { locale } = useLocale();
  const copy = homeContent.work;

  return (
    <section id="work" className="scroll-mt-20 bg-[#0a0a09] py-24 text-white sm:py-32 lg:py-40">
      <div className="site-container">
        <MotionReveal className="grid gap-10 pb-14 lg:grid-cols-12 lg:items-end lg:gap-6 lg:pb-20">
          <div className="lg:col-span-3"><span className="label-mono text-white/38">{copy.label[locale]}</span></div>
          <div className="lg:col-span-7"><h2 className="text-[clamp(3.4rem,7vw,7.4rem)] font-[510] leading-[0.86] tracking-[-0.065em]">{copy.headline[locale]}<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#cfef57]">{copy.accent[locale]}</span></h2></div>
          <div className="lg:col-span-2 lg:text-right"><Link href="/work" className="group inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white">{copy.all[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
        </MotionReveal>

        <div className="grid gap-x-6 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} category={copy.categories[project.category][locale]} />)}
        </div>
      </div>
    </section>
  );
}
