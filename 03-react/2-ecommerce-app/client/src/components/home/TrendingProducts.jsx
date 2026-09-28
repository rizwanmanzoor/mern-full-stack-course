import { Link } from "react-router-dom";

import Container from "@/components/layout/Container";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

import products from "@/data/products.json";

export default function TrendingProducts() {
const trendingProducts = products.filter(
  (product) => product.featured
);

  return (
    <section className="py-10 lg:py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Trending Now"
          description="Our most-loved gadgets, trusted by thousands of customers."
          action={
            <Link
              to="/shop"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-primary
                px-4
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-primary/90
              "
            >
              Explore All
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} className="bg-white" />
          ))}
        </div>
      </Container>
    </section>
  )
}
