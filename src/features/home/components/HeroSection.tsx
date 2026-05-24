import Button from "@/shared/ui/Button";
import { consultationLink } from "@/entities/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  DraftingCompass,
  Eye,
  MapPin,
} from "lucide-react";

const trustItems = [
  { label: "Nepal-Based Team", icon: MapPin },
  { label: "Transparent Planning", icon: Eye },
  { label: "Design Before Build", icon: DraftingCompass },
  { label: "Budget-Focused Execution", icon: BadgeCheck },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#081d30] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/home/hero-fallback.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/42 to-black/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1280px] flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-[680px] lg:px-16">
        <div className="grid items-center gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-plusJakarta max-w-[680px] text-[42px] font-extrabold leading-[1.08] tracking-[0.0em] text-white drop-shadow-lg sm:text-[56px] lg:text-[64px]">
              Build Smarter.
              <br />
              Design Better.
              <br />
              Live Better.
            </h1>
            <p className="mt-0 max-w-[720px] text-[16px] leading-7 text-white/90 drop-shadow-md sm:text-[17px]">
              We help homeowners and businesses in Nepal plan, design, estimate,
              and build with clarity, transparency, and engineering discipline.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={consultationLink} size="lg" className="rounded-xl">
                Discuss Your Project
                <ArrowRight size={20} strokeWidth={2.4} />
              </Button>

              <Button
                href="/services"
                size="lg"
                variant="light"
                className="rounded-xl shadow-lg backdrop-blur-m"
              >
                Explore Services
              </Button>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
            <div className="w-[280px] rounded-[30px] border border-white/20 bg-white/12 p-8 shadow-2xl backdrop-blur-x">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#20b486]/25 text-[#77fac7]">
                <Building2 size={25} strokeWidth={2.2} />
              </div>

              <p className="font-sora text-[25px] font-semibold leading-tight tracking-[-0.015em] text-white">
                Plan → Preview → Build
              </p>

              <p className="mt-4 text-[15px] leading-7 text-white/72">
                Zero ambiguity in your construction journey with our immersive
                digital twin technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/25 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-4 px-5 py-6 sm:px-8 lg:justify-between lg:px-16">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[13px] font-bold text-white/90"
              >
                <Icon size={16} className="text-[#77fac7]" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
