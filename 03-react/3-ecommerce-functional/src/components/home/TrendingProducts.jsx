import { useEffect, useState } from "react";

import ProductCard from "@/components/products/ProductCard";
import { getTrendingProducts } from "@/services/product.service";

export default function TrendingSection() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    getTrendingProducts()
      .then(({ products }) => setTrendingProducts(products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="mt-12 px-4 md:px-8" aria-labelledby="products-heading">
      <div className="mx-auto max-w-4xl lg:max-w-7xl">
        <h2
          id="products-heading"
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Trending Products
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
