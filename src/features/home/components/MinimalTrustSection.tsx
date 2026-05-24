import {
  ClipboardCheck,
  DraftingCompass,
  FileText,
  MessageCircle,
} from "lucide-react";

const trustItems = [
  {
    title: "Transparent BOQ",
    description: "Clear scope, material planning, and estimate understanding.",
    icon: FileText,
  },
  {
    title: "Design Before Build",
    description: "Visual clarity before execution begins.",
    icon: DraftingCompass,
  },
  {
    title: "Site Supervision",
    description: "Better coordination and quality-focused progress.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear Communication",
    description: "Simple updates, decisions, and project coordination.",
    icon: MessageCircle,
  },
];

export default function MinimalTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#eeeae4] px-5 py-14 text-[#081d30] sm:px-8 sm:py-16 lg:px-16 lg:py-18">
      <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-[#20b486]/10 blur-[80px]" />
      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#e8855d]/12 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mb-9 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.42em] text-[#984724]">
            Why Trust CivoraX
          </p>

          <h2 className="font-sora text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1c1c19] sm:text-4xl lg:text-[42px]">
            Clarity Before Construction
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[22px] border border-white/65 bg-[#fcf9f4]/82 p-6 shadow-[0_12px_40px_rgba(8,29,48,0.045)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#20b486]/30 hover:bg-white/90 hover:shadow-[0_18px_55px_rgba(8,29,48,0.075)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#20b486]/10 text-[#006c4e]">
                  <Icon size={22} strokeWidth={2.1} />
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
