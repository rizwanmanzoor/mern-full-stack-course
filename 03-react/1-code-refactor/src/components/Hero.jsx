export default function Hero() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Hero Content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            New collection is here
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Technology that fits your{" "}
            <span className="text-blue-600">everyday life.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Discover carefully selected gadgets, smart devices and accessories
            designed to make your everyday life simpler.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Explore Products →
            </button>

            <button className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              View Categories
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-7">
            <div>
              <p className="text-2xl font-bold">12K+</p>

              <p className="text-sm text-slate-500">Happy Customers</p>
            </div>

            <div>
              <p className="text-2xl font-bold">4.8/5</p>

              <p className="text-sm text-slate-500">Customer Rating</p>
            </div>

            <div>
              <p className="text-2xl font-bold">500+</p>

              <p className="text-sm text-slate-500">Products</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl"></div>

          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-100 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-xl shadow-slate-200/60">
            <img
              src="https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Technology setup"
              className="h-[480px] w-full rounded-2xl object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Featured Collection
                  </p>

                  <h3 className="mt-1 text-lg font-bold">Work From Anywhere</h3>
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                  Up to 30% Off
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
