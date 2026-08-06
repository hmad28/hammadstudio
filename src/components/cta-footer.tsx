import Link from "next/link";
import { ArrowUpRightIcon, HammadStudioLogo } from "./icons";

const projectUrl = "https://wa.me/6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20ingin%20memulai%20project";

export function CTAFooter() {
  return (
    <footer className="bg-[#050505] text-white">
      <section className="bg-[#f4f2ec] px-5 pb-0 pt-2 text-[#080808] sm:px-8">
        <div className="reveal mx-auto max-w-[1280px] rounded-t-[18px] border border-black/[.07] bg-[radial-gradient(70%_90%_at_50%_0%,#fff_0%,#f5f4f0_52%,#e7e5df_100%)] px-5 py-16 text-center shadow-[inset_0_1px_0_white] sm:py-20 lg:py-24">
          <h2 className="text-[clamp(2.55rem,5vw,4.5rem)] font-[500] leading-[.98] tracking-[-.05em]">Got a project<br className="sm:hidden" /> in mind?</h2>
          <p className="mx-auto mt-5 max-w-[560px] text-sm leading-[1.6] text-[#5e5e5a] sm:text-base">Tell us what you&apos;re building. We&apos;ll help figure out the best way to make it happen.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={projectUrl} target="_blank" rel="noreferrer" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#080808] px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto">
              Start a Project <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </a>
            <a href="mailto:hello@hammad.studio" className="inline-flex w-full items-center justify-center rounded-xl border border-black/15 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-black/[.04] sm:w-auto">hello@hammad.studio</a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[.08] py-12 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 bottom-[-3vw] text-center text-[12vw] font-semibold leading-none tracking-[-.07em] text-white/[.028]" aria-hidden="true">HAMMAD.STUDIO</div>
        <div className="site-container relative z-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <Link href="/"><HammadStudioLogo /></Link>
              <p className="mt-3 text-xs leading-[1.55] text-[#8e8e8a]">Digital Product &amp; Software Studio.</p>
            </div>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-[#a8a8a4] sm:col-span-1 lg:col-span-3" aria-label="Footer navigation">
              <Link href="/#services" className="hover:text-white">Services</Link>
              <Link href="/#work" className="hover:text-white">Work</Link>
              <Link href="/#pricing" className="hover:text-white">Pricing</Link>
              <Link href="/about" className="hover:text-white">Studio</Link>
            </nav>
            <div className="lg:col-span-4 lg:text-right">
              <a href="mailto:hello@hammad.studio" className="text-xs text-[#ddddda] transition-colors hover:text-white">hello@hammad.studio</a>
              <p className="mt-2 text-[0.68rem] text-[#747471]">Depok &amp; Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/[.08] pt-5 text-[0.65rem] text-[#686865] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HAMMAD.STUDIO</p>
            <p>Digital Product &amp; Software Studio</p>
          </div>
        </div>
      </section>
    </footer>
  );
}