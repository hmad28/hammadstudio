"use client";

import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "FAQ · PERTANYAAN UMUM", en: "FAQ · FREQUENTLY ASKED" },
  title: { id: "Sebelum kita", en: "Before we" },
  accent: { id: "mulai.", en: "begin." },
  items: [
    {
      q: { id: "Berapa lama proses pengerjaan?", en: "How long does a project take?" },
      a: {
        id: "Website sederhana selesai dalam 2–3 minggu. Web application, e-commerce, dan system custom mengikuti scope, fitur, serta kesiapan konten.",
        en: "A standard website is completed in 2–3 weeks. Web applications and custom systems depend on feature scope and content readiness.",
      },
    },
    {
      q: { id: "Apakah domain dan hosting termasuk?", en: "Are domain and hosting included?" },
      a: {
        id: "Setup, deployment, dan konfigurasi SSL sudah termasuk. Biaya domain dan server/cloud dijelaskan transparan sebelum project dimulai.",
        en: "Deployment setup, SSL configuration, and domain routing are included. Infrastructure costs are detailed before starting.",
      },
    },
    {
      q: { id: "Apakah ada garansi & revisi?", en: "Are revisions and warranties included?" },
      a: {
        id: "Ya, setiap project mencakup milestone review round serta dukungan bug fixing pasca launch agar produk berjalan dengan lancar.",
        en: "Yes, each project includes structured review rounds and post-launch bug fixing support.",
      },
    },
    {
      q: { id: "Apakah source code dan akses diberikan penuh?", en: "Is full source code provided?" },
      a: {
        id: "Ya. Setelah pelunasan, seluruh kepemilikan source code, repository git, dan kredensial admin diserahkan sepenuhnya kepada Anda.",
        en: "Yes. Upon completion, full source code ownership, git repositories, and credentials are completely handed over to you.",
      },
    },
    {
      q: { id: "Bisa mulai dari website sederhana dulu?", en: "Can we start small and scale up later?" },
      a: {
        id: "Sangat bisa. Kami merancang arsitektur awal secara modular sehingga CMS, portal, e-commerce, atau fitur custom bisa dengan mudah ditambahkan nanti.",
        en: "Absolutely. We build with modular software architecture so CMS, e-commerce, or custom features can easily be added later.",
      },
    },
  ],
} as const;

export function FAQSection() {
  const { locale } = useLocale();

  return (
    <section className="bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,4.5fr)_minmax(0,7.5fr)]">
        <MotionReveal>
          <span className="label-mono text-black/45">{content.label[locale]}</span>
          <h2 className="section-heading mt-4">
            {content.title[locale]}{" "}
            <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
              {content.accent[locale]}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-[1.65] text-black/60 sm:text-base">
            {locale === "id"
              ? "Jawaban untuk pertanyaan yang paling sering ditanyakan oleh calon klien kami."
              : "Answers to the most common questions asked by prospective clients."}
          </p>
        </MotionReveal>

        <div className="space-y-4">
          {content.items.map((item, index) => (
            <MotionReveal
              key={item.q.en}
              delay={index * 0.04}
              className="surface-card rounded-xl border border-[#deddd5] bg-white/70 p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a09] font-[family-name:var(--font-geist-mono)] text-xs font-medium text-[#cfef57]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.025em] text-black sm:text-lg">
                    {item.q[locale]}
                  </h3>
                  <p className="mt-2.5 text-xs leading-[1.65] text-black/60 sm:text-sm">
                    {item.a[locale]}
                  </p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

