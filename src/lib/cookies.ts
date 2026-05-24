import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "@/configs/locale.config";

/**
 * Sets the locale cookie on the client side.
 * The next-intl middleware also writes this cookie automatically on locale
 * changes via the router, but this utility is used by the LanguageSwitcher
 * for an immediate client-side write before the navigation resolves.
 */
export function setLocaleCookie(locale: Locale): void {
  const maxAge = LOCALE_COOKIE_MAX_AGE;
  const secure = window.location.protocol === "https:";
  document.cookie = `${LOCALE_COOKIE}=${locale}; max-age=${maxAge}; path=/; samesite=lax${secure ? "; secure" : ""}`;
}
