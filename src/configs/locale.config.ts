export const locales = ["en", "ne", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ne: "नेपाली",
  ja: "日本語",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  ne: "🇳🇵",
  ja: "🇯🇵",
};

// Text direction per locale — wired for RTL expansion (Arabic, Urdu, etc.)
export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ne: "ltr",
  ja: "ltr",
};

// OpenGraph locale codes for SEO
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  ne: "ne_NP",
  ja: "ja_JP",
};

// Cookie name for persisted locale preference
export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export const translationNamespaces = [
  "common",
  "navigation",
  "home",
  "services",
  "about",
  "contact",
  "process",
  "our-work",
  "auth",
  "dashboard",
  "errors",
  "seo",
] as const;

export type TranslationNamespace = (typeof translationNamespaces)[number];
