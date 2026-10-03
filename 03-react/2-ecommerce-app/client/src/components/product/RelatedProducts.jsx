import ProductCard from "@/components/product/ProductCard";

import products from "@/data/products.json";

export default function RelatedProducts({ product }) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-gray-100 pt-14 lg:mt-20 lg:pt-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          You may also like
        </h2>

        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          More products you might be interested in.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {relatedProducts.map((relatedProduct) => (
          <ProductCard
            key={relatedProduct.id}
            product={relatedProduct}
            className="bg-gray-50"
          />
        ))}
      </div>
    </section>
  );
}