import FloatingWhatsApp from "@/shared/layout/FloatingWhatsApp";
import Footer from "@/shared/layout/Footer";
import Navbar from "@/shared/layout/Navbar";
import ScrollToTop from "@/shared/layout/ScrollToTop";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
