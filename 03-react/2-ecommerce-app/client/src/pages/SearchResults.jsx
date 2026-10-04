import { Search, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import products from "@/data/products.json";
import ProductCard from "@/components/product/ProductCard";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q")?.trim() ?? "";

  const normalizedQuery = query.toLowerCase();

  const results = normalizedQuery
    ? products.filter((product) => {
        const searchableText = [
          product.name,
          product.brand,
          product.category,
          product.slug,
          product.sku,
          product.description,
          product.shortDescription,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : [];

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-900">Search</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              Search Results
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              {query ? `"${query}"` : "Search Products"}
            </h1>

            {query && (
              <p className="mt-2 text-sm text-gray-500">
                {results.length}{" "}
                {results.length === 1 ? "product" : "products"} found
              </p>
            )}
          </div>

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-gray-200 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <X size={16} />
              Clear Search
            </button>
          )}
        </div>

        {/* No Query */}
        {!query && (
          <div className="flex min-h-[40vh] items-center justify-center py-16">
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gray-50">
                <Search size={28} className="text-gray-400" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                Search for a product
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Use the search bar above to find products.
              </p>

              <Link
                to="/shop"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Browse Shop
              </Link>
            </div>
          </div>
        )}

        {/* No Results */}
        {query && results.length === 0 && (
          <div className="flex min-h-[40vh] items-center justify-center py-16">
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gray-50">
                <Search size={28} className="text-gray-400" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                No products found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                We couldn't find any products matching "{query}". Try a
                different search term.
              </p>

              <Link
                to="/shop"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}