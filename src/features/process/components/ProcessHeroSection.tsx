import Button from "@/shared/ui/Button";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function ProcessHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fcf9f4] px-5 py-20 text-[#081d30] sm:px-8 lg:px-16 lg:py-24">
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#20b486]/10 blur-[90px]" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#e8855d]/12 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
            Our Process
          </p>

          <h1 className="font-sora max-w-4xl text-[42px] font-semibold leading-tight tracking-[-0.055em] text-[#1c1c19] sm:text-[56px] lg:text-[68px]">
            Clear steps before construction begins.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#3d4a43] sm:text-lg">
            From first discussion to planning, budget understanding, design
            clarity, site coordination, and final handover — we keep the process
            simple, transparent, and practical.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/process#budget-estimator" size="lg">
              Estimate Project Budget
              <ArrowRight size={18} strokeWidth={2.4} />
            </Button>

            <Button href="/contact" size="lg" variant="secondary">
              Discuss Your Project
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[30px] border border-[#e5e2dd] bg-white/82 p-7 shadow-[0_24px_80px_rgba(8,29,48,0.08)] backdrop-blur-md sm:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20b486]/12 text-[#006c4e]">
              <ClipboardCheck size={28} strokeWidth={2.1} />
            </div>

            <h2 className="font-sora text-2xl font-semibold tracking-[-0.035em] text-[#1c1c19]">
              Plan → Estimate → Design → Build
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#3d4a43]">
              A better project begins with a clear scope, realistic budget,
              practical design direction, and organized execution.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Clear project discussion",
                "Early budget understanding",
                "Design before execution",
                "Site-focused coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#e5e2dd] bg-[#fcf9f4] px-4 py-3 text-sm font-semibold text-[#3d4a43]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
