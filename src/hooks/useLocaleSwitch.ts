"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { setLocaleCookie } from "@/lib/cookies";
import { buildLocalePath } from "@/lib/locale-utils";
import type { Locale } from "@/configs/locale.config";

/**
 * Returns a switchLocale function that:
 * 1. Writes the new locale to the NEXT_LOCALE cookie immediately
 * 2. Navigates to the same path under the new locale prefix
 */
export function useLocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  function switchLocale(nextLocale: Locale): void {
    if (nextLocale === currentLocale) return;
    setLocaleCookie(nextLocale);
    const newPath = buildLocalePath(nextLocale, pathname);
    router.push(newPath);
  }

  return { switchLocale, currentLocale };
}
