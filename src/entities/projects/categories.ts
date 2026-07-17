export type ProjectCategory = {
  /**
   * Unique identifier.
   * Used for filtering and URLs.
   *
   * Example:
   * /our-work/home-concepts
   */
  id: string;

  /**
   * Display name.
   */
  label: string;

  /**
   * URL slug.
   */
  slug: string;

  /**
   * Short description.
   * Useful for category pages.
   */
  description?: string;

  /**
   * Controls display order.
   */
  order: number;

  /**
   * Show on navigation/filter.
   */
  visible: boolean;
};

export const categories: ProjectCategory[] = [
  {
    id: "all",
    label: "All",
    slug: "all",
    description: "Browse all architectural projects.",
    order: 0,
    visible: true,
  },

  {
    id: "home-concepts",
    label: "Home Concepts",
    slug: "home-concepts",
    description:
      "Residential concepts designed for modern and sustainable living.",
    order: 1,
    visible: true,
  },

  {
    id: "interior-concepts",
    label: "Interior Concepts",
    slug: "interior-concepts",
    description:
      "Interior spaces focused on functionality, aesthetics, and comfort.",
    order: 2,
    visible: true,
  },

  {
    id: "commercial",
    label: "Commercial",
    slug: "commercial",
    description:
      "Commercial buildings, offices, retail spaces, and business environments.",
    order: 3,
    visible: true,
  },

  {
    id: "renovation",
    label: "Renovation",
    slug: "renovation",
    description:
      "Modern renovation and restoration projects that preserve architectural value.",
    order: 4,
    visible: true,
  },

  {
    id: "3d-visualization",
    label: "3D Visualization",
    slug: "3d-visualization",
    description:
      "Photorealistic architectural visualizations and conceptual renderings.",
    order: 5,
    visible: true,
  },
];