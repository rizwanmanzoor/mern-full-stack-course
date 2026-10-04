import { paymentMethods } from "@/data/paymentMethod";

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);

  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function formatCvc(value) {
  return value.replace(/\D/g, "").slice(0, 3);
}

export default function PaymentMethod({
  selectedPayment,
  onPaymentChange,
  paymentData,
  onPaymentDataChange,
}) {
  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);

    onPaymentDataChange({
      ...paymentData,
      cardNumber: formattedValue,
    });
  };

  const handleExpiryChange = (event) => {
    const formattedValue = formatExpiry(event.target.value);

    onPaymentDataChange({
      ...paymentData,
      expiry: formattedValue,
    });
  };

  const handleCvcChange = (event) => {
    const formattedValue = formatCvc(event.target.value);

    onPaymentDataChange({
      ...paymentData,
      cvc: formattedValue,
    });
  };

  return (
    <section>
      <h2 className="mb-5 text-lg font-semibold text-gray-900">
        Select payment
      </h2>

      {/* Payment Methods */}
      <div className="rounded-xl border border-gray-200 p-3">
        <div className="grid gap-3 sm:grid-cols-2">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            const isSelected = selectedPayment === method.id;

            return (
              <button
                key={method.id}
                type="button"
                onClick={() => onPaymentChange(method.id)}
                aria-pressed={isSelected}
                className={`flex h-12 items-center gap-3 rounded-lg border px-4 text-left transition-colors ${
                  isSelected
                    ? "border-primary ring-1 ring-primary"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon
                  size={19}
                  strokeWidth={1.5}
                  className="shrink-0 text-gray-600"
                />

                <span className="text-sm font-medium text-gray-700">
                  {method.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Card Information */}
        {selectedPayment === "card" && (
          <div className="mt-4">
            <label
              htmlFor="cardNumber"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Card Information
            </label>

            <div className="overflow-hidden rounded-lg border border-gray-200">
              <div className="relative">
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  value={paymentData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="4645 7534 5454 6134"
                  maxLength={19}
                  className="h-12 w-full border-0 px-4 pr-28 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />

                <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5">
                  <span className="text-xs font-bold italic text-blue-900">
                    VISA
                  </span>

                  <span className="text-xs font-bold text-red-500">●</span>

                  <span className="text-xs font-bold text-blue-500">AMEX</span>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-gray-200">
                <input
                  name="expiry"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  value={paymentData.expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="h-12 border-0 px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />

                <input
                  name="cvc"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  value={paymentData.cvc}
                  onChange={handleCvcChange}
                  placeholder="CVC"
                  maxLength={3}
                  className="h-12 border-l border-gray-200 px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bank Transfer */}
        {selectedPayment === "bank" && (
          <div className="mt-4 rounded-lg bg-gray-50 p-5">
            <p className="text-sm font-medium text-gray-900">Bank Transfer</p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Bank transfer instructions will be provided after you place your
              order.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
