import { useState } from "react";
import { Heart, Star } from "lucide-react";

import { useCart } from "@/context/cart/useCart";
import { useWishlist } from "@/context/wishlist/useWishlist";

function formatVariantLabel(type) {
  const labels = {
    storage: "Storage",
    configuration: "Configuration",
    screenSize: "Screen Size",
    strapSize: "Strap Size",
  };

  return (
    labels[type] ||
    type.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())
  );
}

function getInitialVariants(product) {
  return Object.fromEntries(
    (product.variantOptions ?? []).map((variant) => [
      variant.type,
      variant.values[0],
    ]),
  );
}

export default function ProductInfo({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  const { addToCart, openCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState(
    product.colorOptions?.[0]?.slug ?? null,
  );

  const [selectedVariants, setSelectedVariants] = useState(() =>
    getInitialVariants(product),
  );

  const discount =
    product.originalPrice && product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : null;

  const isInStock = product.availability === "in-stock";

  const maxQuantity = product.inventory?.quantity ?? Infinity;

  const handleAddToCart = () => {
    if (!isInStock) {
      return;
    }

    addToCart({
      productId: product.id,
      quantity,
      selectedColor,
      selectedVariants,
    });

    openCart();
  };

  return (
    <div>
      {/* Product Name */}
      <h1 className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
        {product.name}
      </h1>

      {/* Rating */}
      {product.rating && (
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                strokeWidth={1.5}
                className={
                  index < Math.round(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      )}

      {/* Price */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-2xl font-semibold text-gray-900">
          ${product.price}
        </span>

        {product.originalPrice && (
          <>
            <span className="text-lg text-gray-400 line-through">
              ${product.originalPrice}
            </span>

            {discount && (
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                {discount}% OFF
              </span>
            )}
          </>
        )}
      </div>

      {/* Description */}
      {product.description && (
        <p className="mt-6 text-sm leading-6 text-gray-500">
          {product.description}
        </p>
      )}

      <div className="my-7 border-t border-gray-100" />

      {/* Colors */}
      {product.colorOptions?.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-900">Color</h3>

          <div className="flex items-center gap-3">
            {product.colorOptions.map((color) => {
              const isSelected = selectedColor === color.slug;

              return (
                <button
                  key={color.slug}
                  type="button"
                  onClick={() => setSelectedColor(color.slug)}
                  aria-label={`Select ${color.name}`}
                  aria-pressed={isSelected}
                  className={`size-8 rounded-full border transition ${
                    isSelected
                      ? "ring-2 ring-primary ring-offset-2"
                      : "border-gray-300 hover:ring-1 hover:ring-gray-300"
                  }`}
                  style={{
                    backgroundColor: color.value,
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Product Variants */}
      {product.variantOptions?.map((variant) => (
        <div key={variant.type} className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-gray-900">
            {formatVariantLabel(variant.type)}
          </h3>

          <div className="flex flex-wrap gap-2">
            {variant.values.map((value) => {
              const isSelected = selectedVariants[variant.type] === value;

              return (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setSelectedVariants((current) => ({
                      ...current,
                      [variant.type]: value,
                    }))
                  }
                  className={`rounded-lg border px-4 py-2 text-sm transition ${
                    isSelected
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Quantity + Cart */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <div className="flex h-12 w-fit items-center rounded-lg border border-gray-200">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            disabled={!isInStock || quantity <= 1}
            className="flex h-full w-10 items-center justify-center text-gray-500 transition hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="w-8 text-center text-sm font-medium text-gray-900">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() =>
              setQuantity((current) => Math.min(maxQuantity, current + 1))
            }
            disabled={!isInStock || quantity >= maxQuantity}
            className="flex h-full w-10 items-center justify-center text-gray-500 transition hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="flex flex-1 gap-3">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!isInStock}
            className="flex h-12 flex-1 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {isInStock ? "Add to cart" : "Out of stock"}
          </button>

          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-label={
              isWishlisted
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
            }
            aria-pressed={isWishlisted}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border transition ${
              isWishlisted
                ? "border-primary bg-primary/5 text-primary"
                : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
            }`}
          >
            <Heart
              size={19}
              strokeWidth={1.5}
              fill={isWishlisted ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-5 flex items-center gap-2 text-sm">
        <span
          className={`size-2 rounded-full ${
            isInStock ? "bg-green-500" : "bg-red-500"
          }`}
        />

        <span className="text-gray-500">
          {isInStock ? "In stock" : "Out of stock"}
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
  );
}
