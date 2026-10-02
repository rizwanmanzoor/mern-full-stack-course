import ProductGrid from "@/components/shop/ProductGrid";
import Pagination from "@/components/shop/Pagination";

export default function ProductListing({
  products = [],
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  onReset,
}) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-90 flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50 px-6 text-center">
        <h3 className="mb-2 text-xl font-medium text-gray-900">
          No products found
        </h3>

        <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
          We couldn't find any products matching your current filters. Try
          adjusting your filters or reset them to see all products.
        </p>

        <button
          type="button"
          onClick={onReset}
          className="rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div>
      <ProductGrid products={products} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
