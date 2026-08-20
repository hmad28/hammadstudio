import Link from "next/link";
import { HammadStudioLogo } from "./icons";

const joinHref = `https://wa.me/6285199391215?text=${encodeURIComponent("Halo Hammad Studio, saya tertarik bergabung sebagai Partner. Bisa jelaskan langkah pendaftarannya?")}`;
const consortiumHref = `https://wa.me/6285199391215?text=${encodeURIComponent("Halo Hammad Studio, saya ingin mendiskusikan Konsorsium Partner untuk membawa project bersama tim.")}`;

const steps = [
  [
    "01",
    "Temukan calon client",
    "Teman, relasi bisnis, komunitas, atau customer yang membutuhkan website.",
  ],
  [
    "02",
    "Kenalkan Hammad Studio",
    "Pastikan calon client sudah tertarik dan bersedia dihubungi oleh tim kami.",
  ],
  [
    "03",
    "Kami lanjut handle",
    "Konsultasi, scope, quotation, negosiasi, dan closing kami yang jalankan.",
  ],
  [
    "04",
    "Deal, komisi masuk",
    "Setelah project deal dan pembayaran memenuhi syarat, referral menjadi successful closing.",
  ],
] as const;

const benefits = [
  [
    "30%",
    "Komisi sampai 30%",
    "Rate bertumbuh mengikuti level partner dan nilai project yang berhasil dibawa.",
  ],
  [
    "01",
    "Tidak perlu closing sendiri",
    "Tidak perlu jago sales atau teknologi. Proses komersial ditangani tim kami.",
  ],
  [
    "0",
    "Tanpa target bulanan",
    "Mau membawa satu client dalam tiga bulan pun boleh. Tidak ada kuota wajib.",
  ],
  [
    "∞",
    "Tidak wajib punya followers",
    "Kualitas relasi lebih penting daripada ukuran audience.",
  ],
  [
    "ALL",
    "Terbuka untuk siapa saja",
    "Freelancer, mahasiswa, creator, marketer, owner, developer, designer, atau agency.",
  ],
  [
    "↑",
    "Benefit terus bertumbuh",
    "Successful closing membuka level dan rate komisi yang lebih tinggi.",
  ],
] as const;

const levels = [
  [
    "Level 1",
    "Partner",
    "15%",
    "20%",
    "Mulai dari closing pertama",
    "border-white/14 bg-white/[.055]",
  ],
  [
    "Level 2",
    "Growth Partner",
    "20%",
    "25%",
    "Setelah 5 successful closing",
    "border-[#9c7cff]/55 bg-[#9c7cff]/12",
  ],
  [
    "Level 3",
    "Pro Partner",
    "25%",
    "30%",
    "Setelah 10 successful closing",
    "border-[#d2f34c]/55 bg-[#d2f34c]/10",
  ],
] as const;

const audiences = [
  [
    "Freelancer",
    "Sering bertemu client, tapi project website bukan bidang atau kapasitasmu.",
  ],
  [
    "Designer / Developer",
    "Ada request di luar scope, stack, atau waktu yang tersedia.",
  ],
  [
    "Content Creator",
    "Punya audience yang berisi owner bisnis, UMKM, atau profesional.",
  ],
  [
    "Marketer / Sales",
    "Punya koneksi bisnis, tetapi tidak mempunyai tim development.",
  ],
  [
    "Business Owner",
    "Sering bertemu sesama owner yang sedang membangun bisnisnya.",
  ],
  [
    "Agency / Studio",
    "Membutuhkan technical partner untuk fulfilment project website.",
  ],
] as const;

