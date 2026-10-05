import { Heart } from "lucide-react";

export default function EmptyWishlist({ onContinueShopping }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-gray-50">
        <Heart size={28} className="text-gray-400" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">
        Your wishlist is empty
      </h3>

      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
        Save products you love here and come back to them later.
      </p>

      <button
        type="button"
        onClick={onContinueShopping}
        className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        Continue Shopping
      </button>
    </div>
  );
}