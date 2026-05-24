import DashboardOverview from "@/features/dashboard/components/DashboardOverview";
import type { DashboardProject, DashboardStats } from "@/features/dashboard/types/dashboard.types";

const placeholderStats: DashboardStats = {
  activeProjects: 2,
  completedProjects: 1,
  pendingInvoices: 3,
  totalInvoicedAmount: 4500000,
};

const placeholderProjects: DashboardProject[] = [
  {
    id: "1",
    title: "Residential Build — Lalitpur",
    location: "Lalitpur, Bagmati Province",
    status: "in_progress",
    progressPercent: 62,
    startDate: "2025-11-01",
    estimatedCompletionDate: "2026-08-30",
    totalBudget: 3200000,
    paidToDate: 1900000,
    coverImageUrl: null,
    milestones: [
      { id: "m1", label: "Foundation complete", completedAt: "2025-12-15" },
      { id: "m2", label: "Framing complete", completedAt: "2026-02-10" },
      { id: "m3", label: "Roofing", completedAt: null },
      { id: "m4", label: "Finishing", completedAt: null },
    ],
  },
  {
    id: "2",
    title: "Commercial Fit-Out — Bhaktapur",
    location: "Bhaktapur, Bagmati Province",
    status: "planning",
    progressPercent: 12,
    startDate: "2026-05-01",
    estimatedCompletionDate: "2026-12-31",
    totalBudget: 1800000,
    paidToDate: 200000,
    coverImageUrl: null,
    milestones: [
      { id: "m1", label: "Design approval", completedAt: "2026-04-20" },
      { id: "m2", label: "Permit obtained", completedAt: null },
      { id: "m3", label: "Construction start", completedAt: null },
    ],
  },
  {
    id: "3",
    title: "Villa Renovation — Pokhara",
    location: "Pokhara, Gandaki Province",
    status: "completed",
    progressPercent: 100,
    startDate: "2024-06-01",
    estimatedCompletionDate: "2025-02-28",
    totalBudget: 900000,
    paidToDate: 900000,
    coverImageUrl: null,
    milestones: [
      { id: "m1", label: "Demolition", completedAt: "2024-07-01" },
      { id: "m2", label: "Structural work", completedAt: "2024-09-15" },
      { id: "m3", label: "Interior finishing", completedAt: "2025-02-10" },
    ],
  },
];

export default function DashboardPage() {
  return (
    <DashboardOverview
      stats={placeholderStats}
      projects={placeholderProjects}
      userName="Aarav Sharma"
    />
  );
}
