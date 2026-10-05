import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createOrder } from "@/data/order";
import PromoCode from "@/components/checkout/PromoCode";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import DeliveryOptions from "@/components/checkout/DeliveryOptions";
import CustomerInformation from "@/components/checkout/CustomerInformation";

import { useCart } from "@/context/cart/useCart";
import { useAuth } from "@/context/auth/useAuth";
import { saveOrder } from "@/utils/orderStorage";

import { deliveryOptions } from "@/data/deliveryOptions";
import { initialFormData } from "@/data/checkoutFormData";

export default function Checkout() {
  const { cartItems, itemCount, subtotal, clearCart } = useCart();

  const { user } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);

  const [selectedDelivery, setSelectedDelivery] = useState("fedex");

  const [selectedPayment, setSelectedPayment] = useState("card");

  const [appliedPromo, setAppliedPromo] = useState(null);

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const delivery = deliveryOptions.find(
    (option) => option.id === selectedDelivery,
  );

  const shippingCost = delivery?.price ?? 0;

  const discount = appliedPromo
    ? appliedPromo.type === "percentage"
      ? subtotal * (appliedPromo.value / 100)
      : appliedPromo.value
    : 0;

  const total = Math.max(0, subtotal + shippingCost - discount);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.address.trim() ||
      !formData.country ||
      !formData.state ||
      !formData.city.trim() ||
      !formData.zipCode.trim()
    ) {
      alert("Please complete your shipping information.");
      return;
    }

    if (selectedPayment === "card") {
      if (
        paymentData.cardNumber.replace(/\s/g, "").length !== 16 ||
        paymentData.expiry.length !== 5 ||
        paymentData.cvc.length !== 3
      ) {
        alert("Please enter valid card information.");
        return;
      }
    }

    const order = createOrder({
      userId: user.id,
      formData,
      cartItems,
      delivery,
      selectedPayment,
      subtotal,
      taxes: 0,
      discount,
    });

    saveOrder(order);

    clearCart();

    navigate(`/order-success/${order.orderNumber}`);
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>

          <span>/</span>

          <Link to="/shop" className="transition-colors hover:text-gray-900">
            Shop
          </Link>

          <span>/</span>

          <span className="text-gray-900">Checkout</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Complete your order information below.
          </p>
        </div>

        {/* Checkout Layout */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Left */}
          <div className="rounded-xl flex flex-col gap-6 border border-gray-200 p-6">
            <CustomerInformation formData={formData} onChange={setFormData} />

            <DeliveryOptions
              selectedDelivery={selectedDelivery}
              onChange={setSelectedDelivery}
            />

            <PaymentMethod
              selectedPayment={selectedPayment}
              onPaymentChange={setSelectedPayment}
              paymentData={paymentData}
              onPaymentDataChange={setPaymentData}
            />
          </div>

          {/* Right */}
          <aside className="h-fit rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Price Summary
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              You have {itemCount} {itemCount === 1 ? "item" : "items"} in your
              cart
            </p>

            {/* Cart Items */}
            <div className="mt-6 max-h-80 space-y-4 overflow-y-auto pr-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
              {cartItems.map((item) => (
                <div key={item.lineId} className="flex items-center gap-3">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                    <img
                      src={item.product.images?.[0]}
                      alt={item.product.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {item.product.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-medium text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <PromoCode onApply={setAppliedPromo} />

            {/* Totals */}
            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Discount</span>

                <span className={discount > 0 ? "text-green-600" : ""}>
                  -${discount.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-base font-semibold text-gray-900">
                <span>Total Amount</span>

                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order */}
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0}
              className="mt-6 h-12 w-full rounded-lg bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Place Order
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
