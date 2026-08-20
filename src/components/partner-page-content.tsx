import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { Briefcase } from "@phosphor-icons/react/dist/ssr/Briefcase";
import { ChatCircleDots } from "@phosphor-icons/react/dist/ssr/ChatCircleDots";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { Handshake } from "@phosphor-icons/react/dist/ssr/Handshake";
import { ShareNetwork } from "@phosphor-icons/react/dist/ssr/ShareNetwork";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { TrendUp } from "@phosphor-icons/react/dist/ssr/TrendUp";
import { UserPlus } from "@phosphor-icons/react/dist/ssr/UserPlus";
import { UsersThree } from "@phosphor-icons/react/dist/ssr/UsersThree";

const joinHref = `https://wa.me/6285199391215?text=${encodeURIComponent(
  "Halo Hammad Studio, saya tertarik bergabung sebagai Partner. Bisa jelaskan cara daftarnya?",
)}`;

const steps = [
  {
    icon: UserPlus,
    title: "Temukan calon client",
    copy: "Cari relasi yang memang sedang membutuhkan website.",
  },
  {
    icon: ShareNetwork,
    title: "Kenalkan ke kami",
    copy: "Hubungkan calon client dengan Hammad Studio.",
  },
  {
    icon: ChatCircleDots,
    title: "Kami yang handle",
    copy: "Konsultasi, penawaran, dan closing kami lanjutkan.",
  },
  {
    icon: CheckCircle,
    title: "Deal, komisi masuk",
    copy: "Kamu mendapat komisi saat project berhasil deal.",
  },
] as const;

const levels = [
  {
    level: "Level 1",
    title: "Partner",
    rate: "15%",
    bonus: "20% untuk project ≥ Rp2 juta",
    note: "Mulai dari closing pertama",
  },
  {
    level: "Level 2",
    title: "Growth Partner",
    rate: "20%",
    bonus: "25% untuk project ≥ Rp2 juta",
    note: "Setelah 5 successful closing",
  },
  {
    level: "Level 3",
    title: "Pro Partner",
    rate: "25%",
    bonus: "30% untuk project ≥ Rp2 juta",
    note: "Setelah 10 successful closing",
  },
] as const;

const audiences = [
  [Briefcase, "Freelancer & marketer"],
  [UsersThree, "Creator & komunitas"],
  [Handshake, "Agency & studio"],
  [TrendUp, "Business owner"],
] as const;

