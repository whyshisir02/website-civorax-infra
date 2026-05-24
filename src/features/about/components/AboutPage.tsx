import LocaleLink from "@/shared/ui/LocaleLink";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  DraftingCompass,
  Eye,
  Hammer,
  HardHat,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { consultationLink } from "@/entities/navigation";
import { company } from "@/entities/company";

const companyFacts = [
  { label: "Company", value: company.name },
  { label: "Location", value: company.location },
  { label: "Registered", value: company.registeredText },
  { label: "Started", value: company.startedYear },
];

const servicesList = [
  "Building construction",
  "Renovation and remodeling",
  "Interior design",
  "3D design and visualization",
  "Field visit and project study",
  "Home planning under client budget",
  "Project supervision and coordination",
  "Material and design guidance",
];

const values = [
  {
    title: "Clarity First",
    description:
      "We believe clients should understand the plan, budget, scope, and practical steps before construction begins.",
    icon: Eye,
  },
  {
    title: "Budget-Aware Planning",
    description:
      "We help clients make better choices by aligning design, materials, and execution with their budget range.",
    icon: ShieldCheck,
  },
  {
    title: "Design Before Build",
    description:
      "We focus on visual direction, planning, and practical discussion before moving into physical execution.",
    icon: DraftingCompass,
  },
  {
    title: "Trust Through Process",
    description:
      "We aim to build trust with communication, field understanding, project coordination, and honest guidance.",
    icon: BadgeCheck,
  },
];

