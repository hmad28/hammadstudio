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
  cluster: "umkm" | "company" | "buyer" | "technical" | "pricing";
  pillar?: boolean;
  comparison?: {
    leftTitle: string;
    rightTitle: string;
    rows: readonly { label: string; left: string; right: string }[];
  };
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
    cluster: "pricing",
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
    cluster: "company",
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
    comparison: { leftTitle: "Template", rightTitle: "Custom", rows: [{ label: "Waktu", left: "Lebih singkat untuk kebutuhan standar", right: "Mengikuti discovery dan scope" }, { label: "Fleksibilitas", left: "Mengikuti batas theme atau builder", right: "Mengikuti kebutuhan dan arsitektur" }, { label: "Biaya awal", left: "Umumnya lebih rendah", right: "Umumnya lebih tinggi" }, { label: "Cocok untuk", left: "Profil sederhana dan validasi", right: "Brand, integrasi, dan workflow khusus" }] },
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "6 menit",
    relatedHref: "/jasa-pembuatan-website",
    relatedLabel: "Diskusikan kebutuhan website",
    cluster: "buyer",
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
    cluster: "buyer",
    sections: [
      { heading: "Sebelum desain: discovery dan scope", paragraphs: ["Project yang baik dimulai dengan memahami bisnis, audiens, tujuan, materi yang tersedia, serta tindakan yang diharapkan dari pengunjung. Hasilnya adalah scope, sitemap, prioritas konten, timeline, dan batas tanggung jawab yang jelas."], points: ["Tujuan bisnis dan indikator keberhasilan", "Audiens serta customer journey", "Daftar halaman dan fungsi", "Kebutuhan konten dan aset", "Timeline, revisi, dan approval"] },
      { heading: "Desain dan development", paragraphs: ["Desain menerjemahkan brand serta content hierarchy menjadi pengalaman yang mudah digunakan. Development kemudian memastikan pengalaman tersebut responsif, dapat diakses, cepat, dan bekerja sesuai fungsi yang disepakati."], points: ["Wireframe atau struktur halaman", "UI visual dan komponen", "Implementasi mobile dan desktop", "Form, CMS, serta integrasi", "State error, empty, dan loading bila diperlukan"] },
      { heading: "Apa arti SEO-ready foundation?", paragraphs: ["SEO-ready bukan janji ranking. Artinya website disiapkan agar dapat dirayapi, dipahami, dan diukur dengan baik sebagai fondasi optimasi lanjutan."], points: ["Metadata dan semantic headings", "Canonical, robots, dan sitemap", "Structured data yang sesuai konten", "URL serta internal linking yang jelas", "Search Console, analytics, dan event conversion", "Performa serta image optimization"] },
      { heading: "Testing, peluncuran, dan handover", paragraphs: ["Sebelum live, website perlu diuji pada perangkat utama, link, form, metadata, redirect, dan alur conversion. Setelah deployment, bisnis harus mengetahui akses akun, cara memperbarui konten, biaya berulang, dan jalur dukungan."], points: ["QA responsive dan browser", "Pemeriksaan form serta analytics", "Backup dan akses akun", "Dokumentasi pengelolaan", "Masa dukungan dan maintenance"] },
    ],
  },
  {
    slug: "panduan-lengkap-website-umkm",
    title: "Panduan Lengkap Membuat Website untuk UMKM",
    description: "Panduan website UMKM dari tujuan, jenis halaman, katalog, WhatsApp, biaya, domain, SEO foundation, hingga pengukuran hasil.",
    answer: "Website UMKM yang efektif harus membantu calon customer memahami bisnis, melihat produk atau layanan, menemukan bukti kepercayaan, dan melakukan tindakan seperti chat atau pembelian. Mulailah dari tujuan dan journey customer, bukan dari daftar fitur atau pilihan template.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "12 menit",
    relatedHref: "/jasa-website-umkm",
    relatedLabel: "Lihat jasa website untuk UMKM",
    cluster: "umkm",
    pillar: true,
    sections: [
      { heading: "Apakah UMKM masih membutuhkan website?", paragraphs: ["Media sosial membantu discovery dan interaksi, tetapi bisnis tidak mengendalikan algoritma, format, atau akses audiens di platform tersebut. Website menjadi alamat resmi yang dapat memusatkan profil, katalog, lokasi, kebijakan, bukti, dan jalur order.", "Website tidak harus menggantikan Instagram atau marketplace. Ketiganya dapat bekerja sebagai sistem: media sosial menarik perhatian, marketplace membantu transaksi tertentu, dan website menjadi pusat informasi serta aset pencarian jangka panjang."], points: ["Profil dan kontak resmi", "Katalog yang tidak tenggelam di feed", "Halaman tujuan untuk iklan", "Data analytics milik bisnis", "Fondasi visibility di Google"] },
      { heading: "Pilih jenis website berdasarkan tujuan", paragraphs: ["Landing page cocok untuk satu campaign atau penawaran. Company profile cocok ketika customer perlu memahami bisnis dan layanan. Katalog tepat untuk banyak produk dengan order ke WhatsApp, sedangkan e-commerce diperlukan ketika transaksi, pembayaran, stock, dan order perlu dikelola di website."], points: ["Landing page: satu tujuan dan satu CTA utama", "Company profile: trust, layanan, bukti, dan kontak", "Katalog: kategori, produk, pencarian, dan inquiry", "E-commerce: cart, checkout, pembayaran, dan order"] },
      { heading: "Informasi yang harus disiapkan", paragraphs: ["Konten yang jelas sering lebih menentukan hasil daripada banyaknya animasi. Siapkan profil singkat, kategori produk, value proposition, area layanan, foto asli, pertanyaan customer, dan cara order sebelum design dimulai."], points: ["Nama serta deskripsi bisnis yang konsisten", "Produk, harga, dan detail penting", "Foto atau visual yang memang boleh digunakan", "Alamat atau area layanan", "WhatsApp dan jam respons", "Testimoni asli bila sudah tersedia"] },
      { heading: "Berapa biaya dan waktu pembuatannya?", paragraphs: ["Biaya mengikuti jenis website, kesiapan materi, desain, CMS, integrasi, dan dukungan. Website sederhana dapat dimulai dari scope kecil, sedangkan katalog atau commerce membutuhkan struktur data serta testing lebih banyak. Timeline juga sangat dipengaruhi oleh kesiapan konten dan approval."], points: ["Minta rincian deliverable dan biaya perpanjangan", "Pastikan domain dimiliki bisnis", "Sepakati revisi dan timeline", "Bedakan biaya build dari biaya layanan pihak ketiga"] },
      { heading: "Bagaimana mengukur hasil website UMKM?", paragraphs: ["Traffic bukan satu-satunya ukuran. Pantau query non-brand, halaman yang membantu customer, klik WhatsApp, submit form, add-to-cart, order, dan lead yang benar-benar berkualitas. Data tersebut menjadi dasar memperbaiki halaman serta campaign."], points: ["Organic impressions dan clicks", "Klik WhatsApp", "Lead atau order", "Conversion rate", "Revenue yang dapat ditelusuri"] },
    ],
  },
  {
    slug: "panduan-website-company-profile-perusahaan",
    title: "Panduan Website Company Profile untuk Perusahaan",
    description: "Panduan menyusun website company profile yang menjelaskan profil, layanan, kapabilitas, project, dokumen, dan inquiry perusahaan.",
    answer: "Website company profile adalah pusat informasi resmi yang membantu calon klien, partner, kandidat, dan stakeholder menilai perusahaan. Struktur terbaik mengikuti pertanyaan audiens: siapa perusahaan, apa yang dikerjakan, bukti apa yang dimiliki, dan bagaimana memulai percakapan.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "12 menit",
    relatedHref: "/jasa-website-company-profile",
    relatedLabel: "Lihat jasa website company profile",
    cluster: "company",
    pillar: true,
    sections: [
      { heading: "Siapa yang menggunakan website perusahaan?", paragraphs: ["Website corporate jarang hanya ditujukan kepada satu audiens. Calon klien mencari layanan dan proof, procurement membutuhkan informasi formal, kandidat melihat budaya dan karier, sedangkan partner menilai kapabilitas serta kontak."], points: ["Calon klien dan buyer B2B", "Procurement dan partner", "Kandidat", "Media atau stakeholder", "Tim sales internal"] },
      { heading: "Struktur halaman yang umum dibutuhkan", paragraphs: ["Tidak semua perusahaan memerlukan struktur yang sama. Namun fondasi biasanya mencakup homepage, tentang, layanan atau produk, project, insight atau berita, karier bila relevan, serta contact atau RFQ."], points: ["Homepage yang merangkum value", "Tentang dan kapabilitas", "Service hierarchy", "Project atau case study", "Dokumen dan artikel", "Contact, RFQ, atau lokasi"] },
      { heading: "Trust signal yang dapat diverifikasi", paragraphs: ["Gunakan informasi yang benar-benar dimiliki perusahaan: legal name, alamat, kontak, dokumentasi project, profil tim, sertifikasi valid, klien yang memberi izin, dan kebijakan. Hindari logo, rating, atau angka performa yang tidak dapat dibuktikan."], points: ["Kontak dan identitas konsisten", "Project dengan konteks", "Dokumen yang masih berlaku", "Privacy dan terms", "HTTPS serta ownership akun"] },
      { heading: "SEO dan content architecture", paragraphs: ["Setiap layanan penting sebaiknya memiliki halaman yang dapat menjawab intent spesifik. Artikel edukasi kemudian memperluas topik dan menghubungkan kembali ke service page menggunakan anchor yang deskriptif."], points: ["Title serta H1 sesuai intent", "Paragraf pembuka yang menjawab langsung", "Canonical dan sitemap", "Service, Organization, dan Breadcrumb schema", "Internal link ke layanan dan case study"] },
      { heading: "Mengelola redesign dan migrasi", paragraphs: ["Jika mengganti website lama, inventaris URL dan redirect perlu direncanakan sebelum peluncuran. Konten yang masih bernilai dipertahankan atau dipetakan, analytics diuji, dan status indexing dipantau setelah live."], points: ["Crawl URL lama", "Petakan redirect 301", "Pertahankan metadata relevan", "Uji form dan event", "Pantau GSC setelah migrasi"] },
    ],
  },
  {
    slug: "cara-memilih-jasa-pembuatan-website-terpercaya",
    title: "Cara Memilih Jasa Pembuatan Website yang Terpercaya",
    description: "Checklist objektif memilih vendor website berdasarkan scope, proses, ownership, bukti kerja, keamanan, biaya, dan dukungan.",
    answer: "Vendor website yang terpercaya menjelaskan scope, biaya, timeline, ownership, batas revisi, dan dukungan secara tertulis. Nilai kualitas proses serta relevansi project sebelumnya—bukan hanya harga, janji ranking, atau banyaknya fitur di proposal.",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readTime: "10 menit",
    relatedHref: "/jasa-pembuatan-website",
    relatedLabel: "Pelajari proses Hammad Studio",
    cluster: "buyer",
    pillar: true,
    sections: [
      { heading: "Mulai dari kebutuhan, bukan nama teknologi", paragraphs: ["Vendor perlu memahami siapa audiens, masalah apa yang diselesaikan, content apa yang tersedia, dan tindakan apa yang penting. Teknologi dipilih setelah kebutuhan jelas."], points: ["Tujuan bisnis", "Audiens dan journey", "Konten serta integrasi", "Kriteria keberhasilan"] },
      { heading: "Periksa bukti kerja secara kontekstual", paragraphs: ["Portofolio visual belum cukup. Cari penjelasan tentang tantangan, keputusan, deliverable, dan outcome. Jika ada angka performa, tanyakan sumber serta periodenya."], points: ["Project relevan", "Website yang dapat dikunjungi", "Peran vendor", "Keterbatasan yang dijelaskan jujur"] },
      { heading: "Pastikan proposal menjawab risiko", paragraphs: ["Proposal perlu menyebut apa yang termasuk dan tidak termasuk, siapa PIC, mekanisme approval, biaya eksternal, ownership akun, serta kondisi perubahan scope."], points: ["Deliverable", "Timeline dan milestone", "Revisi", "Pembayaran", "Source code dan akun", "Maintenance"] },
      { heading: "Hindari red flag umum", paragraphs: ["Janji ranking pasti, testimoni tanpa identitas, harga sangat rendah tanpa scope, domain atas nama vendor, dan ketergantungan pada akun yang tidak diberikan adalah risiko yang perlu ditanyakan."], points: ["Garansi ranking tanpa dasar", "Tidak ada perjanjian tertulis", "Tidak dapat menjelaskan biaya berulang", "Tidak ada handover", "Bukti kerja tidak dapat diverifikasi"] },
    ],
  },
  {
    slug: "website-atau-instagram-untuk-bisnis",
    title: "Website atau Instagram untuk Bisnis?",
    description: "Perbandingan fungsi website dan Instagram untuk discovery, trust, pencarian, katalog, campaign, data, serta conversion bisnis.",
    answer: "Bisnis tidak harus memilih website atau Instagram. Instagram efektif untuk discovery dan interaksi, sedangkan website berfungsi sebagai aset resmi untuk informasi, pencarian, katalog, campaign, dan conversion yang lebih terukur.",
    comparison: { leftTitle: "Instagram", rightTitle: "Website", rows: [{ label: "Peran", left: "Discovery dan interaksi", right: "Informasi, trust, dan conversion" }, { label: "Kontrol", left: "Mengikuti platform dan algoritma", right: "Kontrol struktur dan pengalaman" }, { label: "Pencarian", left: "Terbatas pada platform", right: "Dapat ditargetkan ke Google" }, { label: "Data", left: "Insight platform", right: "Analytics dan event sendiri" }] },
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "6 menit", relatedHref: "/jasa-website-umkm", relatedLabel: "Lihat solusi website UMKM", cluster: "umkm",
    sections: [
      { heading: "Apa kelebihan Instagram?", paragraphs: ["Instagram memberi distribusi, format visual, interaksi, dan komunitas yang sudah terbentuk. Platform ini kuat untuk memperkenalkan produk serta membangun hubungan rutin."], points: ["Discovery", "Interaksi", "Konten harian", "Social proof"] },
      { heading: "Apa yang website lakukan lebih baik?", paragraphs: ["Website memberi struktur informasi, kontrol brand, URL khusus campaign, visibility pencarian, serta analytics lintas halaman. Informasi penting tidak tenggelam berdasarkan urutan feed."], points: ["Informasi resmi", "Katalog terstruktur", "Google visibility", "Landing page iklan", "Ownership dan fleksibilitas"] },
      { heading: "Cara menggabungkan keduanya", paragraphs: ["Gunakan Instagram untuk menarik perhatian, lalu arahkan kebutuhan yang lebih serius ke halaman produk, katalog, FAQ, lokasi, atau penawaran di website. Dari sana pengunjung dapat membuka WhatsApp dengan konteks yang lebih lengkap."] },
    ],
  },
  {
    slug: "struktur-website-company-profile",
    title: "Struktur Website Company Profile yang Efektif",
    description: "Susunan halaman website company profile untuk menjelaskan value, perusahaan, layanan, project, bukti, insight, dan jalur inquiry.",
    answer: "Struktur website company profile yang efektif biasanya mencakup homepage, tentang perusahaan, layanan atau produk, project atau case study, insight atau berita, dan kontak. Susunan final harus mengikuti pertanyaan serta keputusan audiens perusahaan.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "7 menit", relatedHref: "/jasa-website-company-profile", relatedLabel: "Bangun website company profile", cluster: "company",
    sections: [
      { heading: "Homepage sebagai ringkasan keputusan", paragraphs: ["Homepage perlu menjelaskan siapa perusahaan, value utama, layanan, bukti, dan langkah berikutnya tanpa memaksa pengunjung membaca seluruh website."], points: ["Value proposition", "Service overview", "Proof", "Selected project", "CTA"] },
      { heading: "Tentang dan kapabilitas", paragraphs: ["Halaman tentang bukan tempat jargon. Jelaskan sejarah yang relevan, cara kerja, area layanan, tim atau leadership, legal information bila dapat ditampilkan, dan alasan perusahaan layak dipercaya."] },
      { heading: "Layanan, project, dan inquiry", paragraphs: ["Setiap layanan penting perlu konteks, use case, deliverable, dan bukti. Project menunjukkan pengalaman nyata, sementara form atau RFQ mengarahkan inquiry ke tim yang tepat."], points: ["Service pages", "Case studies", "Downloadable documents", "FAQ", "Contact atau RFQ"] },
    ],
  },
  {
    slug: "berapa-lama-membuat-website-company-profile",
    title: "Berapa Lama Membuat Website Company Profile?",
    description: "Estimasi waktu pembuatan website company profile dan faktor yang memengaruhi discovery, konten, desain, development, approval, serta migrasi.",
    answer: "Website company profile dengan scope terarah biasanya membutuhkan beberapa minggu. Waktu paling sering dipengaruhi jumlah stakeholder, kesiapan copy dan visual, kompleksitas desain, CMS, integrasi, serta migrasi dari website lama.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "6 menit", relatedHref: "/jasa-website-company-profile", relatedLabel: "Diskusikan timeline company profile", cluster: "company",
    sections: [
      { heading: "Tahapan yang memerlukan waktu", paragraphs: ["Project umumnya bergerak melalui discovery, struktur konten, desain, development, pengisian materi, QA, approval, dan launch. Beberapa tahap dapat berjalan paralel jika dependensinya jelas."], points: ["Discovery dan sitemap", "Content preparation", "UI/UX", "Development", "QA dan launch"] },
      { heading: "Penyebab timeline meleset", paragraphs: ["Materi yang belum siap, stakeholder yang berubah, feedback terfragmentasi, penambahan fitur, dan approval yang tidak memiliki PIC sering memberi dampak lebih besar daripada proses coding."] },
      { heading: "Cara menjaga project tetap berjalan", paragraphs: ["Tentukan satu PIC, jadwal review, format feedback, deadline materi, serta change request process sebelum build dimulai."] },
    ],
  },
  {
    slug: "nextjs-vs-wordpress-company-profile",
    title: "Next.js vs WordPress untuk Website Company Profile",
    description: "Perbandingan Next.js dan WordPress untuk company profile berdasarkan pengelolaan, fleksibilitas, performa, keamanan, biaya, serta kebutuhan tim.",
    answer: "WordPress cocok untuk kebutuhan content management umum dan ekosistem plugin yang luas. Next.js cocok ketika perusahaan membutuhkan pengalaman custom, integrasi, kontrol performa, dan arsitektur yang dapat berkembang. Pilihan terbaik bergantung pada workflow editor dan kebutuhan bisnis.",
    comparison: { leftTitle: "WordPress", rightTitle: "Next.js", rows: [{ label: "CMS", left: "Terintegrasi dan familiar", right: "Headless atau custom" }, { label: "Kustomisasi", left: "Theme, plugin, dan custom code", right: "Komponen serta arsitektur penuh" }, { label: "Maintenance", left: "Core, theme, plugin, dan server", right: "Dependency, deployment, API, dan CMS" }, { label: "Cocok untuk", left: "Publishing dan struktur umum", right: "Experience serta integrasi khusus" }] },
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "8 menit", relatedHref: "/jasa-website-company-profile", relatedLabel: "Diskusikan arsitektur website perusahaan", cluster: "technical",
    sections: [
      { heading: "Kapan WordPress cocok?", paragraphs: ["WordPress dapat efisien ketika struktur konten standar, tim terbiasa dengan editornya, dan kebutuhan dapat dipenuhi tanpa terlalu banyak plugin atau custom logic."], points: ["CMS siap pakai", "Ekosistem luas", "Banyak vendor", "Cocok untuk publishing umum"] },
      { heading: "Kapan Next.js cocok?", paragraphs: ["Next.js memberi ruang besar untuk user experience custom, integrasi API, rendering server atau statis, dan kontrol terhadap komponen serta performa."], points: ["Design custom", "Integrasi", "Performance control", "Scalable frontend architecture"] },
      { heading: "Keamanan dan maintenance", paragraphs: ["Keduanya dapat aman jika dikelola dengan benar. Risiko WordPress sering berasal dari plugin, theme, credential, dan update yang terabaikan. Risiko Next.js biasanya terkait dependency, konfigurasi, API, authentication, dan operasional deployment. Stack bukan pengganti proses keamanan."] },
      { heading: "Cara memilih", paragraphs: ["Nilai siapa yang mengelola konten, fitur lima belas bulan ke depan, integrasi, budget maintenance, serta kemampuan tim atau vendor yang akan merawat sistem."] },
    ],
  },
  {
    slug: "checklist-website-sebelum-launch",
    title: "Checklist Website Sebelum Launch",
    description: "Checklist teknis dan bisnis sebelum website live: konten, mobile, form, analytics, SEO, redirect, keamanan, ownership, dan monitoring.",
    answer: "Sebelum launch, periksa konten, tampilan mobile, link, form, analytics, metadata, canonical, sitemap, robots, redirect, HTTPS, ownership akun, dan backup. Launch dinyatakan siap ketika alur bisnis utama bekerja—bukan hanya ketika homepage terlihat selesai.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "8 menit", relatedHref: "/jasa-pembuatan-website", relatedLabel: "Lihat standar build Hammad Studio", cluster: "technical",
    sections: [
      { heading: "Konten dan experience", paragraphs: ["Periksa ejaan, nomor kontak, harga, legal information, empty state, navigasi, CTA, serta tampilan pada ukuran mobile utama."], points: ["H1 dan hierarchy", "Menu dan footer", "Form dan error state", "Alt text", "Responsive layout"] },
      { heading: "SEO dan discoverability", paragraphs: ["Pastikan halaman penting dapat dirayapi dan memiliki sinyal yang konsisten."], points: ["Title dan description", "Canonical", "Robots dan sitemap", "Structured data", "Internal links", "404 dan redirect"] },
      { heading: "Analytics dan conversion", paragraphs: ["Uji pageview dan event penting seperti klik WhatsApp, submit form, download, checkout, atau purchase. Dokumentasikan nama event agar reporting konsisten."] },
      { heading: "Security, ownership, dan operasi", paragraphs: ["Pastikan HTTPS, secret management, backup, akses akun, dependency, dan kontak dukungan jelas sebelum domain diarahkan."], points: ["Domain ownership", "Deployment access", "Environment variables", "Backup", "Monitoring", "Handover"] },
    ],
  },
  {
    slug: "fitur-website-umkm-yang-berguna",
    title: "Fitur Website UMKM yang Benar-Benar Berguna",
    description: "Prioritas fitur website UMKM berdasarkan kebutuhan customer: profil, katalog, WhatsApp, Maps, CMS, analytics, dan pencarian.",
    answer: "Fitur website UMKM yang paling berguna adalah fitur yang mengurangi pertanyaan customer dan memperpendek jalur menuju order: informasi bisnis, katalog, WhatsApp, lokasi, FAQ, serta analytics. Fitur tambahan sebaiknya dipilih setelah kebutuhan dasar tersebut bekerja.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "6 menit", relatedHref: "/jasa-website-umkm", relatedLabel: "Lihat jasa website UMKM", cluster: "umkm",
    sections: [
      { heading: "Fitur dasar yang hampir selalu berguna", paragraphs: ["Customer perlu memahami apa yang dijual, untuk siapa, berapa harganya bila dapat ditampilkan, di mana bisnis beroperasi, dan bagaimana memesan."], points: ["Profil bisnis", "Produk atau layanan", "WhatsApp", "Maps dan area layanan", "FAQ", "Analytics"] },
      { heading: "Katalog, CMS, atau e-commerce?", paragraphs: ["Katalog cocok ketika customer melihat produk lalu memesan melalui chat. CMS diperlukan jika tim rutin memperbarui produk. E-commerce tepat saat cart, pembayaran, stock, dan status order perlu dikelola di sistem."] },
      { heading: "Fitur yang sebaiknya tidak dipaksakan", paragraphs: ["Login, loyalty, chatbot AI, animasi berat, dan dashboard kompleks tidak otomatis memberi hasil. Tambahkan jika ada workflow, owner, data, dan alasan bisnis yang jelas."] },
    ],
  },
  {
    slug: "biaya-domain-dan-hosting-website",
    title: "Biaya Domain dan Hosting Website: Apa Saja yang Dibayar?",
    description: "Penjelasan biaya domain, hosting, deployment, email bisnis, database, storage, CDN, dan perpanjangan website.",
    answer: "Domain dan hosting adalah biaya berbeda. Domain membayar hak penggunaan alamat website, sedangkan hosting atau platform deployment menjalankan website. Biaya tahunan dipengaruhi ekstensi domain, traffic, storage, database, email, backup, dan layanan tambahan.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "6 menit", relatedHref: "/harga-website", relatedLabel: "Lihat rincian harga website", cluster: "umkm",
    sections: [
      { heading: "Domain", paragraphs: ["Harga domain berbeda berdasarkan ekstensi dan registrar. Periksa harga perpanjangan, bukan hanya promo tahun pertama, dan pastikan akun serta registrant berada dalam kendali bisnis."] },
      { heading: "Hosting dan deployment", paragraphs: ["Website statis, CMS, e-commerce, dan aplikasi memiliki kebutuhan infrastructure berbeda. Traffic, compute, database, storage, bandwidth, serta backup memengaruhi biaya."], points: ["Compute", "Bandwidth", "Database", "Storage", "Backup", "CDN"] },
      { heading: "Biaya lain yang mungkin muncul", paragraphs: ["Email bisnis, payment gateway, WhatsApp API, layanan pengiriman, lisensi, monitoring, serta maintenance dapat dihitung terpisah. Minta vendor menulis seluruh biaya berulang dalam proposal."] },
    ],
  },
  {
    slug: "cara-website-umkm-ditemukan-di-google",
    title: "Cara Agar Website UMKM Lebih Mudah Ditemukan di Google",
    description: "Langkah realistis membantu website UMKM ditemukan melalui crawlability, halaman layanan, Google Business Profile, konten, dan review asli.",
    answer: "Agar website UMKM lebih mudah ditemukan, pastikan halaman dapat dirayapi, daftarkan sitemap di Search Console, buat halaman yang menjawab layanan dan area nyata, optimalkan Google Business Profile, serta bangun konten dan review asli secara konsisten. Tidak ada pengaturan yang menjamin halaman pertama.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "8 menit", relatedHref: "/jasa-website-umkm", relatedLabel: "Bangun fondasi website UMKM", cluster: "umkm",
    sections: [
      { heading: "Pastikan Google dapat menemukan halaman", paragraphs: ["Gunakan internal link, sitemap, canonical yang benar, response status normal, serta content HTML yang dapat dibaca tanpa interaksi tambahan."], points: ["Search Console", "Sitemap", "Robots", "Canonical", "Internal links"] },
      { heading: "Buat halaman berdasarkan kebutuhan customer", paragraphs: ["Pisahkan layanan atau kategori yang memiliki intent berbeda. Jelaskan area layanan yang benar-benar dilayani dan hindari membuat puluhan halaman kota dengan copy yang sama."] },
      { heading: "Bangun bukti serta entitas lokal", paragraphs: ["Lengkapi Google Business Profile, jaga nama-kontak-area konsisten, tampilkan project, minta review jujur, dan perbarui informasi ketika berubah."] },
      { heading: "Ukur hasil bisnis", paragraphs: ["Pantau non-brand clicks, query layanan, klik WhatsApp, lead, order, dan revenue. Traffic tanpa tindakan bukan tujuan akhir."] },
    ],
  },
  {
    slug: "landing-page-untuk-iklan-umkm",
    title: "Kenapa Iklan UMKM Lebih Terukur dengan Landing Page?",
    description: "Peran landing page pada iklan Meta, TikTok, dan Google untuk menjaga pesan, menjawab objection, serta mengukur conversion.",
    answer: "Landing page membuat traffic iklan masuk ke halaman dengan satu penawaran dan tindakan utama. Bisnis dapat menjaga konsistensi pesan, memberi konteks sebelum WhatsApp, dan mengukur conversion dengan lebih jelas dibanding mengarahkan semua iklan ke profil umum.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "6 menit", relatedHref: "/solusi/umkm/landing-page-produk", relatedLabel: "Lihat jasa landing page produk", cluster: "umkm",
    sections: [
      { heading: "Message match", paragraphs: ["Headline, visual, penawaran, dan CTA pada landing page perlu melanjutkan janji iklan. Perubahan konteks yang terlalu besar membuat pengunjung ragu."] },
      { heading: "Elemen yang membantu conversion", paragraphs: ["Gunakan benefit yang konkret, detail penawaran, bukti yang valid, FAQ, risiko atau ketentuan, dan CTA yang terlihat."], points: ["Value proposition", "Benefit", "Proof", "FAQ", "CTA", "Tracking"] },
      { heading: "Apa yang perlu diukur?", paragraphs: ["Pantau click-through dari iklan, engagement pada halaman, klik WhatsApp atau form, lead berkualitas, conversion rate, serta revenue. Jangan berhenti pada pageview."] },
    ],
  },
  {
    slug: "website-company-profile-atau-landing-page",
    title: "Website Company Profile atau Landing Page?",
    description: "Cara memilih website company profile atau landing page berdasarkan tujuan, campaign, audiens, content, dan masa pakai.",
    answer: "Gunakan company profile ketika bisnis perlu menjelaskan perusahaan, layanan, bukti, dan informasi jangka panjang. Gunakan landing page ketika ada satu campaign, audiens, dan CTA spesifik. Banyak perusahaan membutuhkan keduanya dengan fungsi berbeda.",
    comparison: { leftTitle: "Company Profile", rightTitle: "Landing Page", rows: [{ label: "Tujuan", left: "Informasi dan trust jangka panjang", right: "Satu campaign atau conversion" }, { label: "Struktur", left: "Beberapa halaman dan audiens", right: "Satu alur yang fokus" }, { label: "Traffic", left: "Brand, organic, referral, sales", right: "Iklan atau campaign" }, { label: "Masa pakai", left: "Aset utama perusahaan", right: "Mengikuti masa campaign" }] },
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "6 menit", relatedHref: "/jasa-website-company-profile", relatedLabel: "Lihat jasa website company profile", cluster: "company",
    sections: [
      { heading: "Kapan memilih company profile?", paragraphs: ["Company profile cocok sebagai pusat informasi resmi untuk banyak stakeholder, layanan, project, artikel, dokumen, dan kontak."] },
      { heading: "Kapan memilih landing page?", paragraphs: ["Landing page cocok untuk iklan, event, peluncuran produk, recruitment campaign, atau penawaran yang membutuhkan satu narasi dan CTA."] },
      { heading: "Menggunakan keduanya", paragraphs: ["Company profile menjadi domain utama, sementara landing page dibuat di URL terpisah untuk campaign. Keduanya dapat berbagi design system, analytics, dan infrastruktur."] },
    ],
  },
  {
    slug: "kapan-redesign-website-perusahaan",
    title: "Kapan Website Perusahaan Harus Di-redesign?",
    description: "Tanda website perusahaan perlu redesign berdasarkan positioning, content, mobile UX, performa, maintenance, SEO, dan conversion.",
    answer: "Website perusahaan perlu dipertimbangkan untuk redesign ketika tidak lagi mencerminkan bisnis, sulit digunakan di mobile, lambat, sulit dikelola, tidak mendukung campaign, atau membuat calon klien kesulitan memahami layanan. Redesign harus dimulai dengan audit, bukan langsung mengganti visual.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "7 menit", relatedHref: "/redesign-website", relatedLabel: "Lihat jasa redesign website", cluster: "company",
    sections: [
      { heading: "Tanda dari sisi bisnis", paragraphs: ["Layanan, target pasar, brand, atau proses sales sudah berubah tetapi website masih menjelaskan versi lama perusahaan."] },
      { heading: "Tanda dari sisi pengalaman dan teknologi", paragraphs: ["Navigasi membingungkan, mobile buruk, halaman lambat, form tidak dapat dilacak, CMS sulit digunakan, atau dependency tidak terawat."], points: ["Mobile UX", "Performance", "Accessibility", "CMS", "Security", "Analytics"] },
      { heading: "Audit sebelum redesign", paragraphs: ["Inventaris traffic, query, backlink, halaman penting, conversion, content, dan URL lama. Keputusan redesign perlu mempertahankan aset yang masih bekerja dan memperbaiki bagian yang menghambat."] },
    ],
  },
  {
    slug: "website-untuk-bisnis-b2b",
    title: "Website untuk Bisnis B2B: Apa yang Harus Diprioritaskan?",
    description: "Prioritas website B2B untuk trust, service hierarchy, proof, technical documentation, RFQ, integrasi, dan sales enablement.",
    answer: "Website B2B harus membantu buyer memahami kapabilitas, kecocokan solusi, bukti pengalaman, risiko, dan langkah inquiry. Prioritaskan service hierarchy, case study, dokumentasi, contact atau RFQ, serta jalur yang mendukung proses sales.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "8 menit", relatedHref: "/jasa-website-company-profile", relatedLabel: "Bangun website perusahaan B2B", cluster: "company",
    sections: [
      { heading: "Jawab pertanyaan buyer", paragraphs: ["Buyer perlu mengetahui industri yang dilayani, scope, kapabilitas, lokasi, standar kerja, project, dan siapa yang dapat dihubungi."], points: ["Services", "Industries", "Case studies", "Documents", "FAQ", "RFQ"] },
      { heading: "Dukung tim sales", paragraphs: ["Buat URL yang dapat dibagikan untuk layanan serta case study, download dokumen bila perlu, dan routing inquiry agar lead tidak berhenti di inbox umum."] },
      { heading: "Integrasi dan pengukuran", paragraphs: ["Website dapat dihubungkan ke CRM, email, calendar, atau workflow internal. Ukur qualified inquiry, proposal, deal, dan revenue—bukan hanya jumlah visitor."] },
    ],
  },
  {
    slug: "jasa-website-vs-freelancer",
    title: "Jasa Website atau Freelancer: Mana yang Cocok?",
    description: "Perbandingan agency atau studio website dan freelancer berdasarkan scope, komunikasi, continuity, spesialisasi, risiko, serta budget.",
    answer: "Freelancer cocok untuk scope terarah yang dapat ditangani satu spesialis, sedangkan studio atau agency lebih cocok ketika project membutuhkan beberapa disiplin, continuity, proses, dan ownership yang lebih terstruktur. Kualitas tetap bergantung pada orang, bukti, dan perjanjian—bukan label vendor.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "7 menit", relatedHref: "/jasa-pembuatan-website", relatedLabel: "Pelajari cara kerja Hammad Studio", cluster: "buyer",
    sections: [
      { heading: "Kelebihan freelancer", paragraphs: ["Komunikasi dapat langsung, biaya operasional lebih ringan, dan spesialis yang tepat dapat sangat efektif untuk scope kecil atau kebutuhan tertentu."] },
      { heading: "Kelebihan studio atau agency", paragraphs: ["Studio biasanya memiliki proses lintas design, development, content, QA, dan project management serta continuity yang lebih terencana."] },
      { heading: "Pertanyaan yang lebih penting", paragraphs: ["Periksa siapa yang mengerjakan, scope, bukti, availability, ownership, dokumentasi, backup plan, dan dukungan setelah launch."], points: ["PIC", "Deliverable", "Timeline", "Ownership", "Maintenance", "Handover"] },
    ],
  },
  {
    slug: "modal-awal-website-umkm-dan-potensi-hasil",
    title: "Modal Awal Website UMKM dan Cara Menghitung Potensi Hasil",
    description: "Cara menghitung investasi website UMKM dan potensi hasil berdasarkan traffic, conversion, nilai transaksi, biaya operasional, dan periode pengukuran.",
    answer: "Modal website UMKM mencakup biaya build, domain, hosting, konten, maintenance, dan acquisition. Potensi hasil tidak dapat dijamin; hitung dengan asumsi traffic, conversion rate, nilai transaksi, margin, dan periode yang realistis lalu bandingkan dengan total biaya.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "8 menit", relatedHref: "/harga-website", relatedLabel: "Lihat estimasi investasi website", cluster: "umkm",
    sections: [
      { heading: "Komponen modal awal", paragraphs: ["Pisahkan biaya satu kali dan biaya berulang agar cash flow lebih mudah dipahami."], points: ["Discovery, design, dan development", "Domain dan infrastructure", "Foto serta copy", "Integrasi pihak ketiga", "Maintenance", "Iklan atau distribusi"] },
      { heading: "Rumus sederhana potensi hasil", paragraphs: ["Gunakan skenario, bukan janji. Contoh model: pengunjung dikalikan conversion rate menghasilkan order atau lead; hasil tersebut dikalikan nilai transaksi dan margin. Gunakan skenario rendah, tengah, dan tinggi serta catat sumber setiap asumsi."] },
      { heading: "Kapan investasi dianggap masuk akal?", paragraphs: ["Nilai website tidak selalu berupa transaksi langsung. Untuk bisnis jasa, kontribusi dapat berupa qualified lead, proposal, dan deal. Untuk katalog, website juga dapat mengurangi pekerjaan berulang ketika customer mencari informasi."], points: ["Organic revenue", "Qualified leads", "Cost per lead", "Waktu operasional yang berkurang", "Aset content dan brand"] },
      { heading: "Hindari klaim profit tanpa data", paragraphs: ["Vendor tidak dapat menjamin omzet hanya dari website karena hasil dipengaruhi produk, harga, traffic, offer, follow-up, kompetisi, dan operasional. Minta measurement plan, bukan angka bombastis."] },
    ],
  },
  {
    slug: "menghubungkan-katalog-website-ke-whatsapp",
    title: "Cara Menghubungkan Katalog Website ke WhatsApp",
    description: "Pilihan alur katalog ke WhatsApp dari tombol sederhana, pesan terisi otomatis, cart, pilihan varian, hingga tracking conversion.",
    answer: "Katalog website dapat terhubung ke WhatsApp melalui tautan wa.me dengan pesan terisi otomatis. Untuk banyak produk, pilihan varian atau cart dapat dirangkum menjadi satu pesan agar customer dan admin menerima konteks order yang jelas.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "7 menit", relatedHref: "/solusi/umkm/toko-online", relatedLabel: "Bangun katalog dengan WhatsApp order", cluster: "umkm",
    sections: [
      { heading: "Level 1: tombol WhatsApp", paragraphs: ["Tombol dapat membuka nomor bisnis dengan pesan awal yang menyebut halaman atau produk. Ini cocok untuk katalog kecil dan proses order yang tetap manual."] },
      { heading: "Level 2: produk dan varian", paragraphs: ["Pesan dapat memuat nama produk, varian, ukuran, jumlah, dan URL. Validasi pilihan sebelum membuka WhatsApp mengurangi percakapan bolak-balik."], points: ["Product ID", "Varian", "Jumlah", "Catatan", "URL produk"] },
      { heading: "Level 3: cart ke WhatsApp", paragraphs: ["Beberapa item dikumpulkan di cart, kemudian dibuat menjadi ringkasan pesan. Admin tetap perlu SOP untuk memeriksa stock, ongkir, pembayaran, dan status order."] },
      { heading: "Tracking yang perlu dipasang", paragraphs: ["Catat klik WhatsApp berdasarkan produk, placement, dan campaign. Klik bukan order; cocokkan dengan data chat atau transaksi untuk menghitung conversion yang benar."] },
    ],
  },
  {
    slug: "laravel-vs-nextjs-website-perusahaan",
    title: "Laravel vs Next.js untuk Website dan Sistem Perusahaan",
    description: "Perbandingan Laravel dan Next.js berdasarkan peran backend/frontend, content, integrasi, authentication, deployment, dan kebutuhan tim.",
    answer: "Laravel dan Next.js bukan selalu pengganti langsung. Laravel adalah framework backend full-stack PHP, sedangkan Next.js adalah framework React untuk aplikasi web dan rendering. Keduanya bahkan dapat digunakan bersama; pilihan bergantung pada domain logic, tim, CMS, integrasi, dan operasi.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "9 menit", relatedHref: "/solusi/perusahaan/sistem-custom-dashboard", relatedLabel: "Diskusikan arsitektur sistem perusahaan", cluster: "technical",
    comparison: { leftTitle: "Laravel", rightTitle: "Next.js", rows: [{ label: "Fokus", left: "Backend/full-stack PHP", right: "React full-stack dan rendering web" }, { label: "Cocok", left: "Domain logic, admin, API, workflow", right: "Experience web, SSR/SSG, React ecosystem" }, { label: "Tim", left: "Ekosistem PHP", right: "Ekosistem TypeScript/React" }, { label: "Kombinasi", left: "Dapat menjadi API/backend", right: "Dapat menjadi frontend" }] },
    sections: [
      { heading: "Jangan memilih dari benchmark headline", paragraphs: ["Nilai requirement, capability tim, hosting, integrasi, security model, dan maintenance. Performa production lebih dipengaruhi arsitektur serta implementasi daripada nama framework saja."] },
      { heading: "Kapan Laravel masuk akal?", paragraphs: ["Laravel kuat untuk business logic, CRUD kompleks, job queue, authentication, API, dan ekosistem PHP yang sudah dimiliki perusahaan."] },
      { heading: "Kapan Next.js masuk akal?", paragraphs: ["Next.js cocok untuk pengalaman web berbasis React, rendering statis atau server, integrasi frontend, dan tim TypeScript yang membutuhkan satu codebase modern."] },
      { heading: "Kapan digunakan bersama?", paragraphs: ["Laravel dapat menangani API serta domain logic, sementara Next.js menangani website atau portal. Konsekuensinya adalah dua runtime, authentication lintas sistem, deployment, observability, dan ownership yang harus jelas."] },
    ],
  },
  {
    slug: "checklist-keamanan-website-perusahaan",
    title: "Checklist Keamanan dan Audit Website Perusahaan",
    description: "Checklist keamanan website perusahaan untuk ownership, dependency, authentication, input, file, API, headers, backup, logging, dan response process.",
    answer: "Audit keamanan website perusahaan harus memeriksa ownership, dependency, authentication, authorization, input, upload file, API, secret, security headers, backup, logging, dan proses respons insiden. Checklist harus disesuaikan dengan risiko dan data yang diproses.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "10 menit", relatedHref: "/solusi/perusahaan/maintenance-support", relatedLabel: "Diskusikan maintenance dan security review", cluster: "technical",
    sections: [
      { heading: "Asset dan ownership", paragraphs: ["Inventaris domain, DNS, hosting, repository, CMS, database, email, analytics, vendor, serta admin. Hapus akses yang tidak diperlukan dan aktifkan MFA bila tersedia."], points: ["Account owner", "MFA", "Role", "Offboarding", "Recovery contact"] },
      { heading: "Application security", paragraphs: ["Periksa validation, output encoding, authentication, authorization, session, CSRF sesuai arsitektur, rate limiting, upload file, dan dependency. Uji berdasarkan threat model, bukan checklist generik saja."], points: ["Input validation", "RBAC", "Session", "API authorization", "Rate limit", "File validation"] },
      { heading: "Infrastructure dan recovery", paragraphs: ["Pastikan HTTPS, secret tidak masuk repository, security headers, backup yang dapat direstore, patch cadence, logging, monitoring, dan incident contact tersedia."] },
      { heading: "Apa yang bukan bukti keamanan?", paragraphs: ["HTTPS saja, logo security, framework modern, atau satu kali scan bukan jaminan. Keamanan merupakan proses berulang yang mengikuti perubahan sistem dan ancaman."] },
    ],
  },
  {
    slug: "integrasi-website-dengan-crm-erp",
    title: "Panduan Integrasi Website Perusahaan dengan CRM dan ERP",
    description: "Panduan merancang integrasi website ke CRM atau ERP untuk lead, customer, product, order, stock, invoice, webhook, retry, dan ownership data.",
    answer: "Integrasi website dengan CRM atau ERP perlu menentukan source of truth, data yang dipertukarkan, trigger, permission, error handling, retry, logging, dan owner operasional. Mulailah dari satu workflow bernilai tinggi sebelum menyambungkan seluruh sistem.",
    publishedAt: "2026-08-11", updatedAt: "2026-08-11", readTime: "10 menit", relatedHref: "/solusi/perusahaan/sistem-custom-dashboard", relatedLabel: "Diskusikan integrasi sistem", cluster: "company",
    sections: [
      { heading: "Mulai dari workflow", paragraphs: ["Contoh awal yang terarah adalah mengirim qualified inquiry dari website ke CRM, bukan langsung membuat sinkronisasi dua arah untuk seluruh customer dan order."] },
      { heading: "Tentukan source of truth", paragraphs: ["Putuskan sistem mana yang berwenang atas lead, customer, produk, stock, harga, order, dan invoice. Konflik muncul ketika dua sistem dapat mengubah data yang sama tanpa aturan."] },
      { heading: "Desain kontrak integrasi", paragraphs: ["Dokumentasikan field, identifier, format, authentication, webhook, rate limit, timeout, retry, idempotency, dan penanganan data sensitif."], points: ["Data mapping", "API auth", "Webhook", "Retry", "Idempotency", "Audit log"] },
      { heading: "Operasi setelah launch", paragraphs: ["Siapkan monitoring, alert, dead-letter flow, manual recovery, ownership vendor, dan test ketika salah satu sistem diperbarui. Integrasi yang tidak terpantau dapat gagal tanpa terlihat oleh tim bisnis."] },
    ],
  },
] as const satisfies readonly InsightArticle[];

export type InsightSlug = (typeof insightArticles)[number]["slug"];

export function getInsightArticle(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}
