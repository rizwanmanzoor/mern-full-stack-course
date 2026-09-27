export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Shopping with confidence
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Why customers choose NovaTech
        </h2>

        <p className="mt-3 leading-7 text-slate-500">
          We focus on making technology shopping simple, reliable and enjoyable.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Feature 1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
            🚚
          </div>

          <h3 className="mt-5 font-semibold">Free Shipping</h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Free delivery on orders over $50.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
            ↩️
          </div>

          <h3 className="mt-5 font-semibold">Easy Returns</h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            30-day hassle-free return policy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
            🔒
          </div>

          <h3 className="mt-5 font-semibold">Secure Payment</h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Your payment information is always protected.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
            💬
          </div>

          <h3 className="mt-5 font-semibold">Expert Support</h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Our team is here whenever you need us.
          </p>
        </div>
      </div>
    </section>
  );
}