const workAreas = [
  {
    title: "Construction",
    description:
      "Residential and building-related construction planning and execution support.",
    icon: Building2,
  },
  {
    title: "Renovation",
    description:
      "Improving existing homes, rooms, offices, and spaces with better planning and finishing.",
    icon: Hammer,
  },
  {
    title: "Interior Design",
    description:
      "Creating practical and premium interior spaces based on lifestyle, taste, and budget.",
    icon: Home,
  },
  {
    title: "3D Visualization",
    description:
      "Helping clients see design direction before making major construction decisions.",
    icon: Sparkles,
  },
  {
    title: "Field Visit",
    description:
      "Understanding the actual site, client needs, and project possibilities before planning.",
    icon: MapPin,
  },
  {
    title: "Supervision",
    description:
      "Supporting quality-focused coordination, progress tracking, and better decision-making.",
    icon: HardHat,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fcf9f4] text-[#1c1c19]">
      <section className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 lg:px-16 lg:pb-24 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_2px_2px,rgba(152,71,36,0.07)_1px,transparent_0)] [background-size:24px_24px]" />

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="mb-5 inline-flex rounded-full bg-[#006c4e]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#006c4e]">
              About CivoraX
            </span>

            <h1 className="font-sora max-w-4xl text-[44px] font-bold leading-[1.06] tracking-[-0.055em] text-[#1c1c19] sm:text-[58px] lg:text-[68px]">
              Building with clarity, planning, and trust.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#3d4a43] sm:text-lg">
              {company.name} is a Nepal-registered infrastructure company based in{" "}
              {company.location}. We focus on helping clients plan, design, renovate,
              visualize, and build better spaces with clear communication and practical
              guidance.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <LocaleLink
                href={consultationLink}
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#20b486] px-7 text-sm font-bold text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#006c4e] hover:text-white"
              >
                Book Free Consultation
                <ArrowRight size={18} strokeWidth={2.4} />
              </LocaleLink>

              <LocaleLink
                href="/services"
                className="inline-flex h-[56px] items-center justify-center rounded-full border border-[#006c4e]/25 bg-white px-7 text-sm font-bold text-[#006c4e] transition-all hover:-translate-y-0.5 hover:bg-[#f0ede9]"
              >
                Explore Services
              </LocaleLink>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[32px] bg-[#31302d] p-8 text-white shadow-[0_28px_90px_rgba(8,29,48,0.20)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20b486]/20 text-[#77fac7]">
                <Building2 size={30} />
              </div>

              <h2 className="font-sora text-2xl font-semibold tracking-[-0.035em]">
                A new company with a clear purpose.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                We are building CivoraX Infra as a modern, transparent, and
                client-focused infrastructure company for Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-16 lg:pb-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[24px] border border-[#e5e2dd] bg-white p-6 shadow-[0_14px_45px_rgba(8,29,48,0.045)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#984724]">
                {fact.label}
              </p>
              <p className="font-sora mt-3 text-xl font-semibold tracking-[-0.03em]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f0ede9] px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
              Our Mission
            </p>

            <h2 className="font-sora text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              To make building decisions easier, clearer, and more trustworthy.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-[#3d4a43] sm:text-lg">
              Our mission is to help people in Nepal make smarter building
              decisions through better planning, clear design direction,
              budget-aware guidance, and practical execution support. We want
              clients to feel informed before they invest their time, land,
              money, and trust into a project.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Plan before execution",
                "Design with purpose",
                "Respect client budget",
                "Communicate clearly",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#e5e2dd] bg-white p-4"
                >
                  <CheckCircle2 size={20} className="text-[#006c4e]" />
                  <span className="text-sm font-bold text-[#1c1c19]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
            What We Do
          </p>

          <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
            Building-related services under one clear process.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#3d4a43]">
            We support clients from early planning to visual design, field visit,
            renovation, construction, and project coordination.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#e5e2dd] bg-white p-7 shadow-[0_14px_45px_rgba(8,29,48,0.045)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(8,29,48,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20b486]/10 text-[#006c4e]">
                  <Icon size={24} />
                </div>

                <h3 className="font-sora text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#3d4a43]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#31302d] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#77fac7]">
                Why We Started
              </p>

              <h2 className="font-sora text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                Construction should not feel confusing.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                Many people begin a building project without clear information
                about design, budget, materials, process, and execution. CivoraX
                Infra was started to bring a more organized and transparent
                approach to building-related decisions.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-white/10 bg-white/7 p-6"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#20b486]/15 text-[#77fac7]">
                        <Icon size={22} />
                      </div>

                      <h3 className="font-sora text-lg font-semibold">{item.title}</h3>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="grid gap-7 lg:grid-cols-12">
          <div className="rounded-[34px] border border-[#e5e2dd] bg-white p-8 shadow-[0_18px_60px_rgba(8,29,48,0.06)] sm:p-10 lg:col-span-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#984724]">
              Current Stage
            </p>

            <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em]">
              We are newly established.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#3d4a43]">
              {company.name} was started in {company.startedYear}. Since we are in the
              early stage, this website focuses on our services, process,
              design direction, and how we plan to support clients.
            </p>

            <p className="mt-5 text-base leading-8 text-[#3d4a43]">
              Completed project case studies will be added later as real work
              becomes available.
            </p>
          </div>

          <div className="rounded-[34px] bg-[#f0ede9] p-8 sm:p-10 lg:col-span-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#984724]">
              Services We Can Discuss
            </p>

            <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em]">
              Tell us what you want to build, improve, or visualize.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {servicesList.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                >
                  <CheckCircle2 size={19} className="shrink-0 text-[#006c4e]" />
                  <span className="text-sm font-semibold text-[#3d4a43]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf9f4] px-5 pb-28 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[34px] bg-[#081d30] px-6 py-20 text-center text-white shadow-[0_28px_90px_rgba(8,29,48,0.20)] sm:px-10 lg:px-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#20b486]/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#e8855d]/18 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#77fac7]">
                Start With Clarity
              </p>

              <h2 className="font-sora text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                Planning to build, renovate, or design?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
                Share your project idea, budget range, and location. We will
                help you understand the practical next step.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <LocaleLink
                  href={consultationLink}
                  className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#20b486] px-8 text-sm font-bold text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.25)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#006c4e]"
                >
                  Book Free Consultation
                  <ArrowRight size={18} strokeWidth={2.4} />
                </LocaleLink>

                <LocaleLink
                  href="/contact"
                  className="inline-flex h-[56px] items-center justify-center rounded-full border border-white/25 bg-white/8 px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#081d30]"
                >
                  Contact CivoraX
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
