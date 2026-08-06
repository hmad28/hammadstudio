import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata = {
  title: "Insights – Hammad Studio",
  description: "Notes on digital products, software, and building for the web from Hammad Studio.",
};

export default function InsightPage() {
  return (
    <div className="min-h-[70vh] bg-[#f4f2ec] px-5 pb-24 pt-40 text-[#080808]">
      <div className="mx-auto max-w-[780px]">
        <span className="label-mono text-[#747471]">Insights</span>
        <h1 className="mt-6 text-[clamp(2.8rem,7vw,5.5rem)] font-[500] leading-[.95] tracking-[-.055em]">Useful notes.<br />No filler.</h1>
        <p className="mt-7 max-w-[520px] text-base leading-[1.6] text-[#5f5f5b]">We&apos;re preparing a focused collection of practical notes on product design and software delivery.</p>
        <Link href="/" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold">Back to studio <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
      </div>
    </div>
  );
}