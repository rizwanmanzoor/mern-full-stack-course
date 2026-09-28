import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import categories from "@/data/categories.json";

export default function ShopByCategory() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 210;

    sliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 lg:py-20">
      <Container>
        {/* =================================
            Section Header
        ================================= */}

        <SectionHeading
          title="Shop by Category"
          description="Explore our curated selection of products across premium categories, from everyday essentials to exclusive limited collections."
          action={
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => scroll("prev")}
                aria-label="Previous categories"
                className="
                    inline-flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-gray-700
                    ring-1
                    ring-gray-300
                    transition-all
                    hover:bg-primary
                    hover:text-white
                    hover:ring-primary
                "
              >
                <ChevronLeft size={22} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={() => scroll("next")}
                aria-label="Next categories"
                className="
                    inline-flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-gray-700
                    ring-1
                    ring-gray-300
                    transition-all
                    hover:bg-primary
                    hover:text-white
                    hover:ring-primary
                "
              >
                <ChevronRight size={22} strokeWidth={1.5} />
              </button>
            </div>
          }
        />

        {/* =================================
            Category Slider
        ================================= */}

        <div
          ref={sliderRef}
          className="
            flex
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-2
            [scrollbar-none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories.map((category, index) => (
            <article
              key={`${category.name}-${index}`}
              className="
                group
                w-[calc((100%-72px)/6)]
                min-w-37.5
                shrink-0
                text-center
                sm:min-w-43.75
                lg:min-w-46.25
              "
            >
              {/* Image */}
              <a
                href="/shop"
                className="
                  mb-5
                  block
                  overflow-hidden
                  rounded-[18px]
                  bg-gray-50
                  p-5
                "
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    mx-auto
                    aspect-square
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </a>

              {/* Category Name */}
              <h3 className="text-base font-medium text-gray-800 transition-colors group-hover:text-primary">
                <a href="/shop">{category.name}</a>
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
