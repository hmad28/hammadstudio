"use client";

import { cloneElement, FormEvent, useState } from "react";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import { trackConversion } from "@/lib/analytics";

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

    trackConversion("generate_lead", { channel: "whatsapp_form", project_type: form.need });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-[#f7f5ef] text-[#17181d]">
      {/* Dark Midnight Hero Header */}
      <section className="relative overflow-hidden bg-[#070a12] pb-16 pt-36 text-white sm:pb-24 sm:pt-44">
        {/* Cobalt & Violet Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(40,100,255,0.4)_0%,rgba(128,87,255,0.3)_50%,transparent_70%)] blur-3xl" aria-hidden="true" />

        <div className="site-container relative z-10">
          <MotionReveal className="grid gap-8 lg:grid-cols-12 lg:gap-6">
            <span className="label-mono acid-glow-badge inline-block rounded-full px-3.5 py-1 text-[0.68rem] lg:col-span-3 w-fit">
              {content.label[locale]}
            </span>
            <div className="lg:col-span-9">
              <h1 className="max-w-[940px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em] text-white">
                {content.title[locale]}{" "}
                <span className="bg-gradient-to-r from-[#d2f34c] via-[#e2fd78] to-[#93c5fd] bg-clip-text font-[family-name:var(--font-instrument-serif)] font-normal italic text-transparent">
                  {content.accent[locale]}
                </span>
              </h1>
              <p className="mt-8 max-w-[650px] text-base leading-[1.7] text-white/65 sm:text-lg">
                {content.intro[locale]}
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Form Surface Area */}
      <section className="about-surface-v2 py-16 sm:py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 lg:gap-8">
            <MotionReveal className="lg:col-span-3">
              <span className="label-mono text-[#8057ff] font-bold">Brief / 01</span>
              <div className="mt-8 hidden lg:block">
                <p className="text-xs text-[#6d7180] font-mono">{content.direct[locale]}</p>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  onClick={() => trackConversion("whatsapp_click", { placement: "contact_sidebar" })}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-3 inline-flex items-center gap-2 border-b-2 border-[#8057ff] pb-1 text-sm font-bold text-[#8057ff]"
                >
                  {content.whatsapp[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                </a>
                <p className="mt-10 text-xs text-[#6d7180] font-mono">{content.email[locale]}</p>
                <a href="mailto:hello@hammad.studio" className="mt-2 inline-block text-sm font-bold text-[#17181d] hover:text-[#8057ff]">
                  hello@hammad.studio
                </a>
              </div>
            </MotionReveal>

            <MotionReveal className="mt-8 lg:col-span-9 lg:mt-0">
              <div className="surface-card rounded-2xl border border-[#dde0e7] bg-white p-8 sm:p-12 shadow-xl">
                <form onSubmit={handleSubmit} noValidate className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                  <Field label={content.fields.name[locale]} required>
                    <input value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" />
                  </Field>
                  <Field label={content.fields.company[locale]}>
                    <input value={form.company} onChange={(event) => updateField("company", event.target.value)} autoComplete="organization" />
                  </Field>
                  <Field label={content.fields.contact[locale]} required>
                    <input value={form.contact} onChange={(event) => updateField("contact", event.target.value)} autoComplete="email" />
                  </Field>
                  <Field label={content.fields.need[locale]} required>
                    <select value={form.need} onChange={(event) => updateField("need", event.target.value)}>
                      <option value="">—</option>
                      {content.needs.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>
                  <Field label={content.fields.project[locale]} required wide>
                    <textarea value={form.project} onChange={(event) => updateField("project", event.target.value)} rows={6} />
                  </Field>
                  <Field label={content.fields.budget[locale]}>
                    <select value={form.budget} onChange={(event) => updateField("budget", event.target.value)}>
                      <option value="">—</option>
                      {content.budgets.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>
                  <Field label={content.fields.timeline[locale]}>
                    <select value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)}>
                      <option value="">—</option>
                      {content.timelines.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>
                  <div className="sm:col-span-2 pt-4">
                    {error && <p role="alert" className="mb-4 border-l-2 border-red-500 pl-3 text-sm font-semibold text-red-600">{error}</p>}
                    <button
                      type="submit"
                      className="acid-button group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {content.submit[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10 border-t border-black/10 pt-8 lg:hidden">
                <p className="text-sm text-[#6d7180]">{content.direct[locale]}</p>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  onClick={() => trackConversion("whatsapp_click", { placement: "contact_mobile" })}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-3 inline-flex items-center gap-2 border-b-2 border-[#8057ff] pb-1 text-sm font-bold text-[#8057ff]"
                >
                  {content.whatsapp[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                </a>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactElement<{ className?: string; required?: boolean; "aria-label"?: string }> }) {
  const child = cloneElement(children, {
    required,
    "aria-label": label,
    className: "w-full border-0 border-b-2 border-black/15 bg-transparent px-0 py-3 text-base font-medium text-[#17181d] outline-none transition-colors placeholder:text-black/30 focus:border-[#8057ff] focus:ring-0",
  });
  return (
    <label className={wide ? "sm:col-span-2" : ""}>
      <span className="label-mono text-[#6d7180] font-bold">
        {label}{required ? " *" : ""}
      </span>
      <span className="mt-2 block">{child}</span>
    </label>
  );
}
