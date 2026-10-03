import { Trash2 } from "lucide-react";

import QuantitySelector from "@/components/cart/QuantitySelector";

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}) {
  const {
    product,
    quantity = 1,
    selectedColor,
    selectedVariants = {},
  } = item;

  const itemTotal = product.price * quantity;

  const selectedColorName =
    product.colorOptions?.find(
      (color) => color.slug === selectedColor,
    )?.name ?? selectedColor;

  const selectedVariantLabels = Object.values(
    selectedVariants,
  ).filter(Boolean);

  const optionLabels = [
    selectedColorName,
    ...selectedVariantLabels,
  ].filter(Boolean);

  const maxQuantity = product.inventory?.quantity ?? Infinity;

  return (
    <article className="flex gap-4">
      <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {product.name}
            </h3>

            {optionLabels.length > 0 && (
              <p className="mt-1 text-sm text-gray-500">
                {optionLabels.join(" · ")}
              </p>
            )}
          </div>

          <span className="shrink-0 text-sm font-medium text-gray-900">
            ${itemTotal.toFixed(2)}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <QuantitySelector
            quantity={quantity}
            min={1}
            max={maxQuantity}
            onDecrease={() =>
              onQuantityChange?.(
                item.lineId,
                quantity - 1,
              )
            }
            onIncrease={() =>
              onQuantityChange?.(
                item.lineId,
                quantity + 1,
              )
            }
          />

          <button
            type="button"
            onClick={() => onRemove?.(item.lineId)}
            aria-label={`Remove ${product.name} from cart`}
            className="flex size-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
          >
            <Trash2 size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
}