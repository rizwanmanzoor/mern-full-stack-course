import { useState } from "react";

import FilterSidebar from "@/components/shop/FilterSidebar";
import MobileFilterDrawer from "@/components/shop/MobileFilterDrawer";
import ProductListing from "@/components/shop/ProductListing";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";

import products from "@/data/products.json";

const PRODUCTS_PER_PAGE = 9;

const initialFilters = {
  categories: [],
  availability: null,
  minPrice: 0,
  maxPrice: 2000,
  brands: [],
  colors: [],
  sizes: [],
};

function filterProducts(products, filters) {
  return products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    if (
      filters.availability &&
      product.availability !== filters.availability
    ) {
      return false;
    }

    if (
      product.price < filters.minPrice ||
      product.price > filters.maxPrice
    ) {
      return false;
    }

    if (
      filters.brands.length > 0 &&
      !filters.brands.includes(product.brand)
    ) {
      return false;
    }

    if (
      filters.colors.length > 0 &&
      !product.colors.some((color) =>
        filters.colors.includes(color),
      )
    ) {
      return false;
    }

    if (
      filters.sizes.length > 0 &&
      !product.sizes.some((size) =>
        filters.sizes.includes(size),
      )
    ) {
      return false;
    }

    return true;
  });
}

function sortProducts(products, sortBy) {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "featured":
      return sortedProducts.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured),
      );

    case "best-selling":
      return sortedProducts.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured),
      );

    case "price-low-high":
      return sortedProducts.sort(
        (a, b) => a.price - b.price,
      );

    case "price-high-low":
      return sortedProducts.sort(
        (a, b) => b.price - a.price,
      );

    case "name-a-z":
      return sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name),
      );

    case "name-z-a":
      return sortedProducts.sort((a, b) =>
        b.name.localeCompare(a.name),
      );

    default:
      return sortedProducts;
  }
}

export default function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("best-selling");

  // Filter
  const filteredProducts = filterProducts(
    products,
    filters,
  );

  // Sort
  const sortedProducts = sortProducts(
    filteredProducts,
    sortBy,
  );

  // Pagination
  const totalPages = Math.ceil(
    sortedProducts.length / PRODUCTS_PER_PAGE,
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  // Result count
  const startResult = sortedProducts.length
    ? startIndex + 1
    : 0;

  const endResult = Math.min(
    startIndex + PRODUCTS_PER_PAGE,
    sortedProducts.length,
  );

  const handleFilterChange = ({ type, value }) => {
    setFilters((current) => {
      if (type === "price") {
        return {
          ...current,
          minPrice: value.min,
          maxPrice: value.max,
        };
      }

      if (Array.isArray(current[type])) {
        const exists = current[type].includes(value);

        return {
          ...current,
          [type]: exists
            ? current[type].filter(
                (item) => item !== value,
              )
            : [...current[type], value],
        };
      }

      return {
        ...current,
        [type]:
          current[type] === value ? null : value,
      };
    });

    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ShopHeader />

      <section className="bg-white pb-10 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 xl:px-6">
          <ShopToolbar
            startResult={startResult}
            endResult={endResult}
            totalCount={sortedProducts.length}
            onFilterClick={() =>
              setIsFilterOpen(true)
            }
            sortValue={sortBy}
            onSortChange={handleSortChange}
          />

          {/* Shop Content */}
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
            {/* Desktop Filters */}
            <div className="hidden w-full shrink-0 lg:block lg:w-1/4 lg:self-start lg:sticky lg:top-24">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </div>

            {/* Products */}
            <div className="w-full lg:w-3/4">
              <ProductListing
                products={paginatedProducts}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onReset={handleResetFilters}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters */}
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        onClose={() => setIsFilterOpen(false)}
      />
    </>
  );
}