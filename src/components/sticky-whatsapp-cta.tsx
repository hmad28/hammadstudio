"use client";

import { trackConversion } from "@/lib/analytics";
import { ArrowUpRightIcon } from "./icons";

const whatsappUrl = "https://wa.me/6285199391215?text=Halo%20Hammad%20Studio%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20website.";

export function StickyWhatsAppCTA() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackConversion("whatsapp_click", { placement: "sticky_service_cta" })}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#070a12] px-4 py-3 text-xs font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:bg-black sm:bottom-6 sm:right-6 sm:px-5 sm:text-sm"
      aria-label="Diskusikan project melalui WhatsApp"
    >
      Diskusi via WhatsApp <ArrowUpRightIcon className="h-4 w-4 text-[#d2f34c]" />
    </a>
  );
}
