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
  "Website Starter",
  "Website + CMS",
  "E-Commerce QRIS",
  "E-Commerce Full Payment",
  "Booking System",
  "Operational System",
]);

const badges: Record<string, string> = {
  "Website Starter": "PALING MUDAH DIMULAI",
  "Website + CMS": "SWEET SPOT",
  "E-Commerce QRIS": "QRIS OTOMATIS",
  "Operational System": "MULTI-MODULE",
};

const toPublicPlan = (plan: (typeof pricingPlans)[number]): MerdekaPlan => ({
  name: plan.name,
  price: plan.price,
  numericPrice: plan.numericPrice,
  summary: plan.summary,
  icon: plan.icon,
  features: plan.includes.slice(0, 6),
  badge: badges[plan.name],
  cta: plan.price === "Custom" ? "Diskusikan scope" : "Konsultasikan produk",
  featured: plan.name === "Website + CMS",
});

export const merdekaFeaturedPlans = pricingPlans
  .filter((plan) => featuredNames.has(plan.name))
  .map(toPublicPlan);

export const merdekaOtherPlans = pricingPlans
  .filter((plan) => !featuredNames.has(plan.name))
  .map(toPublicPlan);

export const merdekaPlans = [...merdekaFeaturedPlans, ...merdekaOtherPlans];

export const getMerdekaPlanId = getPricingPlanId;
