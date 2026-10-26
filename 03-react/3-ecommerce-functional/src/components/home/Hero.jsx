import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="px-4 md:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid justify-center items-center gap-x-12 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
              <p className="mb-2 font-medium text-blue-700 text-sm uppercase">
                Built to Grow with You
              </p>
              <h1 className="text-4xl text-slate-900 font-bold leading-tight! mb-6 md:text-6xl">
                Empower Brand with Human-Centered Solutions
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Showcase your products and connect with your audience. Our
                all-in-one platform helps you manage operations and boost
                visibility whether you're in fashion, beauty, wellness, or
                beyond.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link to="/shop">
                  <Button>Explore Products</Button>
                </Link>

                <Link to="/contact">
                  <Button variant="secondary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="columns-2 space-y-4">
            <div className="break-inside-avoid">
              <img
                src="https://readymadeui.com/images/face-primer-category.webp"
                alt="face-primer-category"
                className="w-full h-full object-cover object-top rounded-lg max-h-90"
              />
            </div>
            <div className="break-inside-avoid">
              <img
                src="https://readymadeui.com/images/product6.webp"
                alt="product6"
                className="w-full h-full object-cover object-top rounded-lg max-h-90"
              />
            </div>
            <div className="break-inside-avoid">
              <img
                src="https://readymadeui.com/images/product2.webp"
                alt="product2"
                className="w-full h-full object-cover object-top rounded-lg max-h-90"
              />
            </div>
            <div className="break-inside-avoid">
              <img
                src="https://readymadeui.com/images/skin-glow-category.webp"
                alt="skin-glow-category"
                className="w-full h-full object-cover object-top rounded-lg max-h-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
