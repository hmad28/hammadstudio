import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/pricing", destination: "/harga-website", permanent: true },
      { source: "/harga", destination: "/harga-website", permanent: true },
      { source: "/blog", destination: "/insight", permanent: true },
      { source: "/tentang-kami", destination: "/studio", permanent: true },
      { source: "/kontak", destination: "/contact", permanent: true },
      { source: "/studi-kasus", destination: "/work", permanent: true },
      { source: "/studi-kasus/:slug", destination: "/work/:slug", permanent: true },
      { source: "/jasa-website-perusahaan", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/solusi/umkm", destination: "/jasa-website-umkm", permanent: true },
      { source: "/solusi/umkm/harga-paket-umkm", destination: "/harga-website", permanent: true },
      { source: "/solusi/perusahaan", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/solusi/perusahaan/company-profile", destination: "/jasa-website-company-profile", permanent: true },
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/portofolio", destination: "/work", permanent: true },
      { source: "/security", destination: "/studio#security", permanent: true },
      { source: "/product", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
