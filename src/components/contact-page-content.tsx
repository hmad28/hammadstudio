"use client";

import { cloneElement, FormEvent, useState } from "react";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const whatsappNumber = "6287888362186";

const content = {
  label: { id: "Project inquiry", en: "Project inquiry" },
  title: { id: "Ceritakan apa yang ingin", en: "Tell us what you want to" },
  accent: { id: "Anda bangun.", en: "build." },
  intro: { id: "Belum punya brief lengkap? Tidak masalah. Ceritakan masalah, kebutuhan, atau idenya terlebih dahulu.", en: "No complete brief yet? That is fine. Start by telling us the problem, requirement, or idea." },
  fields: {
    name: { id: "Nama", en: "Name" },
    company: { id: "Perusahaan / organisasi", en: "Company / organization" },
    contact: { id: "Email atau WhatsApp", en: "Email or WhatsApp" },
    need: { id: "Jenis kebutuhan", en: "Type of project" },
    project: { id: "Tentang project", en: "About the project" },
    budget: { id: "Range budget", en: "Budget range" },
    timeline: { id: "Target timeline", en: "Target timeline" },
  },
  needs: ["Website", "E-Commerce", "Web Application", "Business System", "Automation & AI", "Custom Development", "Belum yakin / Not sure"],
  budgets: ["Rp 2,5–5 juta", "Rp 5–10 juta", "Rp 10–20 juta", "Rp 20 juta+", "Belum ditentukan / Not decided"],
  timelines: ["Secepatnya / As soon as possible", "1–2 bulan / months", "3–4 bulan / months", "Fleksibel / Flexible"],
  submit: { id: "Kirim project brief", en: "Send project brief" },
  validation: { id: "Lengkapi nama, kontak, jenis kebutuhan, dan cerita singkat project.", en: "Complete your name, contact, project type, and a short project summary." },
  direct: { id: "Lebih nyaman ngobrol langsung?", en: "Prefer a direct conversation?" },
  whatsapp: { id: "Buka WhatsApp", en: "Open WhatsApp" },
  email: { id: "Atau kirim email ke", en: "Or send an email to" },
} as const;

type FormData = {
  name: string;
  company: string;
  contact: string;
  need: string;
  project: string;
  budget: string;
  timeline: string;
};

const initialForm: FormData = { name: "", company: "", contact: "", need: "", project: "", budget: "", timeline: "" };

export function ContactPageContent() {
  const { locale } = useLocale();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.need || !form.project.trim()) {
      setError(content.validation[locale]);
      return;
    }

    const message = [
      "Halo Hammad Studio, saya ingin mendiskusikan project.",
      "",
      `Nama: ${form.name}`,
      `Perusahaan/organisasi: ${form.company || "-"}`,
      `Kontak: ${form.contact}`,
      `Kebutuhan: ${form.need}`,
      `Budget: ${form.budget || "Belum ditentukan"}`,
      `Timeline: ${form.timeline || "Fleksibel"}`,
      "",
      "Tentang project:",
      form.project,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-[#f0eee7] pb-28 pt-32 text-[#0a0a09] sm:pb-36 sm:pt-40">
      <div className="site-container">
        <MotionReveal className="grid gap-8 pb-16 lg:grid-cols-12 lg:gap-6 sm:pb-24">
          <span className="label-mono text-black/40 lg:col-span-3">{content.label[locale]}</span>
          <div className="lg:col-span-9"><h1 className="max-w-[940px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em]">{content.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.accent[locale]}</span></h1><p className="mt-8 max-w-[650px] text-base leading-[1.7] text-black/55 sm:text-lg">{content.intro[locale]}</p></div>
        </MotionReveal>

        <div className="grid border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-6">
          <MotionReveal className="lg:col-span-3"><p className="label-mono text-black/35">Brief / 01</p><div className="mt-8 hidden lg:block"><p className="text-sm text-black/45">{content.direct[locale]}</p><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="group mt-3 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold">{content.whatsapp[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></a><p className="mt-10 text-sm text-black/45">{content.email[locale]}</p><a href="mailto:hello@hammad.studio" className="mt-2 inline-block text-sm font-semibold">hello@hammad.studio</a></div></MotionReveal>

          <MotionReveal className="mt-10 lg:col-span-9 lg:mt-0">
            <form onSubmit={handleSubmit} noValidate className="grid gap-x-5 gap-y-8 sm:grid-cols-2">
              <Field label={content.fields.name[locale]} required><input value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" /></Field>
              <Field label={content.fields.company[locale]}><input value={form.company} onChange={(event) => updateField("company", event.target.value)} autoComplete="organization" /></Field>
              <Field label={content.fields.contact[locale]} required><input value={form.contact} onChange={(event) => updateField("contact", event.target.value)} autoComplete="email" /></Field>
              <Field label={content.fields.need[locale]} required><select value={form.need} onChange={(event) => updateField("need", event.target.value)}><option value="">—</option>{content.needs.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <Field label={content.fields.project[locale]} required wide><textarea value={form.project} onChange={(event) => updateField("project", event.target.value)} rows={6} /></Field>
              <Field label={content.fields.budget[locale]}><select value={form.budget} onChange={(event) => updateField("budget", event.target.value)}><option value="">—</option>{content.budgets.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <Field label={content.fields.timeline[locale]}><select value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)}><option value="">—</option>{content.timelines.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <div className="sm:col-span-2">
                {error && <p role="alert" className="mb-4 border-l-2 border-red-700 pl-3 text-sm text-red-800">{error}</p>}
                <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-[#0a0a09] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">{content.submit[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></button>
              </div>
            </form>
            <div className="mt-14 border-t border-black/15 pt-8 lg:hidden"><p className="text-sm text-black/45">{content.direct[locale]}</p><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="group mt-3 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold">{content.whatsapp[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></a></div>
          </MotionReveal>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactElement<{ className?: string; required?: boolean; "aria-label"?: string }> }) {
  const child = cloneElement(children, { required, "aria-label": label, className: "w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base text-black outline-none transition-colors placeholder:text-black/25 focus:border-black focus:ring-0" });
  return <label className={wide ? "sm:col-span-2" : ""}><span className="label-mono text-black/45">{label}{required ? " *" : ""}</span><span className="mt-2 block">{child}</span></label>;
}
