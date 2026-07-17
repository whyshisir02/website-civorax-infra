import { MapPin, Ruler, ClipboardCheck, HardHat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";

type PlanningService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const planningServices: PlanningService[] = [
  {
    title: "Field Visit",
    description:
      "We visit or study the project site to understand real conditions, access, location, and practical needs.",
    icon: MapPin,
  },
  {
    title: "Measurement & Requirement Study",
    description:
      "We collect basic requirements, measurements, photos, references, and project expectations.",
    icon: Ruler,
  },
  {
    title: "BOQ & Estimate Guidance",
    description:
      "We help clients understand scope, materials, quantity, cost direction, and budget expectations.",
    icon: ClipboardCheck,
  },
  {
    title: "Project Supervision",
    description:
      "We support project coordination, quality-focused decisions, progress tracking, and site communication.",
    icon: HardHat,
  },
];

export default function ServicesProcessGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
      <SectionHeader
        eyebrow="Planning & Site Support"
        title="We help clients start with the right information."
        description="Many projects become confusing because the scope, site condition, budget, and expectations are not clear at the beginning. Our planning support helps reduce that confusion."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {planningServices.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-[24px] border border-[#e5e2dd] bg-white p-7 shadow-[0_14px_45px_rgba(8,29,48,0.045)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20b486]/10 text-[#006c4e]">
                <Icon size={24} />
              </div>

              <h3 className="font-sora text-xl font-semibold tracking-[-0.03em] text-[#1c1c19]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#3d4a43]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
