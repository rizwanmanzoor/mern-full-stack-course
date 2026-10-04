import { useState } from "react";

import { promoCodes } from "@/data/promoCodes";

export default function PromoCode({ onApply }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    const normalizedCode = code.trim().toUpperCase();

    if (!normalizedCode) {
      setMessage("Please enter a promo code.");
      setIsApplied(false);
      return;
    }

    const promo = promoCodes[normalizedCode];

    if (!promo) {
      setMessage("Invalid promo code.");
      setIsApplied(false);
      return;
    }

    onApply(promo);
    setMessage(`${promo.code} applied successfully.`);
    setIsApplied(true);
  };

  return (
    <div className="mt-6">
      <label
        htmlFor="promoCode"
        className="mb-2 block text-sm text-gray-600"
      >
        Have a promo code?
      </label>

      <div className="flex gap-2">
        <input
          id="promoCode"
          type="text"
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
            setMessage("");
            setIsApplied(false);
          }}
          placeholder="Enter code here"
          disabled={isApplied}
          className="h-11 min-w-0 flex-1 rounded-lg border border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-primary disabled:bg-gray-50"
        />

        <button
          type="button"
          onClick={handleApply}
          disabled={isApplied}
          className="h-11 shrink-0 rounded-lg bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isApplied ? "Applied" : "Apply"}
        </button>
      </div>

      {message && (
        <p
          className={`mt-2 text-xs ${
            isApplied ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}