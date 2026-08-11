type StructuredFAQ = {
  question: string;
  answer: string;
};

export function createServiceJsonLd(name: string, description: string, path: string, faqs: readonly StructuredFAQ[]) {
  const url = `https://hammad.studio${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        url,
        areaServed: { "@type": "Country", name: "Indonesia" },
        provider: { "@id": "https://hammad.studio/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: "https://hammad.studio" },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };
}