const faqs = [
  ["Harus punya followers?", "Tidak. Kualitas relasi lebih penting daripada jumlah followers."],
  ["Harus closing sendiri?", "Tidak. Tim Hammad Studio yang menangani konsultasi sampai closing."],
  ["Kapan komisi dibayar?", "Setelah project resmi deal dan pembayaran yang memenuhi syarat diterima."],
  ["Ada target bulanan?", "Tidak ada. Kamu bebas membawa referral sesuai peluang yang dimiliki."],
  ["Bisa bawa project bersama tim?", "Bisa melalui Konsorsium Partner dengan skema yang dibahas bersama."],
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export function PartnerPageContent() {
  return (
    <div className="partner-page overflow-hidden bg-[#f2f0e9] text-[#17181d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="hero-surface-v2 relative min-h-[760px] overflow-hidden pb-20 pt-40 text-white sm:pt-48">
        <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(128,87,255,.34),transparent_68%)] blur-3xl" aria-hidden="true" />

        <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="purple-glow-badge inline-flex rounded-full px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[.08em]">
              Hammad Studio Partner
            </span>
            <h1 className="mt-7 max-w-[760px] text-[clamp(3rem,5.4vw,5rem)] font-[540] leading-[.94] tracking-[-.06em]">
              Punya relasi yang butuh website?
              <span className="block bg-gradient-to-r from-[#d2f34c] to-[#93c5fd] bg-clip-text text-transparent">
                Ubah jadi penghasilan.
              </span>
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-7 text-white/66 sm:text-lg">
              Bawa calon client. Hammad Studio yang menangani konsultasi sampai closing. Kamu mendapatkan komisi dari setiap project yang berhasil deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={joinHref} target="_blank" rel="noreferrer" className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
                Gabung Jadi Partner
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" />
              </a>
              <a href="#cara-kerja" className="inline-flex items-center rounded-full border border-white/18 bg-white/[.07] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white hover:text-black">
                Cara Kerjanya
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-[32px] border border-white/14 bg-white/[.07] p-7 shadow-[0_32px_100px_rgba(0,0,0,.4)] backdrop-blur-xl sm:p-9">
              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#d2f34c]/20 blur-3xl" aria-hidden="true" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[.12em] text-white/45">Komisi partner</p>
              <p className="mt-4 text-5xl font-[600] tracking-[-.07em] text-[#d2f34c] sm:text-7xl">hingga 30%</p>
              <div className="mt-8 grid gap-3 border-t border-white/12 pt-6 text-sm text-white/68">
                {["Gratis bergabung", "Tanpa target bulanan", "Tidak wajib punya followers"].map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#d2f34c]" weight="fill" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="scroll-mt-28 bg-[#f2f0e9] py-20 sm:py-28">
        <div className="site-container">
          <div className="flex flex-col gap-4 border-b border-black/12 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label-mono !text-xs text-[#8057ff]">Cara Kerja</span>
              <h2 className="mt-3 text-4xl font-[540] tracking-[-.05em] sm:text-5xl">Cukup empat langkah.</h2>
            </div>
            <p className="max-w-[390px] text-sm leading-6 text-black/48">Kamu membuka peluang. Kami mengurus proses selanjutnya.</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="group min-h-[250px] border border-black/10 bg-white/60 p-6 transition hover:-translate-y-1 hover:border-[#8057ff]/35 hover:bg-white">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center bg-[#8057ff]/[.08] text-[#8057ff]">
                      <Icon className="h-6 w-6" weight="duotone" />
                    </span>
                    <span className="font-mono text-xs text-black/28">0{index + 1}</span>
                  </div>
                  <h3 className="mt-12 text-xl font-[550] tracking-[-.035em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">{step.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-surface-v2 border-y border-black/10 py-20 sm:py-28">
        <div className="site-container">
          <div className="max-w-[680px]">
            <span className="label-mono !text-xs text-[#8057ff]">Level Partner</span>
            <h2 className="mt-3 text-4xl font-[540] tracking-[-.05em] sm:text-5xl">Semakin konsisten, semakin besar komisinya.</h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {levels.map((item, index) => (
              <article key={item.title} className={`relative overflow-hidden border p-7 sm:p-8 ${index === 2 ? "border-[#8057ff]/40 bg-[#11131d] text-white shadow-[0_24px_70px_rgba(17,19,29,.18)]" : "border-black/10 bg-white/70"}`}>
                {index === 2 ? <span className="absolute right-0 top-0 bg-[#d2f34c] px-3 py-1.5 font-mono text-[.65rem] font-bold text-black">TERTINGGI</span> : null}
                <p className={`font-mono text-xs font-semibold uppercase tracking-[.1em] ${index === 2 ? "text-[#d2f34c]" : "text-[#8057ff]"}`}>{item.level}</p>
                <h3 className="mt-2 text-2xl font-[550] tracking-[-.04em]">{item.title}</h3>
                <p className="mt-9 text-6xl font-[600] tracking-[-.07em]">{item.rate}</p>
                <p className={`mt-6 border-t pt-5 text-sm font-semibold ${index === 2 ? "border-white/12 text-[#d2f34c]" : "border-black/10 text-[#6345cc]"}`}>{item.bonus}</p>
                <p className={`mt-2 text-sm ${index === 2 ? "text-white/45" : "text-black/42"}`}>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-surface-v2 py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="label-mono !text-xs text-[#8057ff]">Siapa yang cocok?</span>
            <h2 className="mt-3 text-4xl font-[540] tracking-[-.05em] sm:text-5xl">Punya network? Kamu bisa mulai.</h2>
            <p className="mt-5 max-w-[480px] text-base leading-7 text-black/52">Tidak perlu mengerti teknis dan tidak perlu closing sendiri.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {audiences.map(([Icon, label]) => (
              <div key={label} className="flex min-h-24 items-center gap-4 border border-black/10 bg-white/65 px-5 transition hover:border-[#8057ff]/30 hover:bg-white">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#8057ff]/[.08] text-[#8057ff]">
                  <Icon className="h-6 w-6" weight="duotone" />
                </span>
                <p className="font-[550] tracking-[-.025em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0c14] py-20 text-white sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <ShieldCheck className="h-10 w-10 text-[#d2f34c]" weight="duotone" />
            <h2 className="mt-5 text-4xl font-[540] tracking-[-.05em] sm:text-5xl">Referral tetap tercatat.</h2>
            <p className="mt-5 max-w-[460px] text-base leading-7 text-white/52">Status referral dan komisi dikonfirmasi langsung melalui WhatsApp Hammad Studio.</p>
          </div>
          <div className="border-t border-white/12 lg:col-span-7">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-white/12">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-[550] marker:hidden [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/16 text-lg transition group-open:rotate-45 group-open:bg-white group-open:text-black">+</span>
                </summary>
                <p className="max-w-[620px] pb-6 text-sm leading-6 text-white/52">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-surface-signature px-5 py-20 text-[#070a12] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[980px] text-center">
          <span className="label-mono !text-xs text-black/55">Gratis · Tanpa target</span>
          <h2 className="mt-4 text-4xl font-[560] tracking-[-.055em] sm:text-6xl">Satu relasi sudah cukup untuk mulai.</h2>
          <p className="mx-auto mt-5 max-w-[570px] text-base leading-7 text-black/58">Gabung Partner Hammad Studio dan ubah networking menjadi peluang penghasilan.</p>
          <a href={joinHref} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#080a12] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#5b3fd6]">
            Gabung via WhatsApp
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" />
          </a>
        </div>
      </section>
    </div>
  );
}
