export default function Banner() {
  return (
    <section aria-labelledby="banner-heading" className="px-4 md:px-8 mt-6">
      <div className="grid gap-x-8 gap-y-14 px-6 py-8 relative bg-linear-to-tr from-blue-400 to-blue-700 rounded-lg overflow-hidden max-w-5xl mx-auto lg:grid-cols-2 md:px-14 md:py-24 lg:min-h-72">
        <div className="flex flex-col justify-center lg:max-w-md">
          <h2
            id="banner-heading"
            className="text-3xl font-bold text-white mb-4 md:text-4xl"
          >
            Elevate Your Experience with Modern Elegance
          </h2>
        </div>

        <div className="relative h-full hidden lg:block">
          <img
            src="https://readymadeui.com/images/payment-img.webp"
            alt="Banner Image"
            className="w-full aspect-13/8 right-0 top-0 max-lg:bottom-0 m-auto absolute object-contain object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
