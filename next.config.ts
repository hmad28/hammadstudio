import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/portofolio", destination: "/work", permanent: true },
      { source: "/security", destination: "/studio#security", permanent: true },
      { source: "/insight", destination: "/", permanent: true },
      { source: "/product", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
