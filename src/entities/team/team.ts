export type TeamMember = {
  slug: string;
  name: string;
  qualification: string;
  role: string;
  expertise: string[];
  department: string;
  image?: string;
  linkedin?: string;
};

export type TeamDepartment = {
  slug: string;
  label: string;
  description: string;
};

function avatar(seed: string): string {
  return `https://randomuser.me/api/portraits/${seed}.jpg`;
}

export const teamDepartments: TeamDepartment[] = [
  {
    slug: "architecture-design",
    label: "Architecture & Design",
    description:
      "Designing spaces that are functional, sustainable, and visually timeless.",
  },
  {
    slug: "engineering",
    label: "Engineering",
    description:
      "Structural and technical engineering that keeps every project safe and buildable.",
  },
  {
    slug: "construction-site",
    label: "Construction & Site Operations",
    description:
      "Hands-on execution, supervision, and quality at the construction site.",
  },
  {
    slug: "project-planning",
    label: "Project Planning",
    description:
      "Schedules, coordination, and decision-making that keep projects on track.",
  },
  {
    slug: "interior-design",
    label: "Interior Design",
    description:
      "Practical, premium interior direction for homes, offices, and commercial spaces.",
  },
  {
    slug: "3d-visualization",
    label: "3D Visualization",
    description:
      "Visual concepts and renders that help clients see design before execution.",
  },
  {
    slug: "quantity-surveying",
    label: "Quantity Surveying",
    description:
      "BOQ, estimation, and cost guidance that keeps scope and budget aligned.",
  },
  {
    slug: "administration-finance",
    label: "Administration & Finance",
    description:
      "Finance, compliance, and the operational backbone of the company.",
  },
  {
    slug: "client-relations",
    label: "Client Relations",
    description:
      "Communication, follow-ups, and a clear point of contact for every client.",
  },
  {
    slug: "documentation-support",
    label: "Documentation & Support",
    description:
      "Records, drawings, and documentation that keep every project organized.",
  },
];

export const teamMembers: TeamMember[] = [
  // Architecture & Design
  {
    slug: "dheerajj-uparkoti",
    name: "Er. Dheeraj Uparkoti",
    qualification: "B.E. Civil Engineering",
    role: "Structural Engineer",
    expertise: ["Steel Structures", "RCC Design", "Site Supervision"],
    department: "engineering",
    image: avatar("men/32"),
  },
  {
    slug: "sneha-karki",
    name: "Ar. Sneha Karki",
    qualification: "Bachelor of Architecture",
    role: "Architect",
    expertise: ["Residential Design", "BIM", "Concept Design"],
    department: "architecture-design",
    image: avatar("women/44"),
  },

  // Engineering
  {
    slug: "prakash-tamang",
    name: "Er. Prakash Tamang",
    qualification: "M.Sc. Structural Engineering",
    role: "Senior Structural Engineer",
    expertise: ["RCC Design", "Steel Structures", "Retrofitting"],
    department: "engineering",
    image: "/images/team/prakash-tamang.png",
  },
  {
    slug: "sushma-ghimire",
    name: "Er. Sushma Ghimire",
    qualification: "B.E. Civil Engineering",
    role: "Site Engineer",
    expertise: ["Site Supervision", "Quality Checks", "Execution"],
    department: "engineering",
    image: avatar("women/65"),
  },

  // Construction & Site Operations
  {
    slug: "ramesh-shrestha",
    name: "Ramesh Shrestha",
    qualification: "Diploma in Civil Engineering",
    role: "Construction Supervisor",
    expertise: ["Site Supervision", "Vendor Coordination", "Safety"],
    department: "construction-site",
    image: avatar("men/45"),
  },
  {
    slug: "bikash-lama",
    name: "Bikash Lama",
    qualification: "B.E. Civil Engineering",
    role: "Site Engineer",
    expertise: ["Execution", "Quality Checks", "Planning"],
    department: "construction-site",
    image: avatar("men/52"),
  },

  // Project Planning
  {
    slug: "nishan-pradhan",
    name: "Nishan Pradhan",
    qualification: "MBA, Project Management",
    role: "Project Coordinator",
    expertise: ["Project Coordination", "Planning", "Client Updates"],
    department: "project-planning",
    image: avatar("men/75"),
  },
  {
    slug: "kripa-maharjan",
    name: "Kripa Maharjan",
    qualification: "BBA, Operations",
    role: "Project Planner",
    expertise: ["Scheduling", "Coordination", "Estimation"],
    department: "project-planning",
    image: avatar("women/47"),
  },

  // Interior Design
  {
    slug: "anupama-thapa",
    name: "Anupama Thapa",
    qualification: "B.F.A. Interior Design",
    role: "Interior Designer",
    expertise: ["Interior Design", "Material Selection", "Residential"],
    department: "interior-design",
    image: avatar("women/32"),
  },
  {
    slug: "rahul-bhattarai",
    name: "Rahul Bhattarai",
    qualification: "Diploma in Interior Design",
    role: "Interior Designer",
    expertise: ["Commercial", "Renovation", "Furniture Layout"],
    department: "interior-design",
    image: avatar("men/60"),
  },

  // 3D Visualization
  {
    slug: "rojin-shakya",
    name: "Rojin Shakya",
    qualification: "BIM Specialist",
    role: "3D Visualizer",
    expertise: ["3D Visualization", "Revit", "Rendering"],
    department: "3d-visualization",
    image: avatar("men/22"),
  },

  // Quantity Surveying
  {
    slug: "pratima-dhungana",
    name: "Pratima Dhungana",
    qualification: "B.E. Civil Engineering",
    role: "Quantity Surveyor",
    expertise: ["BOQ", "Estimation", "Cost Planning"],
    department: "quantity-surveying",
    image: avatar("women/68"),
  },

  // Administration & Finance
  {
    slug: "manish-joshi",
    name: "Manish Joshi",
    qualification: "MBA, Finance",
    role: "Finance & Admin",
    expertise: ["Finance", "Compliance", "Operations"],
    department: "administration-finance",
    image: avatar("men/12"),
  },

  // Client Relations
  {
    slug: "sweta-pandey",
    name: "Sweta Pandey",
    qualification: "BBA",
    role: "Client Relations",
    expertise: ["Client Support", "Communication", "Follow-ups"],
    department: "client-relations",
    image: avatar("women/22"),
  },

  // Documentation & Support
  {
    slug: "arun-khadka",
    name: "Arun Khadka",
    qualification: "B.E. Civil Engineering",
    role: "Documentation Engineer",
    expertise: ["Documentation", "Drawings", "Records"],
    department: "documentation-support",
    image: avatar("men/85"),
  },
];

export const teamMembersByDepartment = (slug: string) =>
  teamMembers.filter((member) => member.department === slug);

export const getTeamMemberBySlug = (slug: string) =>
  teamMembers.find((member) => member.slug === slug);
