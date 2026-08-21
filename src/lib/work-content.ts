import type { Localized } from "./types";

export const featuredWorkSlugs = [
  "jamwisata",
  "drivemate",
  "masjid-raya-puri-telukjambe",
  "cpx-jersey",
] as const;

export const selectedWorkSlugs = [
  "newsraya",
  "dewa-konstruksi",
  "dimsum",
  "sewa-elf-bandung",
  "add-logistics-landing-page",
  "studyshare",
  "sahabat-qolbu",
  "spectrasec",
  "naiklevel-ai",
  "shofi-frozen",
  "nusuk-haromain-indonesia",
  "buraq-logistik",
  "add-logistik",
  "solivate",
] as const;

export const priorityCaseStudySlugs = [
  "jamwisata",
  "drivemate",
  "shofi-frozen",
  "add-logistik",
  "sahabat-qolbu",
  "buraq-logistik",
  "cpx-jersey",
] as const;

export const workSlugs = [...featuredWorkSlugs, ...selectedWorkSlugs] as const;
export type WorkSlug = (typeof workSlugs)[number];

export type WorkProject = {
  slug: WorkSlug;
  title: string;
  category: Localized;
  year: string;
  image: string | null;
  website: string | null;
  overview: Localized;
  challenge: Localized;
  built: Localized;
  experience: Localized;
  features: readonly string[];
  outcome: Localized;
  next: WorkSlug;
};

const project = (value: Omit<WorkProject, "year">): WorkProject => ({
  ...value,
  year: "2026",
});

