import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import Container from "@/components/layout/Container";

export default function ShopHeader() {
  return (
    <section className="pb-10 pt-14 lg:pb-16 lg:pt-20">
      <Container>
        <div className="mx-auto mb-4 max-w-lg text-center">
          <h1 className="mb-4 text-4xl font-medium text-gray-900 lg:text-5xl">
            Shop all
          </h1>

          <p className="text-base text-gray-500">
            Our most-loved gadgets, trusted by thousands of customers.
          </p>
        </div>

        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900"
              >
                Home
              </Link>
            </li>

            <li>
              <ChevronRight
                size={16}
                strokeWidth={1.2}
                className="text-gray-500"
              />
            </li>

            <li className="inline-flex items-center">
              <Link
                to="/shop"
                className="inline-flex items-center gap-1 font-medium text-gray-900"
              >
                Shop
              </Link>
            </li>
          </ol>
        </nav>
      </Container>
    </section>
  );
}
