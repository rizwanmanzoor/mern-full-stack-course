import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import CartItem from "@/components/cart/CartItem";
import { CartContext } from "@/context/cart/CartContext";

const SHIPPING = 10.0;

export default function ShoppingCart() {
  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className="px-4 md:px-8 mt-6">
      <div className="max-w-2xl mx-auto lg:max-w-7xl">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-slate-900">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="max-w-3xl mx-auto bg-gray-100 p-6 w-full rounded-lg md:p-8">
            <div className="max-w-4xl flex flex-col items-center gap-4">
              <p className="text-base text-center text-slate-600 leading-relaxed">
                Your cart is currently empty. <br /> Start adding items to your
                cart to see them here.
              </p>

              <Link to="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Shopping Cart Items */}
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:space-y-8">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onUpdateQuantity={updateCartItemQuantity}
                  />
                ))}
              </ul>
            </div>

            {/* Order Details */}
            <div className="bg-gray-100 border border-slate-200 rounded-md p-6 h-max md:sticky md:top-0">
              <h2 className="text-xl font-semibold text-slate-900">
                Order details
              </h2>

              <ul className="text-slate-600 font-medium mt-8 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm text-slate-900">
                  Subtotal{" "}
                  <span className="ml-auto font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping{" "}
                  <span className="ml-auto text-slate-900 font-semibold">
                    ${SHIPPING.toFixed(2)}
                  </span>
                </li>
                <hr className="my-6 border-slate-300 dark:border-neutral-700" />

                <li className="flex flex-wrap gap-4 text-sm text-slate-900">
                  Total{" "}
                  <span className="ml-auto font-semibold">
                    ${(subtotal + SHIPPING).toFixed(2)}
                  </span>
                </li>
              </ul>

              <div className="mt-8 space-y-3 text-center">
                <Button className="w-full">Checkout</Button>

                <Link to="/shop">Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
