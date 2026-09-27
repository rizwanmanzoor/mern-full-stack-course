export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            N
          </div>

          <span className="text-xl font-bold tracking-tight">NovaTech</span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#" className="text-blue-600">
            Home
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Shop
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Categories
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Deals
          </a>

          <a href="#" className="transition hover:text-blue-600">
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 sm:flex">
            🔍
          </button>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600">
            🛒
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              2
            </span>
          </button>

          <button className="hidden rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 sm:block">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
