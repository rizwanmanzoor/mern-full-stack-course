import { Link, useParams } from "react-router-dom";
import { Package, Truck, CreditCard } from "lucide-react";

import { getOrderByNumber } from "@/utils/orderStorage";

export default function OrderDetails() {
  const { orderNumber } = useParams();
  const order = getOrderByNumber(orderNumber);

  if (!order) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Order not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            We couldn't find an order with this number.
          </p>

          <Link
            to="/orders"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white hover:bg-primary/90"
          >
            Back to My Orders
          </Link>
        </div>
      </section>
    );
  }

  const orderDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>

          <span>/</span>

          <Link to="/orders" className="hover:text-gray-900">
            My Orders
          </Link>

          <span>/</span>

          <span className="text-gray-900">Order Details</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Order #{order.orderNumber}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Placed on {orderDate}
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium capitalize text-yellow-700">
              {order.status}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main */}
          <div className="space-y-6">
            {/* Products */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="mb-5 flex items-center gap-2">
                <Package size={20} className="text-gray-700" />

                <h2 className="font-semibold text-gray-900">
                  Order Items
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {order.items.map((item) => (
                  <div
                    key={`${item.productId}-${item.quantity}`}
                    className="flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                      <span className="text-xs text-gray-400">
                        Product
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.productName}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>

                      {item.selectedColor && (
                        <p className="mt-1 text-xs text-gray-500">
                          Color: {item.selectedColor}
                        </p>
                      )}
                    </div>

                    <p className="shrink-0 text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="mb-5 font-semibold text-gray-900">
                Shipping Information
              </h2>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium text-gray-900">
                  {order.customer.fullName}
                </p>

                <p>{order.customer.address}</p>

                <p>
                  {order.customer.city}, {order.customer.state}
                </p>

                <p>
                  {order.customer.country}, {order.customer.zipCode}
                </p>

                {order.customer.additionalInformation && (
                  <p className="pt-2">
                    {order.customer.additionalInformation}
                  </p>
                )}
              </div>
            </div>

            {/* Delivery & Payment */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Truck size={20} className="text-gray-700" />

                  <h2 className="font-semibold text-gray-900">
                    Delivery
                  </h2>
                </div>

                <p className="text-sm font-medium capitalize text-gray-900">
                  {order.delivery.method}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {order.delivery.estimatedDays}
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CreditCard size={20} className="text-gray-700" />

                  <h2 className="font-semibold text-gray-900">
                    Payment
                  </h2>
                </div>

                <p className="text-sm font-medium capitalize text-gray-900">
                  {order.payment.method}
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${order.pricing.subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Taxes</span>
                <span>${order.pricing.taxes.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>${order.pricing.shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Discount</span>
                <span className="text-green-600">
                  -${order.pricing.discount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between border-t border-gray-100 pt-4 text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>${order.pricing.total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/orders"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg border border-gray-300 px-5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Back to My Orders
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}