# SEO Operations — Hammad Studio

Dokumen ini memisahkan pekerjaan yang sudah otomatis di website dari pekerjaan eksternal yang memerlukan akun, bukti, atau keputusan bisnis.

## Google Search Console

Status ownership: sudah diverifikasi oleh pemilik.

1. Submit `https://hammad.studio/sitemap.xml` pada menu Sitemaps.
2. Inspect homepage, `/jasa-website-umkm`, `/jasa-website-company-profile`, `/harga-website`, dan `/work` setelah deployment besar.
3. Jangan request indexing untuk seluruh URL sekaligus. Sitemap dan internal link akan membantu discovery.
4. Periksa Pages untuk `Crawled - currently not indexed`, duplicate canonical, soft 404, dan redirect error.
5. Periksa Core Web Vitals per template, bukan hanya satu URL.

### Query grouping mingguan

- UMKM: `umkm|usaha|bisnis kecil|website umkm`
- Company: `perusahaan|company profile|corporate|pt`
- Transaction: `jasa|buat|bikin|pembuatan|developer`
- Pricing: `harga|biaya|budget|berapa`
- Redesign: `redesign|revamp|renovasi|website lama`
- Local: `depok|jakarta`

Pantau impressions, clicks, CTR, average position, non-brand clicks, klik WhatsApp, form, qualified lead, proposal, deal, dan organic revenue. Jangan membuat estimasi keyword volume tanpa dataset Keyword Planner atau tool berbayar yang aktif.

## Google Analytics

Isi `NEXT_PUBLIC_GA_ID` pada environment production. Website sudah mengirim event:

- `generate_lead` dari form project ke WhatsApp;
- `whatsapp_click` berdasarkan placement;
- `file_download` untuk lead magnet checklist revamp website perusahaan;
- LCP, INP, CLS, FCP, dan TTFB melalui Web Vitals.

Tandai `generate_lead` dan `whatsapp_click` sebagai key event setelah datanya muncul. Gunakan `file_download` sebagai assisted-conversion signal, bukan qualified lead. Rekonsiliasi semuanya dengan pipeline penjualan.

Lead magnet B2B tersedia di `/downloads/checklist-revamp-website-perusahaan.pdf`. Perbarui PDF dan halaman tujuan bersamaan bila scope, proses, atau kontak bisnis berubah.

## Google Business Profile

Bagian ini tidak dapat diotomasi dari repository.

1. Gunakan nama brand yang konsisten: `Hammad Studio`.
2. Pilih kategori yang benar-benar tersedia dan sesuai, seperti Web Designer atau Software Company.
3. Gunakan service area yang memang dilayani. Jangan memasang alamat virtual atau kota yang tidak memiliki presence.
4. Samakan telepon, website, jam operasional, dan deskripsi dengan kanal resmi.
5. Upload screenshot project nyata dan posting pembaruan secara berkala.
6. Minta ulasan jujur dari klien. Jangan memberi teks keyword yang harus disalin dan jangan membuat review sendiri.

## Case-study metrics

Tambahkan angka hanya jika sumbernya tersedia. Contoh sumber yang dapat diterima:

- GA/GSC sebelum dan sesudah dengan periode yang setara;
- Lighthouse atau CrUX dengan tanggal pengukuran;
- jumlah klik WhatsApp atau form dari event analytics;
- data order atau lead yang diberikan klien;
- perubahan operasional yang dapat diverifikasi.

Catat baseline, periode, metode, dan keterbatasan. Jika data belum tersedia, gunakan outcome faktual seperti struktur katalog, ketersediaan informasi, atau workflow yang berhasil dibangun.

## Authority dan backlink

- Minta izin untuk credit link ber-anchor brand `Hammad Studio`; gunakan `nofollow` bila link merupakan syarat komersial.
- Prioritaskan kolaborasi, direktori bisnis legitimate, guest expertise, komunitas, dan publikasi yang relevan.
- Jangan membeli paket backlink massal atau menanam anchor keyword tersembunyi.
- Catat source URL, destination URL, tanggal, tipe rel, dan konteks link.

## Content cadence

Refresh halaman berdasarkan query GSC, bukan jadwal yang memaksa produksi massal. Setiap artikel baru wajib memiliki jawaban langsung, pengalaman atau contoh nyata, internal link ke pillar dan money page, author, tanggal, serta sumber bila menyebut data eksternal.
