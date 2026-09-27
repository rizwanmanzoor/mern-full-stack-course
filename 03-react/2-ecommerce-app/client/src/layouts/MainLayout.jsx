import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-text-primary">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
