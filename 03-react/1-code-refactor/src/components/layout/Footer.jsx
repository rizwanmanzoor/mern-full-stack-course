export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Footer Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              N
            </div>

            <span className="text-xl font-bold text-white">NovaTech</span>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-6">
            Modern technology, carefully selected for the way you live, work and
            connect.
          </p>
        </div>

        {/* Footer Links 1 */}
        <div>
          <h3 className="font-semibold text-white">Shop</h3>

          <div className="mt-5 space-y-3 text-sm">
            <a href="#" className="block hover:text-white">
              Smartphones
            </a>

            <a href="#" className="block hover:text-white">
              Laptops
            </a>

            <a href="#" className="block hover:text-white">
              Accessories
            </a>

            <a href="#" className="block hover:text-white">
              New Arrivals
            </a>
          </div>
        </div>

        {/* Footer Links 2 */}
        <div>
          <h3 className="font-semibold text-white">Company</h3>

          <div className="mt-5 space-y-3 text-sm">
            <a href="#" className="block hover:text-white">
              About Us
            </a>

            <a href="#" className="block hover:text-white">
              Contact
            </a>

            <a href="#" className="block hover:text-white">
              Careers
            </a>

            <a href="#" className="block hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Footer Contact */}
        <div>
          <h3 className="font-semibold text-white">Get in touch</h3>

          <div className="mt-5 space-y-3 text-sm">
            <p>support@novatech.com</p>

            <p>+1 (800) 123-4567</p>

            <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NovaTech. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Instagram
            </a>

            <a href="#" className="hover:text-white">
              Twitter
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
