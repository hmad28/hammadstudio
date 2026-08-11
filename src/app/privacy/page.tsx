import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Kebijakan Privasi", description: "Kebijakan privasi Hammad Studio mengenai informasi yang diberikan melalui website, analytics, komunikasi, dan layanan pihak ketiga.", path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage title="Kebijakan Privasi" updated="11 Agustus 2026" sections={[
    { title: "Informasi yang kami terima", body: "Website tidak menyediakan akun pengguna. Informasi dapat diterima ketika Anda menghubungi kami melalui email, WhatsApp, atau form project. Data tersebut dapat mencakup nama, perusahaan, kontak, kebutuhan, budget, timeline, dan informasi yang Anda pilih untuk dibagikan." },
    { title: "Cara informasi digunakan", body: "Informasi digunakan untuk menanggapi inquiry, menyusun estimasi, menjalankan komunikasi project, menjaga keamanan layanan, serta memahami performa website. Kami tidak menjual data pribadi kepada pihak lain." },
    { title: "Analytics dan layanan pihak ketiga", body: "Jika Google Analytics diaktifkan, website dapat mengumpulkan data penggunaan seperti halaman yang dikunjungi dan event conversion. Ketika Anda membuka WhatsApp, email, atau website project eksternal, kebijakan privasi layanan tersebut berlaku." },
    { title: "Penyimpanan dan keamanan", body: "Kami membatasi akses informasi project pada pihak yang memerlukannya untuk komunikasi dan delivery. Tidak ada sistem yang sepenuhnya bebas risiko, tetapi langkah teknis dan operasional yang wajar digunakan untuk melindungi informasi." },
    { title: "Hak dan kontak", body: "Anda dapat meminta koreksi atau penghapusan informasi yang pernah diberikan dengan menghubungi hello@hammad.studio. Permintaan akan ditangani selama tidak bertentangan dengan kewajiban hukum atau administrasi project." },
  ]} />;
}

function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: readonly { title: string; body: string }[] }) {
  return <main className="min-h-screen bg-[#f7f5ef] pb-28 pt-36 text-[#17181d] sm:pt-44"><article className="site-container"><header className="max-w-[900px] border-b border-black/12 pb-12"><p className="label-mono text-[#8057ff]">LEGAL</p><h1 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-[520] leading-[.9] tracking-[-.065em]">{title}</h1><p className="mt-6 text-sm text-black/45">Terakhir diperbarui: {updated}</p></header><div className="max-w-[820px] space-y-12 pt-14">{sections.map((section) => <section key={section.title}><h2 className="text-2xl font-[520] tracking-[-.035em]">{section.title}</h2><p className="mt-4 leading-8 text-black/62">{section.body}</p></section>)}</div></article></main>;
}
