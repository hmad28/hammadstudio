import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string | null;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | HAMMAD.STUDIO`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "HAMMAD.STUDIO",
      locale: "id_ID",
      type: "website",
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}
