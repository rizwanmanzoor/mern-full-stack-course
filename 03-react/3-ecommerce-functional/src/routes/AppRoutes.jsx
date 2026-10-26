import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import Wishlist from "@/pages/Wishlist";
import Product from "@/pages/Product";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<Product />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
