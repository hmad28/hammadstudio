"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const promoEndsAt = new Date("2026-09-01T00:00:00+07:00").getTime();
const HomepagePromoPopup = dynamic(
  () => import("./homepage-promo-popup").then((module) => module.HomepagePromoPopup),
  { ssr: false, loading: () => null },
);

export function DeferredHomepagePromo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (Date.now() >= promoEndsAt) return;

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => setReady(true), { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = globalThis.setTimeout(() => setReady(true), 1600);
    return () => globalThis.clearTimeout(timer);
  }, []);

  return ready ? <HomepagePromoPopup /> : null;
}
