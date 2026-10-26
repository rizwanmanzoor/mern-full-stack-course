import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import { useContext } from "react";
import { CartContext } from "@/context/cart/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <li className="bg-white shadow-sm border border-slate-200 rounded-lg p-3">
      <Link
        to={`/product/${product.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      >
        <div className="aspect-12/11 bg-gray-100 rounded-lg p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <h3 className="text-base font-semibold text-slate-900 truncate">
            {product.title}
          </h3>
          <p className="text-base text-slate-900 font-bold ml-auto">
            {product.price}
          </p>
        </div>
        <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </Link>

      <div className="flex items-center gap-2 mt-6">
        <Button className="w-full border" onClick={() => addToCart(product)}>
          Add to cart
        </Button>

        <Button variant="secondary">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </li>
  );
}
