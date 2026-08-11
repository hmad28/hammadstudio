import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "./icons";

type Proof = {
  name: string;
  detail: string;
  href: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type SEOServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  audience: string;
  outcomes: readonly string[];
  deliverables: readonly string[];
  proofs: readonly Proof[];
  faqs: readonly FAQ[];
};

export function SEOServicePage({
  eyebrow,
  title,
  intro,
  audience,
  outcomes,
  deliverables,
  proofs,
  faqs,
}: SEOServicePageProps) {
  return (
    <main className="bg-[#f7f5ef] text-[#17181d]">
      <section className="relative overflow-hidden bg-[#070a12] pb-24 pt-36 text-white sm:pb-32 sm:pt-44">
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[700px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(128,87,255,.42),rgba(40,100,255,.18)_45%,transparent_72%)] blur-3xl" aria-hidden="true" />
        <div className="site-container relative z-10">
          <p className="label-mono text-[#d2f34c]">{eyebrow}</p>
          <h1 className="mt-7 max-w-[1100px] text-[clamp(3.4rem,8vw,8rem)] font-[520] leading-[0.86] tracking-[-0.07em]">{title}</h1>
          <div className="mt-10 grid gap-8 border-t border-white/15 pt-7 lg:grid-cols-12">
            <p className="max-w-[720px] text-base leading-8 text-white/68 sm:text-lg lg:col-span-8">{intro}</p>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact" className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
                Konsultasikan kebutuhan <ArrowUpRightIcon className="button-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="label-mono text-black/38">BUKAN SEKADAR TAMPILAN</p>
            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-[510] leading-[0.94] tracking-[-0.055em]">Website yang ikut bekerja untuk bisnis.</h2>
            <p className="mt-6 max-w-[520px] leading-7 text-black/58">{audience}</p>
          </div>
          <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:col-span-7">
            {outcomes.map((item, index) => (
              <div key={item} className="min-h-44 border-b border-r border-black/15 p-6">
                <span className="label-mono text-black/28">0{index + 1}</span>
                <p className="mt-9 text-lg font-[520] leading-7 tracking-[-0.025em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/12 bg-[#ebe9e2] py-24 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono text-black/38">CAKUPAN PROJECT</p>
            <h2 className="mt-5 text-4xl font-[520] tracking-[-0.05em] sm:text-5xl">Fondasi yang rapi sejak awal.</h2>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-black/14 py-4 text-sm text-black/68">
                <CheckIcon className="h-4 w-4 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="label-mono text-black/38">BUKTI PROJECT</p>
              <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-[510] tracking-[-0.055em]">Bukan klaim. Lihat hasilnya.</h2>
            </div>
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-semibold">Semua karya <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid border-l border-t border-black/15 md:grid-cols-3">
            {proofs.map((proof) => (
              <Link key={proof.name} href={proof.href} className="group min-h-56 border-b border-r border-black/15 p-6 transition-colors hover:bg-[#070a12] hover:text-white">
                <p className="label-mono opacity-40">CASE STUDY</p>
                <h3 className="mt-14 text-2xl font-[520] tracking-[-0.04em]">{proof.name}</h3>
                <p className="mt-3 text-sm leading-6 opacity-58">{proof.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070a12] py-24 text-white sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono text-[#d2f34c]">FAQ</p>
            <h2 className="mt-5 text-5xl font-[520] tracking-[-0.055em]">Pertanyaan sebelum mulai.</h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <article key={faq.question} className="border-t border-white/15 py-7 last:border-b">
                <div className="grid gap-3 sm:grid-cols-[40px_1fr]">
                  <span className="label-mono text-white/30">0{index + 1}</span>
                  <div><h3 className="text-xl font-[520] tracking-[-0.025em]">{faq.question}</h3><p className="mt-3 max-w-[720px] leading-7 text-white/58">{faq.answer}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
