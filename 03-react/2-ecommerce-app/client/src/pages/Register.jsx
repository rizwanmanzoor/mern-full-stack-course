import { Link } from "react-router-dom";

import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-14">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your TechShelf account to manage your
            orders.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <RegisterForm />

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}