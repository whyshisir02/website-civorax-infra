"use client";

import LocaleLink from "./LocaleLink";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkButtonProps = BaseButtonProps & { href: string; type?: never };
type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#20b486] text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.20)] hover:bg-[#007a55] hover:text-white",
  secondary: "border border-[#006c4e]/25 bg-[#006c4e]/5 text-[#006c4e] hover:border-[#006c4e]/40 hover:bg-[#006c4e]/12",
  dark: "bg-[#31302d] text-white hover:bg-[#006c4e] hover:text-white",
  ghost: "bg-transparent text-[#006c4e] hover:bg-[#006c4e]/10",
  light: "border border-white/25 bg-white/8 text-white hover:border-[#77fac7]/50 hover:bg-[#20b486]/18 hover:text-[#77fac7]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-11 px-5 text-sm",
  md: "h-[52px] px-6 text-sm",
  lg: "h-[56px] px-7 text-sm",
};

const base = "inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

export default function Button({ children, variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const cls = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return <LocaleLink href={props.href} className={cls}>{children}</LocaleLink>;
  }

  return <button className={cls} {...(props as NativeButtonProps)}>{children}</button>;
}
