import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Ketentuan Penggunaan", description: "Ketentuan penggunaan website Hammad Studio dan prinsip umum komunikasi, proposal, scope, harga, serta materi yang ditampilkan.", path: "/terms" });

const sections = [
  { title: "Informasi website", body: "Konten website ditujukan sebagai informasi umum mengenai layanan, pendekatan, karya, dan estimasi harga Hammad Studio. Informasi ini bukan kontrak atau penawaran final." },
  { title: "Proposal dan scope project", body: "Deliverable, timeline, biaya, revisi, pembayaran, kepemilikan, dukungan, dan layanan pihak ketiga ditetapkan dalam proposal atau perjanjian project yang disepakati. Dokumen tersebut berlaku di atas informasi umum pada website." },
  { title: "Harga dan layanan pihak ketiga", body: "Harga yang ditampilkan merupakan titik awal dan dapat berubah mengikuti scope. Domain, hosting, payment gateway, WhatsApp API, email, AI usage, lisensi, dan layanan eksternal dapat memiliki biaya terpisah." },
  { title: "Hak cipta", body: "Brand, desain, copy, kode, dan materi project mengikuti hak serta lisensi masing-masing. Screenshot project ditampilkan sebagai portofolio pekerjaan. Penggunaan ulang materi website Hammad Studio tanpa izin tidak diperbolehkan." },
  { title: "Kontak", body: "Pertanyaan mengenai ketentuan ini dapat dikirimkan ke hello@hammad.studio." },
] as const;

export default function TermsPage() {
  return <main className="min-h-screen bg-[#f7f5ef] pb-28 pt-36 text-[#17181d] sm:pt-44"><article className="site-container"><header className="max-w-[900px] border-b border-black/12 pb-12"><p className="label-mono text-[#8057ff]">LEGAL</p><h1 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-[520] leading-[.9] tracking-[-.065em]">Ketentuan Penggunaan</h1><p className="mt-6 text-sm text-black/45">Terakhir diperbarui: 11 Agustus 2026</p></header><div className="max-w-[820px] space-y-12 pt-14">{sections.map((section) => <section key={section.title}><h2 className="text-2xl font-[520] tracking-[-.035em]">{section.title}</h2><p className="mt-4 leading-8 text-black/62">{section.body}</p></section>)}</div></article></main>;
}
