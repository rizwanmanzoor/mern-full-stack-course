export default function CartSummary({
  subtotal = 0,
  onContinueShopping,
  onCheckout,
}) {
  const total = subtotal;

  return (
    <div>
      <div className="mb-5 space-y-2">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-base font-medium text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={onContinueShopping}
          className="flex h-11 w-full items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
        >
          Continue Shopping
        </button>

        <button
          type="button"
          onClick={onCheckout}
          disabled={subtotal <= 0}
          className="flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}