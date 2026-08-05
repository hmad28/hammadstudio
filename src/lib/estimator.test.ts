import { describe, expect, it } from "vitest";
import { calculateEstimate, fitResult } from "./estimator";

describe("project estimator", () => {
  it("returns the package baseline", () => {
    const result = calculateEstimate({ packageId: "launch", pages: 1, cms: false, multilingual: false, authentication: false, dashboard: false, payment: false, integrations: 0, advancedMotion: false, contentMigration: false, priority: false });
    expect(result.minimum).toBe(3_500_000);
    expect(result.maximum).toBe(5_500_000);
  });

  it("adds complex capabilities and priority multiplier", () => {
    const result = calculateEstimate({ packageId: "business", pages: 10, cms: true, multilingual: true, authentication: false, dashboard: false, payment: false, integrations: 1, advancedMotion: false, contentMigration: false, priority: true });
    expect(result.minimum).toBeGreaterThan(12_000_000);
    expect(result.assumptions).toContain("priority delivery");
  });
});

describe("fit result", () => {
  it("maps thresholds consistently", () => {
    expect(fitResult(8)).toBe("Strong fit");
    expect(fitResult(5)).toBe("Possible fit");
    expect(fitResult(2)).toBe("Probably not the right fit");
  });
});
