import { Link } from "react-router-dom";

import Container from "@/components/layout/Container";

import { collections } from "@/data/home/collections";

export default function Collections() {
  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className={`flex flex-col gap-8 rounded-xl p-5 ${collection.background}`}
            >
              <div className="p-2">
                <span className="mb-3 inline-flex h-8 items-center justify-center rounded bg-white px-3 py-1 text-base font-semibold text-red-500">
                  {collection.discount}
                </span>

                <h3 className="mb-4 text-3xl font-semibold leading-9 text-gray-700">
                  {collection.title}
                </h3>

                <Link
                  to="/shop"
                  className="border-b border-gray-500 pb-1 text-base font-medium text-gray-800"
                >
                  Shop Now
                </Link>
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
