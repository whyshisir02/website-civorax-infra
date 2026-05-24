import { FolderOpen, CheckCircle2, FileText, TrendingUp } from "lucide-react";
import ProjectCard from "./ProjectCard";
import type { DashboardProject, DashboardStats } from "@/features/dashboard/types/dashboard.types";

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#e8f5f0] shadow-[0_2px_16px_rgba(0,63,44,0.06)] p-5 flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${accent}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#1a1a1a]">{value}</p>
        <p className="text-xs text-[#6b7280] mt-0.5">{label}</p>
      </div>
    </div>
  );
}

type Props = {
  stats: DashboardStats;
  projects: DashboardProject[];
  userName: string;
};

export default function DashboardOverview({ stats, projects, userName }: Props) {
  const activeProjects = projects.filter(
    (p) => p.status === "in_progress" || p.status === "planning"
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#1a1a1a]">
          Welcome back, {userName.split(" ")[0]}
        </h1>
        <p className="text-sm text-[#6b7280] mt-1">Here&apos;s an overview of your projects.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={FolderOpen}
          label="Active projects"
          value={stats.activeProjects}
          accent="bg-[#e6f7f2] text-[#006c4e]"
        />
        <StatCard
          icon={CheckCircle2}
          label="Completed"
          value={stats.completedProjects}
          accent="bg-blue-50 text-blue-600"
        />
        <StatCard
          icon={FileText}
          label="Pending invoices"
          value={stats.pendingInvoices}
          accent="bg-amber-50 text-amber-600"
        />
        <StatCard
          icon={TrendingUp}
          label="Total invoiced (NPR)"
          value={stats.totalInvoicedAmount.toLocaleString("ne-NP")}
          accent="bg-purple-50 text-purple-600"
        />
      </div>

      {activeProjects.length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-[#1a1a1a] mb-4">Active Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {projects.filter((p) => p.status === "completed").length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-[#1a1a1a] mb-4">Completed Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects
              .filter((p) => p.status === "completed")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      )}

      {projects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-14 h-14 rounded-full bg-[#e6f7f2] flex items-center justify-center mb-4">
            <FolderOpen className="w-6 h-6 text-[#006c4e]" />
          </div>
          <p className="text-[#374151] font-medium">No projects yet</p>
          <p className="text-sm text-[#9ca3af] mt-1">Your projects will appear here once created.</p>
        </div>
      )}
    </div>
  );
}
