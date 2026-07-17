import type { Project } from "@/entities/projects";

/**
 * Returns all featured projects.
 */
export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Filters projects by category.
 * Passing "all" returns every project.
 */
export function getFilteredProjects(
  projects: Project[],
  category: string
): Project[] {
  if (category === "all") {
    return projects;
  }

  return projects.filter((project) =>
    project.categories.includes(category)
  );
}

/**
 * Returns every project in a category.
 */
export function getProjectsByCategory(
  projects: Project[],
  category: string
): Project[] {
  return projects.filter((project) =>
    project.categories.includes(category)
  );
}

/**
 * Find a project by its slug.
 */
export function getProjectBySlug(
  projects: Project[],
  slug: string
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Returns projects related to the current project.
 * Priority:
 * 1. Same categories
 * 2. Excludes current project
 * 3. Limited by count
 */
export function getRelatedProjects(
  projects: Project[],
  currentProject: Project,
  limit = 3
): Project[] {
  return projects
    .filter((project) => project.id !== currentProject.id)
    .filter((project) =>
      project.categories.some((category) =>
        currentProject.categories.includes(category)
      )
    )
    .slice(0, limit);
}

/**
 * Returns the newest projects first.
 * Assumes a publishedAt field exists.
 */
export function getLatestProjects(
  projects: Project[],
  limit = 6
): Project[] {
  return [...projects]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}   