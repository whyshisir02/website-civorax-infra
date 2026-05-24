export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "Defining goals, budget, and site feasibility assessments.",
  },
  {
    step: "02",
    title: "Design & Preview",
    description: "3D modeling and immersive walkthrough of your project.",
  },
  {
    step: "03",
    title: "Civil Execution",
    description: "Quality-controlled construction with daily status reports.",
  },
  {
    step: "04",
    title: "Final Delivery",
    description: "Snag lists, cleaning, and handing over your key to a new life.",
  },
];
