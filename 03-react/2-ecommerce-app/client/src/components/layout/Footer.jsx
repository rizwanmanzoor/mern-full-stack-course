import { Headphones } from "lucide-react";
import appstoreLogo from "@/assets/images/app-store.svg";
import googleplayLogo from "@/assets/images/google-play.svg";
import { footerLinks, paymentMethods, socialLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer>
      {/* =========================================
          Main Footer
      ========================================= */}

      <div className="bg-gray-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 xl:gap-20">
            {/* =================================
                Brand
            ================================= */}

            <div className="lg:col-span-4">
              <a href="/" className="mb-6 block">
                <img
                  src="./logo.svg"
                  alt="TechShelf"
                  className="h-auto w-30"
                />
              </a>

              <p className="max-w-sm text-sm leading-6 text-gray-500">
                TechGrids comes with all the essential UI components you need to
                create beautiful websites based on Tailwind CSS.
              </p>

              {/* Socials */}

              <div className="mt-8 lg:mt-12">
                <p className="mb-3 text-sm text-gray-500">Follow us on</p>

                <div className="flex items-center gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="transition-opacity hover:opacity-70"
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="h-4.5 w-4.5 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================
                Footer Navigation
            ================================= */}

            {footerLinks.map((section) => (
              <div key={section.label} className="lg:col-span-2">
                <h3 className="mb-5 text-base font-semibold text-gray-800">
                  {section.label}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/shop"
                        className="text-sm font-medium leading-6 text-gray-500 transition-colors hover:text-gray-800"
                      >
                        {link}
                      </a>
                    </li>
                  ))}

                  {/* Sale */}
                  {section.label === "Shoes" && (
                    <li>
                      <a
                        href="/shop"
                        className="inline-flex items-center text-sm font-medium leading-6 text-gray-500 transition-colors hover:text-gray-800"
                      >
                        Sale
                        <span className="ml-2 inline-block shrink-0 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium leading-4 text-red-700">
                          Hot item
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}

            {/* =================================
                Newsletter
            ================================= */}

            <div className="lg:col-span-4">
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Newsletter
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                Signup for latest news and insights from TechShelf
              </p>

              <form className="mt-7 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    h-11
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    px-4
                    text-sm
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                    focus:border-primary
                    focus:ring-3
                    focus:ring-primary/20
                  "
                />

                <button
                  type="submit"
                  className="
                    inline-flex
                    h-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    px-4
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-primary/90
                    focus:outline-none
                    focus:ring-3
                    focus:ring-primary/20
                  "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          Support / App / Payments
      ========================================= */}

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              flex
              flex-col
              divide-y
              divide-gray-100

              lg:flex-row
              lg:items-center
              lg:divide-x
              lg:divide-y-0
            "
          >
            {/* =================================
                Support
            ================================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-3
                py-7

                sm:flex-row

                lg:shrink-0
                lg:pr-8
                xl:pr-16
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-100
                  text-gray-700
                "
              >
                <Headphones size={21} strokeWidth={1.5} />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xs text-gray-700">8:30 AM - 10:30 PM</p>

                <a
                  href="tel:+16283998030"
                  className="text-sm font-semibold text-gray-800"
                >
                  +16283998030
                </a>
              </div>
            </div>

            {/* =================================
                App Download
            ================================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-4
                py-7

                sm:flex-row

                lg:px-8
                xl:px-16
              "
            >
              <div className="text-center sm:text-left">
                <span className="mb-1 block text-sm font-semibold text-gray-800">
                  Download Now on
                </span>

                <p className="text-xs text-gray-700">
                  Free home delivery on your first purchase
                </p>
              </div>

              <div className="flex gap-2.5">
                <a href="#" aria-label="Download on App Store">
                  <img
                    src={appstoreLogo}
                    alt="App Store"
                    className="h-10"
                  />
                </a>

                <a href="#" aria-label="Get it on Google Play">
                  <img
                    src={googleplayLogo}
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>

            {/* =================================
                Payment Methods
            ================================= */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-2
                py-6

                lg:items-start
                lg:py-5
                lg:pl-8
                xl:pl-16
              "
            >
              <p className="text-sm font-medium text-gray-500">We Support</p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {paymentMethods.map((payment) => (
                  <img
                    key={payment.name}
                    src={payment.src}
                    alt={payment.name}
                    className="h-5 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          Copyright / Legal
      ========================================= */}

      <div className="bg-white">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-4
            py-5
            text-center

            sm:px-6

            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
            lg:text-left
          "
        >
          <p className="text-xs text-gray-500">© Copyright 2026 - TechShelf.</p>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-end">
            <a
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-gray-800"
            >
              Refund Policy
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-gray-800"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-gray-800"
            >
              Shipping policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
