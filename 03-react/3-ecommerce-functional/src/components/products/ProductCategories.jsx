import { Link } from "react-router-dom";

import { ProductCategories } from "@/data/ProductCategories";

export default function CategorySection() {
  return (
    <section className="mt-12 px-4 md:px-8" aria-labelledby="category-heading">
      <div className="max-w-7xl mx-auto">
        <h2
          id="category-heading"
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Top Categories
        </h2>

        <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6">
          {ProductCategories.map((category) => (
            <li key={category.title}>
              <Link
                to="/shop"
                className="block bg-gray-50 p-3 rounded-md border border-slate-300 shadow-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all hover:shadow-md"
              >
                <div className="aspect-square rounded-full overflow-hidden mx-auto">
                  <img
                    src={category.img}
                    alt={category.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-slate-900 text-sm font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-xs mt-1 text-slate-600">
                    {category.offer}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
