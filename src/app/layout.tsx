import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/instrument-serif/400.css";
import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";
import "./globals.css";
import "./motion.css";
import "./focused-home.css";
import { MotionSystem } from "@/components/motion-system";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hammad.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Hammad Studio — Digital Product & Software Studio Indonesia", template: "%s — Hammad Studio" },
  description: "Hammad Studio designs and builds premium websites, commerce experiences, business systems, automation, and custom software with clear scope and transparent pricing.",
  openGraph: { title: "HAMMAD STUDIO®", description: "Digital products, engineered properly.", type: "website", url: siteUrl, siteName: "Hammad Studio" },
  twitter: { card: "summary_large_image", title: "HAMMAD STUDIO®", description: "Digital products, engineered properly." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <MotionSystem />
        {children}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
