import type { ReactNode } from "react";
import SectionEyebrow from "./SectionEyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  eyebrowTone?: "terracotta" | "emerald";
  className?: string;
};

const alignClasses: Record<NonNullable<SectionHeaderProps["align"]>, string> = {
  left: "text-left",
  center: "mx-auto text-center",
};

const maxWidthClasses: Record<NonNullable<SectionHeaderProps["align"]>, string> = {
  left: "max-w-3xl",
  center: "max-w-2xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowTone = "terracotta",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-14 ${alignClasses[align]} ${maxWidthClasses[align]} ${className}`}
    >
      {eyebrow ? <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow> : null}

      <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] text-[#1c1c19] sm:text-4xl lg:text-[48px]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-[#3d4a43]">{description}</p>
      ) : null}
    </div>
  );
}
