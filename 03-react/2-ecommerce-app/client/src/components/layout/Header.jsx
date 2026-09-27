import { useState } from "react";
import ProductMegaMenu from "./ProductMegaMenu";
import { currencies, languages } from "@/data/header";

import {
  ChevronDown,
  Globe,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    flag: "https://flagcdn.com/w40/us.png",
  });

  return (
    <header className="relative z-50 bg-white">
      {/* ==============================
          Top Announcement Bar
      ================================ */}

      <div className="bg-gray-100">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-center px-4 sm:px-6 lg:justify-between lg:px-8">
          {/* Desktop Left Controls */}
          <div className="hidden items-center gap-6 lg:flex">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setLanguageOpen((prev) => !prev);
                  setCurrencyOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-900"
              >
                <Globe size={16} />

                <span>{selectedLanguage}</span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div className="absolute left-1/2 top-full z-100 mt-2 w-34.5 -translate-x-1/2 overflow-hidden rounded-2xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                  {languages.map((language) => (
                    <button
                      key={language}
                      type="button"
                      onClick={() => {
                        setSelectedLanguage(language);
                        setLanguageOpen(false);
                      }}
                      className={`
                        block
                        w-full
                        px-5
                        py-3
                        text-left
                        text-sm
                        font-medium
                        transition-colors
                        hover:bg-gray-100
                        text-gray-900
                      `}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setCurrencyOpen((prev) => !prev);
                  setLanguageOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-900"
              >
                <img
                  src={selectedCurrency.flag}
                  alt={selectedCurrency.code}
                  className="h-4 w-4 rounded-full object-cover"
                />

                <span>{selectedCurrency.code}</span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${
                    currencyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {currencyOpen && (
                <div className="absolute left-1/2 top-full z-100 mt-2 w-26.25 -translate-x-1/2 overflow-hidden rounded-2xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      type="button"
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setCurrencyOpen(false);
                      }}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        px-5
                        py-3
                        text-left
                        text-sm
                        font-medium
                        transition-colors
                        hover:bg-gray-100
                        text-gray-900
                      `}
                    >
                      <img
                        src={currency.flag}
                        alt={currency.code}
                        className="h-6 w-6 rounded-full object-cover"
                      />

                      <span>{currency.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sale Message */}

          <p className="text-sm font-medium text-gray-900">
            Flash Sale Live - 30% Off Everything
          </p>

          {/* Sign In */}

          <a
            href="/"
            className="hidden items-center gap-2 text-sm font-medium text-gray-900 transition-colors lg:flex"
          >
            <User size={20} />
            Sign In / Register
          </a>
        </div>
      </div>

      {/* ==============================
          Desktop / Mobile Navigation
      =============================== */}

      <nav className="relative border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-19 items-center justify-between">
            {/* ==========================
                Mobile Menu Button
            =========================== */}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-radius bg-gray-100 text-gray-700 lg:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </button>

            {/* ==========================
                Logo + Search
            =========================== */}

            <div className="flex items-center">
              <a href="/" aria-label="TechShelf Home">
                <img
                  src="./logo.svg"
                  alt="TechShelf"
                  className="h-8 w-auto sm:h-7.5"
                />
              </a>

              {/* Desktop Search */}
              <div className="relative ml-6 hidden lg:block">
                <input
                  type="search"
                  placeholder="Search products.."
                  className="
                    h-11 w-87.5
                    rounded-radius
                    border border-gray-300
                    px-4 pl-10
                    text-base text-gray-800
                    placeholder:text-gray-400
                    outline-none
                    transition
                    focus:border-violet-300
                    focus:ouline-0
                    focus:ring-4
                    ring-3 ring-transparent 
                    focus:ring-violet-500/30
                  "
                />

                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Search size={20} />
                </span>
              </div>
            </div>

            {/* ==========================
                Desktop Navigation
            =========================== */}

            <div className="hidden items-center lg:flex">
              <a
                href="/"
                className="px-3.5 py-7 text-base font-medium text-gray-800 transition-colors hover:text-primary"
              >
                Home
              </a>

              <a
                href="/shop"
                className="px-3.5 py-7 text-base font-medium text-gray-800 transition-colors hover:text-primary"
              >
                Shop
              </a>

              {/* Products Mega Menu */}

              <div className="group">
                <a
                  href="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    px-3.5
                    py-7
                    text-base
                    font-medium
                    text-gray-900
                    transition-colors
                    group-hover:text-primary
                  "
                >
                  Products
                  <ChevronDown
                    className="
                      transition-transform
                      duration-200
                      group-hover:rotate-180
                    "
                  />
                </a>

                <div
                  className="
                    invisible
                    absolute
                    left-0
                    right-0
                    top-full
                    z-50
                    bg-white
                    opacity-0
                    transition-all
                    duration-200

                    group-hover:visible
                    group-hover:opacity-100
                  "
                >
                  <ProductMegaMenu />
                </div>
              </div>

              {/* Sale */}

              <a
                href="/shop"
                className="flex items-center gap-1 px-3.5 py-7 text-base font-medium text-gray-800 transition-colors hover:text-primary"
              >
                Sale
                <span className="inline-flex h-5 items-center justify-center rounded-full bg-primary/10 px-2 text-xs font-medium text-primary">
                  20% OFF
                </span>
              </a>
            </div>

            {/* ==========================
                Action Buttons
            =========================== */}

            <div className="flex items-center gap-2.5 lg:gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-radius border border-gray-200 text-gray-700 transition hover:text-gray-900 lg:h-11 lg:w-11"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </button>

              <button
                type="button"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-radius border border-gray-200 text-gray-700 transition hover:text-gray-900 lg:h-11 lg:w-11"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} />

                <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================================================
          Mobile Menu
      =================================================== */}

      <div
        className={`
          fixed inset-0 z-100 bg-white
          transition-transform duration-300
          lg:hidden
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile menu header */}

        <div className="border-b border-gray-100">
          <div className="flex min-h-19 items-center justify-between px-4">
            {/* Close */}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-radius bg-gray-100 text-gray-700"
              aria-label="Close menu"
            >
              <X />
            </button>

            {/* Logo */}

            <a href="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="./logo.svg" alt="TechShelf" className="h-9 w-auto" />
            </a>

            {/* Mobile actions */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-radius border border-gray-200 text-gray-700"
                aria-label="Wishlist"
              >
                <Heart />
              </button>

              <button
                type="button"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-radius border border-gray-200 text-gray-700"
                aria-label="Shopping cart"
              >
                <ShoppingCart />

                <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}

        <div className="px-4 py-6">
          <nav className="space-y-1">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-medium text-gray-900"
            >
              Home
            </a>

            <a
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-medium text-gray-900"
            >
              Shop
            </a>

            {/* Mobile Products */}

            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-gray-900"
              >
                <span>Products</span>

                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${mobileProductsOpen ? "max-h-125" : "max-h-0"}
                `}
              >
                <div className="space-y-4 pb-3 pl-3 pt-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900">
                      Smart Devices
                    </p>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Smartphones
                    </a>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Laptops
                    </a>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Tablets
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900">
                      Audio & Entertainment
                    </p>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Headphones
                    </a>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Speakers
                    </a>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Gaming
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900">
                      Accessories
                    </p>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Cases
                    </a>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Chargers
                    </a>

                    <a
                      href="/shop"
                      className="block py-1.5 text-sm text-gray-500"
                    >
                      Power Banks
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sale */}

            <a
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-base font-medium text-gray-900"
            >
              Sale
              <span className="inline-flex h-5 items-center justify-center rounded-full bg-primary/10 px-2 text-xs font-medium text-primary">
                20% OFF
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
