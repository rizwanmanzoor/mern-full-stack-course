import { Link } from "react-router-dom";
import { Eye, Heart, Repeat2, ShoppingCart } from "lucide-react";

import { useCart } from "@/context/cart/useCart";
import { useWishlist } from "@/context/wishlist/useWishlist";

export default function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  const {
    isInWishlist,
    toggleWishlist,
  } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
    });
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
  };

  return (
    <article>
      {/* Product Image */}
      <div
        className={`group relative mb-5 overflow-visible rounded-xl ${className}`}
      >
        <Link
          to={`/product/${product.id}`}
          className="
            relative
            z-10
            flex
            aspect-square
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            p-8
            sm:p-10
          "
        >
          {product.badge && (
            <span
              className="
                absolute
                left-4
                top-4
                z-10
                inline-flex
                h-5
                items-center
                justify-center
                rounded-full
                bg-green-50
                px-2
                py-1
                text-sm
                font-medium
                text-green-700
              "
            >
              {product.badge}
            </span>
          )}

          <img
            src={product.images[0]}
            alt={product.name}
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-500
              ease-out
              group-hover:scale-105
            "
          />
        </Link>

        {/* Actions */}
        <div
          className="
            absolute right-4 top-4 z-20
            flex flex-col gap-2
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        >
          {/* Wishlist */}
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={
              isWishlisted
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
            }
            aria-pressed={isWishlisted}
            className={`
              inline-flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              bg-white
              transition-colors
              ${
                isWishlisted
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-gray-300 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              }
            `}
          >
            <Heart
              size={20}
              strokeWidth={1.5}
              fill={isWishlisted ? "currentColor" : "none"}
            />
          </button>

          {/* View */}
          <button
            type="button"
            aria-label={`View ${product.name}`}
            onClick={() => {
              window.location.href = `/product/${product.id}`;
            }}
            className="
              inline-flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-300
              bg-white
              transition-colors
              hover:border-primary/30
              hover:bg-primary/5
            "
          >
            <Eye size={20} strokeWidth={1.5} />
          </button>

          {/* Compare */}
          <button
            type="button"
            aria-label={`Compare ${product.name}`}
            className="
              inline-flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-300
              bg-white
              transition-colors
              hover:border-primary/30
              hover:bg-primary/5
            "
          >
            <Repeat2 size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="
            absolute
            bottom-3
            left-3
            right-3
            z-30
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-primary
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            opacity-0
            translate-y-4
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
            hover:bg-primary/90
          "
        >
          <ShoppingCart size={17} />
          Add to cart
        </button>
      </div>

      {/* Product Info */}
      <div className="mx-2 mb-4">
        <h3 className="text-base font-medium text-gray-900">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {product.originalPrice ? (
          <div className="flex items-center gap-2">
            <span className="text-base text-gray-500 line-through">
              ${product.originalPrice}
            </span>

            <span className="text-base font-semibold text-gray-900">
              ${product.price}
            </span>
          </div>
        ) : (
          <span className="text-base text-gray-500">
            ${product.price}
          </span>
        )}
      </div>

      {/* Colors */}
      {product.colors?.length > 0 && (
        <div className="flex items-center gap-1.5">
          {product.colors.map((color, index) => (
            <button
              key={color}
              type="button"
              aria-label={`Select ${color} color`}
              className={`
                size-5
                rounded-full
                border
                transition-all
                duration-300
                hover:border-primary
                ${
                  index === 0
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                }
              `}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </article>
  );
}