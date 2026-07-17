export type ProjectStatus = "concept" | "ongoing" | "completed";

export type ProjectSize = "large" | "small";

export type ProjectVideo = {
  title: string;
  type: "youtube" | "mp4";
  url: string;
};

export type Project = {
  // ==========================
  // Basic Information
  // ==========================
  id: string;
  slug: string;
  title: string;

  // Short description (Card)
  shortDescription: string;

  // Full description (Detail Page)
  overview: string;

  // ==========================
  // Categorization
  // ==========================
  categories: string[];

  status: ProjectStatus;

  featured: boolean;

  size: ProjectSize;

  // ==========================
  // Project Information
  // ==========================
  location?: string;
  year?: number;
  client?: string;

  // ==========================
  // Services
  // ==========================
  services: string[];

  // ==========================
  // Images
  // ==========================
  thumbnail: string;

  coverImage: string;

  gallery: string[];

  // ==========================
  // Videos (Optional)
  // ==========================
  videos?: ProjectVideo[];

  // ==========================
  // Case Study
  // ==========================
  challenge?: string;

  solution?: string;

  // ==========================
  // SEO
  // ==========================
  seoTitle?: string;

  seoDescription?: string;

  // ==========================
  // Related Projects
  // ==========================
  relatedProjects?: string[];
};

export const projects: Project[] = [
  {
    id: "himalayan-serenity-villa",

    slug: "himalayan-serenity-villa",

    title: "The Himalayan Serenity Villa",

    shortDescription:
      "A masterclass in contemporary Nepali residence balancing mountain views with sustainable passive solar design.",

    overview:
      "The Himalayan Serenity Villa is a conceptual residential project designed to blend modern architecture with the surrounding Himalayan landscape. The design emphasizes natural lighting, cross ventilation, passive solar strategies, and strong indoor-outdoor connections.",

    categories: [
      "home-concepts",
      "3d-visualization",
    ],

    status: "ongoing",

    featured: true,

    size: "large",

    location: "Pokhara, Nepal",

    year: 2026,

    client: "Private Residence",

    services: [
      "Architectural Design",
      "Concept Planning",
      "3D Visualization",
      "Landscape Design",
    ],

    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",

    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",

      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85",

      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
    ],

    videos: [
      {
        title: "Project Walkthrough",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=XXXXXXXX",
      },
    ],

    challenge:
      "Design a luxurious residence while preserving panoramic mountain views and reducing environmental impact.",

    solution:
      "The villa uses passive solar orientation, expansive glazing, natural materials, and integrated landscaping to maximize sustainability and visual harmony.",

    seoTitle:
      "The Himalayan Serenity Villa | Residential Concept | CivoraX Infra",

    seoDescription:
      "Explore the Himalayan Serenity Villa, a modern residential concept showcasing sustainable architecture and mountain-inspired living.",

    relatedProjects: [
      "neo-newari-loft",
      "vertex-it-plaza",
    ],
  },

  {
    id: "neo-newari-loft",

    slug: "neo-newari-loft",

    title: "Neo-Newari Loft",

    shortDescription:
      "Modern urban interiors inspired by traditional Newari craftsmanship.",

    overview:
      "Neo-Newari Loft reimagines traditional Newari design principles inside a modern apartment environment using handcrafted wood detailing and open-plan spaces.",

    categories: [
      "interior-concepts",
    ],

    status: "concept",

    featured: true,

    size: "small",

    location: "Kathmandu",

    year: 2026,

    services: [
      "Interior Design",
      "Furniture Planning",
      "3D Visualization",
    ],

    thumbnail:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85",

    coverImage:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=85",
    ],

    seoTitle:
      "Neo-Newari Loft | Interior Concept | CivoraX Infra",

    seoDescription:
      "A contemporary interior concept inspired by timeless Newari architecture.",
  },

  {
    id: "vertex-it-plaza",

    slug: "vertex-it-plaza",

    title: "Vertex IT Plaza",

    shortDescription:
      "Eco-friendly commercial infrastructure for digital enterprises.",

    overview:
      "A conceptual commercial office complex designed for technology companies with energy-efficient systems and flexible workspaces.",

    categories: [
      "commercial",
    ],

    status: "completed",

    featured: true,

    size: "small",

    location: "Kathmandu",

    year: 2025,

    services: [
      "Commercial Design",
      "Structural Planning",
    ],

    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",

    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    ],
  },

  {
    id: "heritage-revive-kantipath",

    slug: "heritage-revive-kantipath",

    title: "Heritage Revive: Kantipath",

    shortDescription:
      "Structural restoration preserving Kathmandu's architectural identity.",

    overview:
      "A renovation concept focused on reinforcing historical buildings while maintaining their original cultural significance.",

    categories: [
      "renovation",
    ],

    status: "ongoing",

    featured: true,

    size: "small",

    services: [
      "Renovation",
      "Structural Assessment",
    ],

    thumbnail:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",

    coverImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=85",
    ],
  },

  {
    id: "lalitpur-sky-garden",

    slug: "lalitpur-sky-garden",

    title: "Lalitpur Sky Garden",

    shortDescription:
      "Vertical green architecture bringing biodiversity into urban environments.",

    overview:
      "A futuristic 3D visualization proposing high-rise vertical forests for dense urban areas.",

    categories: [
      "3d-visualization",
    ],

    status: "concept",

    featured: true,

    size: "small",

    services: [
      "3D Visualization",
      "Concept Design",
    ],

    thumbnail:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1000&q=85",

    coverImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=85",
    ],
  },
];