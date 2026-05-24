import BudgetEstimatorSection from "@/features/process/components/BudgetEstimatorSection";
import ProcessAfterEstimateSection from "@/features/process/components/ProcessAfterEstimateSection";
import ProcessCTASection from "@/features/process/components/ProcessCTASection";
import ProcessHeroSection from "@/features/process/components/ProcessHeroSection";
import ProcessStepsSection from "@/features/process/components/ProcessStepsSection";

export default function ProcessPage() {
  return (
    <main>
      <ProcessHeroSection />
      <ProcessStepsSection />
      <BudgetEstimatorSection />
      <ProcessAfterEstimateSection />
      <ProcessCTASection />
    </main>
  );
}
