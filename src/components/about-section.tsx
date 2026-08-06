import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

export function AboutSection() {
  return (
    <section className="bg-[#f4f2ec] pt-20 text-[#080808] sm:pt-20 lg:pt-24">
      <div className="site-container reveal grid gap-8 border-b border-black/10 pb-16 sm:pb-20 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-3">
          <span className="label-mono text-[#747471]">About / 01</span>
        </div>
        <div className="lg:col-span-9">
          <h2 className="max-w-[760px] text-[clamp(2.35rem,4.8vw,4.4rem)] font-[500] leading-[1.02] tracking-[-.045em]">Built around your business.</h2>
          <p className="mt-6 max-w-[640px] text-base leading-[1.6] text-[#555552] sm:text-lg">
            We design digital products around real business needs — from customer-facing websites to software that helps teams operate better.
          </p>
          <Link href="/about" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#080808]">
            About Hammad Studio
            <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}