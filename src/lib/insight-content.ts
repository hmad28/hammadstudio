export type InsightSection = {
  heading: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  sections: readonly InsightSection[];
  relatedHref: string;
  relatedLabel: string;
};

export const insightArticles = [
  {
    slug: "berapa-harga-pembuatan-website",
    title: "Berapa Harga Pembuatan Website di 2026?",
    description: "Panduan estimasi harga pembuatan website berdasarkan jenis, scope, desain, konten, integrasi, dan kebutuhan pengelolaan.",
    answer: "Harga pembuatan website pada 2026 tidak ditentukan oleh jumlah halaman saja. Biaya terutama dipengaruhi jenis website, kedalaman desain, kesiapan konten, CMS, integrasi, serta proses pengujian dan dukungan setelah peluncuran.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "7 menit",
    relatedHref: "/harga-website",
    relatedLabel: "Lihat estimasi harga website Hammad Studio",
    sections: [
      { heading: "Range harga berdasarkan kebutuhan", paragraphs: ["Landing page sederhana dan website company profile tidak memiliki beban kerja yang sama dengan e-commerce atau aplikasi web. Titik awal yang sehat adalah menentukan tujuan bisnis dan alur pengguna terlebih dahulu, lalu menyusun scope yang benar-benar dibutuhkan."], points: ["Website sederhana: fokus pada informasi inti dan satu jalur conversion.", "Company profile: membutuhkan struktur layanan, trust signals, dan beberapa halaman utama.", "E-commerce: menambah katalog, cart, checkout, pembayaran, dan pengelolaan order.", "Web application: biaya mengikuti role pengguna, data, workflow, dan integrasi."] },
      { heading: "Apa yang paling memengaruhi biaya?", paragraphs: ["Desain custom membutuhkan proses discovery, information architecture, UI/UX, dan validasi yang lebih dalam daripada template siap pakai. Konten yang belum tersedia, kebutuhan migrasi, multilingual, CMS, kalkulator, payment gateway, atau integrasi sistem juga menambah scope."], points: ["Jumlah dan kompleksitas halaman", "Desain custom atau adaptasi sistem desain", "Copywriting, foto, ilustrasi, dan migrasi konten", "CMS, form, pembayaran, API, atau dashboard", "Target performa, keamanan, QA, dan maintenance"] },
      { heading: "Domain dan hosting termasuk atau terpisah?", paragraphs: ["Keduanya sebaiknya dijelaskan sebagai komponen terpisah agar kepemilikan dan biaya tahunannya transparan. Domain adalah alamat website, sedangkan hosting atau platform deployment menjalankan file dan layanan website. Biaya dapat berbeda berdasarkan traffic, storage, email bisnis, database, dan fitur keamanan."], points: ["Pastikan domain didaftarkan atas nama bisnis.", "Minta rincian biaya perpanjangan, bukan hanya harga tahun pertama.", "Pastikan backup, SSL, dan akses akun dijelaskan sejak awal."] },
      { heading: "Cara membandingkan penawaran secara adil", paragraphs: ["Jangan membandingkan angka akhir tanpa membandingkan deliverable. Penawaran murah dapat cocok untuk kebutuhan sederhana, tetapi tidak setara dengan pekerjaan yang mencakup strategi konten, desain custom, SEO foundation, analytics, migrasi, dan QA."], points: ["Bandingkan scope dan batas revisi.", "Periksa siapa yang memiliki domain, source code, dan akun deployment.", "Tanyakan timeline, PIC, dukungan, serta biaya berulang.", "Minta contoh project yang relevan dengan kebutuhan Anda."] },
    ],
  },
  {
    slug: "harga-website-company-profile",
    title: "Harga Website Company Profile: Apa yang Menentukan Biaya?",
    description: "Faktor penentu biaya website company profile, mulai dari struktur halaman dan desain hingga CMS, konten, integrasi, serta migrasi.",
    answer: "Harga website company profile ditentukan oleh seberapa dalam website harus menjelaskan perusahaan dan mendukung proses marketing. Jumlah halaman penting, tetapi desain, konten, CMS, integrasi, migrasi, dan kebutuhan approval biasanya lebih menentukan total scope.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "6 menit",
    relatedHref: "/jasa-website-company-profile",
    relatedLabel: "Pelajari jasa website company profile",
    sections: [
      { heading: "Company profile sederhana dan corporate tidak selalu sama", paragraphs: ["Bisnis kecil mungkin cukup dengan profil, layanan, project, dan kontak. Perusahaan dengan beberapa unit layanan dapat membutuhkan halaman solusi, industri, investor, karier, artikel, dokumen unduhan, serta alur inquiry yang berbeda."], points: ["Profil dan nilai perusahaan", "Struktur layanan atau produk", "Project, klien, dan bukti kapabilitas", "Dokumen, berita, karier, atau lokasi", "Form inquiry, RFQ, dan routing ke tim terkait"] },
      { heading: "Komponen biaya yang sering terlupakan", paragraphs: ["Biaya bukan hanya coding. Penyusunan pesan, pengumpulan materi, pengolahan foto, pemindahan URL lama, quality assurance, dan koordinasi approval dapat menjadi bagian besar dari project company profile."], points: ["Content strategy dan copywriting", "Design system serta komponen reusable", "CMS dan role editor", "Redirect dari website lama", "Analytics, Search Console, dan event conversion"] },
      { heading: "Kapan perusahaan membutuhkan solusi custom?", paragraphs: ["Custom development relevan ketika website memiliki aturan, integrasi, atau alur yang tidak dapat diselesaikan secara baik oleh template. Contohnya katalog kompleks, pencarian distributor, portal dokumen, kalkulator, multi-language, atau integrasi CRM."], points: ["Jangan memilih custom hanya untuk terlihat premium.", "Gunakan custom ketika ada kebutuhan bisnis yang jelas.", "Pastikan arsitektur tetap mudah dirawat setelah peluncuran."] },
      { heading: "Informasi yang perlu disiapkan sebelum meminta quotation", paragraphs: ["Brief yang jelas membuat estimasi lebih akurat dan mengurangi perubahan scope di tengah project."], points: ["Tujuan utama website dan audiens", "Daftar layanan, produk, serta halaman", "Referensi visual dan brand guideline", "Kebutuhan CMS, bahasa, form, dan integrasi", "Target peluncuran dan stakeholder approval"] },
    ],
  },
  {
    slug: "website-custom-vs-template",
    title: "Website Custom vs Template: Mana yang Tepat untuk Bisnis?",
    description: "Perbandingan website custom dan template berdasarkan biaya, waktu, fleksibilitas, performa, pengelolaan, dan kebutuhan bisnis.",
    answer: "Template cocok ketika kebutuhan sederhana, waktu singkat, dan budget terbatas. Website custom lebih tepat ketika bisnis membutuhkan positioning yang khas, user journey khusus, integrasi, performa, atau ruang pengembangan yang tidak dapat dipenuhi template dengan rapi.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "6 menit",
    relatedHref: "/jasa-pembuatan-website",
    relatedLabel: "Diskusikan kebutuhan website",
    sections: [
      { heading: "Kapan template merupakan pilihan yang masuk akal?", paragraphs: ["Template bukan pilihan buruk. Untuk validasi ide, profil sederhana, atau bisnis yang baru mulai, template dapat mempersingkat waktu dan menekan biaya selama struktur serta batasannya sudah dipahami."], points: ["Konten dan alur sangat standar", "Tidak ada integrasi khusus", "Brand belum membutuhkan pengalaman yang berbeda", "Tim menerima keterbatasan layout dan pengembangan"] },
      { heading: "Kapan website custom memberi nilai lebih?", paragraphs: ["Custom development memberi kontrol lebih besar terhadap struktur pesan, pengalaman pengguna, performa, serta pengembangan fitur. Nilainya muncul ketika keputusan tersebut berhubungan langsung dengan trust, conversion, atau workflow bisnis."], points: ["Banyak layanan atau segmen audiens", "Katalog dan pencarian yang spesifik", "Integrasi CRM, booking, pembayaran, atau sistem internal", "Target performa dan accessibility yang terukur", "Roadmap fitur setelah versi pertama"] },
      { heading: "Bandingkan total cost, bukan harga awal", paragraphs: ["Template yang murah dapat menjadi mahal jika memerlukan banyak plugin, perubahan berulang, atau migrasi lebih cepat. Sebaliknya, custom juga tidak efisien jika kebutuhan sebenarnya dapat diselesaikan dengan komponen standar."], points: ["Biaya build dan lisensi", "Biaya maintenance dan update", "Risiko ketergantungan plugin atau vendor", "Kemudahan editor mengelola konten", "Biaya perubahan ketika bisnis tumbuh"] },
      { heading: "Pendekatan yang kami gunakan", paragraphs: ["Kami memilih tingkat custom berdasarkan masalah yang perlu diselesaikan. Komponen standar tetap digunakan ketika efisien, lalu desain, content hierarchy, dan fungsi khusus dibangun di bagian yang benar-benar memberi nilai bagi bisnis."] },
    ],
  },
  {
    slug: "apa-yang-didapat-dari-jasa-pembuatan-website",
    title: "Apa yang Didapat dari Jasa Pembuatan Website?",
    description: "Penjelasan deliverable jasa website dari discovery, desain, development, SEO foundation, analytics, testing, hingga handover.",
    answer: "Jasa pembuatan website yang lengkap biasanya mencakup discovery, penyusunan struktur, desain UI/UX, development responsif, SEO foundation, analytics, pengujian, deployment, dan handover. Detailnya harus tertulis jelas di proposal agar ekspektasi kedua pihak sama.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "7 menit",
    relatedHref: "/jasa-pembuatan-website",
    relatedLabel: "Lihat layanan pembuatan website",
    sections: [
      { heading: "Sebelum desain: discovery dan scope", paragraphs: ["Project yang baik dimulai dengan memahami bisnis, audiens, tujuan, materi yang tersedia, serta tindakan yang diharapkan dari pengunjung. Hasilnya adalah scope, sitemap, prioritas konten, timeline, dan batas tanggung jawab yang jelas."], points: ["Tujuan bisnis dan indikator keberhasilan", "Audiens serta customer journey", "Daftar halaman dan fungsi", "Kebutuhan konten dan aset", "Timeline, revisi, dan approval"] },
      { heading: "Desain dan development", paragraphs: ["Desain menerjemahkan brand serta content hierarchy menjadi pengalaman yang mudah digunakan. Development kemudian memastikan pengalaman tersebut responsif, dapat diakses, cepat, dan bekerja sesuai fungsi yang disepakati."], points: ["Wireframe atau struktur halaman", "UI visual dan komponen", "Implementasi mobile dan desktop", "Form, CMS, serta integrasi", "State error, empty, dan loading bila diperlukan"] },
      { heading: "Apa arti SEO-ready foundation?", paragraphs: ["SEO-ready bukan janji ranking. Artinya website disiapkan agar dapat dirayapi, dipahami, dan diukur dengan baik sebagai fondasi optimasi lanjutan."], points: ["Metadata dan semantic headings", "Canonical, robots, dan sitemap", "Structured data yang sesuai konten", "URL serta internal linking yang jelas", "Search Console, analytics, dan event conversion", "Performa serta image optimization"] },
      { heading: "Testing, peluncuran, dan handover", paragraphs: ["Sebelum live, website perlu diuji pada perangkat utama, link, form, metadata, redirect, dan alur conversion. Setelah deployment, bisnis harus mengetahui akses akun, cara memperbarui konten, biaya berulang, dan jalur dukungan."], points: ["QA responsive dan browser", "Pemeriksaan form serta analytics", "Backup dan akses akun", "Dokumentasi pengelolaan", "Masa dukungan dan maintenance"] },
    ],
  },
] as const satisfies readonly InsightArticle[];

export type InsightSlug = (typeof insightArticles)[number]["slug"];

export const insightBySlug = {
  "berapa-harga-pembuatan-website": insightArticles[0],
  "harga-website-company-profile": insightArticles[1],
  "website-custom-vs-template": insightArticles[2],
  "apa-yang-didapat-dari-jasa-pembuatan-website": insightArticles[3],
} satisfies Record<InsightSlug, InsightArticle>;
