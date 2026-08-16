import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { FlagBanner } from "@phosphor-icons/react/dist/ssr/FlagBanner";

const whatsappHref = `https://wa.me/6285199391215?text=${encodeURIComponent("Halo Hammad Studio, saya melihat Promo Merdeka di website dan ingin klaim sekaligus konsultasi pembuatan website.")}`;

export function MerdekaPromoBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-10 overflow-hidden border-b border-white/15 bg-[linear-gradient(90deg,#710912_0%,#d91c26_28%,#ef2932_50%,#d91c26_72%,#710912_100%)] text-white shadow-[0_8px_24px_rgba(113,9,18,.22)]">
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-16 -skew-x-[28deg] bg-white/[.08] sm:left-[18%] sm:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-[7%] w-24 -skew-x-[28deg] bg-[#07111f]/18 sm:right-[16%]" aria-hidden="true" />
      <a href={whatsappHref} target="_blank" rel="noreferrer" className="merdeka-promo-shine site-container relative flex h-full items-center justify-center gap-2.5 text-center text-[.68rem] font-semibold tracking-[.035em] sm:justify-between sm:text-xs">
        <span className="hidden items-center gap-2 sm:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[.6rem] font-bold tracking-[.08em] text-[#a50f18]"><FlagBanner aria-hidden="true" className="h-3.5 w-3.5" weight="fill" />HUT RI 81</span>
          <strong className="tracking-[.08em]">MERDEKA DIGITAL SALE 2026</strong>
        </span>
        <span className="sm:hidden"><strong>MERDEKA SALE</strong> · WEBSITE MULAI Rp499K</span>
        <span className="hidden items-center gap-3 sm:flex">
          <span className="font-normal text-white/72">Hingga 31 Agustus</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#07111f] px-3 py-1.5 text-[.68rem] font-bold shadow-[inset_0_1px_0_rgba(255,255,255,.15)]">Klaim via WhatsApp <ArrowRight className="h-3.5 w-3.5" weight="bold" /></span>
        </span>
      </a>
    </div>
  );
}
