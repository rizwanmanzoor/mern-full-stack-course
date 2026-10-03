import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import ProductGallery from "@/components/product/ProductGallery";
import RelatedProducts from "@/components/product/RelatedProducts";

import products from "@/data/products.json";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-medium text-gray-900">
            Product not found
          </h1>

          <p className="mb-6 text-sm text-gray-500">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            <li>
              <Link
                to="/"
                className="text-gray-500 transition-colors hover:text-gray-900"
              >
                Home
              </Link>
            </li>

            <li>
              <ChevronRight
                size={15}
                strokeWidth={1.5}
                className="text-gray-400"
              />
            </li>

            <li>
              <Link
                to="/shop"
                className="text-gray-500 transition-colors hover:text-gray-900"
              >
                Shop
              </Link>
            </li>

            <li>
              <ChevronRight
                size={15}
                strokeWidth={1.5}
                className="text-gray-400"
              />
            </li>

            <li className="font-medium text-gray-900" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Overview */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} />

        <RelatedProducts product={product} />
      </div>
    </section>
  );
}
