export default function Newsletter() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 py-14 md:flex-row">
        <div>
          <p className="text-xl font-bold">Stay in the loop.</p>

          <p className="mt-1 text-sm text-slate-500">
            Get product launches, offers and tech updates in your inbox.
          </p>
        </div>

        <div className="flex w-full max-w-md gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
