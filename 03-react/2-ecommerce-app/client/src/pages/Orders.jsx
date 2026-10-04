import { Link } from "react-router-dom";

import OrderCard from "@/components/orders/OrderCard";
import EmptyOrders from "@/components/orders/EmptyOrders";

import { useAuth } from "@/context/auth/useAuth";
import { getOrders } from "@/utils/orderStorage";

export default function Orders() {
  const { user } = useAuth();

  const orders = getOrders()
    .filter((order) => order.userId === user?.id)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime(),
    );

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-900">My Orders</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View and track your previous orders.
          </p>
        </div>

        {orders.length === 0 ? (
          <EmptyOrders />
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard key={order.orderNumber} order={order} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}