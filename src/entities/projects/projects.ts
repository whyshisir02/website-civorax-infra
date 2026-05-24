export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    title: "Hillside Sanctuary Villa",
    slug: "hillside-sanctuary-villa",
    category: "Residential Concept",
    description: "Modern luxury integrated with natural mountain slopes.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    size: "large",
  },
  {
    title: "Civic Hub Offices",
    slug: "civic-hub-offices",
    category: "Commercial",
    description: "Efficiency-focused corporate workspace.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    featured: true,
    size: "small",
  },
  {
    title: "Courtyard Modern",
    slug: "courtyard-modern",
    category: "Heritage Living",
    description: "Heritage-inspired open plan residence.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    featured: true,
    size: "small",
  },
  {
    title: "The Concrete Oasis",
    slug: "the-concrete-oasis",
    category: "Premium Estate",
    description: "Bold, statement architecture for premium private living.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    size: "large",
  },
];
