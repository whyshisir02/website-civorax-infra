import { locales, defaultLocale, type Locale } from "@/configs/locale.config";

/**
 * Strips the locale prefix from a pathname.
 * e.g. "/en/services" → "/services", "/ne" → "/"
 */
export function stripLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
  }
  return pathname;
}

/**
 * Builds a locale-prefixed pathname.
 * e.g. buildLocalePath("ne", "/services") → "/ne/services"
 */
export function buildLocalePath(locale: Locale, pathname: string): string {
  const stripped = stripLocalePrefix(pathname);
  return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
}

/**
 * Extracts the locale segment from a pathname.
 * Returns defaultLocale if none found.
 */
export function extractLocale(pathname: string): Locale {
  const segment = pathname.split("/")[1] as Locale;
  return locales.includes(segment) ? segment : defaultLocale;
}
