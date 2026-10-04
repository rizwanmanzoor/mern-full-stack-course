import { Analytics } from "@vercel/analytics/react";

import { CartProvider } from "@/context/CartProvider";
import { useCart } from "@/context/useCart";

import AppRoutes from "@/routes/AppRoutes";
import MainLayout from "@/layouts/MainLayout";

import CartDrawer from "@/components/cart/CartDrawer";
import CartItem from "@/components/cart/CartItem";

function CartUI() {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    itemCount,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <CartDrawer
      isOpen={isCartOpen}
      onClose={closeCart}
      itemCount={itemCount}
      subtotal={subtotal}
      onCheckout={() => {
        closeCart();
        window.location.href = "/checkout";
      }}
    >
      {cartItems.map((item) => (
        <CartItem
          key={item.lineId}
          item={item}
          onQuantityChange={updateQuantity}
          onRemove={removeFromCart}
        />
      ))}
    </CartDrawer>
  );
}

export default function App() {
  return (
    <>
      <CartProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>

        <CartUI />
      </CartProvider>

      <Analytics />
    </>
  );
}