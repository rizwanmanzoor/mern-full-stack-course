import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import { StarIcon } from "@/components/icons/Icons";
import { getProductById } from "@/services/product.service";
import {
  CircleMinus,
  CirclePlus,
  ShieldCheck,
  Truck,
  Undo2,
} from "lucide-react";


export default function ProductView() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { id } = useParams();

  const images = product?.images ?? [];
  const activeImage = images[activeImageIndex];

  const changeQty = (val) => {
    setQuantity((prev) => Math.max(1, prev + val));
  };

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="bg-gray-100 p-4 md:p-8" aria-label="Product detail">
      <div className="lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:sticky top-0 min-w-0">
            <div className="flex flex-col gap-4">
              {/* Main Product Image */}
              <div className="bg-white border border-slate-300 shadow-xs p-2 rounded-md">
                {loading ? (
                  <p>Loading...</p>
                ) : activeImage ? (
                  <img
                    id="main-product-image"
                    src={activeImage}
                    alt={product.title}
                    className="w-full aspect-11/8 object-cover rounded"
                  />
                ) : (
                  <p>Image not available.</p>
                )}
              </div>

              {/* Thumbnail Images - Show only when multiple images exist */}
              {!loading && images.length > 1 && (
                <div className="bg-white border border-slate-300 shadow-xs p-2 mt-3 overflow-x-auto rounded-md">
                  <div
                    className="flex gap-3"
                    role="group"
                    aria-label="Select product image"
                  >
                    {images.map((img, index) => (
                      <button
                        key={img}
                        type="button"
                        aria-label={`View product image ${index + 1}`}
                        aria-pressed={activeImageIndex === index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-16 h-16 shrink-0 cursor-pointer aspect-square overflow-hidden border-2 rounded focus-visible:ring-2 focus-visible:ring-blue-500 outline-none transition-all ${
                          activeImageIndex === index
                            ? "border-blue-600 shadow-md"
                            : "border-slate-200 hover:border-slate-400"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover object-top"
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-full">
            <div>
              <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
                {loading ? "Loading..." : product?.title}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                <div
                  className="flex items-center gap-2"
                  role="img"
                  aria-label={`Rated ${product?.rating} out of 5 stars`}
                >
                  <p
                    className="text-base font-semibold text-slate-700"
                    aria-hidden="true"
                  >
                    {loading ? "Loading..." : product?.rating}
                  </p>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < Math.floor(product?.rating)}
                    />
                  ))}
                </div>
                <span className="text-slate-400" aria-hidden="true">
                  |
                </span>
                <p className="text-sm text-slate-600">
                  {loading ? "Loading..." : product?.reviews.length} Reviews
                </p>
              </div>

              <div className="mt-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {loading ? "Loading..." : product?.description}
                </p>
              </div>
              {/* Product Pricing */}
              <div className="flex items-center flex-wrap gap-2 mt-6">
                <p className="text-blue-700 text-2xl sm:text-3xl font-bold">
                  <span className="sr-only">Current price:</span>$
                  {loading ? "Loading..." : product?.price}
                </p>
                <div className="flex py-1 px-2 bg-blue-600 font-semibold ml-4! rounded shadow-sm">
                  <span className="text-white text-[11px] uppercase tracking-wider">
                    save {loading ? "Loading..." : product?.discountPercentage}
                  </span>
                </div>
              </div>

              {loading
                ? "Loading..."
                : product?.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="inline-flex gap-2 me-2 mt-4 max-w-max py-1 px-2 bg-white font-semibold rounded shadow-sm"
                    >
                      <span className="text-slate-600 text-[11px] uppercase tracking-wider">
                        {tag}
                      </span>
                    </div>
                  ))}
            </div>

            <hr className="my-6 border-slate-300" />

            {/* Quantity Selector */}
            <div>
              <div className="flex gap-4 items-center border border-slate-300 bg-white px-3.5 py-1.5 w-max rounded-md">
                <Button
                  onClick={() => changeQty(-1)}
                  aria-label="Decrease quantity"
                  variant="secondary"
                >
                  <CircleMinus />
                </Button>
                <span
                  id="quantity"
                  className="text-slate-900 text-sm font-bold px-1"
                >
                  {quantity}
                </span>

                <Button
                  onClick={() => changeQty(1)}
                  aria-label="Increase quantity"
                  variant="secondary"
                >
                  <CirclePlus />
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="secondary" className="w-[45%]">
                  Add to cart
                </Button>
                <Button className="w-[45%]">Buy it now</Button>
              </div>
            </div>

            <hr className="my-4 border-slate-300" />

            {/* Features */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center flex flex-col items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
                <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
                  {product?.warrantyInformation}
                </p>
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <Undo2 className="w-6 h-6" />
                <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
                  {product?.returnPolicy}
                </p>
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <Truck className="w-6 h-6" />
                <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
                  {product?.shippingInformation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
