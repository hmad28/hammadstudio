"use client";

import { useReportWebVitals } from "next/web-vitals";

type AnalyticsWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string | number | boolean>) => void;
};

const reportWebVitals: Parameters<typeof useReportWebVitals>[0] = (metric) => {
  (window as AnalyticsWindow).gtag?.("event", metric.name, {
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    metric_rating: metric.rating,
    non_interaction: true,
  });
};

export function WebVitals() {
  useReportWebVitals(reportWebVitals);
  return null;
}
