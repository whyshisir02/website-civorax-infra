import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ClipboardCheck,
  DraftingCompass,
  FileText,
  HardHat,
  MessageCircle,
} from "lucide-react";

export type TrustItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const trustItems: TrustItem[] = [
  {
    title: "Registered Company Mindset",
    description:
      "We work with a professional approach, clear communication, and proper project documentation.",
    icon: BadgeCheck,
  },
  {
    title: "Clear BOQ & Estimate",
    description:
      "We help clients understand materials, cost breakdown, scope, and budget expectations before execution.",
    icon: FileText,
  },
  {
    title: "Design Before Build",
    description:
      "We reduce confusion by preparing drawings, references, material ideas, and visual direction before work starts.",
    icon: DraftingCompass,
  },
  {
    title: "Site Supervision",
    description:
      "We focus on planned execution, site coordination, progress tracking, and practical construction decisions.",
    icon: HardHat,
  },
  {
    title: "Quality-Focused Execution",
    description:
      "We aim to balance durability, finish, budget, timeline, and client expectations throughout the project.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear Communication",
    description:
      "We keep clients informed through discussions, updates, decisions, and transparent project coordination.",
    icon: MessageCircle,
  },
];
