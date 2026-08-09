"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import type { WorkSlug } from "@/lib/work-content";
import { workProjects } from "@/lib/work-content";

const labels = {
  overview: { id: "Overview", en: "Overview" }, challenge: { id: "Challenge", en: "Challenge" }, built: { id: "What we built", en: "What we built" }, experience: { id: "Experience", en: "Experience" }, features: { id: "Key features", en: "Key features" }, flow: { id: "System / flow", en: "System / flow" }, outcome: { id: "Outcome", en: "Outcome" }, next: { id: "Project berikutnya", en: "Next project" },
} as const;

export function ProjectDetailPage({ slug }: { slug: WorkSlug }) {
  const { locale } = useLocale();
  const project = workProjects[slug];
  const nextProject = workProjects[project.next];
  const flow = project.features.slice(0, 4);

  return (
    <article className="bg-[#f0eee7] text-[#0a0a09]">
      <header className="bg-[#0a0a09] pb-14 pt-36 text-white sm:pt-44"><div className="site-container"><span className="label-mono text-[#cfef57]">{project.category[locale]} / {project.year}</span><h1 className="mt-7 max-w-[1150px] text-[clamp(4rem,10vw,10rem)] font-[520] leading-[0.8] tracking-[-0.075em]">{project.title}</h1></div></header>
      <div className="bg-[#0a0a09] pb-20 sm:pb-28"><div className="site-container"><div className="project-frame relative aspect-[4/3] overflow-hidden rounded-[8px] sm:aspect-[2/1]"><Image src={project.image} alt={`${project.title} project mockup`} fill priority sizes="(max-width: 1240px) 100vw, 1240px" className="object-cover object-top" /></div></div></div>

      <section className="py-24 sm:py-32"><div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-6"><div className="lg:col-span-3"><span className="label-mono text-black/38">{labels.overview[locale]}</span></div><div className="space-y-16 lg:col-span-9"><MotionReveal><p className="max-w-[900px] text-[clamp(2rem,4.5vw,4.2rem)] font-[500] leading-[1.02] tracking-[-0.05em]">{project.overview[locale]}</p></MotionReveal><div className="grid gap-10 border-t border-black/15 pt-8 sm:grid-cols-2"><MotionReveal><span className="label-mono text-black/35">{labels.challenge[locale]}</span><p className="mt-4 text-base leading-[1.7] text-black/58">{project.challenge[locale]}</p></MotionReveal><MotionReveal delay={0.06}><span className="label-mono text-black/35">{labels.built[locale]}</span><p className="mt-4 text-base leading-[1.7] text-black/58">{project.built[locale]}</p></MotionReveal></div></div></div></section>

      <section className="bg-[#e8e5dc] py-24 sm:py-32"><div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-6"><MotionReveal className="lg:col-span-5"><span className="label-mono text-black/38">{labels.experience[locale]}</span><p className="mt-6 text-[clamp(2rem,4vw,3.7rem)] font-[500] leading-[1.05] tracking-[-0.05em]">{project.experience[locale]}</p></MotionReveal><MotionReveal className="lg:col-span-7" delay={0.06}><span className="label-mono text-black/38">{labels.features[locale]}</span><div className="mt-6 grid border-l border-t border-black/15 sm:grid-cols-2">{project.features.map((feature, index) => <div key={feature} className="min-h-28 border-b border-r border-black/15 p-5"><span className="text-[0.6rem] text-black/28">0{index + 1}</span><p className="mt-6 text-sm font-[520]">{feature}</p></div>)}</div></MotionReveal></div></section>

      <section className="py-24 sm:py-32"><div className="site-container"><span className="label-mono text-black/38">{labels.flow[locale]}</span><div className="mt-7 flex flex-col border-l border-t border-black/15 sm:flex-row">{flow.map((step, index) => <div key={step} className="flex min-h-28 flex-1 items-center justify-between border-b border-r border-black/15 p-5"><span className="text-sm font-[520]">{step}</span>{index < flow.length - 1 ? <span className="text-black/25">→</span> : null}</div>)}</div><MotionReveal className="mt-16 grid gap-6 border-t border-black/15 pt-8 lg:grid-cols-12"><span className="label-mono text-black/38 lg:col-span-3">{labels.outcome[locale]}</span><p className="max-w-[780px] text-xl leading-[1.55] text-black/62 lg:col-span-9">{project.outcome[locale]}</p></MotionReveal></div></section>

      <section className="bg-[#cfef57] py-20"><Link href={`/work/${nextProject.slug}`} className="site-container group flex items-end justify-between gap-5"><div><span className="label-mono text-black/45">{labels.next[locale]}</span><h2 className="mt-5 text-[clamp(2.8rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em]">{nextProject.title}</h2></div><span className="mb-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45 sm:h-20 sm:w-20"><ArrowUpRightIcon className="h-5 w-5" /></span></Link></section>
    </article>
  );
}
