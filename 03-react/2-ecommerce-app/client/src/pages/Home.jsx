import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Collections from "@/components/home/Collections";
import Testimonials from "@/components/home/Testimonials";
import ShopByCategory from "@/components/home/ShopByCategory";
import PromotionBanner from "@/components/ui/PromotionBanner";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <TrendingProducts />
      <PromotionBanner />
      <Features />
      <Collections />
      <Testimonials />
      <FAQ />
    </>
  );
}
