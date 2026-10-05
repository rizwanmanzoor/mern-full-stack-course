import { X } from "lucide-react";

import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import WishlistItem from "@/components/wishlist/WishlistItem";

export default function WishlistDrawer({
  isOpen = false,
  onClose,
  wishlistItems = [],
  itemCount = 0,
  onRemove,
}) {
  const isEmpty = itemCount === 0;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Your Wishlist
            {itemCount > 0 && (
              <span className="ml-1 text-gray-500">
                ({itemCount})
              </span>
            )}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {isEmpty ? (
            <EmptyWishlist onContinueShopping={onClose} />
          ) : (
            <div className="divide-y divide-gray-100">
              {wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="py-5 first:pt-0 last:pb-0"
                >
                  <WishlistItem
                    product={product}
                    onRemove={onRemove}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-5">
          <button
            type="button"
            onClick={onClose}
            className="h-12 w-full rounded-lg bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
}