import LocaleLink from "@/shared/ui/LocaleLink";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { consultationLink } from "@/entities/navigation";
import { trustItems } from "@/entities/trust";

export default function WhyTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#efece6] px-5 py-16 text-[#081d30] sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_2px_2px,rgba(0,108,78,0.055)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute -left-28 top-12 h-[360px] w-[360px] rounded-full bg-[#20b486]/10 blur-[90px]" />
      <div className="absolute -right-28 bottom-8 h-[360px] w-[360px] rounded-full bg-[#e8855d]/12 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-9 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.42em] text-[#984724]">
            Why Trust Us
          </p>

          <h2 className="font-sora text-[30px] font-semibold leading-tight tracking-[-0.045em] text-[#1c1c19] sm:text-4xl lg:text-[42px]">
            Built for Clarity, Trust, and Better Execution
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#3d4a43]">
            CivoraX Infra focuses on making construction easier to understand.
            From planning and BOQ to supervision and handover, our goal is to
            reduce confusion before the work begins.
          </p>

          <div className="mt-7 rounded-[26px] bg-[#081d30] p-6 text-white shadow-[0_24px_80px_rgba(8,29,48,0.18)]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20b486]/20 text-[#77fac7]">
              <ShieldCheck size={24} strokeWidth={2.2} />
            </div>

            <h3 className="font-sora text-xl font-semibold tracking-[-0.03em]">
              Trust starts before construction.
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/70">
              A better project begins with better planning, realistic cost
              understanding, and clear communication.
            </p>

            <LocaleLink
              href={consultationLink}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#77fac7] transition-all duration-200 hover:gap-3 hover:text-[#20b486]"
            >
              Discuss Your Project
              <ArrowRight size={16} strokeWidth={2.4} />
            </LocaleLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/70 bg-white/82 p-6 shadow-[0_14px_45px_rgba(8,29,48,0.055)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#20b486]/35 hover:bg-white/94 hover:shadow-[0_22px_65px_rgba(8,29,48,0.085)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20b486]/10 text-[#006c4e] transition-colors duration-300">
                  <Icon size={23} strokeWidth={2.1} />
                </div>

                <h3 className="font-sora text-lg font-semibold tracking-[-0.025em] text-[#1c1c19]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#3d4a43]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
