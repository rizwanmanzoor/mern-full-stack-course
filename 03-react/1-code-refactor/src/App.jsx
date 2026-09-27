import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Products from "./components/Products";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import PromotionalBanner from "./components/PromotionalBanner";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= CATEGORIES ================= */}
      <Categories />

      {/* ================= PROMOTIONAL BANNER ================= */}
      <PromotionalBanner />

      {/* ================= PRODUCTS ================= */}
      <Products />

      {/* ================= WHY CHOOSE US ================= */}
      <WhyUs />

      {/* ================= TESTIMONIAL ================= */}
      <Testimonials />

      {/* ================= NEWSLETTER ================= */}
      <Newsletter />

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
