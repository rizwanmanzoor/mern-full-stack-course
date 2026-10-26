import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Banner() {
  return (
    <section aria-labelledby="banner-heading" className="px-4 md:px-8 mt-10">
      <div className="bg-gray-100 relative max-w-5xl mx-auto rounded-lg overflow-hidden">
        <div className="grid gap-6 gap-y-12 py-12 px-6 sm:grid-cols-2">
          <div className="bg-linear-to-tr from-blue-400 to-blue-700 px-4 py-8 text-center rounded-[30px] w-full max-w-75 h-max skew-x-[-10deg] mx-auto shadow-lg shadow-purple-400">
            <span className="text-slate-300 text-4xl block">Big</span>
            <span className="text-white text-7xl font-bold mt-0.5 block">
              Sale!
            </span>
            <p className="text-slate-300 text-base mt-2 font-medium">
              Arriving this weekend
            </p>
          </div>

          <div className="text-center">
            <h2
              id="banner-heading"
              className="font-bold text-3xl text-blue-500 md:text-4xl"
            >
              Special Offer
            </h2>
            <span className="text-xl text-blue-500 font-medium block mt-2 md:text-2xl">
              Limited Time Deal
            </span>
            <p className="text-slate-600 text-base mt-4">
              Discover amazing discounts and deals. Don't miss out on our
              exclusive offers.
            </p>

            <div className="mt-8">
              <Link to="/shop">
                <Button>Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
