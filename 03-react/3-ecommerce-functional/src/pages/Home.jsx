import HeroSection from "@/components/home/Hero";
import Banner from "@/components/common/SaleBanner";
import TrendingSection from "@/components/home/TrendingProducts";
import CategorySection from "@/components/products/ProductCategories";
import FeaturesSection from "@/components/common/Features";
import FAQSection from "@/components/common/FAQs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <TrendingSection />
      <Banner />
      <FeaturesSection />
      <FAQSection />
    </>
  );
}
