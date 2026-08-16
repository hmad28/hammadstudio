import type { Localized } from "./types";

export type FAQItem = {
  question: Localized;
  answer: Localized;
};

export const faqItems: readonly FAQItem[] = [
  {
    question: { id: "Berapa harga pembuatan website?", en: "How much does a website cost?" },
    answer: { id: "Website mulai dari Rp499.000 untuk landing page. Harga dapat menyesuaikan kebutuhan, jumlah halaman, dan fitur yang digunakan.", en: "Websites start from Rp499,000 for a landing page. The final price depends on your requirements, page count, and features." },
  },
  {
    question: { id: "Paket Rp499.000 dapat apa saja?", en: "What is included in the Rp499,000 package?" },
    answer: { id: "Sudah termasuk landing page, domain .com 1 tahun, hosting, SSL, tampilan mobile responsive, basic SEO, dan setup hingga website online.", en: "It includes a landing page, one year of a .com domain, hosting, SSL, a mobile-responsive interface, basic SEO, and setup until the website is live." },
  },
  {
    question: { id: "Apakah domain sudah termasuk?", en: "Is a domain included?" },
    answer: { id: "Ya, paket tertentu sudah termasuk domain .com selama 1 tahun, selama nama domain yang dipilih masih tersedia.", en: "Yes. Selected packages include a .com domain for one year, provided the chosen name is still available." },
  },
  {
    question: { id: "Bisa menggunakan domain .id, .co.id, atau lainnya?", en: "Can I use a .id, .co.id, or another domain?" },
    answer: { id: "Bisa. Kami dapat membantu mengecek ketersediaannya. Untuk beberapa jenis domain, mungkin terdapat biaya atau persyaratan tambahan.", en: "Yes. We can check availability for you. Some domain extensions may require additional fees or documents." },
  },
  {
    question: { id: "Kalau nanti ingin ganti domain, apakah bisa?", en: "Can I change the domain later?" },
    answer: { id: "Bisa. Website dapat dipindahkan ke domain lain tanpa perlu membuat ulang website dari awal.", en: "Yes. The website can be moved to another domain without rebuilding it from scratch." },
  },
  {
    question: { id: "Berapa biaya perpanjangan tahun berikutnya?", en: "How much is the annual renewal?" },
    answer: { id: "Untuk paket standar, estimasinya sekitar Rp399.000 per tahun untuk domain, hosting, SSL, dan maintenance hosting dasar. Biaya dapat menyesuaikan harga provider saat perpanjangan.", en: "For standard packages, the estimate is around Rp399,000 per year for the domain, hosting, SSL, and basic hosting maintenance. Renewal costs may follow provider pricing." },
  },
  {
    question: { id: "Berapa lama proses pengerjaan website?", en: "How long does website development take?" },
    answer: { id: "Umumnya sekitar 7–14 hari kerja. Bisa lebih cepat apabila materi dari client sudah lengkap dan proses revisi berjalan lancar.", en: "Usually around 7–14 business days. It can be faster when the content is complete and revisions move smoothly." },
  },
  {
    question: { id: "Apa yang perlu saya siapkan?", en: "What do I need to prepare?" },
    answer: { id: "Siapkan logo, foto, profil bisnis, produk atau layanan, harga, kontak, alamat, dan informasi lain yang ingin ditampilkan.", en: "Prepare your logo, photos, business profile, products or services, prices, contact details, address, and any other information you want to display." },
  },
  {
    question: { id: "Saya belum punya konsep desain. Apakah bisa dibantu?", en: "Can you help if I do not have a design concept?" },
    answer: { id: "Bisa. Kami membantu menentukan arah desain berdasarkan jenis bisnis dan branding Anda. Jika ada contoh website yang disukai, kirimkan sebagai referensi.", en: "Yes. We help define a design direction based on your business and brand. You can also send websites you like as references." },
  },
  {
    question: { id: "Apakah bisa dibuat seperti website referensi saya?", en: "Can you build something like my reference website?" },
    answer: { id: "Referensi dapat digunakan untuk gaya, struktur, dan experience. Desain akhirnya tetap disesuaikan dengan identitas bisnis Anda dan tidak dibuat sebagai salinan persis.", en: "References can guide the style, structure, and experience. The final design will follow your brand identity and will not be an exact copy." },
  },
  {
    question: { id: "Apakah tersedia dashboard untuk mengelola website?", en: "Is a content management dashboard available?" },
    answer: { id: "Bisa. Website dengan CMS/dashboard tersedia mulai Rp1.099.000 untuk mengelola produk, paket, artikel, galeri, testimoni, atau konten lainnya.", en: "Yes. Websites with a CMS or dashboard start from Rp1,099,000 and can manage products, packages, articles, galleries, testimonials, and other content." },
  },
  {
    question: { id: "Kalau mulai dari landing page dulu, nanti bisa ditambah dashboard?", en: "Can a dashboard be added after starting with a landing page?" },
    answer: { id: "Bisa. Website dapat dikembangkan secara bertahap sesuai kebutuhan bisnis tanpa harus selalu dimulai kembali dari nol.", en: "Yes. The website can grow in phases as your business needs evolve, without always starting over." },
  },
  {
    question: { id: "Apakah website sudah SEO?", en: "Does the website include SEO?" },
    answer: { id: "Ya. Website mendapatkan basic SEO seperti struktur halaman, metadata, sitemap, dan optimasi dasar agar lebih siap ditemukan mesin pencari. Pendekatan SEO, GEO, dan AEO dapat diterapkan sesuai kebutuhan project.", en: "Yes. Websites include basic SEO such as page structure, metadata, a sitemap, and baseline search optimization. SEO, GEO, and AEO can be expanded according to the project." },
  },
  {
    question: { id: "Apakah bisa membantu Google Ads?", en: "Can you help with Google Ads?" },
    answer: { id: "Untuk saat ini Google Ads belum menjadi layanan utama Hammad Studio. Namun website dapat dipersiapkan sebagai landing page untuk campaign Google Ads.", en: "Google Ads is not currently a core Hammad Studio service. However, we can prepare the website as a campaign-ready landing page." },
  },
  {
    question: { id: "Hammad Studio berlokasi di mana?", en: "Where is Hammad Studio located?" },
    answer: { id: "Hammad Studio berbasis di Jakarta, beroperasi secara online/remote, dan belum memiliki kantor fisik untuk kunjungan. Konsultasi, meeting, pengerjaan, review, dan serah terima dilakukan secara online.", en: "Hammad Studio is based in Jakarta, operates online and remotely, and does not currently have a physical office for visits. Consultation, meetings, production, reviews, and handover are handled online." },
  },
  {
    question: { id: "Bagaimana dengan legalitas Hammad Studio?", en: "What is Hammad Studio's legal status?" },
    answer: { id: "Hammad Studio dijalankan sebagai studio independen/freelancer individu dan belum berbentuk badan usaha resmi seperti PT atau CV. Status ini disampaikan terbuka sebelum pembayaran.", en: "Hammad Studio currently operates as an independent studio or individual freelancer and is not yet incorporated as a PT or CV. This status is disclosed clearly before payment." },
  },
  {
    question: { id: "Bagaimana keamanan transaksi jika tidak ada kantor fisik?", en: "How are transactions secured without a physical office?" },
    answer: { id: "Project dapat dilengkapi proposal, MoU/perjanjian kerja, invoice, identitas para pihak, scope, biaya, dan timeline yang jelas sebelum pengerjaan dimulai. Kesepakatan tidak hanya berdasarkan percakapan WhatsApp.", en: "Projects can include a proposal, work agreement, invoice, party identification, scope, cost, and timeline before work begins. Agreements do not rely solely on WhatsApp conversations." },
  },
  {
    question: { id: "Bagaimana kalau website mengalami kendala setelah selesai?", en: "What happens if the website has an issue after launch?" },
    answer: { id: "Client tetap dapat menghubungi Hammad Studio melalui kontak resmi. Ketentuan support dan maintenance dijelaskan sesuai paket dan kesepakatan project.", en: "Clients can continue contacting Hammad Studio through official channels. Support and maintenance terms are defined by the selected package and project agreement." },
  },
  {
    question: { id: "Apakah website dan domain nantinya menjadi milik client?", en: "Will the website and domain belong to the client?" },
    answer: { id: "Ya. Akses website, domain, hosting, dan aset project dapat diserahterimakan kepada client sesuai kesepakatan agar client tetap mengontrol aset digital bisnisnya.", en: "Yes. Website, domain, hosting, and project asset access can be handed over according to the agreement, so the client retains control of their digital assets." },
  },
  {
    question: { id: "Apakah tersedia proposal dan MoU?", en: "Are proposals and work agreements available?" },
    answer: { id: "Ya. Sebelum project dimulai, kami dapat menyediakan proposal dan MoU/perjanjian kerja yang menjelaskan scope, biaya, timeline, revisi, serta hak dan kewajiban masing-masing pihak.", en: "Yes. Before a project begins, we can provide a proposal and work agreement covering scope, cost, timeline, revisions, and each party's responsibilities." },
  },
  {
    question: { id: "Apakah tersedia revisi?", en: "Are revisions included?" },
    answer: { id: "Ya. Revisi tersedia sesuai scope yang disepakati. Fitur baru atau perubahan besar di luar scope awal dapat dikenakan biaya tambahan.", en: "Yes. Revisions are included according to the agreed scope. New features or major changes outside the initial scope may carry additional fees." },
  },
  {
    question: { id: "Bisa konsultasi sebelum memesan?", en: "Can I consult before ordering?" },
    answer: { id: "Bisa. Konsultasi awal dapat membahas kebutuhan website, fitur, desain, domain, hingga rencana pengembangan selanjutnya.", en: "Yes. An initial consultation can cover website needs, features, design, domains, and future development plans." },
  },
  {
    question: { id: "Bisa dibantu memilih nama website atau domain?", en: "Can you help choose a website or domain name?" },
    answer: { id: "Bisa. Kami dapat memberikan rekomendasi nama sekaligus mengecek ketersediaan domain sebelum digunakan.", en: "Yes. We can recommend names and check domain availability before registration." },
  },
  {
    question: { id: "Di mana saya bisa melihat portfolio?", en: "Where can I see the portfolio?" },
    answer: { id: "Portfolio dan contoh project Hammad Studio dapat dilihat di halaman Karya pada hammad.studio.", en: "Hammad Studio's portfolio and project examples are available on the Work page at hammad.studio." },
  },
] as const;
