const WISHLIST_STORAGE_KEY = "techshelf-wishlist";

export function getWishlist() {
  try {
    const storedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);

    return storedWishlist ? JSON.parse(storedWishlist) : [];
  } catch {
    return [];
  }
}

export function saveWishlist(wishlist) {
  localStorage.setItem(
    WISHLIST_STORAGE_KEY,
    JSON.stringify(wishlist),
  );
}