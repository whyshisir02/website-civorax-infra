import type { locales } from "@/configs/locale.config";

declare global {
  type Locale = (typeof locales)[number];
}

export {};
