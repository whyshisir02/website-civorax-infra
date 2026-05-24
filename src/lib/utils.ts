/**
 * Merges Tailwind class names, filtering falsy values.
 * Lightweight alternative to clsx — no extra dependency needed.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a number as NPR currency.
 */
export function formatNpr(value: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);
}

/**
 * Delays execution. Useful for debouncing or testing.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
