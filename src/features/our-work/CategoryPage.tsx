import { notFound } from "next/navigation";

import { categories, projects } from "@/entities/projects";

import HeroSection from "./components/HeroSection";
import ProjectGrid from "./components/ProjectGrid";
import CTASection from "./components/CTASection";

type Props = {
  categorySlug: string;
};

export default function CategoryPage({ categorySlug }: Props) {
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(category.id)
  );

  return (
    <main className="overflow-hidden bg-[#fcf9f4] text-[#1c1c19]">
      <HeroSection
        title={category.label}
        description={
          category.description ??
          "Explore our architectural portfolio."
        }
      />

      <ProjectGrid
        projects={filteredProjects}
        activeFilter={category.id}
      />

      <CTASection />
    </main>
  );
}