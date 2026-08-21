import { getPricingPlanId, pricingPlans, type PricingIcon } from "./pricing-catalog";

export type MerdekaPlan = {
  name: string;
  price: string;
  numericPrice?: number;
  summary: string;
  icon: PricingIcon;
  features: string[];
  badge?: string;
  cta: string;
  featured?: boolean;
};

const featuredNames = new Set([
  "Website",
  "CMS",
  "Commerce",
  "Booking",
  "Business",
  "Operational",
]);

const badges: Record<string, string> = {
  Website: "PALING MUDAH DIMULAI",
  CMS: "DASHBOARD ADMIN",
  Commerce: "QRIS OTOMATIS",
  Operational: "MULTI-MODULE",
};

const toPublicPlan = (plan: (typeof pricingPlans)[number]): MerdekaPlan => ({
  name: plan.name,
  price: plan.price,
  numericPrice: plan.numericPrice,
  summary: plan.summary,
  icon: plan.icon,
  features: plan.includes.slice(0, 6),
  badge: badges[plan.name],
  cta: plan.price === "Custom Quote" ? "Diskusikan scope" : "Konsultasikan produk",
  featured: plan.name === "CMS",
});

export const merdekaFeaturedPlans = pricingPlans
  .filter((plan) => featuredNames.has(plan.name))
  .map(toPublicPlan);

export const merdekaOtherPlans = pricingPlans
  .filter((plan) => !featuredNames.has(plan.name))
  .map(toPublicPlan);

export const merdekaPlans = [...merdekaFeaturedPlans, ...merdekaOtherPlans];

export const getMerdekaPlanId = getPricingPlanId;
