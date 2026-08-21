import type { Localized } from "./types";

export type FAQItem = {
  question: Localized;
  answer: Localized;
};

export const faqItems: readonly FAQItem[] = [
  {
    question: { id: "Berapa harga pembuatan website?", en: "How much does a website cost?" },
    answer: { id: "Paket Website mulai dari Rp499.000. Harga akhir menyesuaikan jumlah halaman, fitur, dan kebutuhan project.", en: "The Website package begins at Rp499,000. The final price depends on the number of pages, features, and project requirements." },
  },
  {
    question: { id: "Kenapa harga website Hammad Studio bisa lebih terjangkau?", en: "Why can Hammad Studio offer more accessible pricing?" },
    answer: { id: "Hammad Studio dijalankan dengan struktur yang lean dan independen, sehingga biaya kantor fisik dan tim besar dapat ditekan. Project ditangani langsung oleh developer agar komunikasi dan pengerjaan lebih efisien. Harga yang terjangkau merupakan bagian dari tahap pengembangan Hammad Studio untuk membangun lebih banyak project dan kepercayaan client, bukan dengan mengurangi kualitas atau scope yang disepakati.", en: "Hammad Studio operates with a lean, independent structure, reducing the overhead of a physical office and a large team. Projects are handled directly by the developer for more efficient communication and delivery. Accessible pricing supports the studio's growth and trust-building stage without reducing the quality or agreed scope." },
  },
  {
    question: { id: "Paket Rp499.000 sudah termasuk apa?", en: "What is included in the Rp499,000 package?" },
    answer: { id: "Sudah termasuk maksimal 5 halaman utama, domain .com 1 tahun, hosting, SSL, responsive mobile, basic SEO, dan setup sampai online.", en: "It includes up to five main pages, one year of a .com domain, hosting, SSL, mobile responsiveness, basic SEO, and setup until the website is live." },
  },
  {
    question: { id: "Apakah tersedia website dengan dashboard?", en: "Are websites with dashboards available?" },
    answer: { id: "Bisa. Paket CMS mulai Rp899.000, sehingga konten seperti produk, paket, artikel, galeri, atau testimoni dapat dikelola sendiri.", en: "Yes. The CMS package begins at Rp899,000, allowing you to manage products, packages, articles, galleries, testimonials, and other content." },
  },
  {
    question: { id: "Apakah website bisa dikembangkan lagi nantinya?", en: "Can the website be expanded later?" },
    answer: { id: "Bisa. Landing page dapat dikembangkan ke CMS, sistem booking, database, pembayaran, atau fitur custom lainnya tanpa harus selalu membuat semuanya dari awal.", en: "Yes. A landing page can later grow into a CMS, booking system, database, payment flow, or other custom features without rebuilding everything from scratch." },
  },
  {
    question: { id: "Berapa lama pengerjaannya?", en: "How long does development take?" },
    answer: { id: "Umumnya sekitar 7–14 hari kerja, tergantung kelengkapan materi, kompleksitas website, dan proses revisi.", en: "Usually around 7–14 business days, depending on content readiness, website complexity, and the revision process." },
  },
  {
    question: { id: "Apa saja yang perlu disiapkan oleh client?", en: "What does the client need to prepare?" },
    answer: { id: "Biasanya berupa logo, foto, profil bisnis, produk atau layanan, harga, kontak, alamat, dan materi lain yang ingin ditampilkan.", en: "Usually a logo, photos, business profile, products or services, pricing, contact details, address, and any other content you want displayed." },
  },
  {
    question: { id: "Saya belum punya konsep desain, apakah bisa dibantu?", en: "Can you help if I do not have a design concept?" },
    answer: { id: "Bisa. Kami dapat membantu menentukan arah desain. Jika ada website yang dijadikan referensi, silakan kirim agar kebutuhan visual lebih mudah dipahami.", en: "Yes. We can help define the design direction. If you have reference websites, send them so your visual expectations are easier to understand." },
  },
  {
    question: { id: "Apakah bisa dibuat mirip website referensi?", en: "Can it be made similar to a reference website?" },
    answer: { id: "Bisa dijadikan referensi struktur dan gaya, tetapi desain tetap disesuaikan dengan branding dan kebutuhan bisnis Anda.", en: "A reference can guide the structure and style, but the final design will still be adapted to your brand and business needs." },
  },
  {
    question: { id: "Apakah domain sudah termasuk?", en: "Is a domain included?" },
    answer: { id: "Untuk paket tertentu, domain .com sudah termasuk selama 1 tahun, selama domain yang dipilih masih tersedia.", en: "Selected packages include a .com domain for one year, provided the chosen domain is still available." },
  },
  {
    question: { id: "Bisa pakai .id, .co.id, atau domain lainnya?", en: "Can I use a .id, .co.id, or another domain?" },
    answer: { id: "Bisa. Kami dapat membantu mengecek ketersediaan domain. Beberapa ekstensi dapat memiliki ketentuan atau biaya tambahan.", en: "Yes. We can help check domain availability. Some extensions may have additional requirements or fees." },
  },
  {
    question: { id: "Apakah domain bisa diganti atau dimigrasikan nantinya?", en: "Can the domain be changed or migrated later?" },
    answer: { id: "Bisa. Website dapat dipindahkan ke domain lain tanpa harus membuat ulang website dari awal.", en: "Yes. The website can be moved to another domain without rebuilding it from scratch." },
  },
  {
    question: { id: "Berapa biaya perpanjangan tahun kedua?", en: "How much is the second-year renewal?" },
    answer: { id: "Untuk paket standar, estimasi perpanjangan domain, hosting, SSL, dan maintenance hosting dasar sekitar Rp399.000 per tahun, menyesuaikan provider dan kebutuhan website.", en: "For standard packages, domain, hosting, SSL, and basic hosting maintenance renewal is estimated at around Rp399,000 per year, depending on provider pricing and website needs." },
  },
  {
    question: { id: "Apakah website sudah SEO?", en: "Does the website include SEO?" },
    answer: { id: "Sudah termasuk Basic SEO. Kami juga menerapkan pendekatan SEO, GEO, dan AEO sesuai kebutuhan website.", en: "Basic SEO is included. We can also apply SEO, GEO, and AEO approaches according to the website's requirements." },
  },
  {
    question: { id: "Apakah Hammad Studio bisa mengelola Google Ads?", en: "Does Hammad Studio manage Google Ads?" },
    answer: { id: "Saat ini Google Ads belum menjadi layanan utama kami. Fokus kami berada pada website, SEO, GEO, dan AEO, tetapi website dapat disiapkan agar siap digunakan untuk campaign iklan.", en: "Google Ads is not currently a core service. We focus on websites, SEO, GEO, and AEO, but the website can be prepared for future advertising campaigns." },
  },
  {
    question: { id: "Di mana lokasi Hammad Studio?", en: "Where is Hammad Studio located?" },
    answer: { id: "Hammad Studio berbasis di Jakarta dan beroperasi secara online/remote. Konsultasi, meeting, pengerjaan, review, hingga serah terima project dapat dilakukan secara online.", en: "Hammad Studio is based in Jakarta and operates online and remotely. Consultation, meetings, delivery, reviews, and project handover can all be handled online." },
  },
  {
    question: { id: "Bagaimana dengan legalitas dan keamanan transaksi?", en: "What about legal status and transaction security?" },
    answer: { id: "Sebelum pengerjaan, detail project dapat dituangkan melalui proposal, MoU/perjanjian kerja, invoice, scope, timeline, biaya, dan identitas para pihak agar prosesnya jelas dan terdokumentasi. Status usaha saat ini adalah freelancer individu, bukan badan usaha resmi, dan disampaikan transparan sebelum commitment atau pembayaran.", en: "Before work begins, project details can be documented through a proposal, work agreement, invoice, scope, timeline, pricing, and party identification. Hammad Studio currently operates as an individual freelancer rather than an incorporated business, and this is disclosed transparently before commitment or payment." },
  },
  {
    question: { id: "Kalau suatu saat ada masalah dengan website, harus menghubungi siapa?", en: "Who should I contact if the website has an issue?" },
    answer: { id: "Client tetap dapat menghubungi Hammad Studio melalui kontak resmi. Ketentuan support dan maintenance akan dijelaskan pada proposal atau perjanjian project.", en: "Clients can continue contacting Hammad Studio through official channels. Support and maintenance terms will be explained in the proposal or project agreement." },
  },
  {
    question: { id: "Apakah client mendapatkan akses website dan domain?", en: "Will the client receive website and domain access?" },
    answer: { id: "Ya. Akses website, domain, hosting, dan aset terkait dapat diserahterimakan sesuai kesepakatan project, sehingga client tidak harus bergantung sepenuhnya kepada Hammad Studio.", en: "Yes. Website, domain, hosting, and related asset access can be handed over according to the project agreement, so clients do not have to depend entirely on Hammad Studio." },
  },
  {
    question: { id: "Apakah ada proposal dan MoU?", en: "Are proposals and work agreements available?" },
    answer: { id: "Ada. Untuk project yang dilanjutkan, kami dapat menyiapkan proposal dan MoU/perjanjian kerja agar scope, biaya, timeline, revisi, hak, dan kewajiban masing-masing pihak jelas.", en: "Yes. For projects that proceed, we can prepare a proposal and work agreement defining scope, cost, timeline, revisions, rights, and responsibilities." },
  },
  {
    question: { id: "Apakah tersedia revisi?", en: "Are revisions included?" },
    answer: { id: "Ya. Revisi tersedia sesuai scope yang disepakati. Perubahan besar atau fitur baru di luar scope dapat dikenakan biaya tambahan.", en: "Yes. Revisions are available according to the agreed scope. Major changes or new features outside the scope may require additional fees." },
  },
  {
    question: { id: "Bisa konsultasi dulu sebelum memesan?", en: "Can I consult before ordering?" },
    answer: { id: "Bisa. Kami dapat membantu menentukan kebutuhan website, referensi desain, pemilihan domain, sampai arah pengembangan fitur sebelum project dimulai.", en: "Yes. We can help define website requirements, design references, domain selection, and future feature direction before the project begins." },
  },
  {
    question: { id: "Bisa membantu memilih nama brand atau domain?", en: "Can you help choose a brand or domain name?" },
    answer: { id: "Bisa. Kami dapat membantu memberikan alternatif nama serta mengecek ketersediaan domain dan potensi benturan nama sebelum digunakan.", en: "Yes. We can suggest alternative names and check domain availability and potential naming conflicts before use." },
  },
  {
    question: { id: "Di mana saya bisa melihat portfolio?", en: "Where can I see the portfolio?" },
    answer: { id: "Portfolio Hammad Studio dapat dilihat di hammad.studio melalui halaman Karya.", en: "Hammad Studio's portfolio is available on the Work page at hammad.studio." },
  },
] as const;
