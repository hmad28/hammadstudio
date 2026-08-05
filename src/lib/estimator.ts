import { packages } from "./site-data";
import type { EstimateResult, EstimatorSelection } from "./types";

const additions = {
  cms: [1_500_000, 3_000_000],
  multilingual: [1_500_000, 3_500_000],
  authentication: [3_000_000, 6_000_000],
  dashboard: [4_000_000, 8_000_000],
  payment: [2_000_000, 4_000_000],
  integration: [1_500_000, 4_000_000],
  advancedMotion: [2_000_000, 5_000_000],
  contentMigration: [1_000_000, 3_000_000],
  page: [350_000, 650_000],
} as const;

export function calculateEstimate(input: EstimatorSelection): EstimateResult {
  const selected = packages.find((item) => item.id === input.packageId) ?? packages[0];
  let minimum = selected.startingPrice;
  let maximum = selected.maximumGuide;
  const assumptions = [`${selected.name} baseline`];
  const add = (key: keyof typeof additions, count = 1, label: string = key) => {
    minimum += additions[key][0] * count;
    maximum += additions[key][1] * count;
    assumptions.push(label);
  };
  if (input.pages > 8) add("page", input.pages - 8, `${input.pages - 8} additional pages`);
  if (input.cms) add("cms", 1, "CMS");
  if (input.multilingual) add("multilingual", 1, "additional language");
  if (input.authentication) add("authentication", 1, "authentication & roles");
  if (input.dashboard) add("dashboard", 1, "custom dashboard");
  if (input.payment) add("payment", 1, "payment integration");
  if (input.integrations) add("integration", input.integrations, `${input.integrations} integration(s)`);
  if (input.advancedMotion) add("advancedMotion", 1, "advanced motion");
  if (input.contentMigration) add("contentMigration", 1, "content migration");
  if (input.priority) {
    minimum = Math.round(minimum * 1.2);
    maximum = Math.round(maximum * 1.3);
    assumptions.push("priority delivery");
  }
  return { minimum, maximum, assumptions };
}

export const formatIDR = (amount: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);

export function fitResult(score: number) {
  if (score >= 8) return "Strong fit";
  if (score >= 5) return "Possible fit";
  return "Probably not the right fit";
}
