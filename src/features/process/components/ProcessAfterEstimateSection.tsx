import { ClipboardCheck, FileText, MessageCircle, Ruler } from "lucide-react";

const items = [
  {
    title: "Share Your Site Details",
    description:
      "Tell us your location, land size, budget range, and project goal.",
    icon: MessageCircle,
  },
  {
    title: "Review Scope & Feasibility",
    description:
      "We understand your needs, site condition, timeline, and design expectations.",
    icon: Ruler,
  },
  {
    title: "Prepare Planning Direction",
    description:
      "We guide you with concept direction, budget clarity, and next practical steps.",
    icon: ClipboardCheck,
  },
  {
    title: "Move Toward BOQ & Design",
    description:
      "After discussion, detailed drawing, BOQ, and execution planning can begin.",
    icon: FileText,
  },
];

export default function ProcessAfterEstimateSection() {
  return (
    <section className="bg-[#fcf9f4] px-5 py-20 text-[#081d30] sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#984724]">
            After Estimate
          </p>

          <h2 className="font-sora text-[34px] font-semibold leading-tight tracking-[-0.045em] text-[#1c1c19] sm:text-4xl lg:text-[44px]">
            What happens after you estimate?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#3d4a43]">
            The estimator gives an early range. The next step is understanding
            your actual site, scope, and design direction.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#e5e2dd] bg-white p-6 shadow-[0_14px_45px_rgba(8,29,48,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#20b486]/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20b486]/10 text-[#006c4e]">
                  <Icon size={23} strokeWidth={2.1} />
                </div>

                <h3 className="font-sora text-lg font-semibold tracking-[-0.025em] text-[#1c1c19]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#3d4a43]">
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
