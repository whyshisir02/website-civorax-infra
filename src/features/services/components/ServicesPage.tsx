import LocaleLink from "@/shared/ui/LocaleLink";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Eye,
  Hammer,
  HardHat,
  MapPin,
  Paintbrush,
  Ruler,
  WalletCards,
} from "lucide-react";
import { company } from "@/entities/company";
import { consultationLink } from "@/entities/navigation";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85";

const constructionImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85";

const interiorImage =
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85";

const renovationImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85";

const supervisionImage =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85";

const coreServices = [
  {
    title: "Building Construction",
    description:
      "Planning and execution support for residential and building-related construction projects.",
    icon: Building2,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Improving existing homes, rooms, offices, and spaces with better planning and finishing.",
    icon: Hammer,
  },
  {
    title: "Interior Design",
    description:
      "Practical and premium interior direction based on lifestyle, function, taste, and budget.",
    icon: Paintbrush,
  },
  {
    title: "3D Design & Visualization",
    description:
      "Visual design support to help clients understand their space before execution begins.",
    icon: Eye,
  },
  {
    title: "Field Visit & Site Study",
    description:
      "Understanding the real site condition, location, access, and client needs before planning.",
    icon: MapPin,
  },
  {
    title: "Budget-Based Planning",
    description:
      "Helping clients choose better design, material, and execution options under their budget range.",
    icon: WalletCards,
  },
];

const constructionPoints = [
  "New home and building-related construction planning",
  "Site condition understanding before execution",
  "Material, scope, and practical construction guidance",
  "Coordination-focused approach for smoother work",
];

const renovationPoints = [
  "Room, home, office, and space improvement",
  "Existing condition review before planning",
  "Better layout, finishing, and usability direction",
  "Renovation ideas based on budget and priority",
];

