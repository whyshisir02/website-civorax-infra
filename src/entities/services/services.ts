import {
  Armchair,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  HardHat,
  Landmark,
  Ruler,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory =
  | "build"
  | "design"
  | "renovate"
  | "plan"
  | "manage";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  category: ServiceCategory;
  highlights: string[];
  ctaLabel: string;
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "building-construction",
    title: "Building Construction",
    tagline: "Residential and commercial construction, planned end to end.",
    description:
      "We support clients with construction planning, site understanding, material decisions, coordination, and execution guidance for building-related projects.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
    category: "build",
    featured: true,
    ctaLabel: "Discuss Construction Plan",
    highlights: [
      "New home and building-related construction planning",
      "Site condition understanding before execution",
      "Material, scope, and practical construction guidance",
      "Coordination-focused approach for smoother work",
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    tagline: "Modern renovation and remodeling for existing spaces.",
    description:
      "We help clients improve existing spaces through better layout, material direction, repair priorities, finishing ideas, and practical renovation planning.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    category: "renovate",
    featured: true,
    ctaLabel: "Discuss Renovation",
    highlights: [
      "Room, home, office, and space improvement",
      "Existing condition review before planning",
      "Better layout, finishing, and usability direction",
      "Renovation ideas based on budget and priority",
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    tagline: "Functional and premium interior planning.",
    description:
      "Practical, beautiful, and budget-aware interior direction for homes, rooms, offices, showrooms, and commercial spaces.",
    icon: Armchair,
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85",
    category: "design",
    featured: true,
    ctaLabel: "Discuss Interior Design",
    highlights: [
      "Space planning that respects function and lifestyle",
      "Material, finish, and color direction",
      "Furniture layout and lighting planning",
      "Practical execution coordination",
    ],
  },
  {
    slug: "3d-design-visualization",
    title: "3D Design & Visualization",
    tagline: "See the design before execution begins.",
    description:
      "Visual concepts, exterior previews, interior ideas, and 3D direction so clients can make confident decisions before work starts.",
    icon: DraftingCompass,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    category: "design",
    featured: true,
    ctaLabel: "Request 3D Preview",
    highlights: [
      "Exterior and interior 3D direction",
      "Material and mood visualization",
      "Layout previews before execution",
      "Clearer decisions for clients",
    ],
  },
  {
    slug: "commercial-space",
    title: "Commercial Space",
    tagline: "Planning and execution for business environments.",
    description:
      "Planning and execution for shops, offices, hospitality spaces, and business-focused environments with budget-aware design direction.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: "build",
    featured: false,
    ctaLabel: "Discuss Commercial Project",
    highlights: [
      "Office, retail, and hospitality planning",
      "Customer-flow and brand-led layout",
      "Practical material and finish guidance",
      "Coordination with vendors and execution teams",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    tagline: "End-to-end coordination and supervision.",
    description:
      "End-to-end coordination, timeline tracking, vendor management, site updates, and execution monitoring so projects stay on track.",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    category: "manage",
    featured: true,
    ctaLabel: "Discuss Project Management",
    highlights: [
      "Timeline and milestone tracking",
      "Vendor and contractor coordination",
      "Site updates and progress communication",
      "Quality-focused execution monitoring",
    ],
  },
  {
    slug: "structural-site-support",
    title: "Structural & Site Support",
    tagline: "Practical support for site study and structural guidance.",
    description:
      "Practical support for site study, structural guidance, construction planning, and technical decisions before and during execution.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    category: "plan",
    featured: false,
    ctaLabel: "Discuss Site Support",
    highlights: [
      "Field visit and site condition study",
      "Structural and technical guidance",
      "Practical construction decision support",
      "Coordination with engineers and contractors",
    ],
  },
  {
    slug: "boq-cost-planning",
    title: "BOQ & Cost Planning",
    tagline: "Clear scope, quantity, and budget guidance.",
    description:
      "Clear scope, quantity understanding, material planning, and early budget guidance so clients know what to expect before construction begins.",
    icon: Ruler,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    category: "plan",
    featured: true,
    ctaLabel: "Discuss BOQ & Cost",
    highlights: [
      "Scope and quantity take-off",
      "Material and finish planning",
      "Early budget direction",
      "Practical next-step recommendations",
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
export const servicesByCategory = (category: ServiceCategory) =>
  services.filter((s) => s.category === category);
export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
