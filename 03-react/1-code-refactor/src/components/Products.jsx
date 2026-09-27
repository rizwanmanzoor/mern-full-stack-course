export default function Products() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Customer Favorites
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Trending Products
            </h2>

            <p className="mt-2 text-slate-500">
              Popular products our customers are loving right now.
            </p>
          </div>

          <button className="hidden text-sm font-semibold text-blue-600 sm:block">
            View all products →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* PRODUCT 1 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80"
                alt="AirPods Pro"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">
                Best Seller
              </span>

              <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                ♡
              </button>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Audio
              </p>

              <h3 className="mt-2 min-h-[48px] font-semibold leading-6">
                AirPods Pro 2nd Generation
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-amber-500">★★★★★</span>

                <span className="text-xs text-slate-500">4.8 (324)</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">$199</span>

                  <span className="ml-2 text-sm text-slate-400 line-through">
                    $249
                  </span>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-blue-600">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=600&q=80"
                alt="Apple Watch"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">
                New
              </span>

              <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                ♡
              </button>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Wearables
              </p>

              <h3 className="mt-2 min-h-[48px] font-semibold leading-6">
                Apple Watch Series 10
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-amber-500">★★★★★</span>

                <span className="text-xs text-slate-500">4.9 (186)</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">$399</span>

                  <span className="ml-2 text-sm text-slate-400 line-through">
                    $449
                  </span>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-blue-600">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80"
                alt="Sony Headphones"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">
                Popular
              </span>

              <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                ♡
              </button>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Headphones
              </p>

              <h3 className="mt-2 min-h-[48px] font-semibold leading-6">
                Sony WH-1000XM5
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-amber-500">★★★★★</span>

                <span className="text-xs text-slate-500">4.7 (412)</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">$349</span>

                  <span className="ml-2 text-sm text-slate-400 line-through">
                    $399
                  </span>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-blue-600">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT 4 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
                alt="iPad Air"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">
                Trending
              </span>

              <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                ♡
              </button>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Tablets
              </p>

              <h3 className="mt-2 min-h-[48px] font-semibold leading-6">
                iPad Air M3
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-amber-500">★★★★★</span>

                <span className="text-xs text-slate-500">4.8 (205)</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">$599</span>

                  <span className="ml-2 text-sm text-slate-400 line-through">
                    $649
                  </span>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-blue-600">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