const planningServices = [
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

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fcf9f4] text-[#1c1c19]">
      <section className="relative mx-auto max-w-[1280px] px-5 pb-24 pt-20 sm:px-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(circle_at_2px_2px,rgba(152,71,36,0.07)_1px,transparent_0)] [background-size:24px_24px]" />

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex rounded-full bg-[#006c4e]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#006c4e]">
              Our Services
            </span>

            <h1 className="font-sora max-w-3xl text-[42px] font-bold leading-[1.06] tracking-[-0.05em] text-[#1c1c19] sm:text-[56px] lg:text-[64px]">
              Building-related services with clarity before execution.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#3d4a43] sm:text-lg">
              {company.name} helps clients plan, design, renovate, visualize,
              and build better spaces through field understanding,
              budget-aware guidance, and clear communication.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <LocaleLink
                href={consultationLink}
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#20b486] px-7 text-sm font-bold text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.20)] transition-all hover:-translate-y-0.5 hover:bg-[#006c4e] hover:text-white"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </LocaleLink>

              <LocaleLink
                href="/process"
                className="inline-flex h-[54px] items-center justify-center rounded-full border border-[#006c4e]/25 bg-white px-7 text-sm font-bold text-[#006c4e] transition-all hover:-translate-y-0.5 hover:bg-[#f0ede9]"
              >
                See Our Process
              </LocaleLink>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="aspect-square overflow-hidden rounded-[28px] shadow-[0_30px_90px_rgba(8,29,48,0.16)]">
              <img
                src={heroImage}
                alt="Modern building design and construction planning"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(8,29,48,0.14)] md:block">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ffdbce] text-[#984724]">
                  <BadgeCheck size={24} />
                </div>

                <div>
                  <p className="font-sora text-lg font-semibold leading-tight">
                    Honest service guidance
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#6d7a72]">
                    We help clients understand what they need before committing
                    to execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
            What We Can Help With
          </p>

          <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
            Services for planning, designing, improving, and building.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#3d4a43]">
            We keep our service approach simple: understand the client, study
            the site, plan clearly, and guide the project based on budget,
            function, and execution needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[24px] border border-[#e5e2dd] bg-white p-7 shadow-[0_14px_45px_rgba(8,29,48,0.045)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(8,29,48,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20b486]/10 text-[#006c4e]">
                  <Icon size={24} />
                </div>

                <h3 className="font-sora text-xl font-semibold tracking-[-0.03em]">
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

      <section className="bg-[#f0ede9] px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-12 lg:gap-16">
          <div className="relative order-2 md:order-1 md:col-span-7">
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-[#ffdbce]/25" />

            <img
              src={constructionImage}
              alt="Building construction planning and site work"
              className="h-[360px] w-full rounded-[24px] object-cover shadow-[0_20px_70px_rgba(8,29,48,0.12)] sm:h-[460px] lg:h-[500px]"
            />
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <span className="mb-6 inline-flex rounded-full bg-[#ffdbce] px-3 py-1 text-xs font-bold text-[#370e00]">
              Construction Support
            </span>

            <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              Building Construction
            </h2>

            <p className="mt-6 text-base leading-8 text-[#3d4a43]">
              We support clients with construction planning, site understanding,
              material decisions, coordination, and execution guidance for
              building-related projects.
            </p>

            <ul className="mt-8 space-y-4">
              {constructionPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#006c4e]" />
                  <span className="text-base leading-7 text-[#1c1c19]">{item}</span>
                </li>
              ))}
            </ul>

            <LocaleLink
              href={consultationLink}
              className="mt-8 inline-flex h-[50px] items-center justify-center rounded-xl bg-[#31302d] px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006c4e]"
            >
              Discuss Construction Plan
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
            Interior & Visual Direction
          </p>

          <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
            Design that clients can understand before work starts.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#3d4a43]">
            Interior and 3D design help reduce confusion by showing layout,
            material direction, mood, and space planning before execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_20px_70px_rgba(8,29,48,0.12)] md:col-span-2 md:row-span-2">
            <img
              src={interiorImage}
              alt="Interior design and visual planning"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#77fac7]">
                Interior Design
              </p>
              <p className="max-w-xl text-base font-semibold leading-7">
                Practical, beautiful, and budget-aware interior direction for
                homes, rooms, offices, and commercial spaces.
              </p>
            </div>
          </div>

          <div className="flex min-h-[205px] flex-col justify-between rounded-[28px] border border-[#bccac1]/35 bg-white p-8 shadow-[0_12px_45px_rgba(8,29,48,0.055)]">
            <div>
              <DraftingCompass size={34} className="mb-6 text-[#984724]" />
              <h3 className="font-sora text-2xl font-semibold tracking-[-0.035em]">
                Space Planning
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#3d4a43]">
                Layout ideas that consider function, movement, light, furniture,
                and client lifestyle.
              </p>
            </div>
          </div>

          <div className="flex min-h-[205px] flex-col justify-between rounded-[28px] border border-[#bccac1]/35 bg-white p-8 shadow-[0_12px_45px_rgba(8,29,48,0.055)]">
            <div>
              <Eye size={34} className="mb-6 text-[#984724]" />
              <h3 className="font-sora text-2xl font-semibold tracking-[-0.035em]">
                3D Preview
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#3d4a43]">
                Visual concepts that help clients see the design direction
                before major decisions are made.
              </p>
            </div>

            <LocaleLink
              href={consultationLink}
              className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-[#006c4e] px-5 text-sm font-bold text-white transition-all hover:bg-[#20b486] hover:text-[#003f2c]"
            >
              Discuss Design
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ee] px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-5">
            <span className="mb-6 inline-flex rounded-full bg-[#ffdbce] px-3 py-1 text-xs font-bold text-[#370e00]">
              Existing Space Improvement
            </span>

            <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              Renovation & Remodeling
            </h2>

            <p className="mt-6 text-base leading-8 text-[#3d4a43]">
              We help clients improve existing spaces through better layout,
              material direction, repair priorities, finishing ideas, and
              practical renovation planning.
            </p>

            <ul className="mt-8 space-y-4">
              {renovationPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#006c4e]" />
                  <span className="text-base leading-7 text-[#1c1c19]">{item}</span>
                </li>
              ))}
            </ul>

            <LocaleLink
              href={consultationLink}
              className="mt-8 inline-flex h-[50px] items-center justify-center rounded-xl bg-[#006c4e] px-7 text-sm font-bold text-white shadow-[0_16px_45px_rgba(0,108,78,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#20b486] hover:text-[#003f2c]"
            >
              Discuss Renovation
            </LocaleLink>
          </div>

          <div className="md:col-span-7">
            <div className="group relative aspect-video overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(8,29,48,0.14)]">
              <img
                src={renovationImage}
                alt="Renovation and remodeling planning"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/5">
                <span className="rounded-full bg-white/90 px-5 py-3 text-sm font-bold text-[#006c4e] shadow-lg backdrop-blur">
                  Improve existing spaces with clarity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
            Planning & Site Support
          </p>

          <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
            We help clients start with the right information.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#3d4a43]">
            Many projects become confusing because the scope, site condition,
            budget, and expectations are not clear at the beginning. Our
            planning support helps reduce that confusion.
          </p>
        </div>

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

                <h3 className="font-sora text-xl font-semibold tracking-[-0.03em]">
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

      <section className="mx-auto max-w-[1280px] px-5 pb-28 sm:px-8 lg:px-16">
        <div className="overflow-hidden rounded-[42px] bg-[#e5e2dd] shadow-[0_24px_90px_rgba(8,29,48,0.10)] md:grid md:grid-cols-12">
          <div className="flex flex-col justify-center p-8 sm:p-10 md:col-span-5 lg:p-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#006c4e]">
              Budget Guidance
            </p>

            <h2 className="font-sora text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
              Helping clients choose better homes and spaces under budget.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#3d4a43]">
              We help clients think practically about design, materials,
              construction priorities, and finishing choices so they can make
              better decisions within their budget range.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Budget-based design discussion",
                "Material and finishing guidance",
                "Priority-based planning",
                "Practical next-step recommendation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#006c4e]" />
                  <span className="text-sm leading-7 text-[#3d4a43]">{item}</span>
                </div>
              ))}
            </div>

            <LocaleLink
              href={consultationLink}
              className="mt-9 inline-flex h-[52px] w-fit items-center justify-center rounded-full bg-[#006c4e] px-7 text-sm font-bold text-white shadow-[0_18px_50px_rgba(0,108,78,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#20b486] hover:text-[#003f2c]"
            >
              Start Budget Discussion
            </LocaleLink>
          </div>

          <div className="min-h-[360px] md:col-span-7">
            <img
              src={supervisionImage}
              alt="Project supervision and planning discussion"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
