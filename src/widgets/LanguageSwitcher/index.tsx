"use client";

import { useRef, useState, useEffect } from "react";
import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";
import { locales, type Locale } from "@/configs/locale.config";
import { ChevronDown } from "lucide-react";

const localeDisplay: Record<Locale, { label: string; short: string; flag: string }> = {
  en: { label: "English", short: "EN", flag: "🇬🇧" },
  ne: { label: "नेपाली", short: "NE", flag: "🇳🇵" },
  ja: { label: "日本語", short: "JA", flag: "🇯🇵" },
};

type Props = { variant?: "desktop" | "mobile" };

export default function LanguageSwitcher({ variant = "desktop" }: Props) {
  const { currentLocale, switchLocale } = useLocaleSwitch();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = localeDisplay[currentLocale];
  const isMobile = variant === "mobile";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        aria-expanded={open}
        aria-haspopup="listbox"
        className={
          isMobile
            ? "inline-flex h-10 items-center gap-1 rounded-xl border border-[#e5e2dd] bg-white px-2.5 text-[13px] font-semibold text-[#081d30] shadow-sm transition-colors hover:bg-[#f0ede9]"
            : "inline-flex h-[42px] items-center gap-1.5 rounded-[13px] border border-[#e5e2dd] bg-white px-3 text-[13px] font-semibold text-[#081d30] shadow-sm transition-colors hover:bg-[#f0ede9] hover:text-[#006c4e]"
        }
      >
        <span role="img" aria-hidden="true" className="text-base leading-none">
          {current.flag}
        </span>
        <span>{isMobile ? current.short : current.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 z-50 mt-1.5 min-w-[140px] overflow-hidden rounded-xl border border-[#e5e2dd] bg-white shadow-[0_8px_30px_rgba(8,29,48,0.10)] animate-in fade-in zoom-in-95 duration-150"
        >
          {locales.map((locale) => {
            const { label, flag } = localeDisplay[locale];
            const isActive = locale === currentLocale;
            return (
              <li key={locale} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    switchLocale(locale);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#006c4e]/8 text-[#006c4e]"
                      : "text-[#081d30] hover:bg-[#f0ede9] hover:text-[#006c4e]"
                  }`}
                >
                  <span role="img" aria-hidden="true" className="text-base leading-none">
                    {flag}
                  </span>
                  <span>{label}</span>
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#006c4e]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
