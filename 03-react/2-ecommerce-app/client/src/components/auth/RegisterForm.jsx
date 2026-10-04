import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/auth/useAuth";

export default function RegisterForm() {
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
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

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters.",
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      register({
        name,
        email,
        password,
      });
    } catch (registrationError) {
      setError(registrationError.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
          className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
        />
      </div>

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
            placeholder="Create a password"
            autoComplete="new-password"
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

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>

        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            className="h-12 w-full rounded-lg border border-gray-200 px-4 pr-12 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                (current) => !current,
              )
            }
            aria-label={
              showConfirmPassword
                ? "Hide password"
                : "Show password"
            }
            className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center text-gray-400 transition-colors hover:text-gray-700"
          >
            {showConfirmPassword ? (
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
        Create Account
      </button>
    </form>
  );
}