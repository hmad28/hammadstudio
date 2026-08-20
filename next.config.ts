import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/pricing", destination: "/harga-website", permanent: true },
      { source: "/harga", destination: "/harga-website", permanent: true },
      { source: "/services", destination: "/harga-website", permanent: true },
      { source: "/blog", destination: "/insight", permanent: true },
      { source: "/tentang-kami", destination: "/studio", permanent: true },
      { source: "/tentang", destination: "/studio", permanent: true },
      { source: "/kontak", destination: "/contact", permanent: true },
      { source: "/studi-kasus", destination: "/work", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/studi-kasus/:slug", destination: "/work/:slug", permanent: true },
      { source: "/jasa-website-perusahaan", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/jasa-pembuatan-website-umkm", destination: "/jasa-website-umkm", permanent: true },
      { source: "/jasa-pembuatan-website-umkm/kuliner", destination: "/industri/umkm-kuliner", permanent: true },
      { source: "/jasa-pembuatan-website-umkm/fashion", destination: "/industri/fashion", permanent: true },
      { source: "/jasa-pembuatan-website-umkm/depok", destination: "/jasa-pembuatan-website-jakarta", permanent: true },
      { source: "/jasa-pembuatan-website-depok", destination: "/jasa-pembuatan-website-jakarta", permanent: true },
      { source: "/jasa-pembuatan-website-perusahaan", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/jasa-pembuatan-website-perusahaan/manufaktur", destination: "/industri/manufaktur", permanent: true },
      { source: "/jasa-pembuatan-website-perusahaan/logistik", destination: "/industri/logistik", permanent: true },
      { source: "/jasa-pembuatan-website-perusahaan/konstruksi", destination: "/industri/konstruksi", permanent: true },
      { source: "/jasa-pembuatan-website-perusahaan/ekspor-impor", destination: "/industri/ekspor-impor", permanent: true },
      { source: "/solusi/umkm", destination: "/jasa-website-umkm", permanent: true },
      { source: "/solusi/umkm/harga-paket-umkm", destination: "/harga-website", permanent: true },
      { source: "/solusi/perusahaan", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/solusi/perusahaan/company-profile", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/portofolio", destination: "/work", permanent: true },
      { source: "/security", destination: "/studio#security", permanent: true },
      { source: "/product", destination: "/harga-website", permanent: true },
      { source: "/services/custom-development", destination: "/website-custom", permanent: true },
    ];
  },
};

export default nextConfig;
