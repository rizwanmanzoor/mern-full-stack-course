import { deliveryOptions } from "@/data/deliveryOptions";

export default function DeliveryOptions({ selectedDelivery, onChange }) {
  return (
    <section>
      <h2 className="mb-5 text-lg font-semibold text-gray-900">
        Delivery With
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {deliveryOptions.map((option) => {
          const isSelected = selectedDelivery === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={isSelected}
              className={`flex min-h-18 items-center gap-4 rounded-lg border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-primary ring-1 ring-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex min-w-20 items-center gap-2 border-r border-gray-200 pr-4">
                <img
                  key={option.id}
                  src={option.logo}
                  alt={option.name}
                  className="h-5 w-auto object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  ${option.price.toFixed(2)}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {option.estimatedDays}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
