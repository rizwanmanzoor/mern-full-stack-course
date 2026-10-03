export default function QuantitySelector({
  quantity = 1,
  onDecrease,
  onIncrease,
  min = 1,
  max = Infinity,
}) {
  return (
    <div className="flex h-9 items-center rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-full w-9 items-center justify-center text-gray-500 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>

      <span className="w-8 text-center text-sm font-medium text-gray-900">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-full w-9 items-center justify-center text-gray-500 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}