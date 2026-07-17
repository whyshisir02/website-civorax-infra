import { services } from "@/entities/services";
import ServiceCard from "./ServiceCard";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function ServiceOverviewGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
      <SectionHeader
        eyebrow="What We Can Help With"
        title="Services for planning, designing, improving, and building."
        description="We keep our service approach simple: understand the client, study the site, plan clearly, and guide the project based on budget, function, and execution needs."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} href={`/services#${service.slug}`} />
        ))}
      </div>
    </section>
  );
}
