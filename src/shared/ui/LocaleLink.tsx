"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/configs/locale.config";

type LocaleLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function isExternalLink(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export default function LocaleLink({ href, children, className, onClick }: LocaleLinkProps) {
  const locale = useLocale() as Locale;

  let localizedHref = href;
  if (!isExternalLink(href) && locale !== routing.defaultLocale) {
    localizedHref = href === "/" ? `/${locale}` : `/${locale}${href}`;
  }

  return (
    <Link href={localizedHref} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
