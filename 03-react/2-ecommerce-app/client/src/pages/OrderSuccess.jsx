import { Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { getOrderByNumber } from "@/utils/orderStorage";

export default function OrderSuccess() {
  const { orderNumber } = useParams();

  const order = getOrderByNumber(orderNumber);

  const estimatedDelivery =
    order?.delivery?.estimatedDays ?? "3-5 business days";

  return (
    <section className="pb-20 pt-14 lg:pt-20">
      <div className="mx-auto max-w-2xl px-4 text-center lg:px-6">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-green-100">
            <Check
              size={40}
              strokeWidth={2}
              className="text-green-600"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-semibold text-gray-900 lg:text-5xl">
          Thank You for Your Order!
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg text-gray-600">
          Your order has been successfully placed. We've sent a
          confirmation email with your order details.
        </p>

        {/* Order Information */}
        <div className="mb-8 rounded-2xl bg-gray-50 p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Order Number:
              </span>

              <span className="font-semibold text-gray-900">
                #{orderNumber}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Estimated Delivery:
              </span>

              <span className="font-semibold text-gray-900">
                {estimatedDelivery}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}