"use client";

import { trackConversion } from "@/lib/analytics";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";

const whatsappUrl = `https://wa.me/6285199391215?text=${encodeURIComponent("Halo Hammad Studio, saya ingin konsultasi pembuatan website.")}`;

export function StickyWhatsAppCTA() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackConversion("whatsapp_click", { placement: "global_floating_cta" })}
      className="whatsapp-float group fixed bottom-4 right-4 z-[55] flex h-14 items-center justify-center rounded-full border border-white/35 bg-[#25d366] px-4 text-white shadow-[0_16px_45px_rgba(10,92,48,.38)] transition duration-300 hover:-translate-y-1 hover:bg-[#20c45c] hover:shadow-[0_22px_55px_rgba(10,92,48,.5)] sm:bottom-6 sm:right-6 sm:h-16 sm:gap-3 sm:px-5"
      aria-label="Konsultasi gratis melalui WhatsApp"
    >
      <span className="absolute inset-0 -z-10 rounded-full border border-[#25d366]/65 motion-safe:animate-ping" aria-hidden="true" />
      <WhatsappLogo className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" weight="fill" />
      <span className="hidden pr-1 text-left sm:block">
        <span className="block text-[.62rem] font-medium leading-none text-white/72">Butuh website?</span>
        <span className="mt-1 block text-sm font-bold leading-none">Chat WhatsApp</span>
      </span>
    </a>
  );
}
