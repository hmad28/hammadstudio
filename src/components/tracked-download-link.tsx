"use client";

import { trackConversion } from "@/lib/analytics";
import { ArrowUpRightIcon } from "./icons";

export function TrackedDownloadLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} download onClick={() => trackConversion("file_download", { file_name: href.split("/").pop() ?? href, placement: "service_hero" })} className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10">
      {label} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
    </a>
  );
}
