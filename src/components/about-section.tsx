import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { MotionReveal } from "./motion-reveal";

const capabilities = ["Strategy", "Product Design", "Web Development", "Commerce", "Business Systems", "Custom Software"];

export function AboutSection() {
  return (
    <section className="overflow-hidden bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-36">
      <div className="site-container">
        <MotionReveal className="grid gap-9 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <span className="label-mono text-black/45">Studio / 01</span>
            <p className="mt-5 max-w-[190px] text-xs leading-[1.55] text-black/50">Depok + Jakarta<br />Working worldwide</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-[960px] text-[clamp(2.8rem,6.4vw,6.7rem)] font-[510] leading-[0.92] tracking-[-0.06em]">
              We make complex ideas feel <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic tracking-[-0.035em]">clear, useful,</span> and beautifully simple.
            </h2>
            <div className="mt-10 flex flex-col gap-6 border-t border-black/15 pt-6 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-[560px] text-base leading-[1.65] text-black/58 sm:text-lg">HAMMAD.STUDIO combines product thinking, interface design, and software engineering in one focused team. Less handoff, more clarity, better outcomes.</p>
              <Link href="/about" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold">Meet the studio <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
            </div>
          </div>
        </MotionReveal>
      </div>

      <div className="ticker mt-20 border-y border-black/10 py-5 sm:mt-28">
        <div className="ticker-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-7 whitespace-nowrap text-[clamp(1.5rem,2.4vw,2.4rem)] font-[500] tracking-[-0.04em]">
              {item}<span className="font-[family-name:var(--font-instrument-serif)] text-[#7f8c36]">&#10035;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
