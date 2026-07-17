import { getServiceBySlug, type Service } from "@/entities/services";
import ServiceFeatureRow from "./ServiceFeatureRow";

type Row = {
  service: Service | undefined;
  align: "left" | "right";
  background: "default" | "muted";
};

const rows: Row[] = [
  { service: getServiceBySlug("building-construction"), align: "right", background: "muted" },
  { service: getServiceBySlug("interior-design"), align: "left", background: "default" },
  { service: getServiceBySlug("3d-design-visualization"), align: "right", background: "muted" },
  { service: getServiceBySlug("renovation-remodeling"), align: "left", background: "default" },
  { service: getServiceBySlug("commercial-space"), align: "right", background: "muted" },
  { service: getServiceBySlug("project-management"), align: "left", background: "default" },
];

export default function ServiceFeatureRows() {
  return (
    <>
      {rows.map((row) => {
        if (!row.service) return null;
        return (
          <ServiceFeatureRow
            key={row.service.slug}
            service={row.service}
            align={row.align}
            background={row.background}
          />
        );
      })}
    </>
  );
}
