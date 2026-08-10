"use client";

import Image from "next/image";
import Link from "next/link";
import { workProjects, workSlugs } from "@/lib/work-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const copy = {
  label: { id: "Karya pilihan", en: "Selected work" },
  title: { id: "Karya yang sudah kami bangun.", en: "Work we have brought to life." },
  intro: { id: "Case study menjelaskan masalah, solusi, experience, dan hasil tanpa metric yang dibuat-buat.", en: "Each case study explains the problem, solution, experience, and outcome without invented metrics." },
  featured: { id: "Project utama", en: "Featured project" },
} as const;

export function WorkPageContent() {
  const { locale } = useLocale();
  const featured = workProjects[workSlugs[0]];
  const rest = workSlugs.slice(1);

  return (
    <div className="bg-[#0a0a09] pb-28 pt-36 text-white sm:pb-36 sm:pt-44">
      <div className="site-container">
        <MotionReveal className="grid gap-8 pb-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end"><div><span className="label-mono text-[#cfef57]">{copy.label[locale]}</span><h1 className="mt-5 max-w-[820px] text-[clamp(3.7rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.068em]">{copy.title[locale]}</h1></div><p className="body-copy max-w-[540px] text-white/48 lg:ml-auto">{copy.intro[locale]}</p></MotionReveal>

        <MotionReveal><ProjectCard slug={workSlugs[0]} title={featured.title} image={featured.image} category={featured.category[locale]} year={featured.year} label={copy.featured[locale]} featured /></MotionReveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">{rest.map((slug, index) => { const project = workProjects[slug]; return <MotionReveal key={slug} delay={index * 0.06}><ProjectCard slug={slug} title={project.title} image={project.image} category={project.category[locale]} year={project.year} label={`0${index + 2}`} /></MotionReveal>; })}</div>
      </div>
    </div>
  );
}

function ProjectCard({ slug, title, image, category, year, label, featured = false }: { slug: string; title: string; image: string; category: string; year: string; label: string; featured?: boolean }) {
  return <Link href={`/work/${slug}`} className="group block"><div className={`project-frame relative overflow-hidden rounded-[12px] bg-[#151514] ${featured ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"}`}><Image src={image} alt={`${title} project preview`} fill sizes={featured ? "(max-width: 1240px) 100vw, 1240px" : "(max-width: 768px) 100vw, 600px"} className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /><span className="label-mono absolute left-5 top-5 rounded-full bg-black/45 px-3 py-2 text-white/70 backdrop-blur-md">{label}</span><span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#cfef57] text-black transition-transform duration-500 group-hover:rotate-45"><ArrowUpRightIcon className="h-4 w-4" /></span></div><div className="flex items-end justify-between gap-4 py-5"><div><p className="label-mono text-white/35">{category}</p><h2 className={`${featured ? "text-[clamp(2rem,4vw,4rem)]" : "text-[clamp(1.8rem,3vw,2.8rem)]"} mt-2 font-[520] leading-none tracking-[-0.05em]`}>{title}</h2></div><span className="text-xs text-white/38">{year}</span></div></Link>;
}
