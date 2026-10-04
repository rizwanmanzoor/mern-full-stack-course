import { Analytics } from "@vercel/analytics/react";

import { useCart } from "@/context/useCart";
import { CartProvider } from "@/context/CartProvider";
import { AuthProvider } from "@/context/auth/AuthProvider";

import AppRoutes from "@/routes/AppRoutes";
import MainLayout from "@/layouts/MainLayout";

import CartItem from "@/components/cart/CartItem";
import CartDrawer from "@/components/cart/CartDrawer";

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
      <AuthProvider>
        <CartProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>

          <CartUI />
        </CartProvider>
      </AuthProvider>

      <Analytics />
    </>
  );
}
