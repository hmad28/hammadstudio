import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { FlagBanner } from "@phosphor-icons/react/dist/ssr/FlagBanner";

export function MerdekaPromoBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 overflow-hidden bg-[#e3222b] text-white">
      <Link href="/harga-website" className="merdeka-promo-shine flex h-full items-center justify-center gap-2 px-4 text-center text-[.69rem] font-semibold tracking-[.035em] sm:text-xs">
        <FlagBanner aria-hidden="true" className="h-4 w-4 shrink-0" weight="fill" />
        <span><strong>MERDEKA DIGITAL SALE</strong><span className="hidden sm:inline"> — Harga website mulai Rp499K</span></span>
        <span className="hidden items-center gap-1 text-white/85 sm:inline-flex">Klaim promo <ArrowRight className="h-3.5 w-3.5" weight="bold" /></span>
      </Link>
    </div>
  );
}
