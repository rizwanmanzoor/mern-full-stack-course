import { Link } from "react-router-dom";

export default function OrderCard({ order }) {
  const itemCount = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const orderDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      {/* Order Header */}
      <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Order Number</p>

          <h2 className="mt-1 font-semibold text-gray-900">
            #{order.orderNumber}
          </h2>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-gray-500">Order Date</p>

          <p className="mt-1 text-sm font-medium text-gray-900">
            {orderDate}
          </p>
        </div>
      </div>

      {/* Order Details */}
      <div className="grid gap-5 py-5 sm:grid-cols-3">
        <div>
          <p className="text-xs text-gray-500">Items</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Delivery</p>
          <p className="mt-1 text-sm font-medium capitalize text-gray-900">
            {order.delivery.method ?? "Not selected"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Total</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">
            ${order.pricing.total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex w-fit rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium capitalize text-yellow-700">
          {order.status}
        </span>

        <Link
          to={`/orders/${order.orderNumber}`}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-300 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          View Order
        </Link>
      </div>
    </article>
  );
}