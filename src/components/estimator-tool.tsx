"use client";

import { useMemo, useState } from "react";
import { calculateEstimate, formatIDR } from "@/lib/estimator";
import { packages } from "@/lib/site-data";
import type { EstimatorSelection, Locale } from "@/lib/types";
import { localHref } from "@/lib/locale";

const initial: EstimatorSelection = { packageId: "business", pages: 6, cms: true, multilingual: false, authentication: false, dashboard: false, payment: false, integrations: 0, advancedMotion: false, contentMigration: false, priority: false };

export function ProjectEstimator({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const [selection, setSelection] = useState(initial);
  const result = useMemo(() => calculateEstimate(selection), [selection]);
  const toggle = (key: keyof EstimatorSelection) => setSelection((value) => ({ ...value, [key]: !value[key] }));
  const send = () => {
    sessionStorage.setItem("hammad-estimate", JSON.stringify(selection));
    window.location.href = localHref(locale, "/start-project?source=estimate");
  };
  const capabilities: [keyof EstimatorSelection, string][] = [
    ["cms", "CMS"], ["multilingual", id ? "Bahasa tambahan" : "Additional language"],
    ["authentication", "Authentication & roles"], ["dashboard", "Custom dashboard"],
    ["payment", "Payment integration"], ["advancedMotion", "Advanced motion"],
    ["contentMigration", id ? "Migrasi konten" : "Content migration"], ["priority", "Priority delivery"],
  ];
  return <div className="tool-layout">
    <div className="tool-controls">
      <fieldset><legend>01 / {id ? "TIPE PROJECT" : "PROJECT TYPE"}</legend><div className="choice-grid">{packages.map((item) => <button type="button" className={selection.packageId === item.id ? "choice active" : "choice"} onClick={() => setSelection({ ...selection, packageId: item.id })} key={item.id}>{item.name}<small>{formatIDR(item.startingPrice)}+</small></button>)}</div></fieldset>
      <fieldset><legend>02 / {id ? "KOMPLEKSITAS" : "COMPLEXITY"}</legend>
        <label className="range-label"><span>{id ? "Perkiraan halaman" : "Estimated pages"}<b>{selection.pages}</b></span><input type="range" min="1" max="24" value={selection.pages} onChange={(e) => setSelection({ ...selection, pages: Number(e.target.value) })} /></label>
        <label className="range-label"><span>{id ? "Jumlah integrasi" : "Integrations"}<b>{selection.integrations}</b></span><input type="range" min="0" max="5" value={selection.integrations} onChange={(e) => setSelection({ ...selection, integrations: Number(e.target.value) })} /></label>
      </fieldset>
      <fieldset><legend>03 / {id ? "KAPABILITAS" : "CAPABILITIES"}</legend><div className="toggle-grid">{capabilities.map(([key,label]) => <label className="toggle" key={key}><input type="checkbox" checked={Boolean(selection[key])} onChange={() => toggle(key)} /><span>{label}</span><i /></label>)}</div></fieldset>
    </div>
    <aside className="estimate-card"><p className="kicker">{id ? "ESTIMASI INDIKATIF" : "INDICATIVE ESTIMATE"}</p><div className="estimate-number"><span>{formatIDR(result.minimum)}</span><i>—</i><span>{formatIDR(result.maximum)}</span></div><p>{id ? "Range ini adalah alat perencanaan, bukan quotation final. Scope final dikonfirmasi setelah kami memahami workflow dan constraint project." : "This range is a planning tool, not a final quotation. Final scope is confirmed after we understand the project workflow and constraints."}</p><ul>{result.assumptions.map((item) => <li key={item}>{item}</li>)}</ul><button className="silver-button" onClick={send}>{id ? "Kirim scope ini" : "Send this scope"}<span>↗</span></button></aside>
  </div>;
}
