import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

import { heroCards } from "@/data/home/heroCards";

import heroImage1 from "@/assets/images/home/hero/heroimage-1.webp";
import phoneImage from "@/assets/images/home/hero/heroimage-4.webp";

export default function Hero() {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-2.5
            md:grid-cols-2
            xl:grid-cols-[581px_339px_339px]
          "
        >
          {/* =================================
              Main Hero
          ================================= */}

          <div className="relative min-h-105 overflow-hidden rounded-xl sm:min-h-125 xl:min-h-135">
            <img
              src={heroImage1}
              alt="Immersive VR Experience"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Bottom Gradient */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-1/2
                bg-linear-to-b
                from-transparent
                to-black
              "
            />

            {/* Content */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-10
                w-full
                p-5
                sm:p-6
                lg:p-10
              "
            >
              <span className="mb-3 inline-flex rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-800 sm:text-sm">
                Just Launched
              </span>

              <h1
                className="
                  mb-3
                  max-w-lg
                  text-2xl
                  font-medium
                  leading-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Immersive VR Experience
              </h1>

              <p
                className="
                  mb-7
                  max-w-xs
                  text-sm
                  leading-6
                  text-white/80
                  sm:mb-8
                  sm:text-base
                "
              >
                Feel every detail with smooth motion, clear visuals, and total
                comfort.
              </p>

              <Button variant="primary" size="md">
                Discover Collection
              </Button>
            </div>
          </div>

          {/* =================================
              Middle Cards
          ================================= */}

          <div className="grid gap-2.5">
            {heroCards.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className={`
                  flex
                  min-h-65
                  flex-col
                  items-center
                  justify-between
                  rounded-xl
                  p-5
                  text-center
                  transition-transform
                  duration-300
                  hover:-translate-y-0.5
                  sm:p-6
                  ${card.className}
                `}
              >
                <div className="flex flex-col items-center">
                  <span className="mb-2.5 inline-flex rounded bg-white px-3 py-1 text-xs text-gray-700 sm:text-sm">
                    {card.badge}
                  </span>

                  <p className="text-sm font-normal leading-6 text-gray-700 sm:text-base">
                    {card.title}
                  </p>
                </div>

                <img
                  src={card.image}
                  alt=""
                  className="mt-5 max-h-45 max-w-full object-contain"
                />
              </Link>
            ))}
          </div>

          {/* =================================
              Smartphone Card
          ================================= */}

          <Link
            to="/shop"
            className="
              flex
              min-h-75
              flex-col
              items-center
              justify-between
              rounded-xl
              bg-blue-500/10
              p-5
              text-center
              transition-transform
              duration-300
              hover:-translate-y-0.5
              sm:p-6
              md:col-span-2
              xl:col-span-1
            "
          >
            <div className="flex flex-col items-center">
              <span className="mb-2.5 inline-flex rounded bg-white px-3 py-1 text-xs text-gray-700 sm:text-sm">
                Smartphone
              </span>

              <p className="max-w-sm text-sm font-normal leading-6 text-gray-700 sm:text-base">
                Power and Performance Designed for Everyday Use
              </p>
            </div>

            <img
              src={phoneImage}
              alt=""
              className="mt-6 max-w-full object-contain"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
