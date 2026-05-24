import LocaleLink from "@/shared/ui/LocaleLink";
import { services } from "@/entities/services";
import { ArrowRight } from "lucide-react";

export default function ServicesPreviewSection() {
  const featuredServices = services.filter((service) => service.featured).slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-[#fcf9f4] px-5 py-16 text-[#081d30] sm:px-8 lg:px-16 lg:py-20">
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#20b486]/8 blur-[90px]" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#e8855d]/10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-11 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.42em] text-[#984724]">
            Our Expertise
          </p>

          <h2 className="font-sora text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1c1c19] sm:text-4xl lg:text-[42px]">
            Built on Foundation of Excellence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#3d4a43] sm:text-[15px]">
            From planning and design to construction and supervision, CivoraX
            helps clients make clearer building decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => {
            const Icon = service.icon;

            return (
              <LocaleLink
                key={service.slug}
                href="/services"
                className="group relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/30 bg-[#081d30] shadow-[0_18px_55px_rgba(8,29,48,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(8,29,48,0.16)]"
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
                      {service.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#77fac7] transition-all duration-300 group-hover:gap-3">
                      Learn More
                      <ArrowRight size={15} strokeWidth={2.4} />
                    </span>
                  </div>
                </div>
              </LocaleLink>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <LocaleLink
            href="/services"
            className="inline-flex h-11 items-center justify-center gap-3 rounded-2xl border border-[#006c4e]/20 bg-[#006c4e]/5 px-5 text-sm font-bold text-[#006c4e] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#006c4e]/10 hover:text-[#006c4e]"
          >
            View All Services
            <ArrowRight size={17} strokeWidth={2.4} />
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
