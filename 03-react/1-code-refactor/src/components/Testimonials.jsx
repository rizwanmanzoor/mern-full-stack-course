export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Customer Stories
        </p>

        <div className="mt-6 text-3xl text-amber-400">★★★★★</div>

        <blockquote className="mt-6 text-2xl font-semibold leading-relaxed text-slate-900 md:text-3xl">
          “The whole shopping experience was incredibly simple. The product
          arrived quickly and the quality was exactly what I expected.”
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            alt="Customer"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="text-left">
            <p className="font-semibold">Sarah Williams</p>

            <p className="text-sm text-slate-500">Verified Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
