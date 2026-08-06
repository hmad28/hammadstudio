import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const projectUrl = "https://wa.me/6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20ingin%20memulai%20project";

export function HeroSection() {
  return (
    <section id="hero" className="hero-surface relative overflow-hidden pb-0 pt-36 text-white sm:pt-40 lg:pt-44">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] to-transparent" aria-hidden="true" />

      <div className="site-container relative z-10 flex flex-col items-center text-center">
        <h1 className="max-w-[1000px] text-[clamp(3.3rem,6.2vw,6.25rem)] font-[560] leading-[.94] tracking-[-.058em] text-[#fafaf8]">
          <span className="hero-line"><span>We design and build</span></span>
          <span className="hero-line"><span>digital products.</span></span>
        </h1>

        <div className="hero-support mt-6 flex flex-col items-center sm:mt-7">
          <p className="max-w-[570px] text-[0.95rem] leading-[1.55] text-[#b8b8b4] sm:text-[1.05rem]">
            Websites, e-commerce, business systems, and custom software for growing businesses.
          </p>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a href={projectUrl} target="_blank" rel="noreferrer" className="silver-button group inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold sm:w-auto">
              Start a Project
              <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </a>
            <Link href="#work" className="group inline-flex w-full items-center justify-center rounded-xl border border-white/18 bg-white/[.015] px-7 py-3.5 text-sm font-medium text-[#f1f1ee] transition-all duration-200 hover:border-white/30 hover:bg-white/[.07] sm:w-auto">
              View Our Work
            </Link>
          </div>
          <p className="mt-3.5 text-[0.68rem] font-medium tracking-[.02em] text-[#8e8e8a]">Projects starting from Rp3.5M</p>
        </div>

        <div className="hero-showcase relative mt-9 h-[290px] w-[calc(100%+52px)] max-w-[1120px] sm:mt-10 sm:h-[390px] sm:w-full lg:h-[420px]">
          <div className="absolute left-[-2%] top-[15%] h-[69%] w-[31%] overflow-hidden rounded-[14px] border border-white/12 bg-[#111] opacity-75 shadow-[0_30px_80px_rgba(0,0,0,.45)] sm:left-0 sm:opacity-90">
            <Image src="/images/work/ajwa-date-store.webp" alt="Ajwa Date Store website project preview" fill priority sizes="(max-width: 640px) 35vw, 350px" className="object-cover object-top" />
          </div>
          <div className="absolute right-[-2%] top-[15%] h-[69%] w-[31%] overflow-hidden rounded-[14px] border border-white/12 bg-[#111] opacity-75 shadow-[0_30px_80px_rgba(0,0,0,.45)] sm:right-0 sm:opacity-90">
            <Image src="/images/work/operations-dashboard.webp" alt="Operations dashboard project preview" fill priority sizes="(max-width: 640px) 35vw, 350px" className="object-cover object-top" />
          </div>
          <div className="group absolute left-1/2 top-0 z-10 h-[86%] w-[72%] -translate-x-1/2 overflow-hidden rounded-[14px] border border-white/15 bg-[#0d0d0d] shadow-[0_38px_100px_rgba(0,0,0,.62)] sm:w-[62%]">
            <Image src="/images/work/saudi-education-expo.webp" alt="Saudi Education Expo event platform preview" fill priority sizes="(max-width: 640px) 80vw, 720px" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.012]" />
          </div>
          <div className="absolute bottom-0 left-[9%] right-[9%] h-[18%] rounded-[50%] bg-white/[.055] blur-3xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}