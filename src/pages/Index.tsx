import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import HeroBanner from "@/components/HeroBanner";
import SponsorBanner from "@/components/SponsorBanner";
import CashbackBanner from "@/components/CashbackBanner";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealsBanner from "@/components/DealsBanner";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PromoBanner />
        <HeroBanner />
        <SponsorBanner />
        <CashbackBanner />
        <PocketFriendlySection />
        <DealsBanner />
        <CategorySection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
