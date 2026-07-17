import type { Project } from "@/entities/projects";

import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  featuredLayout?: boolean;
};

export default function ProjectGrid({
  projects,
  featuredLayout = true,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-16">
        <div className="rounded-[24px] border border-[#e5e2dd] bg-white p-10 text-center shadow-[0_16px_55px_rgba(8,29,48,0.06)]">
          <h2 className="font-sora text-2xl font-semibold">
            No projects found.
          </h2>

          <p className="mt-3 text-[#3d4a43]">
            Try selecting another category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featuredLayout={featuredLayout}
          />
        ))}
      </div>
    </section>
  );
}