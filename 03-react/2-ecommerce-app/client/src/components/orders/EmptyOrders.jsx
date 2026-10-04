import { PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyOrders() {
  return (
    <div className="rounded-2xl border border-gray-200 px-6 py-16 text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gray-50">
        <PackageOpen size={30} className="text-gray-400" />
      </div>

      <h2 className="mt-5 text-xl font-semibold text-gray-900">
        No orders yet
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
        You haven't placed any orders yet. Start shopping and your orders will
        appear here.
      </p>

      <Link
        to="/shop"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        Start Shopping
      </Link>
    </div>
  );
}