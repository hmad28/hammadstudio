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
    <section className="faq-surface-v2 py-20 text-[#17181d] sm:py-28 lg:py-32">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,4.5fr)_minmax(0,7.5fr)]">
        <MotionReveal>
          <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
            {content.label[locale]}
          </span>
          <h2 className="section-heading mt-4">
            {content.title[locale]}{" "}
            <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
              {content.accent[locale]}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-[1.65] text-[#6d7180] sm:text-base">
            {locale === "id"
              ? "Jawaban untuk pertanyaan yang paling sering ditanyakan oleh calon klien kami."
              : "Answers to the most common questions asked by prospective clients."}
          </p>
        </MotionReveal>

        <div className="space-y-3.5">
          {content.items.map((item, index) => (
            <MotionReveal
              key={item.q.en}
              delay={index * 0.04}
              className="group relative overflow-hidden rounded-2xl border border-[#dde0e7] bg-white p-6 shadow-sm transition duration-300 hover:bg-[#f2efff]/60 hover:border-[#8057ff]/30 sm:p-7"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8057ff] to-[#2864ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#070a12] font-[family-name:var(--font-geist-mono)] text-xs font-bold text-[#d2f34c]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.025em] text-[#17181d] sm:text-lg">
                    {item.q[locale]}
                  </h3>
                  <p className="mt-2.5 text-xs leading-[1.65] text-[#6d7180] sm:text-sm">
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

