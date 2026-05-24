"use client";

import LocaleLink from "@/shared/ui/LocaleLink";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { consultationLink } from "@/entities/navigation";

type ScoreResult = {
  title: string;
  description: string;
  nextStep: string;
  score: number;
};

const projectTypes = [
  "New Home Construction",
  "Renovation",
  "Interior Design",
  "3D Design / Visualization",
  "Commercial Space",
  "Not Sure Yet",
];

const budgetRanges = [
  "Not Sure Yet",
  "Under NPR 50 Lakhs",
  "NPR 50 Lakhs - 1 Crore",
  "NPR 1 Crore - 5 Crores",
  "Above NPR 5 Crores",
];

const timelines = [
  "Not Sure Yet",
  "Within 1 Month",
  "1 - 3 Months",
  "3 - 6 Months",
  "After 6 Months",
];

export default function BuildClarityScore() {
  const [projectType, setProjectType] = useState("New Home Construction");
  const [budgetRange, setBudgetRange] = useState("Not Sure Yet");
  const [siteReady, setSiteReady] = useState("No");
  const [designReady, setDesignReady] = useState("No");
  const [timeline, setTimeline] = useState("Not Sure Yet");
  const [hasChecked, setHasChecked] = useState(false);

  const result: ScoreResult = useMemo(() => {
    let score = 0;

    if (projectType !== "Not Sure Yet") score += 20;
    if (budgetRange !== "Not Sure Yet") score += 20;
    if (siteReady === "Yes") score += 20;
    if (designReady === "Yes") score += 20;
    if (timeline !== "Not Sure Yet") score += 20;

    if (score >= 80) {
      return {
        score,
        title: "Your project looks execution-ready.",
        description:
          "You already have strong clarity. The next step is to review your site, design, budget, and execution plan in detail.",
        nextStep: "Recommended next step: BOQ review + execution consultation.",
      };
    }

    if (score >= 50) {
      return {
        score,
        title: "Your project is in planning stage.",
        description:
          "You have some important details ready, but a site visit, design direction, and budget discussion will make the next step clearer.",
        nextStep: "Recommended next step: site visit + design consultation.",
      };
    }

    return {
      score,
      title: "Your project needs early clarity.",
      description:
        "You are still exploring the idea. That is completely fine. A guided consultation can help define your budget, site needs, and design direction.",
      nextStep: "Recommended next step: free project discovery call.",
    };
  }, [projectType, budgetRange, siteReady, designReady, timeline]);

  return (
    <section className="bg-[#fcf9f4] px-5 py-20 text-[#081d30] sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-7 lg:grid-cols-12 lg:items-stretch">
          <div className="rounded-[34px] bg-[#081d30] p-8 text-white shadow-[0_24px_80px_rgba(8,29,48,0.18)] sm:p-10 lg:col-span-5">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20b486]/20 text-[#77fac7]">
              <Sparkles size={28} />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#77fac7]">
              Build Clarity Score
            </p>

            <h2 className="font-sora text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
              Not sure where your project stands?
            </h2>

            <p className="mt-6 text-base leading-8 text-white/72">
              Check your project readiness in less than a minute. This helps you
              understand whether you need design, site study, budget clarity, or
              execution planning first.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Simple readiness check",
                "No exact cost guessing",
                "Clear next-step suggestion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-[#77fac7]" />
                  <span className="text-sm font-semibold text-white/82">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#e5e2dd] bg-white p-6 shadow-[0_18px_60px_rgba(8,29,48,0.06)] sm:p-8 lg:col-span-7">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 ml-2 block text-sm font-bold text-[#3d4a43]">
                  Project Type
                </span>
                <select
                  value={projectType}
                  onChange={(event) => {
                    setProjectType(event.target.value);
                    setHasChecked(false);
                  }}
                  className="h-12 w-full rounded-xl border-0 bg-[#f0ede9] px-4 text-sm font-semibold text-[#1c1c19] outline-none focus:ring-2 focus:ring-[#006c4e]"
                >
                  {projectTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 ml-2 block text-sm font-bold text-[#3d4a43]">
                  Budget Range
                </span>
                <select
                  value={budgetRange}
                  onChange={(event) => {
                    setBudgetRange(event.target.value);
                    setHasChecked(false);
                  }}
                  className="h-12 w-full rounded-xl border-0 bg-[#f0ede9] px-4 text-sm font-semibold text-[#1c1c19] outline-none focus:ring-2 focus:ring-[#006c4e]"
                >
                  {budgetRanges.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 ml-2 block text-sm font-bold text-[#3d4a43]">
                  Is your site/location ready?
                </span>
                <select
                  value={siteReady}
                  onChange={(event) => {
                    setSiteReady(event.target.value);
                    setHasChecked(false);
                  }}
                  className="h-12 w-full rounded-xl border-0 bg-[#f0ede9] px-4 text-sm font-semibold text-[#1c1c19] outline-none focus:ring-2 focus:ring-[#006c4e]"
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not Sure</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 ml-2 block text-sm font-bold text-[#3d4a43]">
                  Do you already have a design?
                </span>
                <select
                  value={designReady}
                  onChange={(event) => {
                    setDesignReady(event.target.value);
                    setHasChecked(false);
                  }}
                  className="h-12 w-full rounded-xl border-0 bg-[#f0ede9] px-4 text-sm font-semibold text-[#1c1c19] outline-none focus:ring-2 focus:ring-[#006c4e]"
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Need 3D Preview</option>
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 ml-2 block text-sm font-bold text-[#3d4a43]">
                  Expected Timeline
                </span>
                <select
                  value={timeline}
                  onChange={(event) => {
                    setTimeline(event.target.value);
                    setHasChecked(false);
                  }}
                  className="h-12 w-full rounded-xl border-0 bg-[#f0ede9] px-4 text-sm font-semibold text-[#1c1c19] outline-none focus:ring-2 focus:ring-[#006c4e]"
                >
                  {timelines.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="button"
              onClick={() => setHasChecked(true)}
              className="mt-6 flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#20b486] px-6 text-sm font-bold text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#006c4e] hover:text-white"
            >
              Check My Project Readiness
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>

            {hasChecked ? (
              <div className="mt-6 rounded-[24px] border border-[#20b486]/25 bg-[#20b486]/8 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="font-sora text-xl font-semibold tracking-[-0.03em] text-[#1c1c19]">
                    {result.title}
                  </p>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#006c4e] text-white">
                    <span className="font-sora text-lg font-bold">
                      {result.score}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-7 text-[#3d4a43]">
                  {result.description}
                </p>

                <p className="mt-4 text-sm font-bold leading-7 text-[#006c4e]">
                  {result.nextStep}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <LocaleLink
                    href={consultationLink}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#006c4e] px-5 text-sm font-bold text-white transition-all hover:bg-[#20b486] hover:text-[#003f2c]"
                  >
                    Book Free Consultation
                    <ArrowRight size={16} />
                  </LocaleLink>

                  <LocaleLink
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[#006c4e]/20 bg-white px-5 text-sm font-bold text-[#006c4e] transition-all hover:bg-[#f0ede9]"
                  >
                    Send Project Details
                  </LocaleLink>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
