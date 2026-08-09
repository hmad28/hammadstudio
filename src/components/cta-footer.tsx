import Link from "next/link";
import { ArrowUpRightIcon, HammadStudioLogo } from "./icons";
import { MotionReveal } from "./motion-reveal";

const projectUrl = "https://wa.me/6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20ingin%20memulai%20project";

export function CTAFooter() {
  return (
    <footer className="bg-[#0a0a09] text-white">
      <section className="overflow-hidden bg-[#cfef57] px-5 py-24 text-[#0a0a09] sm:px-8 sm:py-32 lg:py-40">
        <MotionReveal className="mx-auto max-w-[1240px]">
          <div className="flex items-center justify-between border-b border-black/20 pb-5"><span className="label-mono text-black/50">Have a project?</span><span className="label-mono hidden text-black/50 sm:block">Let&apos;s make it real</span></div>
          <a href={projectUrl} target="_blank" rel="noreferrer" className="group mt-9 flex items-end justify-between gap-5">
            <h2 className="text-[clamp(4rem,11vw,11rem)] font-[530] leading-[0.75] tracking-[-0.075em]">Let&apos;s<br /><span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">talk.</span></h2>
            <span className="mb-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 sm:mb-4 sm:h-20 sm:w-20"><ArrowUpRightIcon className="h-5 w-5 sm:h-7 sm:w-7" /></span>
          </a>
        </MotionReveal>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="site-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <Link href="/"><HammadStudioLogo /></Link>
              <p className="mt-4 max-w-[300px] text-sm leading-[1.6] text-white/42">Digital products with sharp thinking, expressive design, and reliable engineering.</p>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/45"><span className="availability-dot" /> Available for select projects</div>
            </div>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/55 lg:col-span-3" aria-label="Footer navigation">
              <Link href="/#services" className="hover:text-white">Services</Link><Link href="/#work" className="hover:text-white">Work</Link><Link href="/#pricing" className="hover:text-white">Pricing</Link><Link href="/about" className="hover:text-white">Studio</Link>
            </nav>
            <div className="lg:col-span-4 lg:text-right">
              <p className="label-mono text-white/30">New business</p>
              <a href="mailto:hello@hammad.studio" className="mt-3 inline-block text-lg tracking-[-0.03em] text-white/85 transition-colors hover:text-[#cfef57] sm:text-xl">hello@hammad.studio</a>
              <p className="mt-3 text-xs text-white/35">Depok &amp; Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.65rem] text-white/30 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} HAMMAD.STUDIO</p><p>Designing useful things for ambitious businesses.</p></div>
        </div>
        <div className="pointer-events-none mt-10 whitespace-nowrap text-center text-[13vw] font-semibold leading-[0.72] tracking-[-0.075em] text-white/[0.035]" aria-hidden="true">HAMMAD.STUDIO</div>
      </section>
    </footer>
  );
}
