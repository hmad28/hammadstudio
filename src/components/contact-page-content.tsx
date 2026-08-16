"use client";

import { cloneElement, FormEvent, useState } from "react";
import { ClockCountdown } from "@phosphor-icons/react/ClockCountdown";
import { EnvelopeSimple } from "@phosphor-icons/react/EnvelopeSimple";
import { MapPin } from "@phosphor-icons/react/MapPin";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";
import { trackConversion } from "@/lib/analytics";

const whatsappNumber = "6285199391215";

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
  budgets: ["Di bawah Rp 1 juta", "Rp 1–2,5 juta", "Rp 2,5–5 juta", "Rp 5–10 juta", "Rp 10 juta+", "Belum ditentukan / Not decided"],
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
      <section className="relative min-h-[820px] overflow-hidden bg-[#070a12] pb-20 pt-36 text-white sm:min-h-[860px] sm:pb-24 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-44 top-12 h-[38rem] w-[38rem] rounded-full border-[90px] border-[#8057ff]/25 shadow-[0_0_180px_rgba(128,87,255,.22)]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-5rem] right-[8vw] font-[family-name:var(--font-instrument-serif)] text-[24rem] italic leading-none text-white/[.025]" aria-hidden="true">?</div>

        <div className="site-container relative z-10">
          <MotionReveal>
            <div className="flex items-center justify-between border-b border-white/14 pb-5">
              <span className="label-mono !text-[.78rem] text-[#d2f34c]">CONTACT · JAKARTA</span>
              <span className="hidden items-center gap-2 text-sm text-white/52 sm:flex"><span className="availability-dot" /> Available for selected projects</span>
            </div>

            <div className="grid gap-14 pt-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="max-w-[920px] text-[clamp(4.3rem,9.3vw,9.2rem)] font-[530] leading-[.79] tracking-[-.077em] text-white">
                  Punya ide?
                  <br />
                  <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#d2f34c]">Kita bikin nyata.</span>
                </h1>
                <p className="mt-9 max-w-[620px] text-lg leading-8 text-white/62 sm:text-xl">
                  Website, e-commerce, atau sistem bisnis. Mulai dari cerita singkat—brief lengkap bisa menyusul.
                </p>
              </div>

              <div className="grid gap-px bg-white/12 lg:col-span-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Hammad Studio, saya ingin konsultasi project.")}`}
                  onClick={() => trackConversion("whatsapp_click", { placement: "contact_hero" })}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-[#d2f34c] p-5 text-[#070a12] transition hover:bg-white"
                >
                  <span className="flex items-center gap-3 text-base font-semibold"><WhatsappLogo size={24} weight="fill" /> WhatsApp</span>
                  <ArrowUpRightIcon className="button-arrow h-5 w-5" />
                </a>
                <a href="mailto:hello@hammad.studio" className="group flex items-center justify-between bg-white/[.055] p-5 text-white transition hover:bg-white/10">
                  <span className="flex items-center gap-3 text-base font-semibold"><EnvelopeSimple size={24} /> Email</span>
                  <ArrowUpRightIcon className="button-arrow h-5 w-5 text-[#d2f34c]" />
                </a>
                <div className="grid grid-cols-2 gap-px bg-white/12">
                  <div className="bg-[#0b0d16] p-5"><MapPin size={21} className="text-[#9b7dff]" /><p className="mt-3 text-sm text-white/62">Jakarta</p></div>
                  <div className="bg-[#0b0d16] p-5"><ClockCountdown size={21} className="text-[#9b7dff]" /><p className="mt-3 text-sm text-white/62">Fast response</p></div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-2 border-t border-white/14 pt-6 text-sm text-white/48">
              {["Website", "E-Commerce", "Business System", "Custom Software"].map((item) => <span key={item} className="border border-white/12 px-3 py-2">{item}</span>)}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2f0e9] py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full border-[42px] border-[#8057ff]/8" aria-hidden="true" />
        <div className="site-container relative">
          <div className="grid overflow-hidden border border-black/14 lg:grid-cols-12">
            <MotionReveal className="relative overflow-hidden bg-[#d2f34c] p-7 text-[#111318] sm:p-10 lg:col-span-4 lg:min-h-[760px]">
              <span className="font-mono text-xs font-semibold tracking-[.12em]">BRIEF / 01</span>
              <h2 className="mt-8 max-w-[360px] text-[clamp(3rem,5vw,5.3rem)] font-[540] leading-[.86] tracking-[-.065em]">
                Isi yang
                <br />
                <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">penting aja.</span>
              </h2>
              <p className="mt-7 max-w-[330px] text-base leading-7 text-black/66">Empat informasi wajib: nama, kontak, kebutuhan, dan gambaran singkat project.</p>

              <div className="mt-12 grid gap-px bg-black/16">
                {["Kirim brief", "Kami review", "Lanjut konsultasi"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 bg-[#d2f34c] py-4">
                    <span className="font-mono text-xs text-black/42">0{index + 1}</span>
                    <span className="text-base font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-black/18 pt-6 lg:absolute lg:bottom-10 lg:left-10 lg:right-10">
                <p className="text-sm text-black/50">Lebih nyaman ngobrol langsung?</p>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-lg font-semibold">+62 851-9939-1215 <ArrowUpRightIcon className="h-4 w-4" /></a>
              </div>
            </MotionReveal>

            <MotionReveal className="bg-white p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <div className="mb-10 flex items-end justify-between gap-5 border-b border-black/12 pb-6">
                <div><p className="font-mono text-xs font-semibold tracking-[.1em] text-[#8057ff]">PROJECT INQUIRY</p><h2 className="mt-2 text-3xl font-[550] tracking-[-.045em] sm:text-4xl">Ceritakan project Anda.</h2></div>
                <span className="hidden font-mono text-xs text-black/35 sm:block">* WAJIB</span>
              </div>
              <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
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
                      className="group flex w-full items-center justify-between bg-[#070a12] px-6 py-5 text-base font-semibold text-white transition hover:bg-[#8057ff] active:scale-[.99] sm:w-auto sm:min-w-[260px]"
                    >
                      {content.submit[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                    </button>
                  </div>
                </form>
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
    className: "min-h-12 w-full border-0 border-b-2 border-black/15 bg-transparent px-0 py-3 text-lg font-medium text-[#17181d] outline-none transition-colors placeholder:text-black/30 focus:border-[#8057ff] focus:ring-0",
  });
  return (
    <label className={wide ? "sm:col-span-2" : ""}>
      <span className="label-mono !text-[.76rem] font-bold text-[#565a66]">
        {label}{required ? " *" : ""}
      </span>
      <span className="mt-2 block">{child}</span>
    </label>
  );
}
