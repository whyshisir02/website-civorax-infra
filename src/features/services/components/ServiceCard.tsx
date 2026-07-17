import { ArrowRight } from "lucide-react";
import LocaleLink from "@/shared/ui/LocaleLink";
import type { Service } from "@/entities/services";

type ServiceCardProps = {
  service: Service;
  href: string;
  variant?: "preview" | "tile";
  className?: string;
};

export default function ServiceCard({
  service,
  href,
  variant = "tile",
  className = "",
}: ServiceCardProps) {
  const Icon = service.icon;

  if (variant === "preview") {
    return (
      <LocaleLink
        href={href}
        className={`group relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/30 bg-[#081d30] shadow-[0_18px_55px_rgba(8,29,48,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(8,29,48,0.16)] ${className}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/38 to-black/10" />
        <div className="absolute inset-0 bg-[#006c4e]/0 transition-colors duration-300 group-hover:bg-[#006c4e]/12" />

        <div className="relative z-10 flex min-h-[260px] flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/18 bg-white/14 text-[#77fac7] backdrop-blur-md">
              <Icon size={22} strokeWidth={2.1} />
            </div>

            <span className="rounded-full border border-white/16 bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
              Service
            </span>
          </div>

          <div>
            <h3 className="font-sora text-[21px] font-semibold leading-tight tracking-[-0.03em] text-white">
              {service.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/76">
              {service.tagline}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#77fac7] transition-all duration-300 group-hover:gap-3">
              Learn More
              <ArrowRight size={15} strokeWidth={2.4} />
            </span>
          </div>
        </div>
      </LocaleLink>
    );
  }

  return (
    <div
      className={`rounded-[24px] border border-[#e5e2dd] bg-white p-7 shadow-[0_14px_45px_rgba(8,29,48,0.045)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(8,29,48,0.08)] ${className}`}
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
}
