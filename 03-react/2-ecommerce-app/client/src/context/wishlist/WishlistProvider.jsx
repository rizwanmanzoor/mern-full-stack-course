import { useMemo, useState } from "react";

import products from "@/data/products.json";

import { WishlistContext } from "@/context/wishlist/WishlistContext";
import {
  getWishlist,
  saveWishlist,
} from "@/utils/wishlistStorage";

export function WishlistProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState(getWishlist);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const wishlistItems = useMemo(() => {
    return wishlistIds
      .map((productId) =>
        products.find((product) => product.id === productId),
      )
      .filter(Boolean);
  }, [wishlistIds]);

  const itemCount = wishlistItems.length;

  const openWishlist = () => {
    setIsWishlistOpen(true);
  };

  const closeWishlist = () => {
    setIsWishlistOpen(false);
  };

  const isInWishlist = (productId) => {
    return wishlistIds.includes(productId);
  };

  const toggleWishlist = (productId) => {
    setWishlistIds((currentIds) => {
      const exists = currentIds.includes(productId);

      const nextIds = exists
        ? currentIds.filter((id) => id !== productId)
        : [...currentIds, productId];

      saveWishlist(nextIds);

      return nextIds;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistIds((currentIds) => {
      const nextIds = currentIds.filter(
        (id) => id !== productId,
      );

      saveWishlist(nextIds);

      return nextIds;
    });
  };

  const clearWishlist = () => {
    setWishlistIds([]);
    saveWishlist([]);
  };

  const value = {
    wishlistItems,
    itemCount,
    isWishlistOpen,
    openWishlist,
    closeWishlist,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}