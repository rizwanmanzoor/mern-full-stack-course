import { ShoppingCart } from "lucide-react";

export default function EmptyCart({ onContinueShopping }) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-4 py-10 text-center">
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-gray-50 text-gray-400">
        <ShoppingCart
          size={28}
          strokeWidth={1.5}
        />
      </div>

      <h3 className="text-lg font-medium text-gray-900">
        Your cart is empty
      </h3>

      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
        Looks like you haven't added anything to your cart yet.
      </p>

      <button
        type="button"
        onClick={onContinueShopping}
        className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        Continue Shopping
      </button>
    </div>
  );
}