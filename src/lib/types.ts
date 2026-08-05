export type Locale = "id" | "en";

export type Localized = { id: string; en: string };

export type ServiceSlug = "web" | "commerce" | "systems" | "product-engineering" | "automation";

export interface Service {
  slug: ServiceSlug;
  number: string;
  name: Localized;
  headline: Localized;
  description: Localized;
  startingPrice: number;
  timeline: Localized;
  deliverables: Localized[];
}

export interface Package {
  id: "launch" | "business" | "commerce" | "automation" | "system" | "product";
  name: string;
  startingPrice: number;
  maximumGuide: number;
  timeline: string;
  featured?: boolean;
  bestFor: Localized;
  includes: Localized[];
}

export interface EstimatorSelection {
  packageId: Package["id"];
  pages: number;
  cms: boolean;
  multilingual: boolean;
  authentication: boolean;
  dashboard: boolean;
  payment: boolean;
  integrations: number;
  advancedMotion: boolean;
  contentMigration: boolean;
  priority: boolean;
}

export interface EstimateResult {
  minimum: number;
  maximum: number;
  assumptions: string[];
}

export interface ProjectBrief {
  locale: Locale;
  service: string;
  clientType: string;
  summary: string;
  problem: string;
  budget: string;
  timeline: string;
  name: string;
  company?: string;
  email: string;
  whatsapp: string;
  website?: string;
  attachments?: string[];
  estimate?: Partial<EstimatorSelection>;
  fit?: { score: number; result: string };
  consent: boolean;
  turnstileToken?: string;
  source?: string;
}
