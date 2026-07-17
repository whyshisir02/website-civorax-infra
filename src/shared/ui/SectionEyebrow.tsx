import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  tone?: "terracotta" | "emerald";
  className?: string;
};

const toneClasses: Record<NonNullable<SectionEyebrowProps["tone"]>, string> = {
  terracotta: "text-[#984724]",
  emerald: "text-[#006c4e]",
};

export default function SectionEyebrow({
  children,
  tone = "terracotta",
  className = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.45em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
