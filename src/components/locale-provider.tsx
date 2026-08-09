"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/types";

const storageKey = "hammad.locale.v1";
const listeners = new Set<() => void>();

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getLocaleSnapshot(): Locale {
  return window.localStorage.getItem(storageKey) === "en" ? "en" : "id";
}

function subscribeToLocale(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === storageKey) callback();
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function updateLocale(locale: Locale) {
  window.localStorage.setItem(storageKey, locale);
  listeners.forEach((listener) => listener());
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getLocaleSnapshot, (): Locale => "id");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext value={{ locale, setLocale: updateLocale }}>{children}</LocaleContext>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
