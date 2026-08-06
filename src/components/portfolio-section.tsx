import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const projects = [
  { title: "Saudi Education Expo", category: "Event Platform", year: "2026", image: "/images/work/saudi-education-expo.webp", featured: true },
  { title: "Umrah Operations Platform", category: "Operations System", year: "2026", image: "/images/work/operations-dashboard.webp" },
  { title: "Ajwa Date Store", category: "E-commerce", year: "2026", image: "/images/work/ajwa-date-store.webp" },
];

function ProjectCard({ project, supporting = false }: { project: (typeof projects)[number]; supporting?: boolean }) {
  return (
    <article className="group">
      <div className={`relative overflow-hidden rounded-[15px] bg-[#111] ${supporting ? "aspect-[16/9] lg:aspect-[16/7]" : "aspect-[16/10]"}`}>
        <Image src={project.image} alt={`${project.title} project preview`} fill sizes={supporting ? "(max-width: 1023px) 100vw, 470px" : "(max-width: 1023px) 100vw, 680px"} className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[.035]" />
      </div>
      <div className="flex items-start justify-between gap-5 pt-4">
        <div>
          <h3 className={`${project.featured ? "text-2xl sm:text-[1.75rem]" : "text-xl sm:text-[1.35rem]"} font-[520] leading-tight tracking-[-.035em] text-[#0a0a0a]`}>{project.title}</h3>
          <p className="mt-1.5 font-[family-name:var(--font-geist-mono)] text-[0.64rem] uppercase tracking-[.06em] text-[#747471]">{project.category} / {project.year}</p>
        </div>
        <ArrowUpRightIcon className="button-arrow mt-1 h-5 w-5 shrink-0 text-[#0a0a0a]" />
      </div>
    </article>
  );
}

export function PortfolioSection() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-black/10 bg-[#efeee9] py-20 text-[#080808] sm:py-24">
      <div className="site-container reveal">
        <div className="grid gap-5 pb-10 lg:grid-cols-12 lg:gap-6 lg:pb-12">
          <div className="lg:col-span-3"><span className="label-mono text-[#747471]">Selected Work / 03</span></div>
          <div className="flex items-end justify-between gap-6 lg:col-span-9">
            <h2 className="max-w-[640px] text-[clamp(2.5rem,5.2vw,4.7rem)] font-[500] leading-[.98] tracking-[-.05em]">A few things<br />we&apos;ve built.</h2>
            <Link href="/portofolio" className="group hidden items-center gap-2 pb-1 text-xs font-semibold sm:inline-flex">View all work <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7"><ProjectCard project={projects[0]} /></div>
          <div className="grid gap-12 lg:col-span-5 lg:gap-8">
            <ProjectCard project={projects[1]} supporting />
            <ProjectCard project={projects[2]} supporting />
          </div>
        </div>
        <Link href="/portofolio" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold sm:hidden">View all work <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
      </div>
    </section>
  );
}