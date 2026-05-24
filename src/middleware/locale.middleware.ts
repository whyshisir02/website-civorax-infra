import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest } from "next/server";
import {
  locales,
  defaultLocale,
  LOCALE_COOKIE,
  type Locale,
} from "@/configs/locale.config";

/**
 * Validates that a given string is a supported locale.
 * Prevents locale injection attacks via cookies or URL manipulation.
 */
export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Reads the user's previously saved locale from the cookie.
 * Returns null if cookie is absent or contains an invalid value.
 */
export function getLocaleCookie(request: NextRequest): Locale | null {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  return isSupportedLocale(cookie) ? cookie : null;
}

/**
 * Parses the Accept-Language header and returns the best matching locale.
 * Falls back to defaultLocale when no match is found.
 */
export function detectBrowserLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  try {
    const headers = { "accept-language": acceptLanguage };
    const languages = new Negotiator({ headers }).languages();
    const matched = match(languages, locales as unknown as string[], defaultLocale);
    return isSupportedLocale(matched) ? matched : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

/**
 * Resolves the locale for the current request using this priority:
 * 1. Cookie (user's manual selection)
 * 2. Accept-Language header (browser preference)
 * 3. Default locale (en)
 */
export function resolveLocale(request: NextRequest): Locale {
  return getLocaleCookie(request) ?? detectBrowserLocale(request);
}
