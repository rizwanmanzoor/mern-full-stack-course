import { useEffect, useState } from "react";

import Banner from "@/components/shop/Banner";
import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/products/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(({ products }) => setProducts(products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section
        className="my-8 md:my-12 px-4 md:px-8"
        aria-labelledby="products-heading"
      >
        <div className="mx-auto max-w-4xl lg:max-w-7xl">
          <h2
            id="products-heading"
            className="text-2xl font-bold text-slate-900 mb-8 text-center"
          >
            Our Exclusive Collection
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </section>

      <Banner />
    </>
  );
}
