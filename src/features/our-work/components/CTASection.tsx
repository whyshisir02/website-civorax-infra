import { ArrowRight } from "lucide-react";

import LocaleLink from "@/shared/ui/LocaleLink";
import { consultationLink } from "@/entities/navigation";

export default function CTASection() {
  return (
    <section className="bg-[#fcf9f4] px-5 pb-28 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[34px] bg-[#31302d] px-6 py-20 text-center text-white shadow-[0_28px_90px_rgba(8,29,48,0.18)] sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-sora text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              Ready to visualize your next project?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
              Our team of architects and 3D visualizers are here to turn your
              abstract ideas into clear architectural directions.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <LocaleLink
                href={consultationLink}
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#20b486] px-8 text-sm font-bold text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.20)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#006c4e]"
              >
                Start Your Design Journey
                <ArrowRight size={18} strokeWidth={2.4} />
              </LocaleLink>

              <LocaleLink
                href="/services"
                className="inline-flex h-[56px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                View All Services
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}