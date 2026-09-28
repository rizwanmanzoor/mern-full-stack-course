import { Link } from "react-router-dom";

import { productMenu } from "@/data/productMenu";

import menuImage from "@/assets/images/menu-image.webp";

export default function ProductMegaMenu({ mobile = false }) {
  /* --------------------------------
     Mobile
  --------------------------------- */

  if (mobile) {
    return (
      <div className="space-y-7 pb-6 pt-2">
        {productMenu.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-[22px] leading-tight font-medium text-gray-900">
              {group.title}
            </h3>

            <div className="space-y-4">
              {group.items.map((item) => (
                <Link
                  key={item}
                  to="/shop"
                  className="
                    block
                    text-[18px]
                    leading-6
                    text-gray-500
                    transition-colors
                    hover:text-primary
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* --------------------------------
     Desktop
  --------------------------------- */

  return (
    <div className="absolute left-0 right-0 top-full border-t border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        <div className="flex gap-7">
          {/* --------------------------------
              Menu Columns
          --------------------------------- */}

          <div className="grid flex-1 grid-cols-3">
            {productMenu.map((group, index) => (
              <div
                key={group.title}
                className={`
                  px-9
                  first:pl-0
                  last:pr-0
                  ${
                    index !== productMenu.length - 1
                      ? "border-r border-gray-100"
                      : ""
                  }
                `}
              >
                <h3 className="mb-5 text-[25px] leading-tight font-medium text-gray-900">
                  {group.title}
                </h3>

                <div className="space-y-4">
                  {group.items.map((item) => (
                    <Link
                      key={item}
                      to="/shop"
                      className="
                        block
                        text-[19px]
                        leading-7
                        text-gray-500
                        transition-colors
                        hover:text-primary
                      "
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* --------------------------------
              Promotional Image
          --------------------------------- */}

          <div className="w-[31%] shrink-0">
            <div className="relative h-full min-h-93.75 overflow-hidden rounded-radius">
              <img
                src={menuImage}
                alt="Best Seller"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <Link
                  to="/shop"
                  className="
                    inline-flex
                    whitespace-nowrap
                    rounded-radius
                    border
                    border-gray-300
                    bg-white
                    px-5
                    py-3
                    text-base
                    font-medium
                    text-gray-900
                    transition-colors
                    hover:bg-gray-100
                  "
                >
                  Best Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
