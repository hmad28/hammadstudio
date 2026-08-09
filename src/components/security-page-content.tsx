"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Pendekatan security", en: "Security approach" },
  title: { id: "Security bukan fitur tambahan.", en: "Security is not an add-on." },
  intro: { id: "Background engineering kami dekat dengan cybersecurity dan security research. Karena itu, security dipertimbangkan sejak architecture dan development—bukan baru setelah produk selesai.", en: "Our engineering background is closely connected to cybersecurity and security research. Security is considered during architecture and development—not after the product is finished." },
  honest: { id: "Kami tidak menjanjikan sistem yang tidak mungkin diretas. Tidak ada sistem realistis yang dapat dijanjikan seperti itu. Kami membangun software dengan security-conscious engineering practices sejak awal.", en: "We do not promise an impossible-to-hack system. No realistic system can make that promise. We build software with security-conscious engineering practices from day one." },
  practicesLabel: { id: "Praktik yang dapat diterapkan", en: "Practices we may apply" },
  context: { id: "Implementasi disesuaikan dengan risiko, data, user, dan kebutuhan setiap project.", en: "Implementation is adjusted to the risks, data, users, and requirements of each project." },
  action: { id: "Diskusikan kebutuhan security", en: "Discuss security requirements" },
  practices: [
    { title: "Secure Authentication", description: { id: "Authentication flow, password handling, dan account protection yang sesuai kebutuhan.", en: "Authentication flows, password handling, and account protection appropriate to the need." } },
    { title: "Authorization & Roles", description: { id: "Hak akses yang jelas untuk setiap role dan tindakan penting.", en: "Clear permissions for each role and sensitive action." } },
    { title: "Input Validation", description: { id: "Validasi pada boundary aplikasi untuk mengurangi input berbahaya dan data invalid.", en: "Validation at application boundaries to reduce malicious input and invalid data." } },
    { title: "API Protection", description: { id: "Protection untuk endpoint, credentials, request flow, dan abuse scenarios.", en: "Protection for endpoints, credentials, request flows, and abuse scenarios." } },
    { title: "Secure Sessions", description: { id: "Session lifecycle dan cookie configuration yang lebih aman.", en: "Safer session lifecycles and cookie configuration." } },
    { title: "Rate Limiting", description: { id: "Pembatasan request untuk endpoint yang rentan abuse.", en: "Request limits for endpoints vulnerable to abuse." } },
    { title: "Audit Logging", description: { id: "Jejak aktivitas penting untuk accountability dan investigasi.", en: "Records of important activity for accountability and investigation." } },
    { title: "Secure File Handling", description: { id: "Validasi type, size, storage, dan access untuk file upload.", en: "Validation of type, size, storage, and access for file uploads." } },
    { title: "Database Protection", description: { id: "Akses data dan query handling yang mengikuti prinsip least privilege.", en: "Data access and query handling that follow least-privilege principles." } },
    { title: "Security Headers", description: { id: "Browser-facing policy untuk mengurangi kelas serangan umum.", en: "Browser-facing policies that reduce common attack classes." } },
    { title: "Dependency Review", description: { id: "Review dependency dan update untuk mengurangi exposure dari supply chain.", en: "Dependency and update reviews to reduce supply-chain exposure." } },
    { title: "Monitoring", description: { id: "Error dan activity monitoring untuk mendeteksi masalah lebih cepat.", en: "Error and activity monitoring to surface problems earlier." } },
  ],
} as const;

export function SecurityPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#0a0a09] pb-28 pt-32 text-white sm:pb-36 sm:pt-40">
      <div className="site-container">
        <MotionReveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3"><span className="label-mono text-[#cfef57]">{content.label[locale]}</span></div>
          <div className="lg:col-span-9">
            <h1 className="max-w-[980px] text-[clamp(3.6rem,8vw,8rem)] font-[520] leading-[0.85] tracking-[-0.07em]">{content.title[locale]}</h1>
            <p className="mt-9 max-w-[740px] text-base leading-[1.75] text-white/58 sm:text-lg">{content.intro[locale]}</p>
            <blockquote className="mt-10 max-w-[800px] border-l border-[#cfef57]/60 pl-6 font-[family-name:var(--font-instrument-serif)] text-2xl italic leading-[1.45] text-white/82 sm:text-3xl">{content.honest[locale]}</blockquote>
          </div>
        </MotionReveal>

        <div className="mt-24 flex flex-col gap-4 border-b border-white/12 pb-6 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-[clamp(2.4rem,5vw,4.8rem)] font-[510] leading-none tracking-[-0.055em]">{content.practicesLabel[locale]}</h2><p className="max-w-[380px] text-sm leading-[1.6] text-white/42">{content.context[locale]}</p></div>
        <div className="grid border-l border-white/12 sm:grid-cols-2 lg:grid-cols-3">
          {content.practices.map((practice, index) => (
            <MotionReveal key={practice.title} delay={(index % 3) * 0.04} className="min-h-[220px] border-b border-r border-white/12 p-6 sm:p-7">
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.6rem] text-[#cfef57]/55">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 text-xl font-[520] tracking-[-0.035em]">{practice.title}</h3>
              <p className="mt-4 max-w-[350px] text-sm leading-[1.65] text-white/45">{practice.description[locale]}</p>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-12 flex justify-end"><Link href="mailto:hello@hammad.studio" className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">{content.action[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
      </div>
    </div>
  );
}
