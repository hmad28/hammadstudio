import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { proofProjects, sharedDeliverables, umkmFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-website-umkm";
const title = "Jasa Pembuatan Website UMKM";
const description = "Jasa website UMKM yang membantu bisnis tampil terpercaya, menjelaskan produk dengan jelas, dan mengubah pengunjung menjadi chat, inquiry, atau pembelian.";

export const metadata = createPageMetadata({ title, description, path });

export default function SMEWebsitePage() {
  const jsonLd = createServiceJsonLd(title, description, path, umkmFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="WEBSITE UNTUK UMKM"
        title="Bantu bisnis kecil terlihat serius, jelas, dan siap tumbuh."
        intro="Website UMKM yang merapikan cara bisnis Anda ditemukan, dipahami, dan dihubungi—dengan scope realistis yang tetap punya fondasi profesional."
        audience="Cocok untuk brand lokal, bisnis makanan, jasa, retail, travel, dan usaha berkembang yang ingin punya aset digital sendiri di luar media sosial dan marketplace."
        outcomes={["Customer punya sumber informasi resmi yang bisa dipercaya.", "Produk, layanan, harga, dan cara order tersusun lebih jelas.", "Campaign dapat diarahkan ke halaman yang fokus pada conversion.", "Bisnis memiliki fondasi untuk pencarian Google dan ekspansi berikutnya."]}
        deliverables={sharedDeliverables}
        proofs={[proofProjects[0], proofProjects[2], { name: "CPX Jersey", detail: "Commerce sportswear untuk produk ready-stock dan kebutuhan custom order.", href: "/work/cpx-jersey" }]}
        faqs={umkmFaqs}
        startingPrice="Website Starter mulai Rp 499 ribu untuk maksimal 5 halaman utama. Website + CMS mulai Rp 899 ribu."
        relatedLinks={[{ href: "/solusi/umkm/toko-online", label: "Toko Online UMKM", description: "Katalog, cart, WhatsApp, dan checkout untuk brand yang menjual produk." }, { href: "/jasa-landing-page", label: "Landing Page Produk", description: "Destination page yang fokus untuk iklan dan campaign." }, { href: "/industri/umkm-kuliner", label: "Website UMKM Kuliner", description: "Katalog serta order flow untuk bisnis makanan dan frozen food." }]}
        primaryCta={{ href: "https://wa.me/6285199391215?text=Halo%20Hammad%20Studio%2C%20saya%20ingin%20membuat%20website%20untuk%20UMKM.", label: "Chat WhatsApp", external: true }}
      />
    </>
  );
}
