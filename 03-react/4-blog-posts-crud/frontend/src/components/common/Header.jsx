import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "All Blogs", href: "/all-blogs" },
  { label: "Create Blog", href: "/create-blog" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const openMenu = () => {
    lastFocusedElementRef.current = document.activeElement;
    setIsMenuOpen(true);

    setTimeout(() => {
      menuRef.current?.focus();
    }, 0);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    setTimeout(() => {
      lastFocusedElementRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 min-h-17 relative z-20"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 w-full">
        <Link
          to="/"
          className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          <span className="sr-only">Blog</span>
          <h2 className="text-2xl font-bold text-slate-900">Blog</h2>
        </Link>

        <div
          id="collapseMenu"
          ref={menuRef}
          tabIndex={-1}
          className={`${isMenuOpen ? "block" : "hidden"} lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
        >
          <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-17">
            <Link
              to="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Blog</span>
              <h2 className="text-2xl font-bold text-slate-900">Blog</h2>
            </Link>

            <button
              type="button"
              aria-controls="collapseMenu"
              onClick={closeMenu}
              id="toggleClose"
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Close main menu</span>
              <X />
            </button>
          </div>

          <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6">
            {NAV_ITEMS.map((item, index) => {
              const { label, href } = item;
              return (
                <li key={index}>
                  <NavLink
                    to={href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      ` hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${isActive ? "text-blue-700" : ""}`
                    }
                    aria-current="page"
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-controls="collapseMenu"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            id="toggleOpen"
            onClick={openMenu}
            className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}
