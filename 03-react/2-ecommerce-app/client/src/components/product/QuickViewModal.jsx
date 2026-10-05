import { useState } from "react";
import { Heart, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "@/context/cart/useCart";
import { useWishlist } from "@/context/wishlist/useWishlist";

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
}) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) {
    return null;
  }

  const isInStock = product.availability === "in-stock";
  const isWishlisted = isInWishlist(product.id);

  const handleQuantityChange = (value) => {
    const stock = product.inventory?.quantity ?? 1;

    setQuantity(Math.max(1, Math.min(value, stock)));
  };

  const handleAddToCart = () => {
    if (!isInStock) return;

    addToCart({
      productId: product.id,
      quantity,
    });

    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-100 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-110 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Quick view of ${product.name}`}
          onClick={(event) => event.stopPropagation()}
          className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quick view"
            className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-gray-200 transition-colors hover:text-gray-900"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="flex min-h-80 items-center justify-center bg-gray-50 p-8 sm:p-12">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="max-h-100 w-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <p className="text-sm text-gray-500">
                {product.brand}
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                {product.name}
              </h2>

              {/* Rating */}
              {product.rating && (
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="font-medium text-yellow-500">
                    ★ {product.rating}
                  </span>

                  <span className="text-gray-500">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-2xl font-semibold text-gray-900">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.shortDescription && (
                <p className="mt-5 text-sm leading-6 text-gray-500">
                  {product.shortDescription}
                </p>
              )}

              {/* Divider */}
              <div className="my-6 border-t border-gray-100" />

              {/* Quantity + Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex h-12 w-fit items-center rounded-lg border border-gray-200">
                  <button
                    type="button"
                    disabled={!isInStock}
                    onClick={() =>
                      handleQuantityChange(quantity - 1)
                    }
                    className="flex h-full w-10 items-center justify-center text-gray-500 hover:text-gray-900 disabled:opacity-40"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span className="w-10 text-center text-sm font-medium text-gray-900">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    disabled={!isInStock}
                    onClick={() =>
                      handleQuantityChange(quantity + 1)
                    }
                    className="flex h-full w-10 items-center justify-center text-gray-500 hover:text-gray-900 disabled:opacity-40"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!isInStock}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  <ShoppingCart size={18} />

                  {isInStock ? "Add to Cart" : "Out of Stock"}
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={
                    isWishlisted
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    isWishlisted
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  <Heart
                    size={19}
                    fill={
                      isWishlisted
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>

              {/* View Details */}
              <Link
                to={`/product/${product.id}`}
                onClick={onClose}
                className="mt-4 flex h-11 items-center justify-center rounded-lg border border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                View Full Details
              </Link>

              {/* Stock */}
              <div className="mt-5 flex items-center gap-2 text-sm">
                <span
                  className={`size-2 rounded-full ${
                    isInStock
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />

                <span className="text-gray-500">
                  {isInStock
                    ? "In stock"
                    : "Out of stock"}
                </span>

                {isInStock &&
                  product.inventory?.quantity > 0 &&
                  product.inventory.quantity <= 20 && (
                    <span className="text-red-500">
                      Only {product.inventory.quantity} left
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}