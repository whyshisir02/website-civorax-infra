"use client";

import Button from "@/shared/ui/Button";
import { createWhatsappLink } from "@/entities/company";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Info,
  Ruler,
} from "lucide-react";
import { useMemo, useState } from "react";

type OpenSides = "0" | "1" | "2" | "3";
type Storeys = "1" | "2" | "3" | "4";
type FinishLevel = "basic" | "standard" | "premium";

const SQFT_PER_ANNA = 342.25;

const openSideMultipliers: Record<OpenSides, number> = {
  "0": 0.6,
  "1": 0.7,
  "2": 0.8,
  "3": 0.9,
};

const finishLevels: Record<FinishLevel, { label: string; rate: number; description: string }> = {
  basic: { label: "Basic", rate: 2200, description: "Budget-focused" },
  standard: { label: "Standard", rate: 3000, description: "Balanced quality" },
  premium: { label: "Premium", rate: 4200, description: "Higher finish" },
};

function formatNpr(value: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);
}

export default function BudgetEstimatorSection() {
  const [anna, setAnna] = useState("4");
  const [openSides, setOpenSides] = useState<OpenSides>("1");
  const [storeys, setStoreys] = useState<Storeys>("1");
  const [finishLevel, setFinishLevel] = useState<FinishLevel>("standard");

  const estimate = useMemo(() => {
    const annaValue = Number(anna);

    if (!annaValue || annaValue <= 0) return null;

    const plotAreaSqft = annaValue * SQFT_PER_ANNA;
    const groundCoverage = plotAreaSqft * openSideMultipliers[openSides];
    const totalBuiltArea = groundCoverage * Number(storeys);
    const rate = finishLevels[finishLevel].rate;
    const baseCost = totalBuiltArea * rate;

    return {
      plotAreaSqft,
      groundCoverage,
      totalBuiltArea,
      rate,
      low: Math.round(baseCost * 0.9),
      high: Math.round(baseCost * 1.15),
    };
  }, [anna, openSides, storeys, finishLevel]);

  const whatsappMessage = estimate
    ? `Hello CivoraX Infra, I used the Project Budget Estimator.

Plot Area: ${anna} Anna
Plot Area in Sq.Ft: ${estimate.plotAreaSqft.toFixed(0)} sq.ft
Open Sides: ${openSides}
Storeys: ${storeys}
Finish Level: ${finishLevels[finishLevel].label}
Approx Built Area: ${estimate.totalBuiltArea.toFixed(0)} sq.ft
Estimated Range: NPR ${formatNpr(estimate.low)} - NPR ${formatNpr(estimate.high)}

I want to discuss this project further.`
    : "Hello CivoraX Infra, I want to discuss a project budget estimate.";

  return (
    <section
      id="budget-estimator"
      className="relative overflow-hidden bg-[#eef1ea] px-5 py-10 text-[#081d30] sm:px-8 sm:py-12 lg:px-16 lg:py-12"
    >
      <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-[#20b486]/10 blur-[90px]" />
      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#e8855d]/12 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[980px]">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#006c4e]/15 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#006c4e] shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006c4e]" />
            Construction Planning Tool
          </div>

          <h2 className="font-sora text-[28px] font-semibold leading-tight tracking-[-0.045em] text-[#1c1c19] sm:text-[34px] lg:text-[38px]">
            Project Budget Estimator
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#3d4a43]">
            Get an early planning range from land area, open sides, storeys,
            and finish level before detailed BOQ.
          </p>
        </div>

        <div className="rounded-[24px] border border-[#dce3dc] bg-white/88 p-4 shadow-[0_18px_55px_rgba(8,29,48,0.07)] backdrop-blur-md sm:p-5 lg:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-[#006c4e]" />
                <h3 className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#006c4e]">
                  Site Inputs
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[#38524a]">
                    Area in Anna
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={anna}
                    onChange={(event) => setAnna(event.target.value)}
                    className="mt-2 h-11 w-full rounded-2xl border border-[#cfdcd4] bg-[#f6f8f5] px-4 text-sm font-semibold text-[#081d30] outline-none transition-colors focus:border-[#006c4e] focus:bg-white"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label className="text-sm font-bold text-[#38524a]">
                      Area in Sq.Ft
                    </label>
                    <span className="rounded-md bg-[#006c4e]/10 px-2 py-0.5 text-[10px] font-bold uppercase text-[#006c4e]">
                      Auto
                    </span>
                  </div>

                  <div className="flex h-11 items-center rounded-2xl border border-[#cfdcd4] bg-[#f6f8f5] px-4 text-sm font-semibold text-[#081d30]">
                    {estimate ? estimate.plotAreaSqft.toFixed(2) : "0.00"}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-[#38524a]">
                    Open Sides
                  </label>

                  <select
                    value={openSides}
                    onChange={(event) => setOpenSides(event.target.value as OpenSides)}
                    className="mt-2 h-11 w-full rounded-2xl border border-[#cfdcd4] bg-[#f6f8f5] px-4 text-sm font-semibold text-[#081d30] outline-none transition-colors focus:border-[#006c4e] focus:bg-white"
                  >
                    <option value="0">0 Open Sides</option>
                    <option value="1">1 Open Side</option>
                    <option value="2">2 Open Sides</option>
                    <option value="3">3 Open Sides</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-[#38524a]">
                    Storeys
                  </label>

                  <select
                    value={storeys}
                    onChange={(event) => setStoreys(event.target.value as Storeys)}
                    className="mt-2 h-11 w-full rounded-2xl border border-[#cfdcd4] bg-[#f6f8f5] px-4 text-sm font-semibold text-[#081d30] outline-none transition-colors focus:border-[#006c4e] focus:bg-white"
                  >
                    <option value="1">1 Storey</option>
                    <option value="2">2 Storeys</option>
                    <option value="3">3 Storeys</option>
                    <option value="4">4 Storeys</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex gap-3 rounded-2xl bg-[#006c4e]/6 p-4">
                <Ruler size={18} className="mt-1 shrink-0 text-[#006c4e]" strokeWidth={2.2} />
                <p className="text-xs leading-6 text-[#3d4a43]">
                  1 Anna is calculated as{" "}
                  <span className="font-bold text-[#1c1c19]">342.25 sq.ft</span>
                  . This value can be adjusted later if needed.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-[#006c4e]" />
                <h3 className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#006c4e]">
                  Finish Level
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {Object.entries(finishLevels).map(([key, value]) => {
                  const isSelected = finishLevel === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFinishLevel(key as FinishLevel)}
                      className={`rounded-2xl border p-3 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#006c4e] bg-[#006c4e]/8 shadow-[0_12px_35px_rgba(0,108,78,0.08)]"
                          : "border-[#e5e2dd] bg-[#fcf9f4] hover:bg-[#006c4e]/5"
                      }`}
                    >
                      <span className="block text-sm font-bold text-[#1c1c19]">
                        {value.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#6d7a72]">
                        {value.description} · NPR {formatNpr(value.rate)}/sq.ft
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[22px] border-t-[3px] border-[#006c4e] bg-[#081d30] p-4 text-white shadow-[0_16px_44px_rgba(8,29,48,0.14)] sm:p-5">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#77fac7]">
                  Estimated Total Cost
                </p>

                {estimate ? (
                  <>
                    <div className="mt-3 flex flex-wrap items-center gap-2 font-sora text-[22px] font-semibold tracking-[-0.04em] text-white sm:text-[26px]">
                      <span>NPR {formatNpr(estimate.low)}</span>
                      <span className="text-white/40">—</span>
                      <span>NPR {formatNpr(estimate.high)}</span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white/8 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/48">
                          Cost / Sq.Ft
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          NPR {formatNpr(estimate.rate)}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/8 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/48">
                          Built Area
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          {estimate.totalBuiltArea.toFixed(0)} sq.ft
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/8 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/48">
                          Coverage
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          {estimate.groundCoverage.toFixed(0)} sq.ft
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    Enter valid land area to calculate.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={createWhatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-3 rounded-full bg-[#20b486] px-5 text-sm font-bold text-[#003f2c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#007a55] hover:text-white"
                >
                  Discuss Estimate
                  <ArrowRight size={16} strokeWidth={2.4} />
                </a>

                <Button href="/contact" variant="light" size="sm">
                  Send Details
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-[#e5e2dd] pt-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3">
              <Info size={18} className="mt-1 shrink-0 text-[#984724]" strokeWidth={2.2} />
              <p className="max-w-3xl text-xs leading-6 text-[#5a4a42]">
                This is an early planning range, not a final quotation. Final
                cost depends on site visit, drawings, BOQ, materials, by-laws,
                market rate, access, structural requirements, and execution scope.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full bg-[#006c4e]/7 px-4 py-2 text-xs font-bold text-[#006c4e]">
              <CheckCircle2 size={15} />
              BOQ required before execution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