const faqs = [
  [
    "Apakah harus punya sosial media?",
    "Tidak. Kualitas relasi dan calon client lebih penting daripada jumlah followers.",
  ],
  [
    "Apakah saya harus closing client sendiri?",
    "Tidak. Partner cukup membuka peluang dan melakukan perkenalan. Tim Hammad Studio melanjutkan konsultasi sampai closing.",
  ],
  [
    "Bagaimana kalau client tidak jadi?",
    "Komisi hanya diberikan untuk project yang berhasil deal dan memenuhi ketentuan pembayaran.",
  ],
  [
    "Kapan komisi diberikan?",
    "Komisi diproses setelah project resmi deal dan pembayaran yang memenuhi syarat diterima Hammad Studio.",
  ],
  [
    "Kalau client baru closing beberapa minggu kemudian?",
    "Selama masih dalam periode attribution referral yang berlaku, komisi tetap menjadi hak partner.",
  ],
  [
    "Boleh bawa client dari perusahaan atau komunitas?",
    "Boleh, selama calon client nyata, sudah menunjukkan ketertarikan, dan bersedia dihubungi.",
  ],
  [
    "Boleh kerja sama beberapa orang?",
    "Bisa melalui jalur Konsorsium Partner dan dibahas berdasarkan kontribusi tim.",
  ],
  [
    "Apakah partner boleh menaikkan harga sendiri?",
    "Tidak. Harga, scope, dan quotation final tetap dikeluarkan Hammad Studio.",
  ],
  [
    "Apakah ada target bulanan?",
    "Tidak ada. Partner bebas membawa referral sesuai peluang yang dimiliki.",
  ],
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

function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 19 19 5M8 5h11v11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`grid size-6 shrink-0 place-items-center rounded-full ${dark ? "bg-[#0b0c12] text-[#d2f34c]" : "bg-[#d2f34c] text-[#090a10]"}`}
      aria-hidden="true"
    >
      <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
        <path
          d="m3 8 3.1 3L13 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PartnerNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-6">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between rounded-full border border-white/12 bg-[#090a10]/82 px-4 shadow-[0_18px_60px_rgba(0,0,0,.32)] backdrop-blur-2xl sm:px-6">
        <Link href="/" aria-label="Hammad Studio homepage">
          <HammadStudioLogo
            priority
            className="h-auto w-[150px] sm:w-[184px]"
          />
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-white/62 lg:flex"
          aria-label="Navigasi program partner"
        >
          <a href="#cara-kerja" className="transition hover:text-white">
            Cara Kerja
          </a>
          <a href="#keuntungan" className="transition hover:text-white">
            Keuntungan
          </a>
          <a href="#level-partner" className="transition hover:text-white">
            Level Partner
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>
        <a
          href={joinHref}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-10 items-center gap-2 rounded-full bg-[#d2f34c] px-4 text-xs font-bold text-[#090a10] transition hover:bg-white sm:text-sm"
        >
          Gabung Partner{" "}
          <Arrow className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

export function PartnerPageContent() {
  return (
    <div className="partner-page bg-[#f5f2e9] text-[#111218]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PartnerNav />

      <section className="relative min-h-[900px] overflow-hidden bg-[#090a10] pb-24 pt-36 text-white sm:pt-40 lg:flex lg:min-h-[820px] lg:items-center lg:py-40">
        <div
          className="partner-grid pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div
          className="partner-noise pointer-events-none absolute inset-0 opacity-[.13]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-10 size-[620px] rounded-full bg-[#8057ff]/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="site-container relative z-10 grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="reveal lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d2f34c]/28 bg-[#d2f34c]/8 px-3.5 py-2 font-mono text-[.66rem] font-semibold uppercase tracking-[.12em] text-[#d2f34c]">
              <span className="size-1.5 rounded-full bg-[#d2f34c] shadow-[0_0_0_5px_rgba(210,243,76,.1)]" />
              Hammad Studio Partner Program
            </div>
            <h1 className="mt-8 max-w-[790px] text-[clamp(4rem,8.3vw,8.5rem)] font-[540] leading-[.82] tracking-[-.078em] text-balance">
              Punya relasi yang butuh website?
              <span className="mt-3 block font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#d2f34c]">
                Ubah jadi penghasilan.
              </span>
            </h1>
            <p className="mt-8 max-w-[650px] text-lg leading-8 text-white/62 sm:text-xl sm:leading-9">
              Bawa calon client ke Hammad Studio. Kami handle konsultasi,
              penawaran, sampai closing. Kamu mendapatkan komisi dari setiap
              project yang berhasil deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 font-mono text-[.68rem] font-semibold uppercase tracking-[.08em] text-white/52">
              <span>Komisi hingga 30%</span>
              <span className="text-[#d2f34c]">•</span>
              <span>Tanpa target bulanan</span>
              <span className="text-[#d2f34c]">•</span>
              <span>Tidak wajib punya followers</span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={joinHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d2f34c] px-7 text-sm font-bold text-[#090a10] transition hover:-translate-y-1 hover:bg-white"
              >
                Gabung Jadi Partner{" "}
                <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/16 px-7 text-sm font-semibold text-white/78 transition hover:bg-white/8 hover:text-white"
              >
                Pelajari Cara Kerjanya ↓
              </a>
            </div>
          </div>
          <div className="reveal relative lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-[500px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(128,87,255,.32),rgba(10,11,17,.25)_58%,rgba(10,11,17,0)_70%)]">
              <div className="absolute inset-[9%] rounded-full border border-white/8" />
              <div className="absolute inset-[19%] rounded-full border border-dashed border-[#d2f34c]/20 motion-safe:animate-[spin_28s_linear_infinite]" />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="font-mono text-[.68rem] font-semibold uppercase tracking-[.2em] text-white/45">
                    Commission
                  </p>
                  <p className="partner-outline mt-2 text-[clamp(7rem,15vw,12rem)] font-semibold leading-[.72] tracking-[-.09em]">
                    30
                  </p>
                  <p className="mt-3 text-4xl font-semibold tracking-[-.05em] text-[#d2f34c]">
                    % MAX
                  </p>
                </div>
              </div>
              <span className="absolute left-[2%] top-[28%] rounded-full border border-white/12 bg-[#13141c] px-4 py-2 font-mono text-[.62rem] uppercase tracking-[.1em] text-white/58">
                No monthly target
              </span>
              <span className="absolute bottom-[20%] right-0 rounded-full border border-[#d2f34c]/25 bg-[#13141c] px-4 py-2 font-mono text-[.62rem] uppercase tracking-[.1em] text-[#d2f34c]">
                Free to join
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2e9] py-24 sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="reveal lg:col-span-7">
            <p className="label-mono text-[#7251de]">Bukan affiliate biasa</p>
            <h2 className="mt-5 text-[clamp(3.2rem,6vw,6.5rem)] font-[530] leading-[.88] tracking-[-.067em] text-balance">
              Bukan soal sebar link. Cukup hubungkan kami dengan orang yang
              tepat.
            </h2>
          </div>
          <div className="reveal lg:col-span-5 lg:pt-10">
            <p className="text-lg leading-8 text-black/58">
              Kamu tidak perlu melakukan development, membuat proposal teknis,
              atau memaksa client untuk closing. Temukan orang yang memang punya
              kebutuhan dan tertarik untuk ngobrol.
            </p>
            <div className="mt-9 border-l-2 border-[#8057ff] pl-6">
              <p className="text-2xl font-[540] tracking-[-.035em]">
                Kamu buka pintu.
              </p>
              <p className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[#7251de]">
                Hammad Studio lanjut handle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cara-kerja"
        className="scroll-mt-20 border-y border-black/10 bg-white py-24 sm:py-32"
      >
        <div className="site-container">
          <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-mono text-[#7251de]">Empat langkah</p>
              <h2 className="mt-4 text-[clamp(3rem,5.5vw,5.6rem)] font-[530] leading-[.9] tracking-[-.062em]">
                Cara kerjanya sederhana.
              </h2>
            </div>
            <p className="max-w-[350px] text-sm leading-6 text-black/48">
              Tidak perlu dashboard rumit atau proses panjang untuk mulai
              membawa referral.
            </p>
          </div>
          <div className="mt-14 grid border-l border-t border-black/12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, body], index) => (
              <article
                key={number}
                className="reveal group relative min-h-[320px] border-b border-r border-black/12 p-6 transition-colors hover:bg-[#f3f8d9] sm:p-7"
              >
                <span className="font-mono text-xs font-semibold tracking-[.12em] text-black/34">
                  {number} / 04
                </span>
                <div className="mt-16 flex size-11 items-center justify-center rounded-full border border-black/12 text-xl transition group-hover:bg-[#7251de] group-hover:text-white">
                  {index + 1}
                </div>
                <h3 className="mt-7 text-2xl font-[540] tracking-[-.04em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/52">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="keuntungan" className="bg-[#efede5] py-24 sm:py-32">
        <div className="site-container">
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label-mono text-[#7251de]">Kenapa jadi partner</p>
              <h2 className="mt-4 text-[clamp(3.2rem,6.2vw,6.7rem)] font-[530] leading-[.87] tracking-[-.067em]">
                Network kamu punya nilai.
              </h2>
            </div>
            <p className="max-w-[400px] text-base leading-7 text-black/52 lg:col-span-4">
              Fokus pada hal yang paling kamu kuasai: menemukan peluang yang
              relevan.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([metric, title, body]) => (
              <article
                key={title}
                className="reveal min-h-[285px] bg-[#f8f6ef] p-7 transition hover:bg-white sm:p-8"
              >
                <span className="font-[family-name:var(--font-instrument-serif)] text-5xl italic tracking-[-.04em] text-[#7251de]">
                  {metric}
                </span>
                <h3 className="mt-14 text-2xl font-[540] tracking-[-.04em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/52">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="level-partner"
        className="relative overflow-hidden bg-[#170d2d] py-24 text-white sm:py-32"
      >
        <div
          className="partner-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="site-container relative z-10">
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label-mono text-[#d2f34c]">Komisi bertingkat</p>
              <h2 className="mt-4 text-[clamp(3.2rem,6.2vw,6.8rem)] font-[530] leading-[.87] tracking-[-.07em]">
                Komisi yang tumbuh bersama kamu.
              </h2>
            </div>
            <p className="max-w-[380px] text-base leading-7 text-white/52 lg:col-span-4">
              Successful closing menaikkan level partner dan membuka rate lebih
              besar.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {levels.map(([level, name, base, high, qualifier, tone]) => (
              <article
                key={name}
                className={`partner-card-cut reveal min-h-[430px] border p-7 sm:p-8 ${tone}`}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-mono text-[.68rem] uppercase tracking-[.14em] text-white/42">
                      {level}
                    </p>
                    <h3 className="mt-2 text-2xl font-[550] tracking-[-.04em]">
                      {name}
                    </h3>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full border border-white/14">
                    ↗
                  </span>
                </div>
                <div className="mt-16 flex items-end gap-4">
                  <p className="text-[clamp(5.5rem,9vw,8.5rem)] font-[600] leading-[.72] tracking-[-.085em]">
                    {base}
                  </p>
                  <span className="pb-1 text-xs uppercase tracking-[.12em] text-white/38">
                    rate
                    <br />
                    dasar
                  </span>
                </div>
                <div className="mt-10 border-t border-white/12 pt-6">
                  <p className="text-lg font-semibold text-[#d2f34c]">
                    {high} untuk project ≥ Rp2 juta
                  </p>
                  <p className="mt-3 text-sm text-white/46">{qualifier}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="reveal mt-12">
            <div className="partner-track-line h-1 w-full rounded-full" />
            <div className="mt-5 grid grid-cols-3 font-mono text-[.6rem] uppercase tracking-[.08em] text-white/48 sm:text-xs">
              <span>Start · Level 1</span>
              <span className="text-center">5 Closing · Level 2</span>
              <span className="text-right">10 Closing · Level 3</span>
            </div>
          </div>
          <div className="mt-20 grid gap-8 border-t border-white/12 pt-12 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <p className="label-mono text-[#d2f34c]">Potensi komisi</p>
              <h3 className="mt-4 text-4xl font-[530] leading-[.95] tracking-[-.055em] sm:text-5xl">
                Satu project bisa menghasilkan ratusan ribu hingga jutaan
                rupiah.
              </h3>
            </div>
            <div className="reveal grid gap-px bg-white/12 sm:grid-cols-3 lg:col-span-7">
              {[
                ["Rp1 juta", "hingga Rp250 ribu"],
                ["Rp3 juta", "hingga Rp900 ribu"],
                ["Rp5 juta", "hingga Rp1,5 juta"],
              ].map(([project, commission]) => (
                <div key={project} className="bg-[#170d2d] p-6">
                  <p className="font-mono text-[.65rem] uppercase tracking-[.1em] text-white/38">
                    Nilai project
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{project}</p>
                  <p className="mt-9 font-[family-name:var(--font-instrument-serif)] text-2xl italic text-[#d2f34c]">
                    → {commission}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-white/34">
            Ilustrasi memakai rate maksimum sesuai level dan nilai project.
            Komisi final mengikuti ketentuan partner yang berlaku.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="reveal max-w-[880px]">
            <p className="label-mono text-[#7251de]">Siapa yang cocok?</p>
            <h2 className="mt-4 text-[clamp(3.2rem,6vw,6.4rem)] font-[530] leading-[.88] tracking-[-.067em]">
              Punya akses ke orang yang butuh website? Kamu bisa mulai.
            </h2>
          </div>
          <div className="mt-14 grid border-l border-t border-black/12 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, body], index) => (
              <article
                key={title}
                className="reveal min-h-[240px] border-b border-r border-black/12 p-7 transition hover:bg-[#f3f8d9]"
              >
                <span className="font-mono text-xs text-black/30">
                  0{index + 1}
                </span>
                <h3 className="mt-12 text-2xl font-[550] tracking-[-.04em]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[330px] text-sm leading-6 text-black/50">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d2f34c] py-20 sm:py-28">
        <div
          className="partner-noise pointer-events-none absolute inset-0 opacity-[.08]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 -top-36 text-[28rem] font-bold leading-none text-black/[.045]"
          aria-hidden="true"
        >
          H
        </div>
        <div className="site-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="reveal lg:col-span-8">
            <p className="label-mono text-black/55">Konsorsium Partner</p>
            <h2 className="mt-4 text-[clamp(3.3rem,6.5vw,7rem)] font-[560] leading-[.85] tracking-[-.072em]">
              Mau bawa project bareng tim? Bisa.
            </h2>
            <p className="mt-7 max-w-[760px] text-lg leading-8 text-black/62">
              Marketer, designer, dan business connector dapat mendaftarkan satu
              project sebagai konsorsium. Special commission rate tersedia
              berdasarkan skala project dan kontribusi masing-masing pihak.
            </p>
          </div>
          <div className="reveal lg:col-span-4 lg:text-right">
            <div className="mb-7 flex items-center gap-3 lg:justify-end">
              {["M", "D", "B"].map((letter) => (
                <span
                  key={letter}
                  className="grid size-14 place-items-center rounded-full border-2 border-black bg-[#f5f2e9] text-lg font-bold shadow-[4px_4px_0_#111218]"
                >
                  {letter}
                </span>
              ))}
            </div>
            <a
              href={consortiumHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-[#111218] px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#7251de]"
            >
              Diskusikan Konsorsium{" "}
              <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2e9] py-24 sm:py-32">
        <div className="site-container">
          <div className="reveal text-center">
            <p className="label-mono text-[#7251de]">Pembagian peran</p>
            <h2 className="mx-auto mt-4 max-w-[900px] text-[clamp(3.1rem,5.8vw,6.2rem)] font-[530] leading-[.88] tracking-[-.067em]">
              Kamu bawa peluang. Kami jalankan eksekusinya.
            </h2>
          </div>
          <div className="mt-14 grid overflow-hidden border border-black/12 lg:grid-cols-[1fr_auto_1fr]">
            <div className="reveal bg-white p-7 sm:p-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-[#7251de]">
                Partner
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "Cari peluang",
                  "Ngobrol awal",
                  "Pastikan client tertarik",
                  "Hubungkan ke Hammad Studio",
                ].map((task) => (
                  <li key={task} className="flex items-center gap-3 text-lg">
                    <Check dark />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal grid min-h-28 place-items-center border-y border-black/12 bg-[#d2f34c] px-7 lg:min-h-full lg:border-x lg:border-y-0">
              <div className="text-center">
                <span className="text-4xl" aria-hidden="true">
                  ↔
                </span>
                <p className="mt-2 font-mono text-[.6rem] font-bold uppercase tracking-[.12em]">
                  Warm handoff
                </p>
              </div>
            </div>
            <div className="reveal bg-[#111218] p-7 text-white sm:p-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-[#d2f34c]">
                Hammad Studio
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  "Discovery kebutuhan",
                  "Konsultasi teknis",
                  "Scope & quotation",
                  "Negosiasi & closing",
                  "Development",
                  "After-sales",
                ].map((task) => (
                  <li
                    key={task}
                    className="flex items-center gap-3 text-lg text-white/78"
                  >
                    <Check />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0c12] py-24 text-white sm:py-32">
        <div
          className="partner-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="site-container relative z-10 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="reveal lg:col-span-6">
            <p className="label-mono text-[#d2f34c]">Transparansi referral</p>
            <h2 className="mt-4 text-[clamp(3.2rem,6vw,6.5rem)] font-[530] leading-[.87] tracking-[-.067em]">
              Referral kamu tetap tercatat.
            </h2>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-white/55">
              Setiap client yang diterima melalui partner dicatat sebagai
              referral partner tersebut. Jika project deal dalam periode
              attribution yang berlaku, komisi tetap menjadi hak partner.
            </p>
            <p className="mt-5 text-sm leading-6 text-white/38">
              Pada fase awal, status referral dan komisi dikonfirmasi langsung
              melalui WhatsApp Hammad Studio.
            </p>
          </div>
          <div className="reveal grid gap-3 sm:grid-cols-3 lg:col-span-6 lg:grid-cols-1">
            {[
              ["01", "Referral tercatat"],
              ["02", "Status dapat dikonfirmasi"],
              ["03", "Komisi berdasarkan successful deal"],
            ].map(([number, text]) => (
              <div
                key={number}
                className="flex min-h-24 items-center gap-5 border border-white/12 bg-white/[.045] p-5"
              >
                <span className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[#d2f34c]">
                  {number}
                </span>
                <span className="text-lg font-semibold tracking-[-.02em]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className="label-mono text-[#7251de]">Persyaratan</p>
            <h2 className="mt-4 text-[clamp(3.2rem,5.5vw,5.8rem)] font-[530] leading-[.88] tracking-[-.065em]">
              Siapa pun bisa mulai.
            </h2>
            <div className="mt-10 space-y-3 text-xl font-semibold tracking-[-.025em]">
              <p>Tidak wajib punya followers.</p>
              <p>Tidak wajib berpengalaman sebagai sales.</p>
              <p className="text-[#7251de]">Tidak ada biaya pendaftaran.</p>
            </div>
          </div>
          <div className="reveal lg:col-span-7">
            <div className="border-t border-black/12">
              {[
                "Punya WhatsApp aktif",
                "Mendaftar sebelum membawa referral",
                "Membawa calon client nyata yang sudah tertarik",
                "Tidak melakukan spam atau fake referral",
                "Tidak membuat klaim atau janji atas nama Hammad Studio tanpa persetujuan",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-black/12 py-5 sm:py-6"
                >
                  <span className="font-mono text-xs text-black/30">
                    0{index + 1}
                  </span>
                  <Check dark />
                  <p className="text-base font-medium sm:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-20 border-t border-black/10 bg-[#f5f2e9] py-24 sm:py-32"
      >
        <div className="site-container grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <p className="label-mono text-[#7251de]">FAQ</p>
            <h2 className="mt-4 text-[clamp(3rem,5vw,5.4rem)] font-[530] leading-[.9] tracking-[-.065em]">
              Sebelum kamu mulai.
            </h2>
            <p className="mt-6 max-w-[330px] text-sm leading-6 text-black/48">
              Masih ada pertanyaan? Chat langsung dengan Hammad Studio melalui
              WhatsApp.
            </p>
          </div>
          <div className="reveal border-t border-black/12 lg:col-span-8">
            {faqs.map(([question, answer], index) => (
              <details
                key={question}
                className="group border-b border-black/12"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 marker:hidden [&::-webkit-details-marker]:hidden sm:py-7">
                  <span className="flex gap-4 text-lg font-[540] tracking-[-.025em] sm:text-xl">
                    <span className="mt-1 font-mono text-[.65rem] text-black/28">
                      0{index + 1}
                    </span>
                    {question}
                  </span>
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-black/14 text-xl transition group-open:rotate-45 group-open:bg-[#111218] group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="max-w-[690px] pb-7 pl-9 text-base leading-7 text-black/54">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d2f34c] py-24 sm:py-32">
        <div
          className="partner-noise pointer-events-none absolute inset-0 opacity-[.08]"
          aria-hidden="true"
        />
        <div className="site-container relative z-10 text-center">
          <p className="label-mono text-black/50">Mulai dari satu koneksi</p>
          <h2 className="mx-auto mt-5 max-w-[1050px] text-[clamp(3.8rem,8vw,8.5rem)] font-[570] leading-[.82] tracking-[-.078em]">
            Punya satu relasi yang lagi butuh website?
          </h2>
          <p className="mx-auto mt-7 max-w-[650px] text-lg leading-8 text-black/58">
            Itu sudah cukup buat mulai mengubah networking kamu menjadi peluang
            penghasilan.
          </p>
          <a
            href={joinHref}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex min-h-16 items-center gap-3 rounded-full bg-[#111218] px-9 text-base font-bold text-white shadow-[0_16px_0_rgba(17,18,24,.12)] transition hover:-translate-y-1 hover:bg-[#7251de]"
          >
            Gabung via WhatsApp{" "}
            <Arrow className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="mt-7 font-mono text-[.67rem] font-semibold uppercase tracking-[.1em] text-black/50">
            Gratis daftar · Tanpa target · Komisi hingga 30%
          </p>
        </div>
      </section>

      <footer className="bg-[#0b0c12] py-7 text-white">
        <div className="site-container flex flex-col gap-4 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-white/72 transition hover:text-[#d2f34c]"
          >
            © 2026 Hammad Studio
          </Link>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <a
              href={joinHref}
              target="_blank"
              rel="noreferrer"
              className="text-[#d2f34c]"
            >
              Gabung Partner ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
