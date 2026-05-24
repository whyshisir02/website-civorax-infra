import CTASection from "@/features/home/components/CTASection";
import DesignPreviewSection from "@/features/home/components/DesignPreviewSection";
import HeroSection from "@/features/home/components/HeroSection";
import MinimalTrustSection from "@/features/home/components/MinimalTrustSection";
import ProcessPreviewSection from "@/features/home/components/ProcessPreviewSection";
import ServicesPreviewSection from "@/features/home/components/ServicesPreviewSection";
import WorkPreviewSection from "@/features/home/components/WorkPreviewSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreviewSection />
      <DesignPreviewSection />
      <ProcessPreviewSection />
      <WorkPreviewSection />
      <MinimalTrustSection />
      <CTASection />
    </main>
  );
}
