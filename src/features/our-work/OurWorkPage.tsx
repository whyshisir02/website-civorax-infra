"use client";

import { useMemo, useState } from "react";

import { projects } from "@/entities/projects";

import HeroSection from "./components/HeroSection";
import CategoryTabs from "./components/CategoryTabs";
import CTASection from "./components/CTASection";
import ProjectGrid from "./components/project/ProjectGrid";

import { getFilteredProjects } from "./utils/projectFilters";

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(
    () => getFilteredProjects(projects, activeFilter),
    [activeFilter]
  );

  return (
    <main className="overflow-hidden bg-[#fcf9f4] text-[#1c1c19]">
      <HeroSection
          title="Concepts, Visualizations & Design Directions"
          description="Exploring the synergy between technical precision and Nepali architectural heritage. Our conceptual portfolio showcases the future of infrastructure through the lens of innovation and cultural soul."
      />

      <CategoryTabs
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <ProjectGrid
        projects={filteredProjects}
        featuredLayout={activeFilter === "all"}
      />

      <CTASection />
    </main>
  );
}