export const workProjects: Record<WorkSlug, WorkProject> = {
  jamwisata: project({
    slug: "jamwisata",
    title: "JamWisata",
    category: { id: "Business Website · Tour & Travel", en: "Business Website · Tour & Travel" },
    image: "/images/work/jamwisata.png",
    website: "https://www.jamwisata.id/",
    overview: { id: "Website Umrah dan wisata halal yang menyatukan brand, pencarian paket, jadwal keberangkatan, fasilitas, galeri, testimoni, serta konsultasi WhatsApp.", en: "An Umrah and halal travel website combining brand, package discovery, departure schedules, facilities, galleries, testimonials, and WhatsApp consultation." },
    challenge: { id: "Menyajikan banyak informasi perjalanan tanpa menghilangkan rasa tenang, kredibilitas, dan kemudahan calon jamaah menemukan paket.", en: "Presenting extensive travel information without losing calm, credibility, or making package discovery difficult for prospective pilgrims." },
    built: { id: "Experience travel dengan package finder, katalog Umrah dan wisata halal, trust signals, dokumentasi jamaah, FAQ, serta jalur konsultasi.", en: "A travel experience with package finder, Umrah and halal tour catalogues, trust signals, pilgrim documentation, FAQs, and consultation paths." },
    experience: { id: "Calon jamaah dapat memahami layanan, menyaring preferensi perjalanan, melihat paket, lalu melanjutkan ke portal atau WhatsApp.", en: "Prospective pilgrims can understand the service, filter travel preferences, explore packages, then continue to the portal or WhatsApp." },
    features: ["Travel package finder", "Umrah package catalogue", "Halal tour catalogue", "Departure information", "Gallery & testimonials", "WhatsApp consultation"],
    outcome: { id: "Website travel yang berfungsi sebagai pusat informasi, discovery paket, dan pembuka konsultasi—bukan sekadar company profile.", en: "A travel website serving as an information hub, package discovery tool, and consultation entry point—not merely a company profile." },
    next: "drivemate",
  }),
  drivemate: project({
    slug: "drivemate",
    title: "DriveMate",
    category: { id: "Rental Platform · Automotive", en: "Rental Platform · Automotive" },
    image: "/images/work/drivemate.png",
    website: "https://drivemate.hammad.studio/",
    overview: { id: "Website rental mobil dan motor Bandung dengan katalog armada, harga, pilihan layanan, pencarian kebutuhan perjalanan, dan booking melalui WhatsApp.", en: "A Bandung car and motorcycle rental website with fleet catalogue, pricing, service options, trip search, and WhatsApp booking." },
    challenge: { id: "Membuat pilihan kendaraan, jenis layanan, harga, lokasi, dan booking terasa cepat meski katalog armada cukup luas.", en: "Making vehicle selection, service type, pricing, location, and booking feel fast despite a broad fleet catalogue." },
    built: { id: "Storefront rental dengan pencarian jadwal dan lokasi, katalog mobil dan motor, detail harga, service highlights, serta CTA booking kontekstual.", en: "A rental storefront with schedule and location search, car and motorcycle catalogues, pricing details, service highlights, and contextual booking calls to action." },
    experience: { id: "Customer dapat memilih jenis perjalanan, membandingkan armada, memahami tarif, dan mengirim permintaan unit langsung melalui WhatsApp.", en: "Customers can choose a trip type, compare fleets, understand rates, and send a vehicle request directly through WhatsApp." },
    features: ["Car & motorcycle catalogue", "Schedule and location search", "Rental pricing", "Service options", "Vehicle detail", "WhatsApp booking"],
    outcome: { id: "Katalog rental yang mengubah pencarian kendaraan menjadi alur booking yang jelas dan mudah digunakan dari ponsel.", en: "A rental catalogue turning vehicle discovery into a clear, mobile-friendly booking journey." },
    next: "masjid-raya-puri-telukjambe",
  }),
  "masjid-raya-puri-telukjambe": project({
    slug: "masjid-raya-puri-telukjambe",
    title: "Masjid Raya Puri Telukjambe",
    category: {
      id: "Digital Platform · Community",
      en: "Digital Platform · Community",
    },
    image: "/images/work/masjid-raya-puri-telukjambe.png",
    website: "https://www.masjidrayapuritelukjambe.com/",
    overview: {
      id: "Platform digital masjid yang menggabungkan informasi kegiatan, jadwal imam dan khutbah, donasi, layanan jamaah, livestream, hingga pengelolaan aula dalam satu ekosistem.",
      en: "A mosque digital platform combining activities, imam and sermon schedules, donations, community services, livestreams, and hall management in one ecosystem.",
    },
    challenge: {
      id: "Menyatukan banyak layanan masjid tanpa membuat informasi terasa padat atau sulit ditemukan.",
      en: "Bringing many mosque services together without making information dense or difficult to find.",
    },
    built: {
      id: "Portal publik terintegrasi dengan jalur cepat menuju program, donasi, jadwal, layanan sosial, dan booking aula.",
      en: "An integrated public portal with direct paths to programmes, donations, schedules, social services, and hall booking.",
    },
    experience: {
      id: "Jamaah dapat memahami aktivitas masjid dan mengakses layanan utama langsung dari beranda.",
      en: "The community can understand mosque activities and access essential services directly from the homepage.",
    },
    features: [
      "Programme information",
      "Imam & khutbah schedule",
      "Donation",
      "Community services",
      "Livestream",
      "Hall booking",
    ],
    outcome: {
      id: "Satu pusat informasi dan layanan digital yang memperkuat hubungan masjid dengan jamaah.",
      en: "One digital information and service hub strengthening the mosque's relationship with its community.",
    },
    next: "cpx-jersey",
  }),
  "cpx-jersey": project({
    slug: "cpx-jersey",
    title: "CPX Jersey",
    category: { id: "E-Commerce · Sportswear", en: "E-Commerce · Sportswear" },
    image: "/images/work/cpx-jersey.png",
    website: "https://cpxindo.solivate.com/",
    overview: {
      id: "Website commerce untuk brand jersey custom dengan katalog produk, kategori olahraga, cart, custom-order flow, serta integrasi marketplace.",
      en: "A commerce website for a custom jersey brand with product catalogue, sports categories, cart, custom-order flow, and marketplace integration.",
    },
    challenge: {
      id: "Membuat produk ready-stock dan pesanan custom tetap mudah dieksplorasi dalam satu storefront.",
      en: "Making ready-stock products and custom orders easy to explore within one storefront.",
    },
    built: {
      id: "Storefront sportswear dengan struktur katalog, kategori olahraga, cart, alur custom order, dan jalur marketplace.",
      en: "A sportswear storefront with catalogue structure, sports categories, cart, custom-order journey, and marketplace paths.",
    },
    experience: {
      id: "Customer dapat berpindah dari eksplorasi produk menuju pembelian atau permintaan jersey custom secara jelas.",
      en: "Customers can move clearly from product discovery to purchase or a custom jersey request.",
    },
    features: [
      "Product catalogue",
      "Sports categories",
      "Shopping cart",
      "Custom-order flow",
      "Marketplace integration",
      "Responsive commerce",
    ],
    outcome: {
      id: "Experience commerce milik brand yang mendukung penjualan produk dan kebutuhan custom dalam satu tempat.",
      en: "A brand-owned commerce experience supporting product sales and custom requirements in one place.",
    },
    next: "studyshare",
  }),
  studyshare: project({
    slug: "studyshare",
    title: "StudyShare",
    category: {
      id: "Web Application · Education",
      en: "Web Application · Education",
    },
    image: "/images/work/studyshare.png",
    website: "https://studyshare.web.id/",
    overview: {
      id: "Platform pembelajaran kolaboratif tempat pengguna dapat membuat akun, membagikan catatan, dan menemukan materi berdasarkan mata pelajaran.",
      en: "A collaborative learning platform where users can create accounts, share notes, and discover material by subject.",
    },
    challenge: {
      id: "Mengubah kumpulan catatan siswa menjadi knowledge base yang terstruktur dan mudah dicari.",
      en: "Turning student notes into a structured and discoverable knowledge base.",
    },
    built: {
      id: "Aplikasi berbagi catatan dengan akun pengguna, kategori mata pelajaran, kontribusi materi, dan discovery content.",
      en: "A note-sharing application with user accounts, subject categories, content contribution, and discovery.",
    },
    experience: {
      id: "Pengguna dapat menemukan catatan terbaru, melihat materi, lalu ikut berkontribusi ke komunitas belajar.",
      en: "Users can discover recent notes, review material, and contribute to the learning community.",
    },
    features: [
      "User accounts",
      "Note publishing",
      "Subject categories",
      "Content discovery",
      "Community contribution",
      "Responsive application",
    ],
    outcome: {
      id: "Ruang belajar bersama yang membuat pengetahuan siswa lebih mudah dibagikan dan ditemukan kembali.",
      en: "A shared learning space making student knowledge easier to publish and rediscover.",
    },
    next: "sahabat-qolbu",
  }),
  "sahabat-qolbu": project({
    slug: "sahabat-qolbu",
    title: "Sahabat Qolbu",
    category: {
      id: "Business Website · Travel",
      en: "Business Website · Travel",
    },
    image: "/images/work/sahabat-qolbu.png",
    website: "https://sahabatqolbu.com/",
    overview: {
      id: "Website bisnis travel Umrah yang berfokus pada kepercayaan, informasi layanan dan paket, serta lead generation melalui alur konsultasi dan pendaftaran.",
      en: "An Umrah travel business website focused on trust, service and package information, and lead generation through consultation and registration journeys.",
    },
    challenge: {
      id: "Membangun kepercayaan calon jamaah sambil menjelaskan legalitas, layanan, paket, dan alur pendaftaran dengan ringkas.",
      en: "Building prospective pilgrims' trust while explaining legality, services, packages, and registration concisely.",
    },
    built: {
      id: "Website travel dengan trust signals, katalog paket, informasi layanan, konsultasi, dan pendaftaran calon jamaah.",
      en: "A travel website with trust signals, package catalogue, service information, consultation, and prospective pilgrim registration.",
    },
    experience: {
      id: "Calon jamaah memahami kredibilitas travel sebelum membandingkan paket dan memulai konsultasi.",
      en: "Prospective pilgrims understand the travel company's credibility before comparing packages and starting a consultation.",
    },
    features: [
      "Trust & legality",
      "Umrah packages",
      "Service information",
      "Consultation flow",
      "Lead registration",
      "WhatsApp contact",
    ],
    outcome: {
      id: "Website bisnis yang mengubah kepercayaan dan informasi menjadi jalur inquiry yang jelas.",
      en: "A business website turning trust and information into a clear inquiry journey.",
    },
    next: "spectrasec",
  }),
  spectrasec: project({
    slug: "spectrasec",
    title: "SpectraSec",
    category: {
      id: "Community Platform · Cybersecurity",
      en: "Community Platform · Cybersecurity",
    },
    image: "/images/work/spectrasec.png",
    website: "https://www.spectrasec.xyz/",
    overview: {
      id: "Platform komunitas cybersecurity untuk menampilkan riset, materi edukasi, profil researcher, achievement, dan aktivitas responsible disclosure.",
      en: "A cybersecurity community platform showcasing research, educational material, researcher profiles, achievements, and responsible disclosure activity.",
    },
    challenge: {
      id: "Membawa identitas komunitas security yang teknis ke experience publik yang kredibel dan mudah dipahami.",
      en: "Bringing a technical security community identity into a credible and understandable public experience.",
    },
    built: {
      id: "Community hub untuk riset, insight, pembelajaran, profil tim, dan pencapaian responsible disclosure.",
      en: "A community hub for research, insights, learning, team profiles, and responsible disclosure achievements.",
    },
    experience: {
      id: "Pengunjung dapat memahami fokus komunitas, mempelajari materi, dan mengenal researcher di baliknya.",
      en: "Visitors can understand the community's focus, explore learning material, and meet the researchers behind it.",
    },
    features: [
      "Security research",
      "Educational content",
      "Researcher profiles",
      "Achievements",
      "Responsible disclosure",
      "Community CTA",
    ],
    outcome: {
      id: "Identitas digital yang memperkuat kredibilitas dan akses pengetahuan komunitas cybersecurity.",
      en: "A digital identity strengthening the credibility and accessibility of a cybersecurity community.",
    },
    next: "naiklevel-ai",
  }),
  "naiklevel-ai": project({
    slug: "naiklevel-ai",
    title: "NaikLevel AI",
    category: {
      id: "Learning Platform · Artificial Intelligence",
      en: "Learning Platform · Artificial Intelligence",
    },
    image: "/images/work/naiklevel-ai.png",
    website: "https://naiklevelai.hammad.studio/",
    overview: {
      id: "Platform pembelajaran AI praktis berbasis teks untuk mempelajari AI agent, automation, dan modern tools melalui panduan step-by-step yang langsung dapat diterapkan.",
      en: "A practical text-based AI learning platform for mastering AI agents, automation, and modern tools through immediately applicable step-by-step guides.",
    },
    challenge: {
      id: "Mengubah topik AI yang cepat berubah dan teknis menjadi materi singkat yang mudah dicari, dicoba, dan dibuka kembali saat dibutuhkan.",
      en: "Turning fast-moving technical AI topics into concise material that is easy to search, try, and revisit when needed.",
    },
    built: {
      id: "Learning platform dengan jalur belajar, library materi, reader dokumentasi, checkpoint praktik, progress, dan panduan troubleshooting.",
      en: "A learning platform with guided paths, a content library, documentation reader, practice checkpoints, progress, and troubleshooting guides.",
    },
    experience: {
      id: "Pengguna memilih tujuan belajar, mengikuti panduan pendek, menjalankan command, menyelesaikan checkpoint, lalu kembali saat membutuhkan referensi.",
      en: "Users choose a learning goal, follow concise guides, run commands, complete checkpoints, and return whenever they need a reference.",
    },
    features: [
      "Learning paths",
      "Documentation reader",
      "Practical AI guides",
      "Progress tracking",
      "Command checkpoints",
      "Troubleshooting content",
    ],
    outcome: {
      id: "Knowledge platform yang membuat pembelajaran AI lebih dekat dengan pekerjaan nyata daripada format course pasif.",
      en: "A knowledge platform bringing AI learning closer to real work than passive course formats.",
    },
    next: "shofi-frozen",
  }),
  "shofi-frozen": project({
    slug: "shofi-frozen",
    title: "Shofi Frozen",
    category: { id: "E-Commerce · F&B", en: "E-Commerce · F&B" },
    image: "/images/work/shofi-frozen.png",
    website: "https://shofi-frozen-v1.vercel.app/",
    overview: {
      id: "Digital storefront untuk bisnis frozen food dengan katalog produk, pencarian, wishlist, cart, promo, dan checkout melalui WhatsApp.",
      en: "A digital storefront for a frozen-food business with product catalogue, search, wishlist, cart, promotions, and WhatsApp checkout.",
    },
    challenge: {
      id: "Membuat katalog produk harian tetap cepat dijelajahi sekaligus mudah diarahkan ke pemesanan WhatsApp.",
      en: "Keeping a daily product catalogue quick to browse while making WhatsApp ordering effortless.",
    },
    built: {
      id: "Storefront responsif dengan pencarian, kategori, wishlist, cart, promo, dan checkout berbasis WhatsApp.",
      en: "A responsive storefront with search, categories, wishlist, cart, promotions, and WhatsApp-based checkout.",
    },
    experience: {
      id: "Customer mencari produk, menyimpan pilihan, melihat promo, dan menyelesaikan pesanan melalui channel yang familiar.",
      en: "Customers search products, save choices, review promotions, and complete orders through a familiar channel.",
    },
    features: [
      "Product catalogue",
      "Search",
      "Wishlist",
      "Shopping cart",
      "Promotions",
      "WhatsApp checkout",
    ],
    outcome: {
      id: "Kanal penjualan digital yang membuat produk lebih mudah ditemukan dan dipesan.",
      en: "A digital sales channel making products easier to discover and order.",
    },
    next: "nusuk-haromain-indonesia",
  }),
  "nusuk-haromain-indonesia": project({
    slug: "nusuk-haromain-indonesia",
    title: "Nusuk Haromain Indonesia",
    category: {
      id: "Business Website · Umrah Travel",
      en: "Business Website · Umrah Travel",
    },
    image: "/images/work/nusuk-haromain-indonesia.png",
    website: "https://nhi-landingpage.vercel.app/",
    overview: {
      id: "Website premium untuk perusahaan travel Umrah dan Haji yang menampilkan layanan, paket perjalanan, artikel edukasi, galeri, serta journey calon jamaah.",
      en: "A premium website for an Umrah and Hajj travel company presenting services, travel packages, educational articles, galleries, and the prospective pilgrim journey.",
    },
    challenge: {
      id: "Menyampaikan kualitas layanan premium tanpa mengurangi kejelasan informasi perjalanan dan konsultasi.",
      en: "Communicating premium service quality without reducing the clarity of travel and consultation information.",
    },
    built: {
      id: "Website travel premium dengan presentasi paket, layanan, artikel, galeri, dan CTA konsultasi.",
      en: "A premium travel website presenting packages, services, articles, galleries, and consultation calls to action.",
    },
    experience: {
      id: "Calon jamaah bergerak dari aspirasi perjalanan menuju pemahaman paket dan konsultasi.",
      en: "Prospective pilgrims move from travel aspirations toward package understanding and consultation.",
    },
    features: [
      "Premium presentation",
      "Travel packages",
      "Services",
      "Educational articles",
      "Gallery",
      "Consultation journey",
    ],
    outcome: {
      id: "Kehadiran digital premium yang mendukung trust, edukasi, dan lead generation.",
      en: "A premium digital presence supporting trust, education, and lead generation.",
    },
    next: "buraq-logistik",
  }),
  "buraq-logistik": project({
    slug: "buraq-logistik",
    title: "Buraq Logistik",
    category: {
      id: "Corporate Website · Logistics",
      en: "Corporate Website · Logistics",
    },
    image: "/images/work/buraq-logistik.png",
    website: "https://buraqlogistik.hammad.studio/",
    overview: {
      id: "Website corporate untuk perusahaan logistik yang mengkomunikasikan layanan trucking, distribusi regional, cakupan pengiriman, dan kapabilitas operasional.",
      en: "A corporate website for a logistics company communicating trucking services, regional distribution, shipping coverage, and operational capabilities.",
    },
    challenge: {
      id: "Menyederhanakan kapabilitas operasional logistik menjadi pesan corporate yang cepat dipahami calon klien.",
      en: "Simplifying logistics operations into a corporate message prospective clients can understand quickly.",
    },
    built: {
      id: "Website corporate dengan layanan trucking, cakupan regional, kapabilitas armada, dan jalur inquiry.",
      en: "A corporate website with trucking services, regional coverage, fleet capabilities, and inquiry paths.",
    },
    experience: {
      id: "Calon klien memahami cakupan layanan sebelum masuk ke diskusi kebutuhan pengiriman.",
      en: "Prospective clients understand service coverage before discussing shipping requirements.",
    },
    features: [
      "Trucking services",
      "Regional distribution",
      "Shipping coverage",
      "Operational capability",
      "Corporate profile",
      "Inquiry CTA",
    ],
    outcome: {
      id: "Kehadiran corporate yang mempermudah penjelasan layanan dan pembukaan percakapan bisnis.",
      en: "A corporate presence simplifying service communication and opening business conversations.",
    },
    next: "add-logistik",
  }),
  "add-logistik": project({
    slug: "add-logistik",
    title: "Add Logistik",
    category: {
      id: "Corporate Website · Logistics",
      en: "Corporate Website · Logistics",
    },
    image: "/images/work/add-logistik.png",
    website: "https://add-logistik.com/",
    overview: {
      id: "Website corporate PT Antaran Dua Dunia untuk mengkomunikasikan layanan transportasi darat, armada, legalitas, dan kapabilitas distribusi bagi kebutuhan bisnis.",
      en: "A corporate website for PT Antaran Dua Dunia communicating land transportation services, fleet, legal standing, and distribution capabilities for business needs.",
    },
    challenge: {
      id: "Membuat layanan logistik B2B terasa terpercaya dan mudah dipahami tanpa membebani calon klien dengan detail operasional yang berlebihan.",
      en: "Making B2B logistics services feel credible and easy to understand without overwhelming prospective clients with operational detail.",
    },
    built: {
      id: "Website company profile dengan penjelasan layanan, armada, legalitas, keunggulan operasional, dan jalur konsultasi langsung.",
      en: "A company profile website covering services, fleet, legal standing, operational strengths, and a direct consultation journey.",
    },
    experience: {
      id: "Calon klien memahami positioning, layanan, dan kesiapan operasional perusahaan sebelum memulai konsultasi pengiriman.",
      en: "Prospective clients understand the company's positioning, services, and operational readiness before starting a shipping consultation.",
    },
    features: [
      "Land transportation",
      "Service overview",
      "Fleet information",
      "Company legality",
      "Operational strengths",
      "Consultation CTA",
    ],
    outcome: {
      id: "Kehadiran digital corporate yang memperkuat kredibilitas perusahaan dan mempermudah pembukaan peluang kerja sama logistik.",
      en: "A corporate digital presence strengthening company credibility and making logistics partnership opportunities easier to initiate.",
    },
    next: "solivate",
  }),
  solivate: project({
    slug: "solivate",
    title: "Solivate Studio",
    category: {
      id: "Agency Website · Digital Studio",
      en: "Agency Website · Digital Studio",
    },
    image: "/images/work/solivate.png",
    website: "https://solivate.com/",
    overview: {
      id: "Website digital agency yang memperkenalkan layanan pembuatan website, platform digital, dan sistem custom untuk UMKM, komunitas, event, serta organisasi.",
      en: "A digital agency website presenting website development, digital platforms, and custom systems for SMEs, communities, events, and organisations.",
    },
    challenge: {
      id: "Menjelaskan spektrum layanan digital yang luas dalam positioning agency yang tetap fokus, modern, dan mudah menghasilkan inquiry.",
      en: "Explaining a broad range of digital services through agency positioning that remains focused, modern, and effective at generating inquiries.",
    },
    built: {
      id: "Website agency dengan service catalogue, portfolio, pricing, proses kerja, trust signals, dan alur memulai project.",
      en: "An agency website with service catalogue, portfolio, pricing, process, trust signals, and a project-start journey.",
    },
    experience: {
      id: "Calon klien dapat memahami kemampuan studio, melihat karya, memperkirakan investasi, dan memulai percakapan project.",
      en: "Prospective clients can understand the studio's capabilities, review work, estimate investment, and begin a project conversation.",
    },
    features: [
      "Agency positioning",
      "Service catalogue",
      "Portfolio",
      "Pricing overview",
      "Development process",
      "Project inquiry",
    ],
    outcome: {
      id: "Website utama agency yang menyatukan positioning, bukti kerja, dan lead generation dalam satu experience.",
      en: "The agency's main website unifying positioning, proof of work, and lead generation in one experience.",
    },
    next: "newsraya",
  }),
  newsraya: project({
    slug: "newsraya",
    title: "NewsRaya",
    category: {
      id: "News Platform · Media",
      en: "News Platform · Media",
    },
    image: "/images/work/newsraya.png",
    website: "https://newsraya.hammad.studio/",
    overview: {
      id: "Portal berita digital dengan editorial hierarchy yang jelas, breaking news, topik populer, berita nasional, bisnis, teknologi, AI, dan video dalam satu experience.",
      en: "A digital news portal with clear editorial hierarchy, breaking news, popular topics, national, business, technology, AI, and video coverage in one experience.",
    },
    challenge: {
      id: "Menyusun banyak kategori dan arus berita cepat agar tetap mudah dipindai tanpa kehilangan identitas editorial.",
      en: "Organising many categories and fast-moving stories so they remain easy to scan without losing editorial identity.",
    },
    built: {
      id: "Portal media responsif dengan daily brief, breaking-news ticker, headline hierarchy, popular stories, category feeds, pencarian, dan format video.",
      en: "A responsive media portal with a daily brief, breaking-news ticker, headline hierarchy, popular stories, category feeds, search, and video formats.",
    },
    experience: {
      id: "Pembaca dapat menangkap headline utama, mengikuti topik terkini, lalu menjelajahi berita berdasarkan minat dengan cepat.",
      en: "Readers can grasp the main headlines, follow current topics, and quickly explore news based on their interests.",
    },
    features: [
      "Breaking-news ticker",
      "Daily brief",
      "Editorial hierarchy",
      "Category feeds",
      "Popular stories",
      "Search & video",
    ],
    outcome: {
      id: "Experience media yang terasa aktual, terstruktur, dan nyaman dipindai dari desktop maupun perangkat mobile.",
      en: "A media experience that feels current, structured, and easy to scan across desktop and mobile devices.",
    },
    next: "dewa-konstruksi",
  }),
  "dewa-konstruksi": project({
    slug: "dewa-konstruksi",
    title: "Dewa Konstruksi",
    category: { id: "Business Website · Construction", en: "Business Website · Construction" },
    image: "/images/work/dewa-konstruksi.png",
    website: "https://dewakonstruksi.hammad.studio/",
    overview: { id: "Website kontraktor rumah untuk memperkenalkan layanan bangun baru, renovasi, perencanaan, portofolio proyek, proses kerja, dan konsultasi.", en: "A residential contractor website presenting new builds, renovations, planning, project work, process, and consultation." },
    challenge: { id: "Membangun kepercayaan calon pemilik rumah melalui pesan yang tegas, proses yang transparan, dan bukti pekerjaan yang mudah dipahami.", en: "Building homeowner confidence through clear messaging, a transparent process, and easy-to-understand proof of work." },
    built: { id: "Landing bisnis dengan hero berorientasi konsultasi, hierarchy layanan, showcase proyek, tahapan kerja, informasi tim, artikel, dan CTA WhatsApp.", en: "A consultation-led business landing page with service hierarchy, project showcase, work stages, team information, articles, and WhatsApp calls to action." },
    experience: { id: "Pengunjung dapat memahami cakupan pembangunan, melihat cara kerja tim, meninjau proyek, lalu memulai konsultasi dengan cepat.", en: "Visitors can understand the construction scope, review the team's process and projects, then start a consultation quickly." },
    features: ["Construction services", "Project showcase", "Work process", "Trust signals", "Articles", "WhatsApp consultation"],
    outcome: { id: "Kehadiran digital kontraktor yang terlihat profesional sekaligus memudahkan calon klien memulai pembicaraan proyek.", en: "A professional contractor presence that makes it easier for prospective clients to begin a project conversation." },
    next: "dimsum",
  }),
  dimsum: project({
    slug: "dimsum",
    title: "LalaGi Dimsum",
    category: { id: "Commerce Website · Food & Beverage", en: "Commerce Website · Food & Beverage" },
    image: "/images/work/dimsum.png",
    website: "https://dimsum.hammad.studio/",
    overview: { id: "Website kuliner untuk brand dimsum dengan menu, pilihan produk, pesanan acara, trust signal halal, dan pemesanan melalui WhatsApp.", en: "A culinary website for a dimsum brand with menus, product selections, event orders, halal trust signals, and WhatsApp ordering." },
    challenge: { id: "Membuat produk makanan terasa menggugah secara visual sekaligus menjaga informasi menu dan jalur pemesanan tetap sederhana.", en: "Making the food feel visually appetising while keeping menu information and ordering straightforward." },
    built: { id: "Storefront hangat dengan visual produk besar, navigasi menu, penawaran pesanan acara, brand story, dan CTA pesan yang selalu mudah dijangkau.", en: "A warm storefront with large product visuals, menu navigation, event-order offerings, brand story, and easily accessible ordering calls to action." },
    experience: { id: "Customer dapat mengenal brand, menjelajahi menu, memilih kebutuhan personal atau acara, lalu memesan melalui WhatsApp.", en: "Customers can discover the brand, browse the menu, choose personal or event needs, and order through WhatsApp." },
    features: ["Food menu", "Product showcase", "Event orders", "Halal trust signal", "Brand story", "WhatsApp ordering"],
    outcome: { id: "Website kuliner yang mengubah visual produk menjadi jalur pemesanan yang jelas dan mobile-friendly.", en: "A culinary website turning strong product visuals into a clear, mobile-friendly ordering journey." },
    next: "sewa-elf-bandung",
  }),
  "sewa-elf-bandung": project({
    slug: "sewa-elf-bandung",
    title: "Sewa Elf Bandung",
    category: { id: "Rental Website · Transportation", en: "Rental Website · Transportation" },
    image: "/images/work/sewa-elf-bandung.png",
    website: "https://www.sewaelfbandung.com/",
    overview: { id: "Website rental kendaraan rombongan di Bandung dengan armada, harga sewa, layanan perjalanan, area operasional, dan booking WhatsApp.", en: "A Bandung group-transport rental website with fleets, rental pricing, travel services, operating areas, and WhatsApp booking." },
    challenge: { id: "Menyajikan pilihan armada dan layanan perjalanan agar mudah dibandingkan oleh keluarga, perusahaan, sekolah, maupun rombongan wisata.", en: "Presenting fleet and trip options that families, companies, schools, and tour groups can compare easily." },
    built: { id: "Website rental dengan hero armada, price guidance, katalog kendaraan, service advantages, profil bisnis, lokasi, dan jalur booking langsung.", en: "A rental website with fleet-led hero, price guidance, vehicle catalogue, service advantages, business profile, location, and direct booking journey." },
    experience: { id: "Calon penyewa dapat memahami kapasitas kendaraan, mengecek pilihan layanan, lalu meminta ketersediaan melalui WhatsApp.", en: "Prospective renters can understand vehicle capacity, review service options, then ask for availability through WhatsApp." },
    features: ["Fleet catalogue", "Rental pricing", "Service coverage", "Vehicle capacity", "Business profile", "WhatsApp booking"],
    outcome: { id: "Katalog rental yang mempercepat perjalanan dari pencarian kendaraan menuju permintaan booking.", en: "A rental catalogue shortening the journey from vehicle discovery to a booking request." },
    next: "add-logistics-landing-page",
  }),
  "add-logistics-landing-page": project({
    slug: "add-logistics-landing-page",
    title: "ADD Logistics Landing Page",
    category: { id: "Landing Page · Logistics", en: "Landing Page · Logistics" },
    image: "/images/work/add-logistics-landing-page.png",
    website: "https://add-logistics-landingpage.vercel.app/",
    overview: { id: "Landing page PT Antaran Dua Dunia yang memadatkan layanan transportasi darat, armada, cakupan pengiriman, legalitas, dan konsultasi dalam satu halaman.", en: "A PT Antaran Dua Dunia landing page condensing land transportation, fleet, delivery coverage, legal information, and consultation into one page." },
    challenge: { id: "Menyederhanakan informasi logistik B2B menjadi halaman ringkas yang tetap menunjukkan kapabilitas, keamanan, dan kredibilitas perusahaan.", en: "Simplifying B2B logistics information into a concise page while preserving capability, safety, and corporate credibility." },
    built: { id: "Landing page dengan value proposition kuat, ringkasan layanan, armada, keunggulan operasional, legalitas perusahaan, dan CTA konsultasi.", en: "A landing page with a strong value proposition, service summary, fleet, operational advantages, company legality, and consultation calls to action." },
    experience: { id: "Calon klien dapat menangkap layanan utama dan trust signal perusahaan tanpa harus menjelajahi banyak halaman.", en: "Prospective clients can grasp the core services and company trust signals without navigating many pages." },
    features: ["B2B value proposition", "Service summary", "Fleet overview", "Legal information", "Trust signals", "Consultation CTA"],
    outcome: { id: "Halaman akuisisi ringkas untuk menjelaskan layanan logistik dan membuka inquiry bisnis lebih cepat.", en: "A concise acquisition page explaining logistics services and opening business inquiries more quickly." },
    next: "jamwisata",
  }),
};
