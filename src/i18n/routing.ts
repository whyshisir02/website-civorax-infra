import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale, LOCALE_COOKIE } from "@/configs/locale.config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeCookie: {
    name: LOCALE_COOKIE,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  },
});
