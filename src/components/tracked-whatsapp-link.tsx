"use client";

import { trackConversion } from "@/lib/analytics";
import { ArrowUpRightIcon } from "./icons";

export function TrackedWhatsAppLink({ href, label, placement }: { href: string; label: string; placement: string }) {
  return <a href={href} target="_blank" rel="noreferrer" onClick={() => trackConversion("whatsapp_click", { placement })} className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">{label} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></a>;
}
