import { Analytics } from "@vercel/analytics/react";

import { useCart } from "@/context/cart/useCart";
import { useWishlist } from "@/context/wishlist/useWishlist";
import { CartProvider } from "@/context/cart/CartProvider";
import { AuthProvider } from "@/context/auth/AuthProvider";
import { WishlistProvider } from "@/context/wishlist/WishlistProvider";

import AppRoutes from "@/routes/AppRoutes";
import MainLayout from "@/layouts/MainLayout";

import CartItem from "@/components/cart/CartItem";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";

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

function WishlistUI() {
  const {
    isWishlistOpen,
    closeWishlist,
    wishlistItems,
    itemCount,
    removeFromWishlist,
  } = useWishlist();

  return (
    <WishlistDrawer
      isOpen={isWishlistOpen}
      onClose={closeWishlist}
      wishlistItems={wishlistItems}
      itemCount={itemCount}
      onRemove={removeFromWishlist}
    />
  );
}

export default function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>

            <CartUI />
            <WishlistUI />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>

      <Analytics />
    </>
  );
}
