import { ShoppingCart, Trash2 } from "lucide-react";

import { useCart } from "@/context/cart/useCart";

export default function WishlistItem({
  product,
  onRemove,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
    });

    onRemove(product.id);
  };

  return (
    <div className="flex gap-4">
      {/* Product Image */}
      <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-gray-50">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Product Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-gray-900">
          ${product.price.toFixed(2)}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-3 inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>

      {/* Remove */}
      <button
        type="button"
        onClick={() => onRemove(product.id)}
        aria-label={`Remove ${product.name} from wishlist`}
        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
      >
        <Trash2 size={18} strokeWidth={1.7} />
      </button>
    </div>
  );
}