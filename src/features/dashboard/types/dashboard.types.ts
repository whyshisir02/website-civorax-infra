export type ProjectStatus = "planning" | "in_progress" | "on_hold" | "completed";

export type ProjectMilestone = {
  id: string;
  label: string;
  completedAt: string | null;
};

export type DashboardProject = {
  id: string;
  title: string;
  location: string;
  status: ProjectStatus;
  progressPercent: number;
  startDate: string;
  estimatedCompletionDate: string;
  totalBudget: number;
  paidToDate: number;
  milestones: ProjectMilestone[];
  coverImageUrl: string | null;
};

export type BillingInvoice = {
  id: string;
  invoiceNumber: string;
  amount: number;
  currency: "NPR" | "USD" | "JPY";
  status: "pending" | "paid" | "overdue";
  issuedAt: string;
  dueAt: string;
  paidAt: string | null;
};

export type MaterialEntry = {
  id: string;
  projectId: string;
  name: string;
  quantity: number;
  unit: string;
  deliveredAt: string | null;
  status: "ordered" | "in_transit" | "delivered";
};

export type DashboardStats = {
  activeProjects: number;
  completedProjects: number;
  pendingInvoices: number;
  totalInvoicedAmount: number;
};
