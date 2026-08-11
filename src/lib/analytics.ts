type AnalyticsWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters?: Record<string, string>) => void;
};

export function trackConversion(eventName: string, parameters?: Record<string, string>) {
  if (typeof window === "undefined") return;
  (window as AnalyticsWindow).gtag?.("event", eventName, parameters);
}
