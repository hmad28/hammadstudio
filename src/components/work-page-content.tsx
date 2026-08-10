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
    <div className="work-surface-v2 min-h-screen pb-28 pt-36 text-white sm:pb-36 sm:pt-44">
      {/* Background Ambient Purple/Indigo Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(91,55,213,0.35)_0%,rgba(40,100,255,0.2)_50%,transparent_70%)] blur-3xl" aria-hidden="true" />

      <div className="site-container relative z-10">
        <MotionReveal className="grid gap-8 pb-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
          <div>
            <span className="label-mono acid-glow-badge inline-block rounded-full px-3.5 py-1 text-[0.68rem]">
              {copy.label[locale]}
            </span>
            <h1 className="mt-5 max-w-[820px] text-[clamp(3.7rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.068em] text-white">
              {copy.title[locale]}
            </h1>
          </div>
          <p className="body-copy max-w-[540px] text-white/60 lg:ml-auto">
            {copy.intro[locale]}
          </p>
        </MotionReveal>

        <MotionReveal>
          <ProjectCard
            slug={workSlugs[0]}
            title={featured.title}
            image={featured.image}
            category={featured.category[locale]}
            year={featured.year}
            label={copy.featured[locale]}
            featured
          />
        </MotionReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((slug, index) => {
            const project = workProjects[slug];
            return (
              <MotionReveal key={slug} delay={index * 0.06}>
                <ProjectCard
                  slug={slug}
                  title={project.title}
                  image={project.image}
                  category={project.category[locale]}
                  year={project.year}
                  label={`0${index + 2}`}
                />
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  slug,
  title,
  image,
  category,
  year,
  label,
  featured = false,
}: {
  slug: string;
  title: string;
  image: string;
  category: string;
  year: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div
        className={`luxury-dark-card relative overflow-hidden rounded-2xl p-1.5 shadow-[0_35px_90px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-[#d2f34c]/45 ${
          featured ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"
        }`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes={featured ? "(max-width: 1240px) 100vw, 1240px" : "(max-width: 768px) 100vw, 600px"}
            className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/30 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

          {/* Category Badge Pill */}
          <span className="purple-glow-badge absolute left-5 top-5 inline-block rounded-full px-3.5 py-1 text-[0.65rem] font-bold backdrop-blur-md">
            {label} · {category}
          </span>

          {/* Action Button */}
          <span className="acid-button absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-black shadow-xl transition-transform duration-500 group-hover:scale-110">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>

          {/* Bottom Title */}
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
            <div>
              <span className="text-xs font-mono text-white/50">{year}</span>
              <h2 className={`${featured ? "text-[clamp(2.2rem,4.5vw,4.2rem)]" : "text-[clamp(1.8rem,3vw,2.8rem)]"} mt-1 font-[520] leading-none tracking-[-0.05em] text-white`}>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
