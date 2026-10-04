import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAuth } from "@/context/auth/useAuth";

export default function LoginForm() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectPath =
    searchParams.get("redirect") || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      login({
        email,
        password,
      });

      navigate(redirectPath, {
        replace: true,
      });
    } catch (loginError) {
      setError(loginError.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          autoComplete="email"
          className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="h-12 w-full rounded-lg border border-gray-200 px-4 pr-12 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((current) => !current)
            }
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center text-gray-400 transition-colors hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="h-12 w-full rounded-lg bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        Sign In
      </button>
    </form>
  );
}