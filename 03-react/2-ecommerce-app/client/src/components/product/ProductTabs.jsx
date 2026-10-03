import { Star } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    id: "description",
    label: "Description",
  },
  {
    id: "specifications",
    label: "Specifications",
  },
  {
    id: "reviews",
    label: "Reviews",
  },
];

function RatingStars({ rating = 0 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < Math.round(rating);

        return (
          <Star
            key={index}
            size={16}
            strokeWidth={1.5}
            className={
              filled
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        );
      })}
    </div>
  );
}

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const hasSpecifications =
    product.specifications?.length > 0;

  return (
    <section className="mt-16 border-t border-gray-100 pt-10 lg:mt-20 lg:pt-14">
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative shrink-0 px-5 pb-4 text-sm font-medium transition-colors first:pl-0 ${
                isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}

              {tab.id === "reviews" &&
                product.reviewCount > 0 && (
                  <span className="ml-1 text-gray-400">
                    ({product.reviewCount})
                  </span>
                )}

              {isActive && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="pt-8">
        {/* Description */}
        {activeTab === "description" && (
          <div className="max-w-3xl">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              Product Description
            </h3>

            {product.description ? (
              <p className="text-sm leading-7 text-gray-500">
                {product.description}
              </p>
            ) : product.shortDescription ? (
              <p className="text-sm leading-7 text-gray-500">
                {product.shortDescription}
              </p>
            ) : (
              <p className="text-sm text-gray-500">
                No product description available.
              </p>
            )}
          </div>
        )}

        {/* Specifications */}
        {activeTab === "specifications" && (
          <div className="max-w-4xl">
            <h3 className="mb-5 text-lg font-medium text-gray-900">
              Specifications
            </h3>

            {hasSpecifications ? (
              <div className="overflow-hidden rounded-lg border border-gray-100">
                {product.specifications.map(
                  (specification, index) => (
                    <div
                      key={specification.label}
                      className={`grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-[180px_1fr] sm:gap-6 ${
                        index !==
                        product.specifications.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {specification.label}
                      </span>

                      <span className="text-sm leading-6 text-gray-500">
                        {specification.value}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No specifications available.
              </p>
            )}
          </div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div className="max-w-3xl">
            {product.reviewCount > 0 ? (
              <>
                <div className="flex flex-col gap-5 rounded-xl border border-gray-100 p-6 sm:flex-row sm:items-center">
                  <div>
                    <div className="text-4xl font-semibold text-gray-900">
                      {product.rating?.toFixed(1) || "0.0"}
                    </div>

                    <div className="mt-2">
                      <RatingStars
                        rating={product.rating}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Customer reviews
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Based on {product.reviewCount}{" "}
                      customer reviews.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm leading-6 text-gray-500">
                    Individual review content will be
                    available once reviews are connected to
                    the product backend.
                  </p>
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  No reviews yet
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Be the first to review this product.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}