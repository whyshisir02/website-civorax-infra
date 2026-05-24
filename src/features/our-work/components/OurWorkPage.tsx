"use client";

import LocaleLink from "@/shared/ui/LocaleLink";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { consultationLink } from "@/entities/navigation";

const filters = [
  "All",
  "Home Concepts",
  "Interior Concepts",
  "Commercial",
  "Renovation",
  "3D Visualization",
];

type ProjectCategory =
  | "Home Concepts"
  | "Interior Concepts"
  | "Commercial"
  | "Renovation"
  | "3D Visualization";

type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  badge: string;
  status: string;
  image: string;
  className: string;
  badgeStyle: string;
};

const projects: Project[] = [
  {
    title: "The Himalayan Serenity Villa",
    description:
      "A masterclass in contemporary Nepali residence, balancing expansive mountain views with sustainable passive solar design principles.",
    category: "Home Concepts",
    badge: "Concept Design",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    className: "md:col-span-8 aspect-[16/9]",
    badgeStyle: "bg-[#e8855d]/90 text-[#370e00]",
  },
  {
    title: "Neo-Newari Loft",
    description:
      "Redefining urban living spaces with traditional woodcraft and modern open-plan layouts.",
    category: "Interior Concepts",
    badge: "Interior Preview",
    status: "",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-4 min-h-[320px] md:min-h-0",
    badgeStyle: "bg-[#006c4e]/90 text-white",
  },
  {
    title: "Vertex IT Plaza",
    description:
      "Eco-friendly commercial infrastructure for the next generation of digital enterprise.",
    category: "Commercial",
    badge: "Sample Visualization",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-4 aspect-square",
    badgeStyle: "bg-[#e8855d]/90 text-[#370e00]",
  },
  {
    title: "Heritage Revive: Kantipath",
    description:
      "Restoring historical structures with modern structural reinforcement and aesthetic updates.",
    category: "Renovation",
    badge: "Renovation",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-4 aspect-square",
    badgeStyle: "bg-[#e8855d]/90 text-[#370e00]",
  },
  {
    title: "Lalitpur Sky Garden",
    description:
      "A vertical forest concept designed to bring biodiversity back to urban Kathmandu.",
    category: "3D Visualization",
    badge: "3D Visualization",
    status: "Concept",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-4 aspect-square",
    badgeStyle: "bg-[#e8855d]/90 text-[#370e00]",
  },
];

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="overflow-hidden bg-[#fcf9f4] text-[#1c1c19]">
      <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-20 sm:px-8 lg:px-16 lg:pb-14 lg:pt-24">
        <div className="max-w-4xl">
          <h1 className="font-sora text-[40px] font-bold leading-[1.08] tracking-[-0.05em] text-[#1c1c19] sm:text-[54px] lg:text-[58px]">
            Concepts, Visualizations & Design Directions
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#3d4a43] sm:text-lg">
            Exploring the synergy between technical precision and Nepali
            architectural heritage. Our conceptual portfolio showcases the future
            of infrastructure through the lens of innovation and cultural soul.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-10 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center gap-4">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#006c4e] text-white shadow-[0_12px_35px_rgba(0,108,78,0.16)]"
                    : "bg-[#f0ede9] text-[#3d4a43] hover:bg-[#20b486]/10 hover:text-[#006c4e]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-16">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className={`group ${
                  activeFilter === "All"
                    ? project.className
                    : "md:col-span-6 aspect-[16/10]"
                }`}
              >
                <div className="relative h-full overflow-hidden rounded-[18px] bg-[#f0ede9] shadow-[0_16px_55px_rgba(8,29,48,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,108,78,0.10)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-md ${project.badgeStyle}`}
                    >
                      {project.badge}
                    </span>

                    {project.status ? (
                      <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-[#006c4e] backdrop-blur-md">
                        {project.status}
                      </span>
                    ) : null}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <h2 className="font-sora text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/82">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] border border-[#e5e2dd] bg-white p-10 text-center shadow-[0_16px_55px_rgba(8,29,48,0.06)]">
            <h2 className="font-sora text-2xl font-semibold">
              No projects found.
            </h2>
            <p className="mt-3 text-[#3d4a43]">
              Try selecting another category.
            </p>
          </div>
        )}
      </section>

      <section className="bg-[#fcf9f4] px-5 pb-28 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[34px] bg-[#31302d] px-6 py-20 text-center text-white shadow-[0_28px_90px_rgba(8,29,48,0.18)] sm:px-10 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-sora text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                Ready to visualize your next project?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
                Our team of architects and 3D visualizers are here to turn your
                abstract ideas into clear architectural directions.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <LocaleLink
                  href={consultationLink}
                  className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#20b486] px-8 text-sm font-bold text-[#003f2c] shadow-[0_18px_50px_rgba(32,180,134,0.20)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#006c4e]"
                >
                  Start Your Design Journey
                  <ArrowRight size={18} strokeWidth={2.4} />
                </LocaleLink>

                <LocaleLink
                  href="/services"
                  className="inline-flex h-[56px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View All Services
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
