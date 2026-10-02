import ProductCard from "@/components/product/ProductCard";

export default function ProductGrid({ products = [] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          className="bg-gray-50"
        />
      ))}
    </div>
  );
}