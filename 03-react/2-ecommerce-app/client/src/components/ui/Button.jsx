export default function Button({ children, variant = "primary", size = "md" }) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-text-primary",
    outline: "border border-gray-200 bg-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  return (
    <button
      className={` inline-flex items-center justify-center rounded-radius px-4 py-2.5 font-medium transition ${variants[variant]} ${sizes[size]} `}
    >
      {children}
    </button>
  );
}
