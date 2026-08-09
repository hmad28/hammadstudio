"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import { workProjects, workSlugs } from "@/lib/work-content";

const copy = {
  label: { id: "Karya pilihan", en: "Selected work" },
  title: { id: "Karya yang\nsudah kami bangun.", en: "Work we have\nbrought to life." },
  intro: { id: "Visual adalah pintu masuk. Setiap case study menjelaskan masalah, solusi, scope, experience, dan hasil tanpa metric yang dibuat-buat.", en: "Visuals are the entry point. Each case study explains the problem, solution, scope, experience, and outcome without invented metrics." },
} as const;

export function WorkPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#0a0a09] pb-28 pt-36 text-white sm:pb-36 sm:pt-44">
      <div className="site-container">
        <MotionReveal className="grid gap-9 border-b border-white/12 pb-16 lg:grid-cols-12 lg:gap-6"><div className="lg:col-span-3"><span className="label-mono text-[#cfef57]">{copy.label[locale]}</span></div><div className="lg:col-span-7"><h1 className="whitespace-pre-line text-[clamp(3.8rem,8vw,8rem)] font-[520] leading-[0.84] tracking-[-0.07em]">{copy.title[locale]}</h1></div><p className="max-w-[300px] self-end text-sm leading-[1.65] text-white/45 lg:col-span-2">{copy.intro[locale]}</p></MotionReveal>
        <div className="mt-16 grid gap-20 sm:mt-24">
          {workSlugs.map((slug, index) => {
            const project = workProjects[slug];
            return <MotionReveal key={slug}><Link href={`/work/${slug}`} className="group block"><div className={`project-frame relative overflow-hidden rounded-[8px] bg-[#151514] ${index === 0 ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3] sm:aspect-[16/8]"}`}><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 1240px) 100vw, 1240px" className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]" /><span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#cfef57] text-black transition-transform duration-500 group-hover:rotate-45"><ArrowUpRightIcon className="h-4 w-4" /></span></div><div className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/12 py-6"><div><p className="label-mono text-white/32">0{index + 1} / {project.category[locale]}</p><h2 className="mt-2 text-[clamp(2rem,4vw,4rem)] font-[510] leading-none tracking-[-0.055em]">{project.title}</h2></div><span className="self-end text-xs text-white/35">{project.year}</span></div></Link></MotionReveal>;
          })}
        </div>
      </div>
    </div>
  );
}
