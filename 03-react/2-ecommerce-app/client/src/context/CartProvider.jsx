import {
  useEffect,
  useMemo,
  useState,
} from "react";

import products from "@/data/products.json";
import { CartContext } from "@/context/CartContext";

const CART_STORAGE_KEY = "techshelf-cart";

function getStoredCart() {
  try {
    const storedCart = localStorage.getItem(
      CART_STORAGE_KEY,
    );

    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
}

function createCartLineId(
  productId,
  selectedColor,
  selectedVariants,
) {
  return JSON.stringify({
    productId,
    selectedColor: selectedColor ?? null,
    selectedVariants: selectedVariants ?? {},
  });
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] =
    useState(getStoredCart);

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems),
    );
  }, [cartItems]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = ({
    productId,
    quantity = 1,
    selectedColor = null,
    selectedVariants = {},
  }) => {
    const product = products.find(
      (item) => item.id === productId,
    );

    if (!product) {
      return;
    }

    const availableStock =
      product.inventory?.quantity ?? Infinity;

    const lineId = createCartLineId(
      productId,
      selectedColor,
      selectedVariants,
    );

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.lineId === lineId,
      );

      if (existingItem) {
        const nextQuantity = Math.min(
          existingItem.quantity + quantity,
          availableStock,
        );

        return currentItems.map((item) =>
          item.lineId === lineId
            ? {
                ...item,
                quantity: nextQuantity,
              }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          lineId,
          productId,
          quantity: Math.min(
            quantity,
            availableStock,
          ),
          selectedColor,
          selectedVariants,
        },
      ];
    });
  };

  const updateQuantity = (
    lineId,
    quantity,
  ) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.lineId !== lineId) {
          return item;
        }

        const product = products.find(
          (productItem) =>
            productItem.id === item.productId,
        );

        const availableStock =
          product?.inventory?.quantity ??
          Infinity;

        return {
          ...item,
          quantity: Math.max(
            1,
            Math.min(
              quantity,
              availableStock,
            ),
          ),
        };
      }),
    );
  };

  const removeFromCart = (lineId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.lineId !== lineId,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const enrichedCartItems = useMemo(() => {
    return cartItems
      .map((item) => {
        const product = products.find(
          (productItem) =>
            productItem.id === item.productId,
        );

        if (!product) {
          return null;
        }

        return {
          ...item,
          product,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const itemCount = useMemo(
    () =>
      enrichedCartItems.reduce(
        (total, item) =>
          total + item.quantity,
        0,
      ),
    [enrichedCartItems],
  );

  const subtotal = useMemo(
    () =>
      enrichedCartItems.reduce(
        (total, item) =>
          total +
          item.product.price *
            item.quantity,
        0,
      ),
    [enrichedCartItems],
  );

  const value = {
    cartItems: enrichedCartItems,

    itemCount,
    subtotal,

    isCartOpen,

    openCart,
    closeCart,

    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}