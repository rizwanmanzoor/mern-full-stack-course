import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <p className="text-8xl font-bold tracking-tight text-primary sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Page not found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Sorry, the page you're looking for doesn't exist or may
          have been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Back to Home
          </Link>

          <Link
            to="/shop"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-gray-300 px-6 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Browse Shop
          </Link>
        </div>
      </div>
    </section>
  );
}