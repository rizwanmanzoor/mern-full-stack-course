import { X } from "lucide-react";

import EmptyCart from "@/components/cart/EmptyCart";
import CartSummary from "@/components/cart/CartSummary";

export default function CartDrawer({
  isOpen = false,
  onClose,
  children,
  subtotal = 0,
  itemCount = 0,
  onCheckout,
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
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Your Cart
            {itemCount > 0 && (
              <span className="ml-1 text-gray-500">
                ({itemCount})
              </span>
            )}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {isEmpty ? (
            <EmptyCart
              onContinueShopping={onClose}
            />
          ) : (
            <div className="space-y-6">
              {children}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-5">
            <CartSummary
              subtotal={subtotal}
              onContinueShopping={onClose}
              onCheckout={onCheckout}
            />
          </div>
        )}
      </aside>
    </>
  );
}