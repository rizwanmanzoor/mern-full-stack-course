import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-slate-100 pt-6 border-t border-t-slate-300 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-center">
        {/* Copyright */}
        <p className="text-sm text-slate-600 order-2 lg:order-1">
          © {new Date().getFullYear()} Ecommerce Store. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="order-1 lg:order-2">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
