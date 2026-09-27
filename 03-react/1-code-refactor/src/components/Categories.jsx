export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Browse Collection
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Shop by Category
          </h2>

          <p className="mt-2 text-slate-500">
            Find the right technology for your everyday needs.
          </p>
        </div>

        <button className="hidden text-sm font-semibold text-blue-600 sm:block">
          View all categories →
        </button>
      </div>

      {/* Category 1 */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
          <div className="overflow-hidden bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80"
              alt="Smartphones"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold">Smartphones</h3>

              <p className="mt-1 text-sm text-slate-500">128 Products</p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white">
              →
            </span>
          </div>
        </div>

        {/* Category 2 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
          <div className="overflow-hidden bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
              alt="Laptops"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold">Laptops</h3>

              <p className="mt-1 text-sm text-slate-500">86 Products</p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white">
              →
            </span>
          </div>
        </div>

        {/* Category 3 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
          <div className="overflow-hidden bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80"
              alt="Smart Watches"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold">Smart Watches</h3>

              <p className="mt-1 text-sm text-slate-500">64 Products</p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white">
              →
            </span>
          </div>
        </div>

        {/* Category 4 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
          <div className="overflow-hidden bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
              alt="Headphones"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold">Headphones</h3>

              <p className="mt-1 text-sm text-slate-500">92 Products</p>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
