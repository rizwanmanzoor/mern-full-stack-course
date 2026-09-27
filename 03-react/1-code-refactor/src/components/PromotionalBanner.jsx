export default function PromotionalBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 md:px-14 md:py-16">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
              Limited Time Offer
            </span>

            <h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight text-white md:text-4xl">
              Upgrade your setup without breaking the bank.
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              Get selected tech essentials at special prices. Offer available
              while supplies last.
            </p>

            <button className="mt-7 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
              Shop the Sale →
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=80"
              alt="Laptop setup"
              className="h-72 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
