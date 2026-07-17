"use client";

import { useMemo, useState } from "react";
import {
  teamDepartments,
  teamMembers,
} from "@/entities/team";
import TeamMemberCard from "./TeamMemberCard";

const ALL_FILTER = "all";

type FilterValue = typeof ALL_FILTER | string;

export default function TeamSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>(ALL_FILTER);

  const filters = useMemo(
    () => [
      { slug: ALL_FILTER, label: "All" },
      ...teamDepartments.map((d) => ({ slug: d.slug, label: d.label })),
    ],
    []
  );

  const visibleMembers = useMemo(() => {
    if (activeFilter === ALL_FILTER) return teamMembers;
    return teamMembers.filter((m) => m.department === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-[#ecf5f0] px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#006c4e]">
            Meet the team
          </p>

          <h2 className="font-sora text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1c1c19] sm:text-4xl lg:text-[44px]">
            One team, working across every step of the project.
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.slug;
            return (
              <button
                key={filter.slug}
                type="button"
                onClick={() => setActiveFilter(filter.slug)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#006c4e] text-white shadow-[0_8px_20px_rgba(0,108,78,0.18)]"
                    : "bg-white text-[#3d4a43] hover:bg-[#006c4e]/8 hover:text-[#006c4e]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 md:grid-cols-5">
          {visibleMembers.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <div className="mb-6 h-px w-16 bg-[#006c4e]/40" />

          <p className="font-sora max-w-3xl text-lg font-medium italic leading-relaxed text-[#1c1c19] sm:text-xl">
            Different expertise. One commitment. Every project we deliver is
            the result of people working together with shared responsibility
            and a focus on quality.
          </p>

          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#984724]">
            The CivoraX Infra Team
          </p>
        </div>
      </div>
    </section>
  );
}
